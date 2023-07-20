import "./globals.css";

export const metadata = {
  title: "Phantom by Paco Rabanne.",
  description: "The epiphany of men's grooming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
