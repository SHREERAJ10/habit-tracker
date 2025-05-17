import {useState} from 'react'

function HabitTracker(){
  const habitDays = [
    {id:1,day:"S"},{id:2,day:"M"},{id:3,day:"T"},{id:4,day:"W"},{id:5,day:"T"},{id:6,day:"F"},{id:7,day:"S"}
  ];

  return(
    <div className="flex justify-evenly w-96">
      {habitDays.map((el)=>{
        return(
          <div key={el.id} className="flex flex-col items-center">
            <span>{el.day}</span>
            <input type="checkbox" className="cursor-pointer accent-cyan-600" />
          </div>
        )
      })}
    </div>
  )
}

function Habit({habit}){
  return(
    <div className="w-full gap-2 px-12 flex justify-center items-center text-sky-950">
      <h2 className="text-lg">example</h2>
      {/* habit-tracking-checkboxes */}
      <HabitTracker />
      <button className="bg-red-100 text-red-950 p-2 rounded-lg cursor-pointer">Delete</button>
    </div>
  )
}

function SearchBar({habit, setHabit}){
  
  return(
    <div className="flex gap-2">
      <input type="text" value={habit} onChange={e=>setHabit(e.target.value)} placeholder="Add Habits" className="border border-gray-400 rounded-lg p-1 text-gray-700" />
      <button className="bg-cyan-500 text-white p-2 rounded-lg cursor-pointer">Add Habit</button>
    </div>
  )
}

function App() {
  const [habit, setHabit] = useState('');

  return (
    <div className = "font-deca flex flex-col gap-4 items-center">
      <h1 className="text-4xl text-sky-950">Habit Tracker</h1>
      <SearchBar habit={habit} setHabit={setHabit}/>
      <Habit habit={habit} />
    </div>
    
  )
}

export default App
