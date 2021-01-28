import Timer from "./Timer"
import Clock from 'react-live-clock';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const Filling1050Normal = props => {

    
    var heroClass = "home"
    var hero = "boy"

    if (props.currentUser.boy === true) {
        heroClass = "home"
        hero = "boy"
    }
    else {
        heroClass = "princess"
        hero = "girl"
    }

    console.log(props.currentUser.boy)
    
    return(
        <div class={heroClass}>
            <h1>Cage/Fill</h1>
            <Button className="btn btn-primary" href="/filling1050-cage2fill2" role="button">Switch to Cage 2 Fill 2</Button>
            <Timer>hero={hero}</Timer>
            <div>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
            </div>
            <Button className="btn btn-danger" href="/" role="button">Home</Button>
          
            
        </div>
        
    ) }
export default Filling1050Normal