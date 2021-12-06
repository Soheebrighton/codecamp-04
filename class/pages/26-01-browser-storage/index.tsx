export default function BrowserStoragePage() {
  function onClickSetCookie() {
    document.cookie = "aaa=sam";
  }

  function onClickSetLocalStorage() {
    localStorage.setItem("bbb", "alice");
  }

  function onClickSetSessionStorage() {
    sessionStorage.setItem("ccc", "dave");
  }

  function onClickGetCookie() {
    const zzz = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("zzz="))[0];
    console.log(zzz.split("=")[1]);

    // "aaa=sam; ddd=dan; zzz=tobi".split("; ").filter(el => el.startsWith("zzz="))[0]
  }

  function onClickGetLocalStorage() {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  }

  function onClickGetSessionStorage() {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  }
  return (
    <>
      <button onClick={onClickSetCookie}>save to cookie</button>
      <button onClick={onClickSetLocalStorage}>save to localStorage</button>
      <button onClick={onClickSetSessionStorage}>save to sessionStorage</button>
      ------------------------------------------
      <button onClick={onClickGetCookie}>get value from cookie</button>
      <button onClick={onClickGetLocalStorage}>
        get value from localStorage
      </button>
      <button onClick={onClickGetSessionStorage}>
        get value from SessionStorage
      </button>
    </>
  );
}
