import { yellow } from "@material-ui/core/colors";
import { useState } from "react";
export default function HashtagPage() {
  function onKeyUp(event) {
    const [hashtags, setHashtags] = useState([]);
    if (event.target.value === 32 && event.target.value !== " ") {
      setHashtags([...hashtags, `#${event.target.value}`]);
      event.target.value = "";
    }
  }
  return (
    <>
      <div>
        {" "}
        <div style={{ backgroundColor: "yellow" }}>
          {hashtags.map((el, idx) => (
            <span key={idx}>{el}</span>
          ))}
        </div>
        <input type="text" onKeyUp={onKeyUp} />
      </div>
    </>
  );
}
