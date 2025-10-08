import React, { useState } from 'react';

const url = "https://jsonplaceholder.typicode.com/todos";

const TodoFetchAPIExample = () => {
  const [users, setUsers] = useState([]);

  const urlhandler = async () => {
    const response = await fetch(url)
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data))
    //   .catch((error) => console.error("Fetch error:", error));
//   };

  return (
    <>
      <h1>Fetch API Demo</h1>
      <button className="btn btn-danger" type='button' onClick={urlhandler}>
        Fetch Data
      </button>

      {/* <div>
        {JSON.stringify(users, null, 2)}
      </div> */}

      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <td>UserId</td>
            <td>ID</td>
            <td>Title</td>
            <td>Task</td>
            {/* <td>Street</td>
            <td>Geo Location</td> */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.userId}</td>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.completed.toString()}</td>
              {/* <td>{user.address.street}</td>
              <td>
                {user.address.geo.lat}, {user.address.geo.lng}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoFetchAPIExample;
