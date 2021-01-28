import Timer1125normal from "./Timer1125normal"
import Clock from 'react-live-clock';
import Button from 'react-bootstrap/Button';
import React from 'react';

const Filling1125Normal = props => {

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
            <Timer1125normal hero = {hero}/>
            <div>
            <Clock format={'h:mm:ssa'} ticking={true} timezone={'US/Eastern'} />
            </div>
            <Button className="btn btn-danger" href="/" role="button">Home</Button>
          
            
        </div>
        
    ) }
export default Filling1125Normal