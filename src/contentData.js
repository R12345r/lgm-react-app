import React, { useState } from "react";

const ContentData = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true); // Set isLoading to true when the button is clicked

    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);

    setIsLoading(false); // Set isLoading to false after fetching the users
  };

  return (
    <>
      <div className="container">
        <nav>
          <a>
            <li>Home</li>
          </a>
          <a>
            <li>Contacts</li>
          </a>
          <a>
            <button onClick={getUsers}>Get Users</button>
          </a>
        </nav>
      </div>
      {isLoading ? (
        <p>Loading users...</p>
      ) : (
        users.map(({ id, avatar, first_name, last_name, email }) => (
          <main className="column" key={id}>
            <div className="card">
              <img src={avatar} alt="Sample photo" />
              <div className="text">
                <h3>{first_name}</h3>
                <h3>{last_name}</h3>
                <p>{email}</p>
              </div>
            </div>
          </main>
        ))
      )}
    </>
  );
};

export default ContentData;
