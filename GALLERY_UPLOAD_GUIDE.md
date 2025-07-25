# Gallery File Upload Feature Guide

## 🖼️ New Gallery Image Upload

The AdminForm now supports uploading images directly from your computer for trail galleries!

### How to Use:

#### **Adding Gallery Images**

1. **Go to Admin Dashboard** → **Trails Tab** → **Add Trail**

2. **Fill Required Fields:**
   - Trail Title
   - Type (Cultural, Coastal, Highland, Wildlife)
   - Main Image (select from existing or upload)

3. **Add Gallery Images (Optional):**
   - Click **"📷 Add Gallery Image (0/4)"** button
   - For each gallery slot, you can either:
     - **Upload from PC**: Click **"📁 Choose File"** → Select image from computer
     - **Enter URL**: Paste image URL in the text field

4. **Preview**: Selected images show a preview thumbnail

5. **Remove**: Click "Remove" button to delete a gallery image

6. **Submit**: Click "Create Trail" to save

### Features:

✅ **File Upload**: Direct upload from computer  
✅ **Preview**: Immediate preview of selected images  
✅ **URL Alternative**: Can still paste image URLs  
✅ **Limit**: Maximum 4 gallery images  
✅ **Validation**: Only image files accepted (JPG, PNG)  
✅ **File Size**: Up to 2MB per image  
✅ **Flexible**: Can mix uploaded files and URLs  

### File Handling:

**Development Mode:**
- Files are simulated as uploaded to `/assets/images/trails/`
- Preview uses `URL.createObjectURL()` for immediate display
- Console shows where files would be uploaded

**Production Ready:**
- Replace `handleGalleryFileUpload()` function with actual server upload
- Integrate with your preferred cloud storage (AWS S3, Cloudinary, etc.)
- Return real URLs from server after upload

### Usage Examples:

**Scenario 1: All Uploaded Files**
- Upload 4 images from computer
- Each gets a preview and simulated server path

**Scenario 2: Mixed Sources**
- Upload 2 images from computer
- Add 2 images via URL from existing assets

**Scenario 3: URL Only**
- Skip file upload entirely
- Use existing image URLs for all gallery images

### Technical Details:

**File Processing:**
```javascript
// Simulated upload path
const fileName = `gallery-${Date.now()}-${file.name}`;
const imageUrl = `/assets/images/trails/${fileName}`;

// Preview URL for immediate display
const previewUrl = URL.createObjectURL(file);
```

**Data Structure:**
```javascript
{
  title: "Trail Name",
  type: "cultural",
  image: "/assets/images/main.jpg",
  gallery: [
    "/assets/images/trails/gallery-1640995200000-image1.jpg",
    "/assets/images/existing-image.jpg",
    "/assets/images/trails/gallery-1640995201000-image2.jpg"
  ]
}
```

### For Developers:

To implement real file upload:

1. **Backend Endpoint**: Create `/api/upload-image` endpoint
2. **Storage**: Configure cloud storage (AWS S3, Google Cloud, etc.)
3. **Update Function**: Modify `handleGalleryFileUpload()` to use `fetch()` or `axios`
4. **Progress**: Add upload progress indicators
5. **Error Handling**: Handle upload failures gracefully

**Example Implementation:**
```javascript
const handleGalleryFileUpload = async (index, file) => {
  const formData = new FormData();
  formData.append('image', file);
  
  try {
    const response = await fetch('/api/upload-image', {
      method: 'POST',
      body: formData
    });
    
    const { imageUrl } = await response.json();
    handleGalleryChange(index, imageUrl);
  } catch (error) {
    console.error('Upload failed:', error);
  }
};
```

### User Experience:

- **Intuitive**: Clear "Choose File" buttons
- **Visual**: Immediate previews
- **Flexible**: Multiple input methods
- **Feedback**: Visual confirmation when files selected
- **Clean**: Organized layout with clear labels
- **Limits**: Prevents adding more than 4 images

This feature makes it much easier for admins to add visual content without needing to know image URLs or manage a separate image library! 🎉
