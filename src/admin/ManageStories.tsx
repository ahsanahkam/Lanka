import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Star, Eye, Flag, Edit, Trash2 } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  readTime: string;
  date: string;
  isSponsored: boolean;
  sponsorName?: string;
  status: 'published' | 'draft' | 'flagged';
  views: number;
}

const ManageStories = () => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: '1',
      title: "Hiking the Highland Trail: Ella's Peaks",
      excerpt: "An unforgettable journey through Sri Lanka's tea country...",
      image: "ella-peaks-story.jpg",
      author: "Sarah Johnson",
      readTime: "5 min read",
      date: "Dec 15, 2023",
      isSponsored: true,
      sponsorName: "Mountain View Tea Estate",
      status: 'published',
      views: 2543
    },
    {
      id: '2',
      title: "Wildlife Encounters in Yala National Park",
      excerpt: "Face-to-face with Sri Lankan leopards and gentle giants...",
      image: "yala-wildlife-story.jpg",
      author: "Michael Chen",
      readTime: "7 min read",
      date: "Dec 10, 2023",
      isSponsored: false,
      status: 'published',
      views: 1876
    },
    {
      id: '3',
      title: "Coastal Serenity: Galle Fort Sunsets",
      excerpt: "Discovering the timeless charm of colonial architecture...",
      image: "galle-fort-story.jpg",
      author: "Emma Williams",
      readTime: "4 min read",
      date: "Dec 5, 2023",
      isSponsored: false,
      status: 'published',
      views: 1432
    }
  ]);

  const [filter, setFilter] = useState<'all' | 'sponsored' | 'flagged'>('all');

  useEffect(() => {
    // TODO: Connect to PHP backend using fetch('/api/stories.php')
    // const fetchStories = async () => {
    //   const response = await fetch('/api/stories.php');
    //   const data = await response.json();
    //   setStories(data);
    // };
    // fetchStories();
  }, []);

  const toggleSponsorship = (storyId: string, isSponsored: boolean, sponsorName?: string) => {
    setStories(stories.map(story => 
      story.id === storyId 
        ? { ...story, isSponsored, sponsorName: isSponsored ? sponsorName : undefined }
        : story
    ));
    // TODO: Send update to backend
  };

  const flagStory = (storyId: string) => {
    setStories(stories.map(story => 
      story.id === storyId 
        ? { ...story, status: story.status === 'flagged' ? 'published' : 'flagged' }
        : story
    ));
    // TODO: Send update to backend
  };

  const deleteStory = (storyId: string) => {
    if (confirm('Are you sure you want to delete this story?')) {
      setStories(stories.filter(s => s.id !== storyId));
      // TODO: Send delete request to backend
    }
  };

  const filteredStories = stories.filter(story => {
    switch (filter) {
      case 'sponsored':
        return story.isSponsored;
      case 'flagged':
        return story.status === 'flagged';
      default:
        return true;
    }
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-emerald/10 text-emerald">Published</Badge>;
      case 'draft':
        return <Badge variant="outline">Draft</Badge>;
      case 'flagged':
        return <Badge className="bg-destructive/10 text-destructive">Flagged</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Manage Stories</h1>
        <div className="flex space-x-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            All Stories
          </Button>
          <Button
            variant={filter === 'sponsored' ? 'default' : 'outline'}
            onClick={() => setFilter('sponsored')}
          >
            Sponsored
          </Button>
          <Button
            variant={filter === 'flagged' ? 'default' : 'outline'}
            onClick={() => setFilter('flagged')}
          >
            Flagged
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredStories.map((story) => (
          <Card key={story.id}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={`https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80`}
                  alt={story.title}
                  className="w-16 h-16 rounded object-cover"
                />
                
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                        {story.isSponsored && (
                          <Badge className="bg-saffron text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Sponsored
                          </Badge>
                        )}
                        {getStatusBadge(story.status)}
                      </div>
                      
                      <p className="text-muted-foreground mb-2 line-clamp-2">{story.excerpt}</p>
                      
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <span>By {story.author}</span>
                        <span>{story.readTime}</span>
                        <span>{story.date}</span>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {story.views.toLocaleString()} views
                        </span>
                      </div>
                      
                      {story.isSponsored && story.sponsorName && (
                        <p className="text-sm text-saffron mt-1">Sponsored by: {story.sponsorName}</p>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => flagStory(story.id)}
                        className={story.status === 'flagged' ? 'text-destructive' : ''}
                      >
                        <Flag className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => deleteStory(story.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Sponsorship Controls */}
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={story.isSponsored}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              const sponsorName = prompt('Enter sponsor name:');
                              if (sponsorName) {
                                toggleSponsorship(story.id, true, sponsorName);
                              }
                            } else {
                              toggleSponsorship(story.id, false);
                            }
                          }}
                        />
                        <Label className="text-sm">Mark as sponsored content</Label>
                      </div>
                      
                      {story.isSponsored && (
                        <Input
                          placeholder="Sponsor name"
                          value={story.sponsorName || ''}
                          onChange={(e) => toggleSponsorship(story.id, true, e.target.value)}
                          className="max-w-xs"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredStories.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">No stories found for the selected filter.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ManageStories;