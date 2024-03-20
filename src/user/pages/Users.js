import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
    id: 1,
    name: "Fernando Nogueira",
    image: "https://images.squarespace-cdn.com/content/v1/5f90ff6a5f71bf45a0c0256c/1606871553343-3NUCEHB5S1N3VAEVSLGT/autism+bubble.jpg?format=500w",
    places: 3
  }
];
  return <UsersList items={USERS} />;
};

export default Users;
