import Timer from "./Timer"
import Clock from 'react-live-clock';
import Button from 'react-bootstrap/Button';

function Filling1050Normal() {
    
    return(
        <div class="container home">
            <h1>Cage/Fill</h1>
            <Button class="btn btn-primary" href="/filling1050-cage2fill2" role="button">Switch to Cage 2 Fill 2</Button>
            <Timer/>
            <div>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
            </div>
            
        </div>
        
    ) }
export default Filling1050Normal