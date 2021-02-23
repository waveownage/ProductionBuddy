import Timer from "./Timer"
import Clock from 'react-live-clock';
import Button from 'react-bootstrap/Button';
import React from 'react';

const Filling1050Normal = props => {

    
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
            <Button className="btn btn-primary" href="/filling1050-cage2fill2" role="button">Switch to Cage 2 Fill 2</Button>
            <Timer hero = {props}/>
            <div>
            <Clock format={'h:mm:ssa'} ticking={true} timezone={'US/Eastern'} />
            </div>
            <Button className="btn btn-danger" href="/" role="button">Home</Button>
          
            
        </div>
        
    ) }
export default Filling1050Normal