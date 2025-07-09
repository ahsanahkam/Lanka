import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, Upload, Star } from 'lucide-react';
import { Trail, trailsData } from '../data/trails';

const ManageTrails = () => {
  const [trails, setTrails] = useState<Trail[]>(trailsData);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTrail, setCurrentTrail] = useState<Trail | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    duration: '',
    highlights: [''],
    isSponsored: false,
    sponsorName: '',
    affiliateLinks: {
      hotels: '',
      tours: '',
      insurance: ''
    }
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect this form to PHP backend using fetch('/api/trails.php')
    console.log('Saving trail:', formData);
    
    const newTrail: Trail = {
      ...formData,
      link: `#${formData.name.toLowerCase().replace(/\s+/g, '-')}-trail`,
      highlights: formData.highlights.filter(h => h.trim() !== '')
    };

    if (isEditing && currentTrail) {
      setTrails(trails.map(t => t.name === currentTrail.name ? newTrail : t));
    } else {
      setTrails([...trails, newTrail]);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      image: '',
      duration: '',
      highlights: [''],
      isSponsored: false,
      sponsorName: '',
      affiliateLinks: { hotels: '', tours: '', insurance: '' }
    });
    setIsEditing(false);
    setCurrentTrail(null);
  };

  const editTrail = (trail: Trail) => {
    setFormData({
      name: trail.name,
      description: trail.description,
      image: trail.image,
      duration: trail.duration,
      highlights: trail.highlights,
      isSponsored: trail.isSponsored || false,
      sponsorName: trail.sponsorName || '',
      affiliateLinks: trail.affiliateLinks || { hotels: '', tours: '', insurance: '' }
    });
    setCurrentTrail(trail);
    setIsEditing(true);
  };

  const deleteTrail = (trailName: string) => {
    if (confirm('Are you sure you want to delete this trail?')) {
      // TODO: Connect to backend DELETE endpoint
      setTrails(trails.filter(t => t.name !== trailName));
    }
  };

  const addHighlight = () => {
    setFormData({
      ...formData,
      highlights: [...formData.highlights, '']
    });
  };

  const updateHighlight = (index: number, value: string) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData({ ...formData, highlights: newHighlights });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Manage Trails</h1>
        <Button onClick={() => resetForm()} className="bg-emerald hover:bg-emerald/90">
          <Plus className="h-4 w-4 mr-2" />
          Add New Trail
        </Button>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList>
          <TabsTrigger value="list">Trail List</TabsTrigger>
          <TabsTrigger value="form">Add/Edit Trail</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          <div className="grid gap-4">
            {trails.map((trail) => (
              <Card key={trail.name}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{trail.name}</h3>
                        {trail.isSponsored && (
                          <Badge className="bg-saffron text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Sponsored
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-2">{trail.description}</p>
                      <p className="text-sm text-emerald font-medium">{trail.duration}</p>
                      {trail.sponsorName && (
                        <p className="text-sm text-saffron">Sponsored by: {trail.sponsorName}</p>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => editTrail(trail)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => deleteTrail(trail.name)}>
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
              <CardTitle>{isEditing ? 'Edit Trail' : 'Add New Trail'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Trail Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                      placeholder="e.g., 5-7 days"
                      required
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
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Image URL</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="image"
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      placeholder="https://images.unsplash.com/..."
                    />
                    <Button type="button" variant="outline">
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <Label>Highlights</Label>
                  {formData.highlights.map((highlight, index) => (
                    <Input
                      key={index}
                      value={highlight}
                      onChange={(e) => updateHighlight(index, e.target.value)}
                      placeholder={`Highlight ${index + 1}`}
                    />
                  ))}
                  <Button type="button" variant="outline" onClick={addHighlight}>
                    Add Highlight
                  </Button>
                </div>

                {/* Sponsorship */}
                <div className="space-y-4 border-t pt-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.isSponsored}
                      onCheckedChange={(checked) => setFormData({...formData, isSponsored: checked})}
                    />
                    <Label>Sponsored Content</Label>
                  </div>
                  
                  {formData.isSponsored && (
                    <div className="space-y-2">
                      <Label htmlFor="sponsorName">Sponsor Name</Label>
                      <Input
                        id="sponsorName"
                        value={formData.sponsorName}
                        onChange={(e) => setFormData({...formData, sponsorName: e.target.value})}
                        placeholder="Company Name"
                      />
                    </div>
                  )}
                </div>

                {/* Affiliate Links */}
                <div className="space-y-4 border-t pt-4">
                  <h3 className="text-lg font-semibold">Affiliate Links</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hotels">Hotels</Label>
                      <Input
                        id="hotels"
                        value={formData.affiliateLinks.hotels}
                        onChange={(e) => setFormData({
                          ...formData, 
                          affiliateLinks: {...formData.affiliateLinks, hotels: e.target.value}
                        })}
                        placeholder="https://booking.com/..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tours">Tours</Label>
                      <Input
                        id="tours"
                        value={formData.affiliateLinks.tours}
                        onChange={(e) => setFormData({
                          ...formData, 
                          affiliateLinks: {...formData.affiliateLinks, tours: e.target.value}
                        })}
                        placeholder="https://getyourguide.com/..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="insurance">Insurance</Label>
                      <Input
                        id="insurance"
                        value={formData.affiliateLinks.insurance}
                        onChange={(e) => setFormData({
                          ...formData, 
                          affiliateLinks: {...formData.affiliateLinks, insurance: e.target.value}
                        })}
                        placeholder="https://worldnomads.com/..."
                      />
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button type="submit" className="bg-emerald hover:bg-emerald/90">
                    {isEditing ? 'Update Trail' : 'Create Trail'}
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

export default ManageTrails;