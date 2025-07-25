// Test script for incomplete trail creation
import dataManager from './dataManager.js';

// Test creating a trail with minimal information
const createIncompleteTrail = () => {
  const minimalTrail = {
    title: "New Trail - Under Development",
    type: "highland",
    image: "/assets/images/ella-rock.jpg"
    // Note: Missing description, location, duration, difficulty, etc.
  };

  const trailId = dataManager.addTrail(minimalTrail);
  console.log('Created minimal trail with ID:', trailId);
  
  // Retrieve and log the trail
  const createdTrail = dataManager.getTrailById(trailId);
  console.log('Created trail data:', createdTrail);
  
  return trailId;
};

// Test creating a trail with some gallery images
const createTrailWithGallery = () => {
  const trailWithGallery = {
    title: "Gallery Test Trail",
    type: "coastal",
    image: "/assets/images/mirissa.jpg",
    description: "A trail to test gallery functionality",
    gallery: [
      "/assets/images/sigiriya.jpg",
      "/assets/images/kandy-temple.jpg"
    ]
  };

  const trailId = dataManager.addTrail(trailWithGallery);
  console.log('Created trail with gallery, ID:', trailId);
  
  return trailId;
};

// Export functions for testing
export { createIncompleteTrail, createTrailWithGallery };

// If running directly
if (typeof window !== 'undefined') {
  console.log('Testing incomplete trail creation...');
  const incompleteId = createIncompleteTrail();
  const galleryId = createTrailWithGallery();
  
  console.log('Test trails created successfully!');
  console.log('Incomplete trail ID:', incompleteId);
  console.log('Gallery trail ID:', galleryId);
}
