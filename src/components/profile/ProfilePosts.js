import React from "react";
import moment from "moment";


function ProfilePosts({ text, date, image }) {
  return (
    <div className="profile-posts">
      <h4 className="text-left ml-4 mt-4">{moment(date).format("LLL")}</h4>
      <h2>{text}</h2>
      {image && <img src={`/content/${image}`} alt="post" />}
    </div>
  );
}

export default ProfilePosts;
