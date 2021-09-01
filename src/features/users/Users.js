import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.users);
  const usersCount = useSelector((state) => state.users.length);
  return (
    <div>
      <ul>
        Users!
        {users.map((user, index) => (
          <li key={index}>
            {user.username} / {user.hometown}
          </li>
        ))}
        Total Users: {usersCount}
      </ul>
    </div>
  );
}

export default Users;
