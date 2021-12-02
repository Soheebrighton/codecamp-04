import Button01 from "../../commons/buttons/Button01";
import Input01 from "../../commons/inputs/input01";

export default function MyFormUI(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onClickLogin)}>
        {" "}
        <Input01 aaa={props.register(props.onClickLogin)} register />
        {/* Email: <input type="text" {...props.register("myEmail")} /> */}
        <div>{props.formState.errors.myEmail?.message}</div>
        <Input01 aaa={props.register("myPassword")} />
        {/* Password: <input type="password" {...props.register("myPassword")} /> */}
        <div>{props.formState.errors.myPassword?.message}</div>
        <Button01
          type="submit"
          name="login"
          isValid={props.formState.isValid}
        />
      </form>
    </>
  );
}
