import React from "react";

import AppNav from "../nav/Nav";
import UserPost from "./UserPost";

function Feed() {
  return (
    <div className="feed">
      <AppNav />
      <UserPost />
    </div>
  );
}

export default Feed;
