function Buttons({onIncreasingValue, onDecreasingValue}){
    return(
       <>
       <button type="button" className="Counter_increment" onClick={onIncreasingValue}>
    Increase by 1
</button>

<button type="button" className="Counter_Decrement" onClick={onDecreasingValue}>
    Decrease by 1
</button>
       </> 
    )
};

export default Buttons;