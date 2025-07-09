import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  LayoutDashboard, 
  Mountain, 
  BookOpen, 
  Users, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import ManageTrails from './ManageTrails';
import ManageStories from './ManageStories';
import ManageSponsors from './ManageSponsors';

const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<'dashboard' | 'trails' | 'stories' | 'sponsors'>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  const menuItems = [
    {
      id: 'dashboard' as const,
      label: 'Dashboard',
      icon: LayoutDashboard,
      color: 'text-emerald'
    },
    {
      id: 'trails' as const,
      label: 'Manage Trails',
      icon: Mountain,
      color: 'text-emerald'
    },
    {
      id: 'stories' as const,
      label: 'Manage Stories',
      icon: BookOpen,
      color: 'text-turquoise'
    },
    {
      id: 'sponsors' as const,
      label: 'Manage Sponsors',
      icon: Users,
      color: 'text-saffron'
    }
  ];

  const renderCurrentView = () => {
    switch (currentView) {
      case 'trails':
        return <ManageTrails />;
      case 'stories':
        return <ManageStories />;
      case 'sponsors':
        return <ManageSponsors />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <div>
            <h1 className="text-xl font-bold text-emerald">Lanka Trails</h1>
            <Badge variant="outline" className="text-xs mt-1">Admin Panel</Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={currentView === item.id ? 'default' : 'ghost'}
              className={`w-full justify-start ${currentView === item.id ? 'bg-emerald hover:bg-emerald/90' : ''}`}
              onClick={() => {
                setCurrentView(item.id);
                setSidebarOpen(false);
              }}
            >
              <item.icon className={`h-4 w-4 mr-2 ${currentView === item.id ? 'text-white' : item.color}`} />
              {item.label}
            </Button>
          ))}
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => setIsAuthenticated(false)}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between h-16 px-4 bg-card border-b">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </Button>
          <h1 className="text-lg font-semibold text-foreground">Admin Panel</h1>
          <div></div>
        </div>
        
        {/* Page Content */}
        <main className="p-6">
          {renderCurrentView()}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;