import Timer1050Cage2Fill2 from "./Timer1050Cage2Fill2"
import Clock from 'react-live-clock';
import Button from 'react-bootstrap/Button';
import React from 'react';

const Filling1050Cage2Fill2 = props => {
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
            <h1>Cage 2 Fill 2</h1>
            <Button className="btn btn-primary" href="/filling1050-normal" role="button">Switch to Cage/Fill</Button>
            <Timer1050Cage2Fill2 hero = {hero}/>
            <div>
            <Clock format={'h:mm:ssa'} ticking={true} timezone={'US/Eastern'} />
            </div>
            <Button className="btn btn-danger danger" href="/" role="button">Home</Button>

            
            
        </div>
        
    ) }
export default Filling1050Cage2Fill2