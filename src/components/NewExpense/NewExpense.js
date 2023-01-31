import "./NewExpense.css";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";

export default function NewExpense(props) {
    
    function handleOnSaveData (saveExpenseData) {
        const expenseData = {
            ...saveExpenseData,
            id: Math.random().toString() 
        };
        props.onAddExpense(expenseData);
    }
    
    return (
        <div className="new-expense">
            <NewExpenseForm onSaveData={handleOnSaveData}/>
            <small>Dates of new expenses added might the off by a day due to limitations of the JavaScript Date object related to timezones.</small>
        </div>
    );
}