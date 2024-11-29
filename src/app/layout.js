import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import Pattern from '@/components/Pattern';
import Footer from '@/components/Footer';
import '../styles/globals.css';

export const metadata = {
  title: "Sullivan's Portfolio",
  description: "Sullivan's Portfolio - Tech and Innovation",
  icons:{
    icon: '/images/photo_cv.jpg',
  }
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
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
