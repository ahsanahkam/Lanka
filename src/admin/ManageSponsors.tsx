import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, Building2, Star, DollarSign } from 'lucide-react';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  contactEmail: string;
  description: string;
  package: 'basic' | 'premium' | 'enterprise';
  activeSponsorship: {
    trails: string[];
    stories: string[];
  };
  monthlyFee: number;
  status: 'active' | 'inactive' | 'pending';
}

const ManageSponsors = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([
    {
      id: '1',
      name: 'Ceylon Heritage Tours',
      logo: 'ceylon-heritage-logo.jpg',
      website: 'https://ceylonheritage.com',
      contactEmail: 'partnerships@ceylonheritage.com',
      description: 'Leading cultural tour operator in Sri Lanka specializing in heritage sites and traditional experiences.',
      package: 'premium',
      activeSponsorship: {
        trails: ['Cultural Trail'],
        stories: []
      },
      monthlyFee: 1500,
      status: 'active'
    },
    {
      id: '2',
      name: 'Wild Lanka Safaris',
      logo: 'wild-lanka-logo.jpg',
      website: 'https://wildlankasafaris.com',
      contactEmail: 'marketing@wildlanka.com',
      description: 'Premium wildlife safari operator with exclusive access to national parks and luxury accommodations.',
      package: 'enterprise',
      activeSponsorship: {
        trails: ['Wildlife Trail'],
        stories: ['Wildlife Encounters in Yala National Park']
      },
      monthlyFee: 2500,
      status: 'active'
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentSponsor, setCurrentSponsor] = useState<Sponsor | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    website: '',
    contactEmail: '',
    description: '',
    package: 'basic' as 'basic' | 'premium' | 'enterprise',
    monthlyFee: 500,
    status: 'pending' as 'active' | 'inactive' | 'pending'
  });

  useEffect(() => {
    // TODO: Connect to PHP backend using fetch('/api/sponsors.php')
    // const fetchSponsors = async () => {
    //   const response = await fetch('/api/sponsors.php');
    //   const data = await response.json();
    //   setSponsors(data);
    // };
    // fetchSponsors();
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect this form to PHP backend using fetch('/api/sponsors.php')
    console.log('Saving sponsor:', formData);
    
    const newSponsor: Sponsor = {
      ...formData,
      id: isEditing ? currentSponsor!.id : Date.now().toString(),
      activeSponsorship: {
        trails: [],
        stories: []
      }
    };

    if (isEditing && currentSponsor) {
      setSponsors(sponsors.map(s => s.id === currentSponsor.id ? newSponsor : s));
    } else {
      setSponsors([...sponsors, newSponsor]);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      logo: '',
      website: '',
      contactEmail: '',
      description: '',
      package: 'basic',
      monthlyFee: 500,
      status: 'pending'
    });
    setIsEditing(false);
    setCurrentSponsor(null);
  };

  const editSponsor = (sponsor: Sponsor) => {
    setFormData({
      name: sponsor.name,
      logo: sponsor.logo,
      website: sponsor.website,
      contactEmail: sponsor.contactEmail,
      description: sponsor.description,
      package: sponsor.package,
      monthlyFee: sponsor.monthlyFee,
      status: sponsor.status
    });
    setCurrentSponsor(sponsor);
    setIsEditing(true);
  };

  const deleteSponsor = (sponsorId: string) => {
    if (confirm('Are you sure you want to delete this sponsor?')) {
      setSponsors(sponsors.filter(s => s.id !== sponsorId));
      // TODO: Send delete request to backend
    }
  };

  const getPackageBadge = (packageType: string) => {
    switch (packageType) {
      case 'basic':
        return <Badge variant="outline">Basic</Badge>;
      case 'premium':
        return <Badge className="bg-turquoise/10 text-turquoise">Premium</Badge>;
      case 'enterprise':
        return <Badge className="bg-saffron/10 text-saffron">Enterprise</Badge>;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-emerald/10 text-emerald">Active</Badge>;
      case 'inactive':
        return <Badge variant="outline">Inactive</Badge>;
      case 'pending':
        return <Badge className="bg-orange-500/10 text-orange-500">Pending</Badge>;
      default:
        return null;
    }
  };

  const totalMonthlyRevenue = sponsors
    .filter(s => s.status === 'active')
    .reduce((sum, s) => sum + s.monthlyFee, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Manage Sponsors</h1>
        <Button onClick={() => resetForm()} className="bg-emerald hover:bg-emerald/90">
          <Plus className="h-4 w-4 mr-2" />
          Add New Sponsor
        </Button>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Sponsors</p>
                <p className="text-2xl font-bold text-foreground">
                  {sponsors.filter(s => s.status === 'active').length}
                </p>
              </div>
              <Building2 className="h-8 w-8 text-emerald" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                <p className="text-2xl font-bold text-emerald">
                  ${totalMonthlyRevenue.toLocaleString()}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-emerald" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Sponsored Content</p>
                <p className="text-2xl font-bold text-saffron">
                  {sponsors.reduce((sum, s) => 
                    sum + s.activeSponsorship.trails.length + s.activeSponsorship.stories.length, 0
                  )}
                </p>
              </div>
              <Star className="h-8 w-8 text-saffron" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList>
          <TabsTrigger value="list">Sponsor List</TabsTrigger>
          <TabsTrigger value="form">Add/Edit Sponsor</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          <div className="grid gap-4">
            {sponsors.map((sponsor) => (
              <Card key={sponsor.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                        <Building2 className="h-8 w-8 text-muted-foreground" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{sponsor.name}</h3>
                          {getPackageBadge(sponsor.package)}
                          {getStatusBadge(sponsor.status)}
                        </div>
                        
                        <p className="text-muted-foreground mb-2">{sponsor.description}</p>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{sponsor.contactEmail}</span>
                          <span>•</span>
                          <span className="text-emerald font-medium">${sponsor.monthlyFee}/month</span>
                        </div>
                        
                        {(sponsor.activeSponsorship.trails.length > 0 || sponsor.activeSponsorship.stories.length > 0) && (
                          <div className="mt-3">
                            <p className="text-sm text-muted-foreground mb-1">Active Sponsorships:</p>
                            <div className="flex flex-wrap gap-1">
                              {sponsor.activeSponsorship.trails.map(trail => (
                                <Badge key={trail} variant="outline" className="text-xs">
                                  Trail: {trail}
                                </Badge>
                              ))}
                              {sponsor.activeSponsorship.stories.map(story => (
                                <Badge key={story} variant="outline" className="text-xs">
                                  Story: {story.substring(0, 20)}...
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => editSponsor(sponsor)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => deleteSponsor(sponsor.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="form">
          <Card>
            <CardHeader>
              <CardTitle>{isEditing ? 'Edit Sponsor' : 'Add New Sponsor'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Company Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => setFormData({...formData, website: e.target.value})}
                      placeholder="https://company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="logo">Logo URL</Label>
                    <Input
                      id="logo"
                      value={formData.logo}
                      onChange={(e) => setFormData({...formData, logo: e.target.value})}
                      placeholder="company-logo.jpg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="package">Package</Label>
                    <Select value={formData.package} onValueChange={(value) => setFormData({...formData, package: value as any})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic - $500/month</SelectItem>
                        <SelectItem value="premium">Premium - $1500/month</SelectItem>
                        <SelectItem value="enterprise">Enterprise - $2500/month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="monthlyFee">Monthly Fee ($)</Label>
                    <Input
                      id="monthlyFee"
                      type="number"
                      value={formData.monthlyFee}
                      onChange={(e) => setFormData({...formData, monthlyFee: parseInt(e.target.value)})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value as any})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button type="submit" className="bg-emerald hover:bg-emerald/90">
                    {isEditing ? 'Update Sponsor' : 'Create Sponsor'}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManageSponsors;