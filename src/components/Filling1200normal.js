import Timer1200normal from "./Timer1200normal"
import Clock from 'react-live-clock';
import Button from 'react-bootstrap/Button';
import React from 'react';

const Filling1125Normal= props => {

    var heroClass = "home"


    if (props.currentUser.boy === true) {
        heroClass = "home"
    }
    if (props.currentUser.girl === true) {
        heroClass = "princess"
    }
    if (props.currentUser.luigi === true) {
        heroClass = "luigi"
    }
    
    return(
        <div className={heroClass}>
            <h1>Cage/Fill</h1>
            <Timer1200normal hero = {props}/>
            <div>
            <Clock format={'h:mm:ssa'} ticking={true} timezone={'US/Eastern'} />
            </div>
            <Button className="btn btn-danger" href="/" role="button">Home</Button>
          
            
        </div>
        
    ) }
export default Filling1125Normal