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
    if (props.currentUser.football === true) {
        heroClass = "football"
    }


    
    
    return(
        <div className={heroClass}>
            <h1>Goal:3000</h1>
            <Timer hero = {props}/>
            <div>
            <Clock format={'h:mm:ssa'} ticking={true} timezone={'US/Eastern'} />
            </div>
            <Button className="btn btn-danger" href="/" role="button">Home</Button>
          
            
        </div>
        
    ) }
export default Filling1050Normal