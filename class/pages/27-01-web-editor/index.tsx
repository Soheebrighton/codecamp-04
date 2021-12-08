import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  function handleChange(value: string) {}
  //   if (process.browser) {
  //     console.log("i am the broswer");
  //   } else {
  //     console.log(" iam the front-end server");
  //   }
  return (
    <>
      writer: <input type="text" />
      <br />
      password: <input type="password" />
      <br />
      title: <input type="text" />
      <br />
      content: <ReactQuill onChange={handleChange} />
      <button>submit</button>
    </>
  );
}
