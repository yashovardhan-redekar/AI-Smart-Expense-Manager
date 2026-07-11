import { useState } from "react";

type Expense = {
  title: string;
  amount: number;
};

function ExpenseTracker() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = () => {
    if (title.trim() === "" || amount === "") return;

    const newExpense: Expense = {
      title: title,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);

    setTitle("");
    setAmount("");
  };

  const deleteExpense = (indexToDelete: number) => {
    setExpenses(
      expenses.filter((_, index) => index !== indexToDelete)
    );
  };

  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Enter Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addExpense}>
        Add Expense
      </button>

      <hr />

      {expenses.length === 0 ? (
        <p>No expenses added.</p>
      ) : (
        expenses.map((expense, index) => (
          <p key={index}>
            {index + 1}. {expense.title} - ₹{expense.amount}

            <button
              onClick={() => deleteExpense(index)}
            >
              Delete
            </button>
          </p>
        ))
      )}

      <hr />

      <h3>Total: ₹{total}</h3>
    </>
  );
}

export default ExpenseTracker;