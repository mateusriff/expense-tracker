import { useState } from "react";
import {ExpensesContainer, NewExpense, Footer} from "./components";

const dummyExpenseData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expensesData, setExpenseData] = useState(dummyExpenseData);

  function addExpenseHandler (expense) {
    setExpenseData((prevExpenseData) => {
      return [expense, ...prevExpenseData];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesContainer 
      expensesData={expensesData}
      />
      <Footer />
    </div>
  );
}

export default App;
