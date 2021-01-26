import Timer1050Cage2Fill2 from "./Timer1050Cage2Fill2"
import Clock from 'react-live-clock';
import Button from 'react-bootstrap/Button';

function Filling1050Cage2Fill2() {
    
    return(
        <div class="container home">
            <h1>Cage 2 Fill 2</h1>
            <Button class="btn btn-primary" href="/filling1050-normal" role="button">Switch to Cage/Fill</Button>
            <Timer1050Cage2Fill2/>
            <div>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
            </div>
            <Button class="btn btn-danger danger" href="/" role="button">Home</Button>

            
            
        </div>
        
    ) }
export default Filling1050Cage2Fill2