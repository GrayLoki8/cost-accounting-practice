import "./CostForm.css"
import {useState} from "react";
const CostForm=(props)=>{
    const [inputName,setInputName]=useState('');
    const [inputAmount,setInputAmount]=useState('');
    const [inputDate,setInputDate]=useState('');
  /*const [userInput,setUserInput]= useState({
        name:'',
        amount:'',
        date:''
    });*/
    const nameChangeHandler=(event)=>{
     /*   setUserInput({
            ...userInput,
            name:event.target.value

        });*/
     /*   setUserInput((previousState)=>{
            return {
                ...previousState,
                name:event.target.value

            }
        });*/
        setInputName(event.target.value);
    };
    const amountChangeHandler=(event)=>{
       /* setUserInput((previousState)=>{
            return {
                ...previousState,
                amount:event.target.value

            }
        });*/
        setInputAmount(event.target.value);

    };
    const dateChangeHandler=(event)=>{
    /*    setUserInput((previousState)=>{
            return {
                ...previousState,
                date:event.target.value

            }
        });*/
        setInputDate(event.target.value);

    };
    const submitHandler=(event)=>{
        event.preventDefault();
        const costData={
            name:inputName,
            amount:inputAmount,
            date:new Date(inputDate)
        };
        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    };
    return (
        <form onSubmit="">
            <div className="new-cost__controls">
            <div className="new-cost__control">
                <label >Название</label>
                <input type="text" onChange={nameChangeHandler} value={inputName}/>
            </div>
                <div className="new-cost__control">
                    <label >Сумма</label>
                    <input type="number" min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label >Дата</label>
                    <input type="date" min='2019-01-01' step='2022-12-31' value={inputDate} onChange={dateChangeHandler}/>
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Добавить Расход</button>
                </div>
            </div>
        </form>
    )
}
export default CostForm