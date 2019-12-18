import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendForm = props => {
  const [name, setName] = useState(props.data ? props.data.name : "");
  const [age, setAge] = useState(props.data ? props.data.age : "");
  const [email, setEmail] = useState(props.data ? props.data.email : "");

  const handleSubmit = e => {
    e.preventDefault();
    if (props.data) {
      axiosWithAuth()
        .put(`/api/friends/${props.data.id}`, { name, age, email })
        .then(res => props.setIsEditing(false))
        .catch(err => console.error(err));
    } else {
      axiosWithAuth()
        .post("/api/friends", { name, age, email })
        .then(res => console.log(res))
        .catch(err => console.error(err));

      setName("");
      setAge("");
      setEmail("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          name="age"
          value={age}
          placeholder="Age"
          onChange={e => setAge(e.target.value)}
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">
          {props.data ? "Edit Friend" : "Add Friend"}
        </button>
      </form>
    </div>
  );
};

export default FriendForm;