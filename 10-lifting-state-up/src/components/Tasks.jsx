import React from 'react'

const Tasks = ({currentText}) => {
  const tasks = [
    { id: 1, title: "Learn useState" },
    { id: 2, title: "Learn useEffect" },
    { id: 3, title: "Build a Todo App" },
    { id: 4, title: "Understand React Context" },
    { id: 5, title: "Master Custom Hooks" },
    { id: 6, title: "Explore useReducer Hook" },
    { id: 7, title: "Master useRef & DOM Referencing" },
    { id: 8, title: "Set Up React Router v6" },
    { id: 9, title: "Handle Component Side Effects & Cleanup" },
    { id: 10, title: "Manage Complex Forms with React Hook Form" },
    { id: 11, title: "Fetch API Data using Axios" },
    { id: 12, title: "Implement Server State with TanStack Query" },
    { id: 13, title: "Master Global State with Redux Toolkit" },
    { id: 14, title: "Style Components using Tailwind CSS" },
    { id: 15, title: "Optimize Renders with useMemo & useCallback" },
    { id: 16, title: "Implement Code Splitting with React.lazy" },
    { id: 17, title: "Write Unit Tests with React Testing Library" },
    { id: 18, title: "Explore Next.js App Router" },
    { id: 19, title: "Understand React Server Components" },
    { id: 20, title: "Deploy React Project to Vercel" }
  ];

  return (
    <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      {tasks
        .filter((task) => task.title.toLowerCase().includes(currentText.toLowerCase()))
        .map((t) => (
          <p
            key={t.id}
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
          >
            {t.title}
          </p>
        ))}
    </div>
  )
}

export default Tasks