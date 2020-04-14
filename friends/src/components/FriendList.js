import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => setFriends(res.data))
      .catch(err => console.error(err));
  }, [friends]);

  const renderFriends = () => {
    return friends.map(friend => <Friend data={friend} />);
  };

  return (
    <div>
      <FriendForm />
      Friendlist: {renderFriends()}
    </div>
  );
};

export default FriendList;