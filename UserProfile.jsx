import React from "react";

const UserProfile = ({ name, age, location, bio }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
};

export default UserProfile;

