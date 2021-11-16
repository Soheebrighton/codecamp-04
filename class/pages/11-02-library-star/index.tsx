import { Rate } from "antd";
import { useState } from "react";

export default function LibraryStarPage() {
  // const desc = ['terrible,' 'bad', 'normal', 'good', 'wonderful']
  const [value, setValue] = useState(0);

  function handleChange(value: Number) {
    setValue(value);
  }

  return (
    <span>
      <Rate onChange={handleChange} value={value} />
    </span>
  );
}
