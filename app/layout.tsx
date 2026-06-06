import "./globals.css";
import SidebarLayout from "@/components/sidebarlayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SidebarLayout>
          {children}
        </SidebarLayout>
      </body>
    </html>
  );
}