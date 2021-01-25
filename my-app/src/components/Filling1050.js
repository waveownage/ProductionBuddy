import Timer from "./Timer"
import Clock from 'react-live-clock';

function filling1050() {
    
    return(
        <div class="container home">
            <img src="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif" alt="loading..." />
            <Timer/>
            <div>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
            </div>
            
        </div>
        
    ) }
export default filling1050