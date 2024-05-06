import ClockHeading from "./BharatClock/ClockHeading";
import ClockSlogan from "./BharatClock/ClockSlogan";
import CurrentTime from "./BharatClock/CurrentTime";

function ClockApp(){
    return(
        <center>
            <ClockHeading/>
            <ClockSlogan/>
            <CurrentTime/>
        </center>
    )
}

export default ClockApp;