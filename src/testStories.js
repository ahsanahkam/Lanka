// Test script to demonstrate dynamic story functionality
// Run this in the browser console after the website loads

console.log("📚 Testing Dynamic Story Management");

// 1. Get the current stories
const currentStories = dataManager.getStories();
console.log("📊 Current stories:", currentStories.length);

// 2. Add a test story
const testStory = {
  title: "My Adventure to Pinnawala Elephant Orphanage",
  author: "Alex Thompson",
  readTime: "7 min read",
  image: "/assets/images/yala.jpg",
  gallery: [
    "/assets/images/yala.jpg",
    "/assets/images/hero-background.jpg",
    "/assets/images/story2.jpg",
    "/assets/images/mirissa.jpg"
  ],
  excerpt: "An unforgettable experience watching rescued elephants in their natural habitat and learning about conservation efforts in Sri Lanka.",
  content: "Walking through the gates of Pinnawala Elephant Orphanage, I was immediately struck by the sight of dozens of elephants roaming freely in the spacious grounds. This unique sanctuary has been caring for orphaned and injured elephants since 1975, and today it's home to over 90 of these magnificent creatures.",
  fullContent: "The highlight of my visit was watching the elephants during their river bath time. Twice a day, the entire herd makes their way to the Ma Oya River, just a few hundred meters from the orphanage. Seeing these gentle giants splashing and playing in the water, with babies staying close to their adoptive mothers, was a truly magical experience. The orphanage not only provides a safe haven for elephants but also conducts vital research and breeding programs. I learned that many of the elephants here were found as babies, either orphaned or injured, and have been given a second chance at life. The dedication of the caretakers and veterinarians is evident in how comfortable and healthy the elephants appear. What touched me most was learning about the conservation efforts. The orphanage works closely with local communities to reduce human-elephant conflict and educate people about the importance of protecting these endangered giants. As I left, watching the sunset behind the silhouettes of the elephant herd, I felt a deep connection to Sri Lanka's natural heritage and a renewed commitment to wildlife conservation."
};

// Function to test adding a story
function testAddStory() {
  console.log("➕ Adding test story...");
  const newStory = dataManager.addStory(testStory);
  console.log("✅ Story added:", newStory);
  console.log("📊 Total stories now:", dataManager.getStories().length);
  return newStory;
}

// Function to test story retrieval
function testGetStory(id) {
  console.log(`🔍 Getting story with ID ${id}...`);
  const story = dataManager.getStoryById(id);
  console.log("📄 Story found:", story);
  return story;
}

// Function to test story update
function testUpdateStory(id, updates) {
  console.log(`✏️ Updating story ${id}...`);
  const updatedStory = dataManager.updateStory(id, updates);
  console.log("✅ Story updated:", updatedStory);
  return updatedStory;
}

// Function to test story deletion
function testDeleteStory(id) {
  console.log(`🗑️ Deleting story ${id}...`);
  const deletedStory = dataManager.deleteStory(id);
  console.log("✅ Story deleted:", deletedStory);
  console.log("📊 Total stories now:", dataManager.getStories().length);
  return deletedStory;
}

// Additional story test data
const moreTestStories = [
  {
    title: "Temple Hopping in Kandy",
    author: "Priya Patel",
    readTime: "6 min read",
    image: "/assets/images/kandy-temple.jpg",
    excerpt: "Discovering the spiritual heart of Sri Lanka through its ancient temples and sacred sites.",
    content: "Kandy, the last royal capital of ancient Sri Lanka, is home to some of the most beautiful and sacred Buddhist temples in the world."
  },
  {
    title: "Surfing the Waves of Arugam Bay",
    author: "Jake Wilson",
    readTime: "5 min read", 
    image: "/assets/images/mirissa.jpg",
    excerpt: "From beginner to pro - my surfing journey on Sri Lanka's legendary east coast waves.",
    content: "Arugam Bay is a surfer's paradise, offering consistent waves and a laid-back atmosphere that keeps travelers coming back year after year."
  }
];

// Function to add multiple test stories
function testAddMultipleStories() {
  console.log("➕ Adding multiple test stories...");
  const addedStories = moreTestStories.map(story => dataManager.addStory(story));
  console.log("✅ Stories added:", addedStories.length);
  console.log("📊 Total stories now:", dataManager.getStories().length);
  return addedStories;
}

// Export test functions to window for easy access
window.storyTests = {
  testAddStory,
  testGetStory,
  testUpdateStory,
  testDeleteStory,
  testAddMultipleStories,
  dataManager
};

console.log("🎯 Story test functions available:");
console.log("- storyTests.testAddStory() - Add a test story");
console.log("- storyTests.testGetStory(id) - Get story by ID");
console.log("- storyTests.testUpdateStory(id, updates) - Update story");
console.log("- storyTests.testDeleteStory(id) - Delete story");
console.log("- storyTests.testAddMultipleStories() - Add multiple test stories");
console.log("- storyTests.dataManager - Access data manager directly");

// Integration test function
function runCompleteStoryTest() {
  console.log("🧪 Running complete story integration test...");
  
  // Add a story
  const newStory = testAddStory();
  
  // Get the story
  const retrievedStory = testGetStory(newStory.id);
  
  // Update the story
  const updatedStory = testUpdateStory(newStory.id, { 
    title: "Updated: " + newStory.title,
    excerpt: "This story has been updated for testing purposes."
  });
  
  // Add multiple stories
  testAddMultipleStories();
  
  console.log("✅ Complete story test finished!");
  console.log("💡 Check the Stories section on the homepage to see new stories");
  console.log("💡 Click 'View Story' to see the complete detail pages");
}

window.storyTests.runCompleteTest = runCompleteStoryTest;
console.log("- storyTests.runCompleteTest() - Run full integration test");

export default window.storyTests;
