import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import Pattern from '@/components/Pattern';
import '../styles/globals.css';
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Sullivan's Portfolio",
  description: "Sullivan's Portfolio - Tech and Innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="transition-colors duration-300 relative">
            <Pattern />
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
