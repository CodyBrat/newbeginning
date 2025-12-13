import "./globals.css";

export const metadata = {
  title: "Abhishek | Graphic Motion Designer",
  description: "Creative motion graphic designer portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
