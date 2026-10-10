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

  // Get current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Calculate this month's expense
  const thisMonthExpense = expenses
    .filter((expense) => {
      const expenseDate = new Date(expense.date);

      return (
        expenseDate.getMonth() === currentMonth &&
        expenseDate.getFullYear() === currentYear
      );
    })
    .reduce((sum, expense) => sum + expense.amount, 0);

  // Count unique categories
  const categoriesUsed = new Set(
    expenses.map((expense) => expense.category.trim().toLowerCase())
  ).size;

  return (
    <div className="dashboard">
      <div className="card">
        <h3>💰 Total Expense</h3>
        <p>₹{totalExpense.toFixed(2)}</p>
      </div>

      <div className="card">
        <h3>📄 Transactions</h3>
        <p>{totalTransactions}</p>
      </div>

      <div className="card">
        <h3>💸 Highest Expense</h3>
        <p>₹{highestExpense.toFixed(2)}</p>
      </div>

      <div className="card">
        <h3>📊 Average Expense</h3>
        <p>₹{averageExpense.toFixed(2)}</p>
      </div>

      <div className="card">
        <h3>📅 This Month</h3>
        <p>₹{thisMonthExpense.toFixed(2)}</p>
      </div>

      <div className="card">
        <h3>🗂️ Categories</h3>
        <p>{categoriesUsed}</p>
      </div>
    </div>
  );
}

export default Dashboard;