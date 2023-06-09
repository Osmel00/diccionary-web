import "./globals.css";
import FontsContext from "@/context/FontsContext";

export const metadata = {
  title: "Diccionary | Web",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <body className="dark"  suppressHydrationWarning={true}  >
        <FontsContext>{children}</FontsContext>
      </body>
    </html>
  );
}
// dark:bg-black en el body
//dark theme
