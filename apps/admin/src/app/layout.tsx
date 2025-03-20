import "~/app/globals.css";

import { RootProvider } from "./root-provider";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>{props.children}</RootProvider>
      </body>
    </html>
  );
}
