import React from "react";
import moment from "moment";

function ProfilePosts({ text, date, image }) {
  return (
    <div className="profile-posts">
      <h1>{moment(date).format("LLL")}</h1>
      <h1>{text}</h1>
      {image && <img src={`/content/${image}`} />}
    </div>
  );
}

export default ProfilePosts;
