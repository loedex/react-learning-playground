import React from 'react'

const Filter = ({onSearch}) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder='search task ...'
        onChange={(e) => onSearch(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
      />
    </div>
  )
}

export default Filter