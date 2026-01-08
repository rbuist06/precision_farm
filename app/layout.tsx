import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Precision Farm Pika do Caralho",
  description: "Plataforma brasileira que humilha Trimble 🚜",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} h-full bg-background antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="h-full w-full">
            <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
              <SidebarTrigger />
              <h1 className="text-xl font-bold">Precision Farm</h1>
            </header>
            <div className="p-6">{children}</div>
          </main>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}