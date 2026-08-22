import React from "react";
import { useState } from "react";
const HabitList = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Drink Water", streak: 20 },
    { id: 2, name: "Eat", streak: 10 },
  ]);

  const [newhabittext, setNewHabitText] = useState("");

  const [searchtext, setSearchText] = useState("");
  function handleStreakChange(id) {
    setHabits((prev) =>
      prev.map((hab) =>
        hab.id === id ? { ...hab, streak: hab.streak + 1 } : hab
      )
    );
  }

  function handleDelete(id) {
    setHabits((prev)=>
    prev.filter((hab)=>{
      return hab.id!==id;
    })
    )
    
  }

  function handleAddHabit(e) {
    if(newhabittext === "") return;

    setHabits((prev)=>{
       return [...prev, {id:Date.now(), name:newhabittext, streak:1}];
    })
    setNewHabitText("");
    e.target.value = ""; 
  }

    const filteredHabits = habits.filter((hab)=>
      hab.name.toLowerCase().includes(searchtext.toLowerCase())
    );


  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Search</h2>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          placeholder="Search habits..."
        />
      </div>

      <div className="flex gap-3 mb-4">
        <input
          value={newhabittext}
          onChange={(e) => {
            setNewHabitText(e.target.value);
          }}
          className="flex-1 p-2 border rounded-md focus:outline-none"
          type="text"
          placeholder="Add new habit..."
        />
        <button
          onClick={handleAddHabit}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-md"
        >
          + Add
        </button>
      </div>

      <div className="space-y-3">
        {filteredHabits.map((habit) => (
          <div
            key={habit.id}
            className="flex items-center justify-between p-3 border rounded-md shadow-sm"
          >
            <div className="flex items-center gap-4">
              <p className="text-lg font-medium">{habit.name}</p>
              <span className="text-sm text-gray-600">Streak: {habit.streak}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleStreakChange(habit.id)}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md"
              >
                +1
              </button>
              <button
                onClick={() => handleDelete(habit.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitList;
