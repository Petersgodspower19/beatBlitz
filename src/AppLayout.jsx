
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import SideBar from './components/SideNav';
import Footer from './components/Footer';

function AppLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
  
    const openSidebar = () => {
        setScrollPosition(window.scrollY);
        setIsSidebarOpen(true);
        document.body.style.overflow = 'hidden'; 
    };
  
    const closeSidebar = () => {
        setIsSidebarOpen(false);
        document.body.style.overflow = 'auto';
    };
  
    useEffect(() => {
        if (!isSidebarOpen) {
            window.scrollTo(0, scrollPosition);
        }
    }, [isSidebarOpen, scrollPosition]);
  
    return (
        <div className='flex flex-col min-h-screen'>
            {isSidebarOpen ? (
                <SideBar onClose={closeSidebar} />
            ) : (
                <>
                    <Header onMenuClick={openSidebar} />
                    <main className='flex-grow'>
                        <Outlet />
                    </main>
                    <Footer />
                </>
            )}
        </div>
    );
}

export default AppLayout;
