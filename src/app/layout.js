import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import ThemeToggle from '@/components/common/ThemeToggle';
import FloatingCTA from '@/components/common/FloatingCTA';
import '../styles/globals.css';

export const metadata = {
  title: "Sullivan's Portfolio",
  description: "Sullivan's Portfolio - Tech and Innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="transition-colors duration-300">
            <Header />
            <ThemeToggle />
            {children}
            <FloatingCTA />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
