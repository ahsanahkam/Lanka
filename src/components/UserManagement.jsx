import React, { useState, useEffect } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Mock user data - in real app, this would come from API
  const mockUsers = [
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@lankatrails.com',
      role: 'admin',
      status: 'active',
      joinDate: '2024-01-15',
      lastLogin: '2024-12-19',
      avatar: '/placeholder.svg',
      trailsVisited: 12,
      storiesShared: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@email.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-03-20',
      lastLogin: '2024-12-18',
      avatar: '/placeholder.svg',
      trailsVisited: 8,
      storiesShared: 2
    },
    {
      id: 3,
      name: 'David Chen',
      email: 'david@email.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-02-10',
      lastLogin: '2024-12-17',
      avatar: '/placeholder.svg',
      trailsVisited: 15,
      storiesShared: 3
    },
    {
      id: 4,
      name: 'Emma Wilson',
      email: 'emma@email.com',
      role: 'user',
      status: 'inactive',
      joinDate: '2024-01-05',
      lastLogin: '2024-11-20',
      avatar: '/placeholder.svg',
      trailsVisited: 4,
      storiesShared: 1
    },
    {
      id: 5,
      name: 'Tour Guide Lanka',
      email: 'guide@lankatrails.com',
      role: 'guide',
      status: 'active',
      joinDate: '2024-02-01',
      lastLogin: '2024-12-19',
      avatar: '/placeholder.svg',
      trailsVisited: 25,
      storiesShared: 8
    }
  ];

  useEffect(() => {
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
  }, []);

  useEffect(() => {
    let filtered = users;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by role
    if (filterRole !== 'all') {
      filtered = filtered.filter(user => user.role === filterRole);
    }

    setFilteredUsers(filtered);
  }, [searchTerm, filterRole, users]);

  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#f9fafb',
    minHeight: '100vh'
  };

  const headerStyle = {
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
    fontSize: '1.125rem'
  };

  const controlsStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    alignItems: 'center'
  };

  const searchInputStyle = {
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    minWidth: '300px',
    flex: 1
  };

  const selectStyle = {
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    backgroundColor: 'white'
  };

  const statsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem'
  };

  const statCardStyle = {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    textAlign: 'center'
  };

  const statNumberStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#10b981',
    marginBottom: '0.5rem'
  };

  const statLabelStyle = {
    color: '#6b7280',
    fontSize: '0.875rem'
  };

  const tableStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
  };

  const tableHeaderStyle = {
    backgroundColor: '#f9fafb',
    padding: '1rem',
    borderBottom: '1px solid #e5e7eb'
  };

  const tableRowStyle = {
    padding: '1rem',
    borderBottom: '1px solid #e5e7eb',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr 1fr 150px',
    alignItems: 'center',
    gap: '1rem'
  };

  const avatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb'
  };

  const badgeStyle = (status) => ({
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '600',
    backgroundColor: status === 'active' ? '#d1fae5' : '#fee2e2',
    color: status === 'active' ? '#065f46' : '#dc2626'
  });

  const roleBadgeStyle = (role) => {
    const colors = {
      admin: { bg: '#fef3c7', color: '#d97706' },
      guide: { bg: '#dbeafe', color: '#2563eb' },
      user: { bg: '#f3f4f6', color: '#6b7280' }
    };
    const roleColor = colors[role] || colors.user;
    return {
      padding: '0.25rem 0.75rem',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: '600',
      backgroundColor: roleColor.bg,
      color: roleColor.color
    };
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '600'
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#10b981',
    color: 'white',
    marginRight: '0.5rem'
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f3f4f6',
    color: '#374151'
  };

  const getStats = () => {
    const totalUsers = users.length;
    const activeUsers = users.filter(u => u.status === 'active').length;
    const adminUsers = users.filter(u => u.role === 'admin').length;
    const guideUsers = users.filter(u => u.role === 'guide').length;

    return { totalUsers, activeUsers, adminUsers, guideUsers };
  };

  const handleUserAction = (userId, action) => {
    if (action === 'edit') {
      alert(`Edit user ${userId} - Feature coming soon!`);
    } else if (action === 'delete') {
      if (confirm('Are you sure you want to delete this user?')) {
        setUsers(users.filter(u => u.id !== userId));
        alert('User deleted successfully!');
      }
    } else if (action === 'toggle-status') {
      setUsers(users.map(u => 
        u.id === userId 
          ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' }
          : u
      ));
    }
  };

  const stats = getStats();

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>User Management</h1>
        <p style={subtitleStyle}>Manage all registered users and their permissions</p>
      </div>

      {/* Stats Cards */}
      <div style={statsStyle}>
        <div style={statCardStyle}>
          <div style={statNumberStyle}>{stats.totalUsers}</div>
          <div style={statLabelStyle}>Total Users</div>
        </div>
        <div style={statCardStyle}>
          <div style={statNumberStyle}>{stats.activeUsers}</div>
          <div style={statLabelStyle}>Active Users</div>
        </div>
        <div style={statCardStyle}>
          <div style={statNumberStyle}>{stats.adminUsers}</div>
          <div style={statLabelStyle}>Administrators</div>
        </div>
        <div style={statCardStyle}>
          <div style={statNumberStyle}>{stats.guideUsers}</div>
          <div style={statLabelStyle}>Tour Guides</div>
        </div>
      </div>

      {/* Controls */}
      <div style={controlsStyle}>
        <input
          type="text"
          placeholder="Search users by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInputStyle}
        />
        
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          style={selectStyle}
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="guide">Guide</option>
          <option value="user">User</option>
        </select>
      </div>

      {/* Users Table */}
      <div style={tableStyle}>
        <div style={{ ...tableRowStyle, ...tableHeaderStyle, fontWeight: 'bold' }}>
          <div>Avatar</div>
          <div>User Details</div>
          <div>Role</div>
          <div>Status</div>
          <div>Activity</div>
          <div>Join Date</div>
          <div>Actions</div>
        </div>

        {filteredUsers.map(user => (
          <div key={user.id} style={tableRowStyle}>
            <div>
              <img 
                src={user.avatar} 
                alt={user.name}
                style={avatarStyle}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{
                ...avatarStyle,
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#6b7280'
              }}>
                {user.name.charAt(0)}
              </div>
            </div>
            
            <div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                {user.name}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                {user.email}
              </div>
            </div>
            
            <div>
              <span style={roleBadgeStyle(user.role)}>
                {user.role}
              </span>
            </div>
            
            <div>
              <span style={badgeStyle(user.status)}>
                {user.status}
              </span>
            </div>
            
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              <div>{user.trailsVisited} trails</div>
              <div>{user.storiesShared} stories</div>
            </div>
            
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              {new Date(user.joinDate).toLocaleDateString()}
            </div>
            
            <div>
              <button
                style={primaryButtonStyle}
                onClick={() => handleUserAction(user.id, 'edit')}
              >
                Edit
              </button>
              <button
                style={secondaryButtonStyle}
                onClick={() => handleUserAction(user.id, 'toggle-status')}
              >
                {user.status === 'active' ? 'Deactivate' : 'Activate'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: '#6b7280',
          backgroundColor: 'white',
          borderRadius: '12px',
          marginTop: '1rem'
        }}>
          <h3>No users found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
