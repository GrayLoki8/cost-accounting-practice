import "./CostForm.css"
import {useState} from "react";
const CostForm=(props)=>{
    const [inputDescription,setInputDescription]=useState('');
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
        setInputDescription(event.target.value);
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
        console.log("lok");
        const costData={
            description:inputDescription,
            amount:inputAmount,
            date:new Date(inputDate)
        };
        console.log(event);
        console.log(costData);

        props.onSaveCostData(costData);
        setInputDescription('');
        setInputAmount('');
        setInputDate('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
            <div className="new-cost__control">
                <label >Название</label>
                <input type="text" onChange={nameChangeHandler} value={inputDescription}/>
            </div>
                <div className="new-cost__control">
                    <label >Сумма</label>
                    <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler} value={inputAmount} />
                </div>
                <div className="new-cost__control">
                    <label >Дата</label>
                    <input type="date" min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler} value={inputDate} />
                </div>
                <div className="new-cost__actions">
                    <button type="submit" >Добавить Расход</button>
                    <button type="button" onClick={props.onCancel} >Отмена</button>
                </div>
            </div>
        </form>
    )
}
export default CostForm