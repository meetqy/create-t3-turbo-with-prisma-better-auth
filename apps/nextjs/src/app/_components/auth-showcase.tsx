"use client";

import { authClient } from "@acme/auth/client";
import { Button } from "@acme/ui/button";

export function AuthShowcaseClient() {
  const { data: session } = authClient.useSession();

  if (!session) {
    return (
      <>
        <div className="flex gap-2">
          <Button
            size="lg"
            onClick={async () => {
              const res = await authClient.signIn.email({
                email: "meetqy@icloud.com",
                password: "meetqyicloud1234",
              });

              console.log("sign in button", res);
            }}
          >
            Sign in
          </Button>

          <Button
            size="lg"
            onClick={async () => {
              const res = await authClient.signUp.email({
                email: "meetqy@icloud.com",
                password: "meetqyicloud1234",
                name: "meetqy",
              });

              console.log("sign up button", res);
            }}
          >
            Sign up
          </Button>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        <span>Logged in as {session.user.name}</span>
      </p>

      <Button
        onClick={async () => {
          await authClient.signOut();
        }}
        size="lg"
      >
        Sign out
      </Button>
    </div>
  );
}
