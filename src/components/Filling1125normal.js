import Timer1125normal from "./Timer1125normal"
import Clock from 'react-live-clock';
import Button from 'react-bootstrap/Button';

function Filling1125Normal() {
    
    return(
        <div class="home">
            <h1>Cage/Fill</h1>
            <Timer1125normal/>
            <div>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
            </div>
            <Button className="btn btn-danger" href="/" role="button">Home</Button>
          
            
        </div>
        
    ) }
export default Filling1125Normal