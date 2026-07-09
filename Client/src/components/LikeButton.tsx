import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <>
      <h2>❤️ Likes: {likes}</h2>

      <button onClick={() => setLikes(likes + 1)}>
        Like
      </button>

      {likes >= 10 && <h3>Popular Post 🔥</h3>}
    </>
  );
}

export default LikeButton;
