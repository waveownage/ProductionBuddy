import TimerThirdShiftCage from "./TimerThirdShiftCage"
import Clock from 'react-live-clock';
import Button from 'react-bootstrap/Button';
import React from 'react';

const CagingThirdShift = props => {

    
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
            <h1>Caging</h1>
            <TimerThirdShiftCage hero = {props}/>
            <div>
            <Clock format={'h:mm:ssa'} ticking={true} timezone={'US/Eastern'} />
            </div>
            <Button className="btn btn-danger" href="/" role="button">Home</Button>
          
            
        </div>
        
    ) }
export default CagingThirdShift