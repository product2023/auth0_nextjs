// app/layout.jsx
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Navbar from './components/navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <UserProvider>
      <body>
        <Navbar/>
        {children}</body>
    </UserProvider>
    </html>
  );
}