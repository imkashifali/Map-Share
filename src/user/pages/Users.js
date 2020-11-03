import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "uid",
      name: "ali",
      places: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg/1200px-2015_Toyota_Fortuner_%28New_Zealand%29.jpg",
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;
