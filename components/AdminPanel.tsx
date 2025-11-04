import React, { useState } from 'react';
import type { Skill, SkillCategory, Certification, TimelineEvent, LearningItem, Project, Testimonial } from '../types';
import { INITIAL_DATA } from '../constants';
import { ChevronDownIcon, TrashIcon, PlusIcon, ArrowUturnLeftIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { database } from '../firebaseConfig';
import { ref, set } from 'firebase/database';

type AdminPanelProps = {
  data: typeof INITIAL_DATA;
  setData: React.Dispatch<React.SetStateAction<typeof INITIAL_DATA>>;
  onLogout: () => void;
};

const AdminSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4 border border-slate-300 dark:border-slate-700 rounded-lg">
      <button
        className="w-full flex justify-between items-center p-4 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-t-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{title}</h3>
        <ChevronDownIcon className={`w-6 h-6 text-slate-600 dark:text-slate-300 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="p-4 bg-white dark:bg-slate-800 rounded-b-lg">{children}</div>}
    </div>
  );
};

const AdminPanel: React.FC<AdminPanelProps> = ({ data, setData, onLogout }) => {
    const [isSaving, setIsSaving] = useState(false);

    const handlePersonalInfoChange = (field: keyof typeof data.personalInfo, value: any) => {
        setData(prev => ({...prev, personalInfo: {...prev.personalInfo, [field]: value}}));
    }

    const handleSocialLinkChange = (index: number, field: 'name' | 'url', value: string) => {
        const newLinks = [...data.personalInfo.socialLinks];
        newLinks[index] = {...newLinks[index], [field]: value};
        handlePersonalInfoChange('socialLinks', newLinks);
    }

    const handleItemChange = (section: keyof typeof data, index: number, field: string, value: any) => {
        setData(prev => {
            const newSection = [...(prev[section] as any[])];
            newSection[index] = {...newSection[index], [field]: value};
            return {...prev, [section]: newSection};
        });
    }
    
    const addItem = <T,>(section: keyof typeof data, newItem: T) => {
        setData(prev => ({...prev, [section]: [...(prev[section] as T[]), newItem]}));
    }

    const removeItem = (section: keyof typeof data, index: number) => {
        setData(prev => ({...prev, [section]: (prev[section] as any[]).filter((_, i) => i !== index)}));
    }
    
    const saveDataToFirebase = async () => {
        setIsSaving(true);
        try {
            await set(ref(database, 'portfolioData'), data);
            alert('Data saved to Firebase successfully!');
        } catch (error) {
            console.error("Error saving data to Firebase:", error);
            alert('Failed to save data. Check console for details.');
        } finally {
            setIsSaving(false);
        }
    }
    
    const resetData = async () => {
        if (window.confirm('Are you sure you want to reset all data in Firebase to the default? This cannot be undone.')) {
            setIsSaving(true);
            try {
                await set(ref(database, 'portfolioData'), INITIAL_DATA);
                setData(INITIAL_DATA); // Also update local state to reflect change immediately
                alert('Data has been reset to default.');
            } catch (error) {
                console.error("Error resetting data:", error);
                alert('Failed to reset data.');
            } finally {
                setIsSaving(false);
            }
        }
    }

    // Specific handlers for nested skills structure
    const handleCategoryNameChange = (catIndex: number, name: string) => {
        const newSkills = [...data.skills];
        newSkills[catIndex].name = name;
        setData(prev => ({ ...prev, skills: newSkills }));
    };
    const addCategory = () => {
        addItem<SkillCategory>('skills', { name: 'New Category', skills: [] });
    };
    const addSkillToCategory = (catIndex: number) => {
        const newSkills = [...data.skills];
        newSkills[catIndex].skills.push({ name: 'New Skill', icon: '' });
        setData(prev => ({ ...prev, skills: newSkills }));
    };
    const removeSkillFromCategory = (catIndex: number, skillIndex: number) => {
        const newSkills = [...data.skills];
        newSkills[catIndex].skills = newSkills[catIndex].skills.filter((_, i) => i !== skillIndex);
        setData(prev => ({ ...prev, skills: newSkills }));
    };
    const handleSkillChange = (catIndex: number, skillIndex: number, field: keyof Skill, value: string) => {
        const newSkills = [...data.skills];
        newSkills[catIndex].skills[skillIndex] = { ...newSkills[catIndex].skills[skillIndex], [field]: value };
        setData(prev => ({ ...prev, skills: newSkills }));
    };


  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Admin Panel</h1>
          <div className="flex items-center space-x-2">
            <button onClick={saveDataToFirebase} disabled={isSaving} className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:bg-slate-400 disabled:cursor-not-allowed">
                <ArrowDownTrayIcon className="w-5 h-5" />
                <span>{isSaving ? 'Saving...' : 'Save'}</span>
            </button>
            <button onClick={resetData} disabled={isSaving} className="flex items-center space-x-2 px-4 py-2 bg-slate-500 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors shadow-sm disabled:bg-slate-400"><ArrowUturnLeftIcon className="w-5 h-5" /><span>Reset</span></button>
            <button onClick={onLogout} className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-sm">Logout</button>
          </div>
        </header>

        <main>
            <AdminSection title="Hero & Personal Info">
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                    <input type="text" value={data.personalInfo.name} onChange={e => handlePersonalInfoChange('name', e.target.value)} className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm"/>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Title</label>
                    <input type="text" value={data.personalInfo.title} onChange={e => handlePersonalInfoChange('title', e.target.value)} className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm"/>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Bio</label>
                    <textarea value={data.personalInfo.bio} onChange={e => handlePersonalInfoChange('bio', e.target.value)} rows={4} className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm"/>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Profile Image Path</label>
                            <input type="text" value={data.personalInfo.profileImageUrl} onChange={e => handlePersonalInfoChange('profileImageUrl', e.target.value)} className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm"/>
                            {data.personalInfo.profileImageUrl && <img src={data.personalInfo.profileImageUrl} alt="Profile preview" className="mt-2 h-24 w-24 rounded-full object-cover"/>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">CV Path</label>
                             <input type="text" value={data.personalInfo.cvUrl} onChange={e => handlePersonalInfoChange('cvUrl', e.target.value)} className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm"/>
                             {data.personalInfo.cvUrl && <a href={data.personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">View CV</a>}
                        </div>
                    </div>
                    
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Formspree Endpoint</label>
                    <input type="text" value={data.personalInfo.formspreeEndpoint} onChange={e => handlePersonalInfoChange('formspreeEndpoint', e.target.value)} className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm"/>
                    <h4 className="font-semibold pt-4">Social Links</h4>
                    {data.personalInfo.socialLinks.map((link, index) => (
                        <div key={index} className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Name (e.g., GitHub)" value={link.name} onChange={e => handleSocialLinkChange(index, 'name', e.target.value)} className="block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm"/>
                            <input type="text" placeholder="URL" value={link.url} onChange={e => handleSocialLinkChange(index, 'url', e.target.value)} className="block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm"/>
                        </div>
                    ))}
                </div>
            </AdminSection>

            <AdminSection title="Skills">
                {data.skills.map((category, catIndex) => (
                    <div key={catIndex} className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg mb-4 border border-slate-200 dark:border-slate-600">
                        <div className="flex items-center justify-between mb-2">
                            <input type="text" value={category.name} onChange={e => handleCategoryNameChange(catIndex, e.target.value)} className="text-lg font-semibold flex-grow rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm"/>
                            <button onClick={() => removeItem('skills', catIndex)} className="ml-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"><TrashIcon className="w-5 h-5"/></button>
                        </div>
                        <div className="space-y-2">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="flex items-center space-x-2">
                                    <input type="text" value={skill.name} onChange={e => handleSkillChange(catIndex, skillIndex, 'name', e.target.value)} placeholder="Skill Name" className="flex-grow rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm"/>
                                    <input type="text" value={skill.icon} onChange={e => handleSkillChange(catIndex, skillIndex, 'icon', e.target.value)} placeholder="Icon path (e.g., /assets/icons/icon.png)" className="flex-grow rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm w-1/2"/>
                                    {skill.icon && <img src={skill.icon} alt="icon" className="h-8 w-8 object-contain"/>}
                                    <button onClick={() => removeSkillFromCategory(catIndex, skillIndex)} className="p-2 bg-red-200 text-red-800 rounded-md hover:bg-red-300"><TrashIcon className="w-4 h-4"/></button>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => addSkillToCategory(catIndex)} className="flex items-center space-x-2 mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-lg hover:bg-blue-200"><PlusIcon className="w-4 h-4"/><span>Add Skill</span></button>
                    </div>
                ))}
                <button onClick={addCategory} className="flex items-center space-x-2 mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"><PlusIcon className="w-5 h-5"/><span>Add Category</span></button>
            </AdminSection>
            
             {[
                { key: 'timeline', title: 'Timeline', newItem: { date: new Date().toISOString().split('T')[0], title: '', description: '', fullDescription: '' } as TimelineEvent },
                { key: 'projects', title: 'Projects', newItem: { title: '', description: '', imageUrl: '', githubUrl: '#' } as Project },
                { key: 'certifications', title: 'Certifications', newItem: { title: '', issuer: '', imageUrl: '', link: '#' } as Certification },
                { key: 'testimonials', title: 'Testimonials', newItem: { quote: '', author: '', company: '' } as Testimonial },
                { key: 'learning', title: 'Learning List', newItem: { title: '', description: '' } as LearningItem },
            ].map(({ key, title, newItem }) => (
                <AdminSection key={key} title={title}>
                    <div className="space-y-6">
                        {(data[key as keyof typeof data] as any[]).map((item, index) => (
                            <div key={index} className="space-y-2 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg relative">
                                {Object.keys(item).map(field => (
                                     <div key={field}>
                                        <label className="capitalize block text-sm font-medium text-slate-700 dark:text-slate-300">{field.replace(/([A-Z])/g, ' $1')}</label>
                                        {field.toLowerCase().includes('description') || field.toLowerCase().includes('quote') ? (
                                            <textarea
                                                value={item[field]}
                                                onChange={e => handleItemChange(key as keyof typeof data, index, field, e.target.value)}
                                                rows={3}
                                                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm"
                                            />
                                        ) : (
                                            <input
                                                type={field.toLowerCase().includes('date') ? 'date' : 'text'}
                                                value={item[field]}
                                                onChange={e => handleItemChange(key as keyof typeof data, index, field, e.target.value)}
                                                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm"
                                            />
                                        )}
                                        {field.toLowerCase().includes('imageurl') && item[field] && (
                                            <img src={item[field]} alt="preview" className="mt-2 h-16 w-16 object-cover rounded-md" />
                                        )}
                                    </div>
                                ))}
                                 <button onClick={() => removeItem(key as keyof typeof data, index)} className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"><TrashIcon className="w-5 h-5"/></button>
                            </div>
                        ))}
                        <button onClick={() => addItem(key as keyof typeof data, newItem)} className="flex items-center space-x-2 mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"><PlusIcon className="w-5 h-5"/><span>Add {title.slice(0,-1)}</span></button>
                    </div>
                </AdminSection>
            ))}
            
            <AdminSection title="Stats">
                <div className="space-y-4">
                     {data.stats.map((stat, index) => (
                        <div key={index} className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Label" value={stat.label} onChange={e => handleItemChange( 'stats', index, 'label', e.target.value)} className="block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm"/>
                            <input type="number" placeholder="Value" value={stat.value} onChange={e => handleItemChange( 'stats', index, 'value', Number(e.target.value))} className="block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm"/>
                        </div>
                    ))}
                </div>
            </AdminSection>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;