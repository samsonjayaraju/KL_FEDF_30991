import React, { useState } from "react";

const url = "https://reqres.in/api/users";

const ReqresAPIExample = () => {
  const [users, setUsers] = useState([]);

  const urlhandler = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1", 
      },
    });

    const data = await response.json();
    setUsers(data.data); 
    console.log(data.data);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Reqres API Demo</h1>
      <button className="btn btn-danger mb-3" onClick={urlhandler}>
        Fetch Data
      </button>

      <table className="table table-bordered">
        <thead className="table-dark" >
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <img
                  src={user.avatar}
                  alt={user.first_name}
                  width="50"
                  className="rounded-circle"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReqresAPIExample;
