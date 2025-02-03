import React, { useState } from "react";

const Profile = () => {
  // Initial user data (in real app, this might come from an API or context)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "https://www.w3schools.com/w3images/avatar2.png",
  });

  // State to manage editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Local state to store input values
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Save changes and update user data
  const handleSave = () => {
    setUser({
      ...user,
      name: formData.name,
      email: formData.email,
    });
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <h2>User Profile</h2>
          <button onClick={toggleEdit} className="edit-btn">
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>

        <div className="profile-picture">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="profile-img"
            width="150"
            height="150"
          />
        </div>

        <div className="profile-details">
          <div className="profile-item">
            <label>Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="profile-input"
              />
            ) : (
              <span>{user.name}</span>
            )}
          </div>

          <div className="profile-item">
            <label>Email:</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="profile-input"
              />
            ) : (
              <span>{user.email}</span>
            )}
          </div>

          {isEditing && (
            <button onClick={handleSave} className="save-btn">
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
