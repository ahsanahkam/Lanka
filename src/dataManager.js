// Dynamic data management for Lanka Trails website
import { trails as initialTrails, stories as initialStories, sponsors } from './data.js';

class DataManager {
  constructor() {
    this.trails = this.loadTrails();
    this.stories = this.loadStories();
    this.listeners = [];
  }

  // Load trails from localStorage or use initial data
  loadTrails() {
    const savedTrails = localStorage.getItem('lankaTrails_trails');
    if (savedTrails) {
      return JSON.parse(savedTrails);
    }
    return [...initialTrails];
  }

  // Load stories from localStorage or use initial data
  loadStories() {
    const savedStories = localStorage.getItem('lankaTrails_stories');
    if (savedStories) {
      return JSON.parse(savedStories);
    }
    return [...initialStories];
  }

  // Save trails to localStorage
  saveTrails() {
    localStorage.setItem('lankaTrails_trails', JSON.stringify(this.trails));
    this.notifyListeners();
  }

  // Save stories to localStorage
  saveStories() {
    localStorage.setItem('lankaTrails_stories', JSON.stringify(this.stories));
    this.notifyListeners();
  }

  // Add listener for data changes
  addListener(callback) {
    this.listeners.push(callback);
  }

  // Remove listener
  removeListener(callback) {
    this.listeners = this.listeners.filter(listener => listener !== callback);
  }

  // Notify all listeners of data changes
  notifyListeners() {
    this.listeners.forEach(callback => callback());
  }

  // Trail methods
  getTrails() {
    return this.trails;
  }

  getTrailById(id) {
    console.log('DataManager: Looking for trail with ID:', id, 'Type:', typeof id);
    const trail = this.trails.find(trail => trail.id === parseInt(id));
    console.log('DataManager: Found trail:', trail);
    return trail;
  }

  addTrail(trailData) {
    console.log('DataManager: Adding trail with data:', trailData);
    const newId = Math.max(...this.trails.map(t => t.id), 0) + 1;
    const newTrail = {
      id: newId,
      title: trailData.title,
      type: trailData.type,
      image: trailData.image,
      description: trailData.description || `Discover the amazing ${trailData.title}. More details coming soon!`,
      location: trailData.location || 'Sri Lanka',
      duration: trailData.duration || 'To be updated',
      difficulty: trailData.difficulty || 'To be updated',
      bestTime: trailData.bestTime || 'Year-round',
      elevation: trailData.elevation || '',
      highlights: trailData.highlights || [],
      details: trailData.details || `${trailData.title} offers an incredible experience for travelers. Detailed information will be added soon.`,
      fullDescription: trailData.fullDescription || `Experience the beauty and wonder of ${trailData.title}. This trail promises unforgettable memories and breathtaking views. Complete description coming soon!`,
      gallery: trailData.gallery && trailData.gallery.length > 0 
        ? trailData.gallery.filter(img => img && img.trim() !== '') 
        : [trailData.image]
    };
    console.log('DataManager: Created trail:', newTrail);
    this.trails.push(newTrail);
    this.saveTrails();
    console.log('DataManager: Total trails after add:', this.trails.length);
    return newTrail;
  }

  updateTrail(id, trailData) {
    const index = this.trails.findIndex(trail => trail.id === parseInt(id));
    if (index !== -1) {
      // Preserve existing data and only update provided fields
      const existingTrail = this.trails[index];
      this.trails[index] = {
        ...existingTrail,
        ...trailData,
        id: existingTrail.id, // Ensure ID doesn't change
        gallery: trailData.gallery && trailData.gallery.length > 0 
          ? trailData.gallery.filter(img => img && img.trim() !== '') 
          : existingTrail.gallery || [existingTrail.image]
      };
      this.saveTrails();
      return this.trails[index];
    }
    return null;
  }

  deleteTrail(id) {
    console.log('DataManager: deleteTrail called with ID:', id, 'Type:', typeof id);
    console.log('DataManager: Current trails:', this.trails.map(t => ({ id: t.id, title: t.title })));
    
    const index = this.trails.findIndex(trail => trail.id === parseInt(id));
    console.log('DataManager: Found trail at index:', index);
    
    if (index !== -1) {
      const deletedTrail = this.trails.splice(index, 1)[0];
      console.log('DataManager: Deleted trail:', deletedTrail);
      this.saveTrails();
      console.log('DataManager: Remaining trails after delete:', this.trails.length);
      return deletedTrail;
    }
    
    console.log('DataManager: No trail found with ID:', id);
    return null;
  }

  // Story methods
  getStories() {
    return this.stories;
  }

  getStoryById(id) {
    return this.stories.find(story => story.id === parseInt(id));
  }

  addStory(storyData) {
    const newId = Math.max(...this.stories.map(s => s.id), 0) + 1;
    const newStory = {
      ...storyData,
      id: newId,
      date: new Date().toISOString().split('T')[0],
      gallery: storyData.gallery || [
        storyData.image,
        "/assets/images/hero-background.jpg",
        "/assets/images/story1.jpg",
        "/assets/images/story2.jpg"
      ]
    };
    this.stories.push(newStory);
    this.saveStories();
    return newStory;
  }

  updateStory(id, storyData) {
    const index = this.stories.findIndex(story => story.id === parseInt(id));
    if (index !== -1) {
      this.stories[index] = { ...this.stories[index], ...storyData };
      this.saveStories();
      return this.stories[index];
    }
    return null;
  }

  deleteStory(id) {
    const index = this.stories.findIndex(story => story.id === parseInt(id));
    if (index !== -1) {
      const deletedStory = this.stories.splice(index, 1)[0];
      this.saveStories();
      return deletedStory;
    }
    return null;
  }

  // Reset to initial data (useful for testing)
  resetData() {
    this.trails = [...initialTrails];
    this.stories = [...initialStories];
    localStorage.removeItem('lankaTrails_trails');
    localStorage.removeItem('lankaTrails_stories');
    this.notifyListeners();
  }
}

// Create singleton instance
const dataManager = new DataManager();

export default dataManager;
export { sponsors };
