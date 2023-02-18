import { Handlers } from "$fresh/server.ts";

const test_user = {
  username: "test",
  email: "test@test.com",
  password: "test",
};

export const handler: Handlers = {
  async POST(req) {
    const body = await req.json();
    if (
      body.username_or_email === test_user.username ||
      body.username_or_email === test_user.email &&
        body.password === test_user.password
    ) {
      return new Response(
        JSON.stringify({
          message: "User logged in",
          username: test_user.username,
        }),
        {
          headers: { "content-type": "application/json" },
          status: 200,
        },
      );
    } else {
      return new Response(JSON.stringify({ message: "User does not exist" }), {
        headers: { "content-type": "application/json" },
        status: 401,
      });
    }
  },
};
