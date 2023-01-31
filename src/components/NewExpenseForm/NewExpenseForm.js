import { useState } from "react";
import "./NewExpenseForm.css";

export default function NewExpenseForm(props) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    function handleOnChange (event) {
        const {value, name} = event.target;

        if(name === "title") {
            setTitle(value);
        } else if (name === "amount") {
            setAmount(value);
        } else if (name === "date") {
            setDate(value);
        }
    }

    function submitHandler (event) {
        event.preventDefault();

        const expenseData={
            title: title,
            amount: +amount,
            date:new Date(date)
        }

        console.log(date);
        console.log(expenseData.date);

        props.onSaveData(expenseData);

        setTitle("");
        setAmount("");
        setDate("");
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">    
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        name="title"
                        value={title}
                        onChange={handleOnChange} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        name="amount"
                        value={amount}
                        onChange={handleOnChange} 
                        mi="0.01" 
                        step="0.01"
                        autoComplete="off"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        name="date"
                        value={date}
                        onChange={handleOnChange} 
                        min="2020-01-01" 
                        max="2024-01-01" 
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}