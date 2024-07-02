import React from "react";

function EventList({events, selectedDate}){
    const filteredEvents = events.filter(events => events.date === selectedDate)
    return (
        <div>
            <h3>
                Events On: {selectedDate}
            </h3>
            <ul>
                {filteredEvents.map((events, index)=>
                <li key={index}> 
                {events.name} : {events.description} 
                </li>
                )}
            </ul>
        </div>
    );

}


export default EventList; 