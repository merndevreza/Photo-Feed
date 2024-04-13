import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Home",
  description: "Photo feed a next.js application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
