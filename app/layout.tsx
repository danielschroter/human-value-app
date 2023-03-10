import "./globals.css";

import QueryProvider from "./components/QueryProvider";

export const metadata = {
  title: "Human Value Detector",
  description: "Detect Human Values in Arguments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryProvider>
        <body>{children}</body>
      </QueryProvider>
    </html>
  );
}
