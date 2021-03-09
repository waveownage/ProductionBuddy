import Timer1125normal from "./Timer1125normal"
import Clock from 'react-live-clock';
import Button from 'react-bootstrap/Button';
import React from 'react';

const Filling1125Normal = props => {

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
    if (props.currentUser.football === true) {
        heroClass = "football"
    }
    
    return(
        <div className={heroClass}>
            <h1>Cage/Fill</h1>
            <Timer1125normal hero = {props}/>
            <div>
            <Clock format={'h:mm:ssa'} ticking={true} timezone={'US/Eastern'} />
            </div>
            <Button className="btn btn-danger" href="/" role="button">Home</Button>
          
            
        </div>
        
    ) }
export default Filling1125Normal