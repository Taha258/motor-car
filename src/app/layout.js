import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: 'WalCars - MotorDeal Showroom',
  description: 'Best car deals',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans`}>
        {/* Header ko fixed/absolute position do */}
        <div className="relative">
          <Header />
          <main>{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}