import { toNextJsHandler } from "better-auth/next-js";

import { auth } from "@acme/auth";

export const { GET, POST } = toNextJsHandler(auth.handler);
