import React from 'react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';



const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>
    <Header />
    {children}
    <Footer />
    </main>;
};

export default PageLayout;