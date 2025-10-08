import React, { useState } from 'react';

const url = "https://jsonplaceholder.typicode.com/users";

const FetchAPIExample = () => {
  const [users, setUsers] = useState([]);

  const urlhandler = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Fetch error:", error));
  };

  return (
    <>
      <h1>Fetch API Demo</h1>
      <button className="btn btn-danger" type='button' onClick={urlhandler}>
        Fetch Data
      </button>

      {/* <div>
        {JSON.stringify(users, null, 2)}
      </div> */}

      <table className='table table-striped'>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FetchAPIExample;
