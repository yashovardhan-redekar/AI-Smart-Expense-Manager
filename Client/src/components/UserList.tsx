import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Initial API request
  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);
      } catch {
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  // Retry API request
  const fetchUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);
    } catch {
      setError("Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>User List</h2>

      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <>
          <p>⚠️ {error}</p>

          <button onClick={fetchUsers}>
            Retry
          </button>
        </>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </>
  );
}

export default UserList;