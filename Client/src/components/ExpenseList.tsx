import type { Expense } from "../types/Expense";
import ExpenseItem from "./ExpenseItem";

type ExpenseListProps = {
  expenses: Expense[];
  searchText: string;
  deleteExpense: (index: number) => void;
  editExpense: (index: number) => void;
};

function ExpenseList({
  expenses,
  searchText,
  deleteExpense,
  editExpense,
}: ExpenseListProps) {
  const filteredExpenses = expenses.filter((expense) =>
    expense.title
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <>
      <h2>Expense List</h2>

      {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            expense={expense}
            index={index}
            deleteExpense={deleteExpense}
            editExpense={editExpense}
          />
        ))
      )}
    </>
  );
}

export default ExpenseList;