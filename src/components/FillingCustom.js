import Timer from "./Timer"
import Clock from 'react-live-clock';
import React from 'react';

const Filling1050Normal = props => {

    
    var heroClass = "home"
    var hero = true

    if (props.currentUser.boy === true) {
        heroClass = "home"
        hero = true
    }
    else {
        heroClass = "princess"
        hero = false
    }

    
    
    return(
        <div className={heroClass}>
            <h1>Cage/Fill</h1>
            <Timer hero = {hero}/>
            <div>
            <Clock format={'h:mm:ssa'} ticking={true} timezone={'US/Eastern'} />
            </div>
            <Button className="btn btn-danger" href="/" role="button">Home</Button>
          
            
        </div>
        
    ) }
export default Filling1050Normal