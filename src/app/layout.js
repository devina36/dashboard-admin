// import { Provider } from 'react-redux';
'use client';
import Sidebar from '@/components/Sidebar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="lg:flex relative">
          <Sidebar />
          <main className="w-full px-7 mt-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
