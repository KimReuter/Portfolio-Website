// app/layout.tsx

import '../styles/globals.css';

export const metadata = {
  title: 'Mein Portfolio',
  description: 'Meine Arbeiten und Projekte',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
} 