import type { Expense } from "../types/Expense";
import "./Dashboard.css";

type DashboardProps = {
  expenses: Expense[];
};

function Dashboard({ expenses }: DashboardProps) {
  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const totalTransactions = expenses.length;

  const highestExpense =
    expenses.length > 0
      ? Math.max(...expenses.map((expense) => expense.amount))
      : 0;

  const averageExpense =
    expenses.length > 0
      ? totalExpense / expenses.length
      : 0;

  return (
    <div
     className="dashboard"
    >
      <div className="card">
        <h3>💰 Total Expense</h3>
        <p>₹{totalExpense}</p>
      </div>

      
       <div className="card">
      
        <h3>📄 Transactions</h3>
        <p>{totalTransactions}</p>
      </div>

    
        <div className="card">

        <h3>💸 Highest Expense</h3>
        <p>₹{highestExpense}</p>
      </div>

      
        <div className="card">
      
        <h3>📊 Average Expense</h3>
        <p>₹{averageExpense.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Dashboard;