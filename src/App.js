import { useState } from "react";
import "./App.css";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers((prevState) => [
      ...prevState,
      {
        username: name,
        age,
        id: Math.trunc(Math.random() * 1000),
      },
    ]);
  };

  return (
    <section>
      <AddUser onAdd={addUserHandler} />
      <UserList users={users} />
    </section>
  );
}

export default App;
