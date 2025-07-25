# 🖼️ Lanka Trails Image Organization Guide

## 📁 Directory Structure

```
public/assets/images/
├── common/                     # Shared images (hero, backgrounds, etc.)
├── trails/                     # Trail-specific images
│   ├── sigiriya/              # Sigiriya Rock Fortress
│   ├── mirissa/               # Mirissa Beach
│   ├── adams-peak/            # Adam's Peak (Sri Pada)
│   ├── yala/                  # Yala National Park
│   ├── kandy-temple/          # Kandy Temple
│   ├── ella-rock/             # Ella Rock
│   └── galle-fort/            # Galle Fort (NEW)
└── stories/                   # Story-specific images
    ├── sigiriya-journey/      # "My Journey to Sigiriya" story
    ├── mirissa-whales/        # "Whale Watching in Mirissa" story
    └── adams-peak-sunrise/    # "Sunrise at Adam's Peak" story
```

## 🎯 Image Requirements

### Trail Images
Each trail directory should contain **4 high-quality images**:

#### **Required Images per Trail:**
1. **`main.jpg`** - Primary trail image (1200x800px recommended)
2. **`gallery-1.jpg`** - Gallery image 1 (800x600px recommended)
3. **`gallery-2.jpg`** - Gallery image 2 (800x600px recommended)
4. **`gallery-3.jpg`** - Gallery image 3 (800x600px recommended)

#### **Trail Directory Examples:**

**📍 /trails/sigiriya/**
- `main.jpg` - Main Sigiriya rock fortress view
- `gallery-1.jpg` - Ancient frescoes/paintings
- `gallery-2.jpg` - Water gardens view
- `gallery-3.jpg` - Summit view/Lion's Gate

**📍 /trails/mirissa/**
- `main.jpg` - Mirissa beach panoramic view
- `gallery-1.jpg` - Whale watching boat scene
- `gallery-2.jpg` - Beach sunset/sunrise
- `gallery-3.jpg` - Palm trees and coastline

**📍 /trails/adams-peak/**
- `main.jpg` - Adam's Peak mountain view
- `gallery-1.jpg` - Pilgrims climbing at night
- `gallery-2.jpg` - Sunrise from summit
- `gallery-3.jpg` - Sacred footprint

**📍 /trails/yala/**
- `main.jpg` - Yala park landscape
- `gallery-1.jpg` - Leopard or wildlife
- `gallery-2.jpg` - Elephants
- `gallery-3.jpg` - Bird watching/nature

**📍 /trails/kandy-temple/**
- `main.jpg` - Temple exterior
- `gallery-1.jpg` - Interior/shrine
- `gallery-2.jpg` - Buddha statue/relics
- `gallery-3.jpg` - Temple ceremonies

**📍 /trails/ella-rock/**
- `main.jpg` - Ella Rock hiking trail
- `gallery-1.jpg` - Tea plantation views
- `gallery-2.jpg` - Summit panorama
- `gallery-3.jpg` - Train journey/Nine Arch Bridge

**📍 /trails/galle-fort/** ⭐ NEW
- `main.jpg` - Galle Fort rampart walls
- `gallery-1.jpg` - Dutch colonial architecture
- `gallery-2.jpg` - Lighthouse at sunset
- `gallery-3.jpg` - Cobblestone streets/shops

### Story Images
Each story directory should contain **4 images**:

#### **Required Images per Story:**
1. **`featured.jpg`** - Main story featured image (1200x800px recommended)
2. **`moment-1.jpg`** - Key moment/scene 1 (800x600px recommended)
3. **`moment-2.jpg`** - Key moment/scene 2 (800x600px recommended)
4. **`moment-3.jpg`** - Key moment/scene 3 (800x600px recommended)

#### **Story Directory Examples:**

**📖 /stories/sigiriya-journey/**
- `featured.jpg` - Author at Sigiriya base
- `moment-1.jpg` - Climbing the steps
- `moment-2.jpg` - Viewing the frescoes
- `moment-3.jpg` - Summit celebration

**📖 /stories/mirissa-whales/**
- `featured.jpg` - Whale watching boat
- `moment-1.jpg` - Early morning preparation
- `moment-2.jpg` - Blue whale sighting
- `moment-3.jpg` - Author's reaction/excitement

**📖 /stories/adams-peak-sunrise/**
- `featured.jpg` - Night climb with lights
- `moment-1.jpg` - Starting the journey at 2 AM
- `moment-2.jpg` - Fellow pilgrims on the path
- `moment-3.jpg` - Sunrise moment at summit

### Common Images
**📍 /common/**
- `hero-background.jpg` - Main website hero background
- `placeholder.jpg` - Fallback image for missing photos
- `loading.jpg` - Loading state image

## 📐 Image Specifications

### **Recommended Dimensions:**
- **Main/Featured Images**: 1200x800px (3:2 aspect ratio)
- **Gallery Images**: 800x600px (4:3 aspect ratio)
- **Hero Background**: 1920x1080px (16:9 aspect ratio)

### **Technical Requirements:**
- **Format**: JPG or PNG
- **File Size**: Max 500KB per image (optimize for web)
- **Quality**: High resolution, well-lit, sharp focus
- **Naming**: Use lowercase, hyphen-separated names

### **Content Guidelines:**
- **Authentic**: Real photos from Sri Lanka locations
- **High Quality**: Professional or high-quality amateur photography
- **Diverse**: Show different angles, times of day, activities
- **Relevant**: Match the trail/story content and mood

## 🔄 How Images Are Used

### **Trail Images:**
- **Main image**: Trail cards, detail page hero
- **Gallery images**: Trail detail page photo gallery (4 images grid)

### **Story Images:**
- **Featured image**: Story cards, detail page hero
- **Moment images**: Story detail page photo gallery (4 images grid)

## 📝 Implementation Notes

### **Current Implementation:**
The system automatically loads images based on this structure. Update `src/data.js` with new paths when adding images.

### **Future Improvements:**
- Automatic image optimization
- Lazy loading for better performance
- Image compression pipeline
- Alt text generation

## 🚀 Quick Start

1. **Add your images** to the appropriate directories
2. **Update `src/data.js`** with new image paths
3. **Test locally** to ensure images load correctly
4. **Optimize images** for web before deployment

---

*Last updated: July 25, 2025*
*Lanka Trails Image Management System v1.0*
