import {useState} from 'react'

function Habits(){
  return(
    <>
      
    </>
  )
}

function SearchBar(){
  const [habit, setHabit] = useState('');

  return(
    <div className="flex gap-2">
      <input type="text" value={habit} onChange={e=>setHabit(e.target.value)} placeholder="Add Habits" className="border border-gray-400 rounded-lg p-1 text-gray-700" />
      <button className="bg-cyan-500 text-white p-2 rounded-lg cursor-pointer">Add Habit</button>
    </div>
  )
}

function App() {

  return (
    <div className = "font-deca flex flex-col gap-4 items-center">
      <h1 className="text-4xl">Habit Tracker</h1>
      <SearchBar/>
    </div>
  )
}

export default App
