// Debug script to test trail creation and display
import dataManager from './dataManager.js';

console.log('=== DEBUG: Testing Trail Creation & Deletion ===');

// Test 1: Create a minimal trail
console.log('\n1. Creating minimal trail...');
const minimalTrail = {
  title: "Debug Test Trail - DELETE ME",
  type: "cultural",
  image: "/assets/images/sigiriya.jpg"
};

console.log('Input data:', minimalTrail);

try {
  const result = dataManager.addTrail(minimalTrail);
  console.log('Created trail:', result);
  console.log('Trail ID:', result.id);
  
  // Test 2: Retrieve the trail
  console.log('\n2. Retrieving created trail...');
  const retrieved = dataManager.getTrailById(result.id);
  console.log('Retrieved trail:', retrieved);
  
  // Test 3: Check all trails
  console.log('\n3. All trails count before deletion:', dataManager.getTrails().length);
  
  // Test 4: Delete the trail
  console.log('\n4. Testing deletion...');
  console.log('Attempting to delete trail with ID:', result.id);
  const deletedTrail = dataManager.deleteTrail(result.id);
  console.log('Delete result:', deletedTrail);
  
  // Test 5: Verify deletion
  console.log('\n5. Verifying deletion...');
  console.log('All trails count after deletion:', dataManager.getTrails().length);
  const shouldBeNull = dataManager.getTrailById(result.id);
  console.log('Trying to retrieve deleted trail (should be undefined):', shouldBeNull);
  
  // Test 6: Check if image path is valid
  console.log('\n6. Image path validation:');
  console.log('Image path:', retrieved.image);
  console.log('Image exists check: You should manually verify this path works');
  
} catch (error) {
  console.error('Error during trail creation/deletion:', error);
}

// Test 7: Check existing trails structure
console.log('\n7. Sample existing trail structure:');
const existingTrails = dataManager.getTrails();
if (existingTrails.length > 0) {
  console.log('First existing trail:', existingTrails[0]);
  console.log('All trail IDs:', existingTrails.map(t => t.id));
}

console.log('\n=== DEBUG COMPLETE ===');
