import { useState } from 'react';
import { Layout } from './components/Layout';
import { LandingPage } from './components/pages/LandingPage';
import { LoginPage } from './components/pages/LoginPage';
import { DashboardPage } from './components/pages/DashboardPage';
import { WhatsAppPage } from './components/pages/WhatsAppPage';
import { GmailPage } from './components/pages/GmailPage';
import { SettingsPage } from './components/pages/SettingsPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleGetStarted = () => {
    setShowLanding(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLanding(false);
  };

  const handleLoginClick = () => {
    setShowLanding(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLanding(true);
    setCurrentPage('dashboard');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  // Show landing page
  if (showLanding) {
    return (
      <>
        <LandingPage onGetStarted={handleGetStarted} onLogin={handleLoginClick} />
        <Toaster />
      </>
    );
  }

  // Show login page
  if (!isLoggedIn) {
    return (
      <>
        <LoginPage onLogin={handleLogin} />
        <Toaster />
      </>
    );
  }

  // Show dashboard
  return (
    <>
      <Layout 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      >
        {currentPage === 'dashboard' && <DashboardPage />}
        {currentPage === 'whatsapp' && <WhatsAppPage />}
        {currentPage === 'gmail' && <GmailPage />}
        {currentPage === 'settings' && <SettingsPage />}
      </Layout>
      <Toaster />
    </>
  );
}
