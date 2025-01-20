import React from "react";
import UserProfile from "./UserProfile";

const App = () => {
  const user = {
    name: "yash savani",
    age: 20,
    location: "india",
    bio: "A passionate developer and lifelong learner."
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>User Information</h1>
      <UserProfile
        name={user.name}
        age={user.age}
        location={user.location}
        bio={user.bio}
      />
    </div>
  );
};

export default App;
