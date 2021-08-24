import "./App.css";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState();
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
      <>
      <body>
      <header>
        <h1>Users</h1>
        <button onClick={getUsers}>
          <p>Get Users</p>
        </button>
      </header>
      <div className="users">
        {users?.map((current, index) => {
          return (
            <div className="card" key={index}>
              <img src={current.avatar} alt="..." />
                <h3>{current.first_name} {current.last_name}</h3>
                <p>{current.email}</p>
            </div>
          );
        })}
      </div>
      </body>
    </>
  );
}
export default App;