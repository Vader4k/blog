import { signIn } from "@/auth";

const Login = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
