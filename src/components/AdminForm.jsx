import React, { useState } from 'react';

const AdminForm = ({ type, data, onSave, onCancel }) => {
  const [formData, setFormData] = useState(() => {
    // Initialize with default gallery if creating new item
    const initialData = data || {};
    if (!initialData.gallery) {
      initialData.gallery = initialData.image ? [initialData.image] : [];
    }
    return initialData;
  });

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  };

  const formStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '2rem',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#1f2937'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    marginBottom: '1rem',
    fontSize: '1rem'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical'
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    marginRight: '0.5rem',
    fontSize: '1rem'
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#6b7280'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#374151'
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGalleryChange = (index, value) => {
    const gallery = formData.gallery || [];
    const newGallery = [...gallery];
    newGallery[index] = value;
    handleInputChange('gallery', newGallery);
  };

  const addGalleryImage = () => {
    const gallery = formData.gallery || [];
    handleInputChange('gallery', [...gallery, '']);
  };

  const handleGalleryFileUpload = (index, file) => {
    if (file) {
      // In a real app, you'd upload to a server and get back the URL
      // For now, we'll simulate this by creating a local URL
      const fileName = `gallery-${Date.now()}-${file.name}`;
      const imageUrl = `/assets/images/trails/${fileName}`;
      
      // Create a preview URL for immediate display
      const previewUrl = URL.createObjectURL(file);
      
      console.log(`Gallery image ${index + 1} selected:`, file.name);
      console.log('Would be uploaded to:', imageUrl);
      console.log('Preview URL (for development):', previewUrl);
      
      // Update the gallery array properly
      const currentGallery = [...(formData.gallery || [])];
      currentGallery[index] = imageUrl;
      
      // Update the form data with the new gallery and preview
      const updatedFormData = {
        ...formData,
        gallery: currentGallery,
        galleryPreviews: {
          ...(formData.galleryPreviews || {}),
          [index]: previewUrl
        }
      };
      
      // Use setFormData to update the entire form state
      setFormData(updatedFormData);
    }
  };

  const removeGalleryImage = (index) => {
    const gallery = formData.gallery || [];
    const newGallery = gallery.filter((_, i) => i !== index);
    handleInputChange('gallery', newGallery);
  };

  // Available images for selection
  const availableImages = [
    '/assets/images/adams-peak.jpg',
    '/assets/images/ella-rock.jpg',
    '/assets/images/hero-background.jpg',
    '/assets/images/kandy-temple.jpg',
    '/assets/images/mirissa.jpg',
    '/assets/images/sigiriya.jpg',
    '/assets/images/story1.jpg',
    '/assets/images/story2.jpg',
    '/assets/images/story3.jpg',
    '/assets/images/yala.jpg'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('AdminForm: Submitting form data:', formData);
    
    // Ensure main image path is properly formatted
    if (formData.image && !formData.image.startsWith('/')) {
      formData.image = '/' + formData.image;
    }
    
    // Clean up gallery images
    if (formData.gallery) {
      formData.gallery = formData.gallery
        .filter(img => img && img.trim() !== '')
        .map(img => img.startsWith('/') ? img : '/' + img);
    }
    
    // Remove preview URLs from form data (they're only for UI)
    const cleanFormData = { ...formData };
    delete cleanFormData.galleryPreviews;
    
    console.log('AdminForm: Cleaned form data:', cleanFormData);
    onSave(cleanFormData);
  };

  const renderTrailForm = () => (
    <form onSubmit={handleSubmit}>
      <label style={labelStyle}>Trail Title *</label>
      <input
        style={inputStyle}
        type="text"
        value={formData.title || ''}
        onChange={(e) => handleInputChange('title', e.target.value)}
        placeholder="Enter trail title"
        required
      />

      <label style={labelStyle}>Type *</label>
      <select
        style={inputStyle}
        value={formData.type || ''}
        onChange={(e) => handleInputChange('type', e.target.value)}
        required
      >
        <option value="">Select type</option>
        <option value="cultural">Cultural</option>
        <option value="coastal">Coastal</option>
        <option value="highland">Highland</option>
        <option value="wildlife">Wildlife</option>
      </select>

      <label style={labelStyle}>Description</label>
      <textarea
        style={textareaStyle}
        value={formData.description || ''}
        onChange={(e) => handleInputChange('description', e.target.value)}
        placeholder="Enter trail description (can be added later)"
      />

      <label style={labelStyle}>Location</label>
      <input
        style={inputStyle}
        type="text"
        value={formData.location || ''}
        onChange={(e) => handleInputChange('location', e.target.value)}
        placeholder="Enter location (can be added later)"
      />

      <label style={labelStyle}>Duration</label>
      <input
        style={inputStyle}
        type="text"
        value={formData.duration || ''}
        onChange={(e) => handleInputChange('duration', e.target.value)}
        placeholder="e.g., 3-4 hours (can be added later)"
      />

      <label style={labelStyle}>Difficulty</label>
      <select
        style={inputStyle}
        value={formData.difficulty || ''}
        onChange={(e) => handleInputChange('difficulty', e.target.value)}
      >
        <option value="">Select difficulty (can be added later)</option>
        <option value="Easy">Easy</option>
        <option value="Moderate">Moderate</option>
        <option value="Challenging">Challenging</option>
        <option value="Difficult">Difficult</option>
      </select>

      <label style={labelStyle}>Best Time to Visit</label>
      <input
        style={inputStyle}
        type="text"
        value={formData.bestTime || ''}
        onChange={(e) => handleInputChange('bestTime', e.target.value)}
        placeholder="e.g., Year-round"
      />

      <label style={labelStyle}>Elevation</label>
      <input
        style={inputStyle}
        type="text"
        value={formData.elevation || ''}
        onChange={(e) => handleInputChange('elevation', e.target.value)}
        placeholder="e.g., 200m"
      />

      <label style={labelStyle}>Highlights (comma-separated)</label>
      <input
        style={inputStyle}
        type="text"
        value={formData.highlights ? formData.highlights.join(', ') : ''}
        onChange={(e) => handleInputChange('highlights', e.target.value.split(', '))}
        placeholder="e.g., Ancient frescoes, Mirror wall, Royal gardens"
      />

      <label style={labelStyle}>Main Image URL *</label>
      <input
        style={inputStyle}
        type="text"
        value={formData.image || ''}
        onChange={(e) => handleInputChange('image', e.target.value)}
        placeholder="/assets/images/trail-name.jpg"
        required
      />

      {/* Image Selector */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle}>Or Select from Available Images</label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '0.5rem',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          padding: '1rem',
          backgroundColor: '#f9fafb',
          maxHeight: '200px',
          overflowY: 'auto'
        }}>
          {availableImages.map((imagePath, index) => (
            <div
              key={index}
              style={{
                cursor: 'pointer',
                border: formData.image === imagePath ? '2px solid #10b981' : '2px solid transparent',
                borderRadius: '4px',
                overflow: 'hidden',
                transition: 'border-color 0.2s ease'
              }}
              onClick={() => handleInputChange('image', imagePath)}
            >
              <img
                src={imagePath}
                alt={`Option ${index + 1}`}
                style={{
                  width: '100%',
                  height: '80px',
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  e.target.src = '/placeholder.svg';
                  e.target.style.backgroundColor = '#f3f4f6';
                }}
              />
              <div style={{
                padding: '0.25rem',
                fontSize: '0.75rem',
                textAlign: 'center',
                backgroundColor: 'white',
                color: '#6b7280'
              }}>
                {imagePath.split('/').pop().split('.')[0]}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle}>Or Upload New Image</label>
        <div style={{
          border: '2px dashed #d1d5db',
          borderRadius: '8px',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: '#f9fafb',
          marginBottom: '1rem'
        }}>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            id="image-upload"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                // In a real app, you'd upload to a server and get back the URL
                const imageUrl = `/assets/images/${file.name}`;
                handleInputChange('image', imageUrl);
                alert(`Image selected: ${file.name}\nWould be uploaded to: ${imageUrl}`);
              }
            }}
          />
          <label htmlFor="image-upload" style={{
            cursor: 'pointer',
            color: '#6b7280',
            fontSize: '0.875rem'
          }}>
            📷 Click to select image or drag and drop
          </label>
          <p style={{ 
            fontSize: '0.75rem', 
            color: '#9ca3af', 
            marginTop: '0.5rem',
            margin: '0.5rem 0 0 0'
          }}>
            Recommended: 1200x800px, JPG/PNG, under 1MB
          </p>
        </div>
      </div>

      {/* Gallery Images Section */}
      <label style={labelStyle}>Gallery Images (Optional - Upload from PC)</label>
      <div style={{ marginBottom: '1rem' }}>
        <p style={{ 
          fontSize: '0.875rem', 
          color: '#6b7280',
          marginBottom: '1rem'
        }}>
          Upload up to 4 images for the trail gallery. Click "Choose File" to select images from your computer.
        </p>
        
        {(formData.gallery || []).map((imageUrl, index) => (
          <div key={index} style={{ 
            marginBottom: '1rem',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '1rem',
            backgroundColor: '#f9fafb'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '0.5rem',
              gap: '0.5rem'
            }}>
              <div style={{ flex: 1 }}>
                <label style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: '600', 
                  color: '#374151',
                  marginBottom: '0.25rem',
                  display: 'block'
                }}>
                  Gallery Image {index + 1}
                </label>
                
                {/* File Upload */}
                <div style={{
                  border: '2px dashed #d1d5db',
                  borderRadius: '6px',
                  padding: '1rem',
                  textAlign: 'center',
                  backgroundColor: 'white',
                  marginBottom: '0.5rem'
                }}>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id={`gallery-upload-${index}`}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        handleGalleryFileUpload(index, file);
                      }
                    }}
                  />
                  <label htmlFor={`gallery-upload-${index}`} style={{
                    cursor: 'pointer',
                    color: '#10b981',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    📁 Choose File
                  </label>
                  <p style={{ 
                    fontSize: '0.75rem', 
                    color: '#9ca3af', 
                    marginTop: '0.25rem',
                    margin: '0.25rem 0 0 0'
                  }}>
                    JPG, PNG up to 2MB
                  </p>
                </div>

                {/* Preview if image is selected */}
                {imageUrl && (
                  <div style={{ marginTop: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <img
                        src={formData.galleryPreviews?.[index] || imageUrl}
                        alt={`Gallery preview ${index + 1}`}
                        style={{
                          width: '100px',
                          height: '60px',
                          objectFit: 'cover',
                          borderRadius: '4px',
                          border: '1px solid #e5e7eb'
                        }}
                        onError={(e) => {
                          e.target.src = '/placeholder.svg';
                          e.target.style.backgroundColor = '#f3f4f6';
                        }}
                      />
                      <div>
                        <p style={{
                          fontSize: '0.75rem',
                          color: '#10b981',
                          margin: '0',
                          fontWeight: '600'
                        }}>
                          ✓ Image ready
                        </p>
                        <p style={{
                          fontSize: '0.75rem',
                          color: '#6b7280',
                          margin: '0'
                        }}>
                          {formData.galleryPreviews?.[index] ? 'Uploaded from PC' : 'Using URL'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Manual URL input as alternative */}
                <div style={{ marginTop: '0.5rem' }}>
                  <label style={{ 
                    fontSize: '0.75rem', 
                    color: '#6b7280',
                    marginBottom: '0.25rem',
                    display: 'block'
                  }}>
                    Or enter image URL:
                  </label>
                  <input
                    style={{ 
                      ...inputStyle, 
                      marginBottom: 0, 
                      fontSize: '0.875rem',
                      padding: '0.5rem'
                    }}
                    type="text"
                    value={imageUrl}
                    onChange={(e) => handleGalleryChange(index, e.target.value)}
                    placeholder={`Gallery image ${index + 1} URL or path`}
                  />
                </div>
              </div>
              
              <button
                type="button"
                onClick={() => removeGalleryImage(index)}
                style={{
                  padding: '0.5rem',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  alignSelf: 'flex-start'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        
        {(formData.gallery || []).length < 4 && (
          <button
            type="button"
            onClick={addGalleryImage}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.875rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            📷 Add Gallery Image ({(formData.gallery || []).length}/4)
          </button>
        )}
        
        <div style={{
          padding: '1rem',
          backgroundColor: '#f0f9ff',
          border: '1px solid #0ea5e9',
          borderRadius: '6px',
          fontSize: '0.75rem',
          color: '#0369a1'
        }}>
          <strong>Note:</strong> Gallery images are optional. You can upload images from your computer or paste URLs. 
          In a production environment, uploaded files would be stored on the server. For now, they're simulated with local previews.
        </div>
      </div>

      <label style={labelStyle}>Details</label>
      <textarea
        style={textareaStyle}
        value={formData.details || ''}
        onChange={(e) => handleInputChange('details', e.target.value)}
        placeholder="Enter detailed information about the trail (can be added later)"
      />

      <label style={labelStyle}>Full Description</label>
      <textarea
        style={textareaStyle}
        value={formData.fullDescription || ''}
        onChange={(e) => handleInputChange('fullDescription', e.target.value)}
        placeholder="Enter comprehensive trail description (can be added later)"
      />

      <div style={{
        padding: '1rem',
        backgroundColor: '#f0f9ff',
        border: '1px solid #0ea5e9',
        borderRadius: '8px',
        marginBottom: '1rem'
      }}>
        <p style={{
          margin: '0',
          fontSize: '0.875rem',
          color: '#0369a1'
        }}>
          <strong>Note:</strong> Only Title, Type, and Main Image are required. You can create the trail now and add other details later. 
          The trail will be immediately available with a detail page, even if some information is missing.
        </p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button type="submit" style={buttonStyle}>
          {data ? 'Update Trail' : 'Create Trail'}
        </button>
        <button type="button" style={cancelButtonStyle} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );

  const renderStoryForm = () => (
    <form onSubmit={handleSubmit}>
      <label style={labelStyle}>Story Title</label>
      <input
        style={inputStyle}
        type="text"
        value={formData.title || ''}
        onChange={(e) => handleInputChange('title', e.target.value)}
        placeholder="Enter story title"
        required
      />

      <label style={labelStyle}>Author</label>
      <input
        style={inputStyle}
        type="text"
        value={formData.author || ''}
        onChange={(e) => handleInputChange('author', e.target.value)}
        placeholder="Enter author name"
        required
      />

      <label style={labelStyle}>Date</label>
      <input
        style={inputStyle}
        type="date"
        value={formData.date || ''}
        onChange={(e) => handleInputChange('date', e.target.value)}
        required
      />

      <label style={labelStyle}>Read Time</label>
      <input
        style={inputStyle}
        type="text"
        value={formData.readTime || ''}
        onChange={(e) => handleInputChange('readTime', e.target.value)}
        placeholder="e.g., 5 min read"
        required
      />

      <label style={labelStyle}>Main Image URL</label>
      <input
        style={inputStyle}
        type="text"
        value={formData.image || ''}
        onChange={(e) => handleInputChange('image', e.target.value)}
        placeholder="/assets/images/story-name.jpg"
        required
      />

      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle}>Or Upload New Image</label>
        <div style={{
          border: '2px dashed #d1d5db',
          borderRadius: '8px',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: '#f9fafb',
          marginBottom: '1rem'
        }}>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            id="story-image-upload"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                // In a real app, you'd upload to a server and get back the URL
                const imageUrl = `/assets/images/${file.name}`;
                handleInputChange('image', imageUrl);
                alert(`Image selected: ${file.name}\nWould be uploaded to: ${imageUrl}`);
              }
            }}
          />
          <label htmlFor="story-image-upload" style={{
            cursor: 'pointer',
            color: '#6b7280',
            fontSize: '0.875rem'
          }}>
            📷 Click to select image or drag and drop
          </label>
          <p style={{ 
            fontSize: '0.75rem', 
            color: '#9ca3af', 
            marginTop: '0.5rem',
            margin: '0.5rem 0 0 0'
          }}>
            Recommended: 1200x800px, JPG/PNG, under 1MB
          </p>
        </div>
      </div>

      {/* Gallery Images Section for Stories */}
      <label style={labelStyle}>Gallery Images (Optional)</label>
      <div style={{ marginBottom: '1rem' }}>
        {(formData.gallery || []).map((imageUrl, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '0.5rem',
            gap: '0.5rem'
          }}>
            <input
              style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
              type="text"
              value={imageUrl}
              onChange={(e) => handleGalleryChange(index, e.target.value)}
              placeholder={`Gallery image ${index + 1} URL or path`}
            />
            <button
              type="button"
              onClick={() => removeGalleryImage(index)}
              style={{
                padding: '0.5rem',
                backgroundColor: '#dc2626',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addGalleryImage}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }}
        >
          + Add Gallery Image
        </button>
        <p style={{ 
          fontSize: '0.75rem', 
          color: '#9ca3af',
          margin: '0 0 1rem 0'
        }}>
          Add up to 4 images for the story gallery. Images will be displayed on the story detail page.
        </p>
      </div>

      <label style={labelStyle}>Excerpt</label>
      <textarea
        style={textareaStyle}
        value={formData.excerpt || ''}
        onChange={(e) => handleInputChange('excerpt', e.target.value)}
        placeholder="Enter story excerpt"
        required
      />

      <label style={labelStyle}>Content</label>
      <textarea
        style={textareaStyle}
        value={formData.content || ''}
        onChange={(e) => handleInputChange('content', e.target.value)}
        placeholder="Enter story content"
        required
      />

      <label style={labelStyle}>Full Content</label>
      <textarea
        style={{ ...textareaStyle, minHeight: '200px' }}
        value={formData.fullContent || ''}
        onChange={(e) => handleInputChange('fullContent', e.target.value)}
        placeholder="Enter full story content"
      />

      <div style={{ marginTop: '2rem' }}>
        <button type="submit" style={buttonStyle}>
          Save Story
        </button>
        <button type="button" style={cancelButtonStyle} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );

  return (
    <div style={containerStyle} onClick={(e) => e.target === e.currentTarget && onCancel()}>
      <div style={formStyle}>
        <h2 style={titleStyle}>
          {data ? `Edit ${type}` : `Add New ${type}`}
        </h2>
        {type === 'Trail' ? renderTrailForm() : renderStoryForm()}
      </div>
    </div>
  );
};

export default AdminForm;
