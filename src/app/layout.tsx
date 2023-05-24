import "./globals.css";

export const metadata = {
  title: "Chatmatic",
  description: "Get connected",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-900">{children}</body>
    </html>
  );
}
