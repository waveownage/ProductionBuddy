import '../App.css';
import Button from 'react-bootstrap/Button';

function GoalMenu() {
    return(
        <div class="home">
            <div>
                <h1>Goal</h1>
                <Button class="btn btn-primary" href="/filling1050-normal" role="button">1050</Button>
                <Button class="btn btn-primary" href="/filling1125-normal" role="button">1125</Button>
                <Button class="btn btn-primary" href="/filling1200-normal" role="button">1200</Button>
                <Button class="btn btn-primary" href="/fillingcustom" role="button">Custom</Button>
                <Button class="btn btn-primary" href="/fillingonly" role="button">Filling Only</Button>
                <Button class="btn btn-primary" href="/cagingthirdshift" role="button">Third Shift Cage</Button>
            </div>
        </div>
        
    ) }

export default GoalMenu