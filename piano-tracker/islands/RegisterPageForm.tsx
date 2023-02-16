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
    <form onSubmit={onSubmit} class="flex flex-col py-8 items-center">
      <div class="flex mx-auto mb-8">
        <label
          class="block pr-4 w-[200px] text-white font-bold tracking-wide"
          for="email"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onInput={(e) => {
            if (e.target) setEmail((e.target as HTMLInputElement).value);
          }}
        />
      </div>
      <div class="flex mx-auto mb-8">
        <label
          class="block pr-4 w-[200px] text-white font-bold tracking-wide"
          for="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onInput={(e) => {
            if (e.target) setPassword((e.target as HTMLInputElement).value);
          }}
        />
      </div>
      <div class="flex mx-auto mb-8">
        <label
          class="block pr-4 w-[200px] text-white font-bold tracking-wide"
          for="password"
        >
          Confirm Password
        </label>
        <input type="password" id="password" name="password" />
      </div>
      <input type="submit" value="Register" />
    </form>
  );
};

export default RegisterPageForm;
