import {Component} from "react";
import Buttons from "./Buttons/Buttons";
import Span from "./Counter-value/Counter-value";
import '../Counter/Counter.css'

class Counter extends Component{

static defaultProps = {
    initialValue: 0
};

// static propType = {
// initialValue: this.propType.string.isRequired
// };

state = {
    value: 0
};


increasingValue = () => {
    console.log("Increasing by 1"); 
    this.setState((prevState) => {
        return{
            value: prevState.value + 1
        }
        
    }) 
};

decreasingValue = () => {
    console.log("Decreasing by 1");
// console.log(this.state.value);
    if(this.state.value <= 0){
        window.alert("The number can't be negative")
    } else {
       this.setState((prevState) => {
        return{
            value: prevState.value - 1
        }
    }) 
    };
    
    
};


// startTime = () => {
//    this.intervalId = setInterval(() => {
//         // console.log(timer)
//         if (this.state.value === 4){
//             clearInterval(this.intervalId);
//             console.log("💋");
//         }
//        this.setState((prevState) => {
//             return{
//                 value: prevState.value + 1
//             }
           
//         })
//     }, 1000)
// };




render(){
return(

<div className="Counter_controls">

<Span
counterValue = {this.state.value}
/>

<Buttons 
        onIncreasingValue = {this.increasingValue}
        onDecreasingValue = {this.decreasingValue}
/>

</div>
)
    

}

}

export default Counter;

