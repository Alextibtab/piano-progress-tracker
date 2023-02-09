import { useState } from "preact/hooks";

const RegisterPageForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: Event) => {
    console.log("submit");
    console.log(e);
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onInput={(e) => {
          if (e.target) setEmail((e.target as HTMLInputElement).value);
        }}
      />
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onInput={(e) => {
          if (e.target) setPassword((e.target as HTMLInputElement).value);
        }}
      />
      <label for="password">Confirm Password</label>
      <input type="password" id="password" name="password" />
      <input type="submit" value="Register" />
    </form>
  );
};

export default RegisterPageForm;
