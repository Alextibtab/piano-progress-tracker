import { useState } from "preact/hooks";

const RegisterPageForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    if (validate()) {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirm_password,
        }),
      });
      if (res.status === 200) {
        window.location.href = `/user/${await res.json().then((data) =>
          data.username
        )}/dashboard`;
      } else {
        console.log("Error");
      }
    } else {
      console.log("Error");
    }
  };

  const validate = () => {
    if (password !== confirm_password) {
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={onSubmit} class="flex flex-col py-8 items-center">
      <div class="flex mx-auto mb-8">
        <label
          class="block pr-4 w-[200px] text-white font-bold tracking-wide"
          for="username"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onInput={(e) => {
            if (e.target) setUsername((e.target as HTMLInputElement).value);
          }}
        />
      </div>
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
          value={email}
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
          value={password}
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
        <input
          type="password"
          id="password"
          name="password"
          value={confirm_password}
          onInput={(e) => {
            if (e.target) {
              setConfirmPassword((e.target as HTMLInputElement).value);
            }
          }}
        />
      </div>
      <input type="submit" value="Register" />
    </form>
  );
};

export default RegisterPageForm;
