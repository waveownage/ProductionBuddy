import Timer from "./Timer"
import Clock from 'react-live-clock';

function filling1050() {
    
    return(
        <div class="container home">
            <Timer/>
            <div>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
            </div>
            
        </div>
        
    ) }
export default filling1050