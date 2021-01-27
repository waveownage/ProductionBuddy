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
            </div>
        </div>
        
    ) }

export default GoalMenu