import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";

const Friend = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = id => {
    axiosWithAuth()
      .delete(`/api/friends/${id}`)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  const renderFriend = () => {
    return (
      <div key={data.id}>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
        <p>Email: {data.email}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => handleDelete(data.id)}>Delete</button>
      </div>
    );
  };

  const renderEditForm = () => {
    return <FriendForm data={data} setIsEditing={setIsEditing} />;
  };

  return <div>{isEditing ? renderEditForm() : renderFriend()}</div>;
};

export default Friend;