import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="image-thumb">
        <img src="https://placeimg.com/200/150/animals" alt="" />
      </div>
      <div className="content">
        <p className="title">{props.data.title}</p>
        <p className="body">{props.data.body}</p>
        <button className="update" onClick={() => props.update(props.data)}>Update</button>
        <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
        {/* <button className="detail" onClick={() => props.goDetail(props.data.id)}>Detail</button> */}
      </div>
    </div>
  );
};

export default Post;
