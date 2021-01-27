import '../App.css';
import Button from 'react-bootstrap/Button';

function Home() {
    return(
        <div class="home">
            <div>
                <h1>Production Buddy</h1>
                <Button class="btn btn-primary" href="/goalmenu" role="button">Start</Button>
            </div>
        </div>
        
    ) }

export default Home