export default function HofPage() {
  const onClickChild = (index) => (event) => {
    console.log(event.target.id);
  };
  //   function onClickChild(event) {
  //     console.log(event.target.id);
  //   }
  return (
    <>
      <h1>This is HOF practice page</h1>;
      <div>
        {["철수", "영희", "훈이"].map((el) => (
          <div key={el} onClick={onClickChild}>
            {el}
          </div>
        ))}
      </div>
    </>
  );
}

onClickChild(index)(event);
