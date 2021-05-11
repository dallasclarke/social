import React from "react";
import moment from "moment";


function ProfilePosts({ text, date, image }) {
  return (
    <div className="profile-posts">
      <h1>{text}</h1>
      {image && <img src={`data:image/png;base64,${image}`} className="post-image" />}
      <h1>{moment(date).format("LLL")}</h1>
    </div>
  );
}

export default ProfilePosts;
