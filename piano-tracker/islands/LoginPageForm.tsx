import { useState } from "preact/hooks";

const LoginPageForm = () => {
  const [username_or_email, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username_or_email,
        password,
      }),
    });
    if (res.status === 200) {
      window.location.href = `/user/${await res.json().then((data) =>
        data.username
      )}/dashboard`;
    } else {
      console.log("Error");
    }
  };

  return (
    <form onSubmit={onSubmit} class="flex flex-col py-8 items-center">
      <div class="flex mx-auto mb-8">
        <label
          class="block pr-4 w-[150px] text-white font-bold tracking-wide"
          for="username"
        >
          Username/Email
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username_or_email}
          onInput={(e) => {
            if (e.target) {
              setUsernameOrEmail((e.target as HTMLInputElement).value);
            }
          }}
        />
      </div>
      <div class="flex mx-auto mb-8">
        <label
          class="block pr-4 w-[150px] text-white font-bold tracking-wide"
          for="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
        />
      </div>
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginPageForm;
