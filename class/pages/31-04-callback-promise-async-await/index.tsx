import axios from "axios";
import { useState } from "react";

export default function CallbackPromiseAsyncAwaitPage() {
  const [myCallback, setMyCallback] = useState([]);
  const [myPromise, setMyPromise] = useState([]);
  const [myAsyncAwait, setMyAsyncAwait] = useState([]);

  // 1. 임의의 숫자 받아오기
  // 2. 받아온 숫자에 해당하는 게시글 불러오기
  // 3. 그 게시글을 쓴 작성자의 다른 게시글 보기

  function onClickCallback() {
    const ccc = new XMLHttpRequest();
    ccc.open("get", "http://numbersapi.com/random?min=1&max=200");
    ccc.send();

    ccc.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0];

      const aaa = new XMLHttpRequest();
      aaa.open("get", `https://koreanjson.com/posts/${num}`);
      aaa.send();
      aaa.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;

        const aaa2 = new XMLHttpRequest();
        aaa2.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        aaa2.send();
        aaa2.addEventListener("load", (res: any) => {
          const result = JSON.parse(res.target.response);
          setMyCallback(result);
        });
      });
    });
  }

  function onClickPromise() {
    console.log("this is number 1"); // first run
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("this is number 3"); // third run
        const num = res.data.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`https://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        setMyPromise(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("this is number 2"); // second run
  }

  async function onClickAsyncAwait() {
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split(" ")[0];

    const res2 = await axios.get(`https://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;

    const res3 = await axios.get(
      `https://koreanjson.com/posts?userId=${userId}`
    );
    setMyAsyncAwait(res3.data);
  }

  console.log(myPromise);

  return (
    <>
      <h1>callback and its friends</h1>
      result:
      <div>
        {myCallback.map((el: any) => (
          <div key={el.title}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickCallback}>request callback</button>
      result:
      <div>
        {myPromise.map((el: any) => (
          <div key={el.title}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickPromise}>request promise</button>
      result:
      <div>
        {myAsyncAwait.map((el: any) => (
          <div key={el.title}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickAsyncAwait}>request async await</button>
    </>
  );
}
