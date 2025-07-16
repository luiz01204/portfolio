import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Luiz Antônio | Desenvolvedor Full Stack",
    description:
        "Portfólio de Luiz Antônio dos Santos Machado, desenvolvedor full stack especializado em React, Next.js, Node.js e TypeScript.",
    keywords: [
        "Luiz Antônio",
        "Desenvolvedor Full Stack",
        "Portfólio",
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Programador Front-end",
        "Dev Criciúma",
        "Desenvolvedor Criciúma",
        "Criador de site Criciúma"
    ],
    authors: [{ name: "Luiz Antônio", url: "https://luizmachado.dev.br" }],
    creator: "Luiz Antônio",
    metadataBase: new URL("https://luizmachado.dev.br"),
    robots: "index, follow",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "Luiz Antônio | Desenvolvedor Full Stack",
        description:
            "Veja meu portfólio com projetos usando React, Next.js, Node.js e muito mais.",
        url: "https://luizmachado.dev.br",
        siteName: "Luiz Antônio Dev",
        images: [
            {
                url: "https://luizmachado.dev.br/banner.png",
                width: 1200,
                height: 630,
                alt: "Banner Luiz Antônio - Desenvolvedor Full Stack",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Luiz Antônio | Desenvolvedor Full Stack",
        description:
            "Portfólio moderno e responsivo de Luiz Antônio dos Santos Machado, com foco em performance e boas práticas.",
        images: ["https://luizmachado.dev.br/banner.png"],
    },
};


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="pt-BR">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
