import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [{
    id: 1,
    name: "Fernando Nogueira",
    image: 'src/images/cute-cartoon-bear-illustration-free-vector.jpg',
    places: 3
  }];
  return <UsersList items={USERS} />;
};

export default Users;
