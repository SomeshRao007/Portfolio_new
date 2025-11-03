
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 md:px-8 py-6 text-center text-slate-500">
        <p>&copy; {currentYear} {PERSONAL_INFO.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
