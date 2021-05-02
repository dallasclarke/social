import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../reducers/posts";

const userId = localStorage.getItem("userId");

const Post = (props) => {
  const post = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(props.match.params.id));
  }, []);

  if (post) {
    return (
      <div>
        <p>name: {post.user.name}</p>
        <p>bio: {post.user.bio}</p>
        <p>city: {post.user.city}</p>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default Post;
