import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mountain, MapPin, BookOpen, Users, Star, TrendingUp } from 'lucide-react';

interface DashboardStats {
  totalTrails: number;
  totalStories: number;
  totalSponsors: number;
  sponsoredContent: number;
  monthlyViews: number;
  revenueThisMonth: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalTrails: 4,
    totalStories: 3,
    totalSponsors: 2,
    sponsoredContent: 2,
    monthlyViews: 12500,
    revenueThisMonth: 2450
  });

  useEffect(() => {
    // TODO: Connect to PHP backend using fetch('/api/dashboard-stats.php')
    // const fetchStats = async () => {
    //   const response = await fetch('/api/dashboard-stats.php');
    //   const data = await response.json();
    //   setStats(data);
    // };
    // fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Total Trails',
      value: stats.totalTrails,
      icon: Mountain,
      color: 'text-emerald'
    },
    {
      title: 'Published Stories',
      value: stats.totalStories,
      icon: BookOpen,
      color: 'text-turquoise'
    },
    {
      title: 'Active Sponsors',
      value: stats.totalSponsors,
      icon: Users,
      color: 'text-saffron'
    },
    {
      title: 'Sponsored Content',
      value: stats.sponsoredContent,
      icon: Star,
      color: 'text-saffron'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <Badge variant="outline" className="text-emerald border-emerald">
          Lanka Trails CMS
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue & Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-emerald" />
              Monthly Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Page Views This Month</p>
                <p className="text-xl font-semibold text-foreground">{stats.monthlyViews.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Affiliate Revenue</p>
                <p className="text-xl font-semibold text-emerald">${stats.revenueThisMonth.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Badge className="bg-emerald/10 text-emerald">New Trail</Badge>
                <span className="text-sm text-muted-foreground">Cultural Trail updated</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className="bg-saffron/10 text-saffron">Sponsor</Badge>
                <span className="text-sm text-muted-foreground">Wild Lanka Safaris partnership added</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className="bg-turquoise/10 text-turquoise">Story</Badge>
                <span className="text-sm text-muted-foreground">New travel story published</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;