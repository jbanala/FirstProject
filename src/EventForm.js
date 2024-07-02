import React, {useState} from "react";


function EventForm({onAddEvent, selectedDate}){
//when funciton keyword is used then its not returning a specific type 
//returning a functionality on the website 
    const [name, setName] = useState("");
    //"" or '' for string variables 
    
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        //e(event) is a param  being passed 
        e.preventDefault();
        
        if(!selectedDate){
            //when not the selected date
            alert("Please select a date first!"); 
            return; 
        }

        onAddEvent({date: selectedDate, name, description});
        setName('');
        //name is empty for now 
        setDescription("");
        //dont have to intialize variables with types before hand 

    }; 


    return(
        <form onSubmit={handleSubmit}>

            <input
                type ="text"
                value ={name}
                placeHolder = "Event Name"
                onChange = {(e) => setName(e.target.value)}
                required
            ></input>

            <input
                type ="text"
                value ={description}
                placeHolder = "Event Description"
                onChange = {(e) => setDescription(e.target.value)}
                required
            ></input>

            <button type="submit">Add Event</button>


        </form>

       
    );
}

export default EventForm; 
//can be used by other files 