// Test script to demonstrate dynamic trail functionality
// Run this in the browser console after the website loads

console.log("🧪 Testing Dynamic Trail Management");

// 1. Get the current trails
const currentTrails = dataManager.getTrails();
console.log("📊 Current trails:", currentTrails.length);

// 2. Add a test trail
const testTrail = {
  title: "Test Trail - Nuwara Eliya",
  type: "highland",
  description: "Beautiful hill station with tea plantations and cool climate.",
  image: "/assets/images/ella-rock.jpg",
  gallery: [
    "/assets/images/ella-rock.jpg",
    "/assets/images/adams-peak.jpg",
    "/assets/images/hero-background.jpg",
    "/assets/images/story3.jpg"
  ],
  location: "Central Province",
  duration: "Full day",
  difficulty: "Easy",
  bestTime: "Year-round",
  elevation: "1,868m",
  highlights: ["Tea plantations", "Cool climate", "Victoria Park", "Gregory Lake"],
  details: "Nuwara Eliya is a city in the hill country of the Central Province, Sri Lanka.",
  fullDescription: "Known as 'Little England', Nuwara Eliya is set in the heart of tea country and is blessed with a cool climate, beautiful scenery and a relaxed atmosphere. The surrounding countryside is dotted with tea plantations, pine forests, and vegetable gardens."
};

// Function to test adding a trail
function testAddTrail() {
  console.log("➕ Adding test trail...");
  const newTrail = dataManager.addTrail(testTrail);
  console.log("✅ Trail added:", newTrail);
  console.log("📊 Total trails now:", dataManager.getTrails().length);
  return newTrail;
}

// Function to test trail retrieval
function testGetTrail(id) {
  console.log(`🔍 Getting trail with ID ${id}...`);
  const trail = dataManager.getTrailById(id);
  console.log("📄 Trail found:", trail);
  return trail;
}

// Function to test trail update
function testUpdateTrail(id, updates) {
  console.log(`✏️ Updating trail ${id}...`);
  const updatedTrail = dataManager.updateTrail(id, updates);
  console.log("✅ Trail updated:", updatedTrail);
  return updatedTrail;
}

// Function to test trail deletion
function testDeleteTrail(id) {
  console.log(`🗑️ Deleting trail ${id}...`);
  const deletedTrail = dataManager.deleteTrail(id);
  console.log("✅ Trail deleted:", deletedTrail);
  console.log("📊 Total trails now:", dataManager.getTrails().length);
  return deletedTrail;
}

// Export test functions to window for easy access
window.trailTests = {
  testAddTrail,
  testGetTrail,
  testUpdateTrail,
  testDeleteTrail,
  dataManager
};

console.log("🎯 Test functions available:");
console.log("- trailTests.testAddTrail() - Add a test trail");
console.log("- trailTests.testGetTrail(id) - Get trail by ID");
console.log("- trailTests.testUpdateTrail(id, updates) - Update trail");
console.log("- trailTests.testDeleteTrail(id) - Delete trail");
console.log("- trailTests.dataManager - Access data manager directly");

export default window.trailTests;
