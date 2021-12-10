import "./post.css";
import { MoreVert, RadioButtonCheckedOutlined } from "@material-ui/icons";
// import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post, handleDelete }) {

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} /> */}
            <span className="postUsername">{post.user.name || post.user.username}</span>
            <span className="postDate">{post.created_at}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.content}</span>
          <img className="postImg" src={post.imgurl} />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <button  className="deleteButton" onClick={() => {
            handleDelete(post);
          }}>Delete</button>
          </div>
          <div className="postBottomRight">

          </div>
        </div>
      </div>
    </div>
  );
}