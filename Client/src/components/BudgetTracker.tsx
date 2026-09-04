import type { Expense } from "../types/Expense";
import "./BudgetTracker.css";

type BudgetTrackerProps = {
  expenses: Expense[];
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
};

function BudgetTracker({
  expenses,
  budget,
  setBudget,
}: BudgetTrackerProps) {
  // Calculate total expenses
  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  // Calculate remaining budget
  const remaining = budget - totalExpense;

  // Calculate percentage of budget used
  const percentage =
    budget > 0
      ? Math.min((totalExpense / budget) * 100, 100)
      : 0;

  // Handle budget input
  const handleBudgetChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBudget(Number(e.target.value));
  };

  return (
    <div className="budget-container">
      <h2>💰 Monthly Budget</h2>

      <input
        type="number"
        placeholder="Enter your monthly budget"
        value={budget || ""}
        onChange={handleBudgetChange}
      />

      <p>
        Budget: ₹{budget}
      </p>

      {/* Progress Bar */}
      <div className="budget-progress">
        <div
          className="budget-progress-bar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p>
        {percentage.toFixed(1)}% of your budget used
      </p>

      <p>
        Spent: ₹{totalExpense}
      </p>

      <p>
        Remaining: ₹{remaining}
      </p>

      {/* Budget exceeded */}
      {budget > 0 && remaining < 0 && (
        <p>
          ⚠️ You have exceeded your budget!
        </p>
      )}

      {/* Close to budget */}
      {budget > 0 &&
        remaining >= 0 &&
        remaining <= budget * 0.2 && (
          <p>
            ⚠️ You are close to your budget limit!
          </p>
        )}

      {/* Within budget */}
      {budget > 0 && remaining > budget * 0.2 && (
        <p>
          ✅ You are within your budget.
        </p>
      )}
    </div>
  );
}

export default BudgetTracker;