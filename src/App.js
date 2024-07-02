import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';

function App() {

  const [events, setEvents] = useState([]); 
  //array type
  
  const [selectedDate, setSelectedDate] = useState([""]); 
  //string type 

  const addEvent=(newEvent) =>{
    setEvents([...events, newEvent])
      //... is for adding to the end of stuff 

  }; 
  const handleDateChange = (e) => {
    // e means event, the even is that the date was changed 
    setSelectedDate(e.target.value); 
  }

  return (

    <div className='App'>
      <h1>My First React App</h1>
      <input 
        type='date' 
        value={selectedDate} 
        onChange={handleDateChange} 
        required
      >
      </input>

      <EventForm 
      onAddEvent={addEvent} 
      selectedDate={selectedDate}

      />

      <EventList
        events = {events} 
        selectedDate={selectedDate}
      />

    </div>

  );
}

export default App;
