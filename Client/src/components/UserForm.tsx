import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const [submittedName, setSubmittedName] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmittedName(name);
    setSubmittedCity(city);
  };

  return (
    <>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      <h3>Submitted Details</h3>
      <p>Name: {submittedName}</p>
      <p>City: {submittedCity}</p>
    </>
  );
}

export default UserForm;