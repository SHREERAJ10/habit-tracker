import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

function HabitTracker({el}){

  return(
          <div className="flex flex-col items-center">
            <span>{el.day}</span>
            <input type="checkbox" className="cursor-pointer accent-cyan-600" />
          </div>
  )
}

function Habit({habitInfo, deleteHabit}){

  const habitDays = [
    {id:1,day:"S"},{id:2,day:"M"},{id:3,day:"T"},{id:4,day:"W"},{id:5,day:"T"},{id:6,day:"F"},{id:7,day:"S"}
  ];

  return(
      <div className="w-full gap-2 px-12 flex justify-center items-center text-sky-950">
        <h2 className="text-lg">{habitInfo.value}</h2>
        {/* habit-tracking-checkboxes */}
      <div className="flex justify-evenly w-96">
        {habitDays.map((el)=>{
          return <HabitTracker key={el.id} el={el}/>
        })}
      </div>
        <button onClick={()=>deleteHabit(habitInfo)} className="bg-red-100 text-red-950 p-2 rounded-lg cursor-pointer">Delete</button>
    </div>
  )
}

function SearchBar({habit, setHabit, addHabit}){

  return(
    <div className="flex gap-2">
      <input type="text" value={habit} onChange={e=>setHabit(e.target.value)} placeholder="Add Habits" className="w-72 border border-gray-400 rounded-lg p-1 text-gray-700" />
      <button className="bg-cyan-500 text-white p-2 rounded-lg cursor-pointer" onClick ={()=>addHabit(habit)}>Add Habit</button>
    </div>
  )
}

function App() {
  const [habit, setHabit] = useState('');
  
  const [trackingHabits,setTrackingHabits] = useState([]);

  const addHabit = (habit)=>{
    if(habit.trim() != ""){
      setTrackingHabits([...trackingHabits,{id:uuidv4(),value:habit}]);
      {console.log(trackingHabits)}
    }
  }

    const deleteHabit = (habitInfo)=>{
      let updatedHabitsList = trackingHabits.filter((el)=>el.id!=habitInfo.id);
      setTrackingHabits(updatedHabitsList);
  }



  return (
    <div className = "font-deca flex flex-col gap-4 items-center">
      <h1 className="text-4xl text-sky-950">Habit Tracker</h1>
      <SearchBar habit={habit} setHabit={setHabit} addHabit={addHabit}/>
      {trackingHabits.map((habitComponent)=>{
        return <Habit key={habitComponent.id} habitInfo = {habitComponent} deleteHabit={deleteHabit}/>
      })}
      {console.log(trackingHabits)}
    </div>
    
  )
}

export default App
