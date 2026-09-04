import { useState } from "react";
import type { Expense } from "../types/Expense";
import "./ExpenseForm.css";

type ExpenseFormProps = {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  editingIndex: number | null;
  setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>;
  editingExpense: Expense | null;
  setEditingExpense: React.Dispatch<React.SetStateAction<Expense | null>>;
};

function ExpenseForm({
  expenses,
  setExpenses,
  editingIndex,
  setEditingIndex,
  editingExpense,
  setEditingExpense,
}: ExpenseFormProps) {

  const [title, setTitle] = useState(editingExpense?.title ?? "");
  const [amount, setAmount] = useState(
    editingExpense ? String(editingExpense.amount) : ""
  );
  const [category, setCategory] = useState(
    editingExpense?.category ?? ""
  );
  const [date, setDate] = useState(editingExpense?.date ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !amount || !category || !date) {
      alert("Please fill all fields");
      return;
    }

    const newExpense: Expense = {
      title,
      amount: Number(amount),
      category,
      date,
    };

    // EDIT EXISTING EXPENSE
    if (editingIndex !== null) {

      const updatedExpenses = [...expenses];

      updatedExpenses[editingIndex] = newExpense;

      setExpenses(updatedExpenses);

      setEditingIndex(null);
      setEditingExpense(null);

    } else {

      // ADD NEW EXPENSE
      setExpenses([...expenses, newExpense]);
    }

    // Clear form
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="form-container"
>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />
      <br />

      <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="">Select Category</option>
  <option value="Food">Food</option>
  <option value="Travel">Travel</option>
  <option value="Shopping">Shopping</option>
  <option value="Bills">Bills</option>
  <option value="Entertainment">Entertainment</option>
  <option value="Health">Health</option>
  <option value="Education">Education</option>
  <option value="Other">Other</option>
</select>
      <br />
      <br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br />
      <br />

      <button
  type="submit"
  className="form-btn"
>
        {editingIndex !== null ? "Update Expense" : "Add Expense"}
      </button>

      {editingIndex !== null && (
        <button
  type="button"
  className="cancel-btn"
          onClick={() => {
            setEditingIndex(null);
            setEditingExpense(null);

            setTitle("");
            setAmount("");
            setCategory("");
            setDate("");
          }}
        >
          Cancel
        </button>
      )}

    </form>
  );
}

export default ExpenseForm;