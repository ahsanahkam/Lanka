import React, { useState, useEffect } from 'react';
import dataManager from '../dataManager.js';
import AdminForm from './AdminForm.jsx';
import UserManagement from './UserManagement.jsx';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTrail, setSelectedTrail] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('Trail');
  const [editData, setEditData] = useState(null);
  const [trails, setTrails] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Load initial data
    const loadData = () => {
      console.log('AdminDashboard: Loading data...');
      const newTrails = dataManager.getTrails();
      const newStories = dataManager.getStories();
      console.log('AdminDashboard: Loaded trails:', newTrails.length);
      console.log('AdminDashboard: Loaded stories:', newStories.length);
      setTrails(newTrails);
      setStories(newStories);
    };

    loadData();

    // Listen for data changes
    dataManager.addListener(loadData);

    return () => {
      dataManager.removeListener(loadData);
    };
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    paddingTop: '80px'
  };

  const headerStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem'
  };

  const subtitleStyle = {
    color: '#6b7280',
    fontSize: '1rem'
  };

  const dashboardStyle = {
    display: 'flex',
    maxWidth: '1400px',
    margin: '0 auto',
    gap: '2rem',
    padding: '0 1rem'
  };

  const sidebarStyle = {
    width: '280px',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    height: 'fit-content',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
  };

  const contentStyle = {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
  };

  const tabButtonStyle = (isActive) => ({
    width: '100%',
    padding: '0.75rem 1rem',
    textAlign: 'left',
    backgroundColor: isActive ? '#10b981' : 'transparent',
    color: isActive ? 'white' : '#374151',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '0.5rem',
    fontWeight: isActive ? '600' : '400',
    transition: 'all 0.2s ease'
  });

  const cardStyle = {
    backgroundColor: '#f9fafb',
    padding: '1.5rem',
    borderRadius: '12px',
    marginBottom: '1rem',
    border: '1px solid #e5e7eb'
  };

  const statsCardStyle = {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    marginRight: '0.5rem',
    marginBottom: '0.5rem'
  };

  const dangerButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ef4444'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    marginBottom: '1rem'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical'
  };

  const handleAddNew = (type) => {
    setFormType(type);
    setEditData(null);
    setShowForm(true);
  };

  const handleEdit = (type, data) => {
    setFormType(type);
    setEditData(data);
    setShowForm(true);
  };

  const handleSave = (data) => {
    try {
      console.log('AdminDashboard: Saving data:', data);
      console.log('AdminDashboard: Form type:', formType);
      console.log('AdminDashboard: Edit data:', editData);
      
      if (formType === 'Trail') {
        if (editData) {
          // Update existing trail
          const updatedTrail = dataManager.updateTrail(editData.id, data);
          console.log('AdminDashboard: Updated trail:', updatedTrail);
          alert('Trail updated successfully!');
        } else {
          // Add new trail
          const newTrail = dataManager.addTrail(data);
          console.log('AdminDashboard: Added new trail:', newTrail);
          alert(`Trail "${newTrail.title}" added successfully!`);
        }
      } else if (formType === 'Story') {
        if (editData) {
          // Update existing story
          dataManager.updateStory(editData.id, data);
          alert('Story updated successfully!');
        } else {
          // Add new story
          const newStory = dataManager.addStory(data);
          alert(`Story "${newStory.title}" added successfully!`);
        }
      }
      setShowForm(false);
      setEditData(null);
    } catch (error) {
      console.error('Error saving:', error);
      alert('Error saving data. Please try again.');
    }
  };

  const handleDelete = (type, id) => {
    console.log('AdminDashboard: Delete button clicked for', type, 'with ID:', id);
    
    if (window.confirm(`Are you sure you want to delete this ${type.toLowerCase()}?`)) {
      try {
        console.log('AdminDashboard: User confirmed deletion');
        
        if (type === 'Trail') {
          console.log('AdminDashboard: Calling dataManager.deleteTrail with ID:', id);
          const deletedTrail = dataManager.deleteTrail(id);
          console.log('AdminDashboard: Delete result:', deletedTrail);
          
          if (deletedTrail) {
            alert(`Trail "${deletedTrail.title}" deleted successfully!`);
            console.log('AdminDashboard: Trail deleted successfully');
          } else {
            console.log('AdminDashboard: Delete returned null - trail not found');
            alert('Trail not found or could not be deleted.');
          }
        } else if (type === 'Story') {
          console.log('AdminDashboard: Calling dataManager.deleteStory with ID:', id);
          const deletedStory = dataManager.deleteStory(id);
          console.log('AdminDashboard: Delete result:', deletedStory);
          
          if (deletedStory) {
            alert(`Story "${deletedStory.title}" deleted successfully!`);
          } else {
            console.log('AdminDashboard: Delete returned null - story not found');
            alert('Story not found or could not be deleted.');
          }
        }
      } catch (error) {
        console.error('AdminDashboard: Error deleting:', error);
        alert('Error deleting item. Please try again.');
      }
    } else {
      console.log('AdminDashboard: User cancelled deletion');
    }
  };

  const renderOverview = () => (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1f2937' }}>
        Dashboard Overview
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div style={statsCardStyle}>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981', marginBottom: '0.5rem' }}>
            {trails.length}
          </h3>
          <p style={{ color: '#6b7280' }}>Total Trails</p>
        </div>
        
        <div style={statsCardStyle}>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>
            {stories.length}
          </h3>
          <p style={{ color: '#6b7280' }}>Total Stories</p>
        </div>
        
        <div style={statsCardStyle}>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.5rem' }}>
            {new Set(trails.map(t => t.type)).size}
          </h3>
          <p style={{ color: '#6b7280' }}>Trail Categories</p>
        </div>
        
        <div style={statsCardStyle}>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6', marginBottom: '0.5rem' }}>
            {trails.reduce((acc, trail) => acc + (trail.gallery ? trail.gallery.length : 0), 0)}
          </h3>
          <p style={{ color: '#6b7280' }}>Total Images</p>
        </div>
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
        Recent Activity
      </h3>
      
      <div style={cardStyle}>
        <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>System Status</h4>
        <p style={{ color: '#6b7280', marginBottom: '1rem' }}>All systems operational</p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span style={{ padding: '0.25rem 0.75rem', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '12px', fontSize: '0.75rem' }}>
            ✅ Website Online
          </span>
          <span style={{ padding: '0.25rem 0.75rem', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '12px', fontSize: '0.75rem' }}>
            ✅ Images Loading
          </span>
          <span style={{ padding: '0.25rem 0.75rem', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '12px', fontSize: '0.75rem' }}>
            ✅ Navigation Working
          </span>
        </div>
      </div>

      <div style={cardStyle}>
        <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Quick Actions</h4>
        <p style={{ color: '#6b7280', marginBottom: '1rem' }}>Commonly used admin tasks</p>
        <button style={buttonStyle} onClick={() => setActiveTab('trails')}>Manage Trails</button>
        <button style={buttonStyle} onClick={() => setActiveTab('stories')}>Manage Stories</button>
      </div>
    </div>
  );

  const renderTrails = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>
          Trail Management
        </h2>
        <button style={buttonStyle} onClick={() => handleAddNew('Trail')}>+ Add New Trail</button>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {trails.map(trail => (
          <div key={trail.id} style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>
                  {trail.title}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                  {trail.description}
                </p>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                  <span>📍 {trail.location}</span>
                  <span>⏱️ {trail.duration}</span>
                  <span>🏔️ {trail.difficulty}</span>
                  <span style={{ 
                    padding: '0.25rem 0.5rem', 
                    backgroundColor: '#dbeafe', 
                    color: '#2563eb', 
                    borderRadius: '6px',
                    textTransform: 'capitalize'
                  }}>
                    {trail.type}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button 
                  style={buttonStyle}
                  onClick={() => handleEdit('Trail', trail)}
                >
                  Edit
                </button>
                <button 
                  style={dangerButtonStyle}
                  onClick={() => handleDelete('Trail', trail.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStories = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>
          Story Management ({stories.length})
        </h2>
        <button style={buttonStyle} onClick={() => handleAddNew('Story')}>+ Add New Story</button>
      </div>

      {stories.length === 0 ? (
        <div style={{
          ...cardStyle,
          textAlign: 'center',
          padding: '3rem',
          color: '#6b7280'
        }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#374151' }}>No Stories Yet</h3>
          <p style={{ marginBottom: '2rem' }}>
            Start building your story collection by adding travel experiences and adventures.
          </p>
          <button style={buttonStyle} onClick={() => handleAddNew('Story')}>
            + Add Your First Story
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {stories.map(story => (
          <div key={story.id} style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>
                  {story.title}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                  {story.excerpt}
                </p>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                  <span>✍️ {story.author}</span>
                  <span>📅 {story.date}</span>
                  <span>⏰ {story.readTime}</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button 
                  style={buttonStyle}
                  onClick={() => handleEdit('Story', story)}
                >
                  Edit
                </button>
                <button 
                  style={dangerButtonStyle}
                  onClick={() => handleDelete('Story', story.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'trails': return renderTrails();
      case 'stories': return renderStories();
      case 'users': return <UserManagement />;
      default: return renderOverview();
    }
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Lanka Trails Admin Dashboard</h1>
        <p style={subtitleStyle}>Manage your trails, stories, and website content</p>
      </div>

      <div style={dashboardStyle}>
        <aside style={sidebarStyle}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
            Navigation
          </h3>
          
          <button 
            style={tabButtonStyle(activeTab === 'overview')}
            onClick={() => setActiveTab('overview')}
          >
            📊 Overview
          </button>
          
          <button 
            style={tabButtonStyle(activeTab === 'trails')}
            onClick={() => setActiveTab('trails')}
          >
            🏔️ Trails ({trails.length})
          </button>
          
          <button 
            style={tabButtonStyle(activeTab === 'stories')}
            onClick={() => setActiveTab('stories')}
          >
            📖 Stories ({stories.length})
          </button>
          
          <button 
            style={tabButtonStyle(activeTab === 'users')}
            onClick={() => setActiveTab('users')}
          >
            👥 Users
          </button>

          <hr style={{ margin: '1.5rem 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />
          
          <button 
            style={{
              ...tabButtonStyle(false),
              backgroundColor: '#fef2f2',
              color: '#dc2626'
            }}
            onClick={() => window.location.href = '/'}
          >
            ← Back to Website
          </button>
        </aside>

        <main style={contentStyle}>
          {renderContent()}
        </main>
      </div>

      {showForm && (
        <AdminForm
          type={formType}
          data={editData}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
