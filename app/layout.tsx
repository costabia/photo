import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Photo & Love", description: "Registre esse dia pelos seus olhos." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
