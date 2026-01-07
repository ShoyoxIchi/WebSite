import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AdPlaceholder from '../common/AdPlaceholder';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans antialiased text-slate-900">
      <Header />
      
      {/* Top Banner Ad Space */}
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <AdPlaceholder width="728px" height="90px" label="Header Banner Ad Space" />
      </div>

      <main className="flex-1 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
