import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
function Assignment4() {
    function sayHello() {
        alert("Hello");
    }

    return (
        <div>
            <h1>Assignment 4</h1>
            <EventObject/>
            <PassingFunctions theFunction={sayHello}/>
            <PassingDataOnEvent/>
            <ClickEvent/>
            <Add a={1} b={2} />
        </div>
    );
}
export default Assignment4;