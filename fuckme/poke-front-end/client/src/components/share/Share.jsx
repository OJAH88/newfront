import "./share.css";
import { PermMedia, Label, EmojiEmotions } from "@material-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Share = ({ addPost }) => {
  const [content, setContent] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const newPost = { content, imgurl };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    fetch("/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then(addPost);
    setIsLoading(false);
    navigate("/");
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <form>
          <div className="shareTop">
            <img className="shareProfileImg" src="/assets/person/pic1.jpg" />

            <input
              onSubmit={handleSubmit}
              type="text"
              placeholder="What's in your mind?"
              className="shareInput"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <input
                  onSubmit={handleSubmit}
                  type="text"
                  placeholder="Type in image URL"
                  className="shareOptionText"
                  onChange={(e) => setImgurl(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="shareButton"
              onClick={handleSubmit}
            >
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;
