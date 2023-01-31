import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";

export default function ExpenseItem(props) {
    
    const expenseData = props.expensesData;
    
    return(
        <li>
            <Card className="expense-item">
                <ExpenseDate date={expenseData.date}/>
                <div className="expense-item__description">
                    <h2>{expenseData.title}</h2>
                    <div className="expense-item__price">${expenseData.amount}</div>
                </div>
            </Card>
        </li>
    );
}