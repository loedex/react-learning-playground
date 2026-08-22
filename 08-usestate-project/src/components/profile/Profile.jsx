import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Husnain",
    bio: "this is my bio",
  });
  function handleNameUpdate(e) {
    setProfile((prev) => {
      return { ...prev, name: e.target.value };
    });
  }
  function handleBioUpdate(e) {
    setProfile((prev) => {
      return { ...prev, bio: e.target.value };
    });
  }
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <div>
        <h2 className="text-lg font-semibold mb-2">Name</h2>
        <input
          onChange={(elem) => {
            handleNameUpdate(elem);
          }}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          placeholder="Enter Name"
        />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Bio</h2>
        <input
          onChange={(elem) => {
            handleBioUpdate(elem);
          }}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          placeholder="Enter bio ..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-green-800 text-white rounded-md">
          <p className="font-semibold">Current name</p>
          <p className="mt-2">{profile.name}</p>
        </div>
        <div className="p-4 bg-green-800 text-white rounded-md">
          <p className="font-semibold">Current bio</p>
          <p className="mt-2">{profile.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
