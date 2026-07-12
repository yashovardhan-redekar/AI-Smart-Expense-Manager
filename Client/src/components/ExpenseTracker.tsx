import { useEffect, useState } from "react";

type Expense = {
  title: string;
  amount: number;
  category: string;
  date: string;
};

function ExpenseTracker() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Load expenses from localStorage
  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");

    if (savedExpenses) {
      const parsedExpenses: Expense[] =
        JSON.parse(savedExpenses);

      setExpenses(parsedExpenses);
    }
  }, []);

  // Save expenses to localStorage
  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  const addExpense = () => {
    if (
      title.trim() === "" ||
      amount === "" ||
      category === "" ||
      date === ""
    ) {
      alert("Please fill all fields!");
      return;
    }

    const newExpense: Expense = {
      title,
      amount: Number(amount),
      category,
      date,
    };

    // Edit existing expense
    if (editIndex !== null) {
      const updatedExpenses = [...expenses];
      updatedExpenses[editIndex] = newExpense;

      setExpenses(updatedExpenses);
      setEditIndex(null);
    } else {
      // Add new expense
      setExpenses([...expenses, newExpense]);
    }

    // Clear inputs
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  const editExpense = (index: number) => {
    const expense = expenses[index];

    setTitle(expense.title);
    setAmount(expense.amount.toString());
    setCategory(expense.category);
    setDate(expense.date);

    setEditIndex(index);
  };

  const deleteExpense = (
    indexToDelete: number
  ) => {
    setExpenses(
      expenses.filter(
        (_, index) => index !== indexToDelete
      )
    );

    // If deleting the item being edited
    if (editIndex === indexToDelete) {
      setEditIndex(null);
      setTitle("");
      setAmount("");
      setCategory("");
      setDate("");
    }
  };

  const clearExpenses = () => {
    setExpenses([]);
    setEditIndex(null);
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");

    localStorage.removeItem("expenses");
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
        placeholder="Enter Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
      />

      <br />
      <br />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="">
          Select Category
        </option>
        <option value="Food">Food</option>
        <option value="Travel">
          Travel
        </option>
        <option value="Shopping">
          Shopping
        </option>
        <option value="Education">
          Education
        </option>
        <option value="Other">
          Other
        </option>
      </select>

      <br />
      <br />

      <input
        type="date"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={addExpense}>
        {editIndex !== null
          ? "Update Expense"
          : "Add Expense"}
      </button>

      <button onClick={clearExpenses}>
        Clear All
      </button>

      <hr />

      {expenses.length === 0 ? (
        <p>No expenses added.</p>
      ) : (
        expenses.map((expense, index) => (
          <div key={index}>
            <p>
              {index + 1}. {expense.title} - ₹
              {expense.amount} -{" "}
              {expense.category} -{" "}
              {expense.date}
            </p>

            <button
              onClick={() =>
                editExpense(index)
              }
            >
              Edit
            </button>

            <button
              onClick={() =>
                deleteExpense(index)
              }
            >
              Delete
            </button>

            <br />
            <br />
          </div>
        ))
      )}

      <hr />

      <h3>Total: ₹{total}</h3>
      <h3>
        Number of Expenses:{" "}
        {expenses.length}
      </h3>
    </>
  );
}

export default ExpenseTracker;