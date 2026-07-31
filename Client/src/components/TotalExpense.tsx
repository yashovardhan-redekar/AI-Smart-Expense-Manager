import type { Expense } from "../types/Expense";

type TotalExpenseProps = {
  expenses: Expense[];
};

function TotalExpense({
  expenses,
}: TotalExpenseProps) {

  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <>
      <hr />

      <h2>Total Expense : ₹ {total}</h2>

      <h3>
        Number of Expenses : {expenses.length}
      </h3>
    </>
  );
}

export default TotalExpense;