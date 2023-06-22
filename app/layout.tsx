import "./globals.css";

import QueryProvider from "./components/QueryProvider";

export const metadata = {
  metadataBase: new URL("https://value-detector.schroter.eu"),
  title:
    "Human Value Detector - Competition winning system to discover human values in arguments",
  description:
    "Competition winning transformer based system to discover human values in arguments. We presented our system at the ACL 2023 conference and published a system description paper in their proceedings.",
  authors: [{ name: "Daniel Schroter", url: "https://daniel.schroter.eu" }],
  keywords: [
    "human values",
    "argument mining",
    "transformer",
    "competition",
    "ACL",
    "2023",
  ],
  openGraph: {
    url: "https://value-detector.schroter.eu",
    title:
      "Human Value Detector - Competition winning system to discover human values in arguments",
    description:
      "Transformer based system that delivers new state of the art performance to discover human values in arguments.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:image"
          itemProp="image"
          content="https://value-detector.schroter.eu/hero_prev.png"
        />
      </head>
      <QueryProvider>
        <body>{children}</body>
      </QueryProvider>
    </html>
  );
}
