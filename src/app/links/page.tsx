import Link from "next/link";
import Image from "next/image";
import perfil from "../../../public/perfil_menor.webp";
import { Github, Linkedin, Globe, MessageCircleMore, ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function Links() {
    const links = [
        {
            nome: "Meu WhatsApp",
            url: "https://wa.me/5548991107709?text=Ol%C3%A1%2C%20vim%20do%20site!",
            icon: <MessageCircleMore className="w-5 h-5" />,
        },
        {
            nome: "GitHub",
            url: "https://github.com/luiz01204",
            icon: <Github className="w-5 h-5" />,
        },
        {
            nome: "LinkedIn",
            url: "https://www.linkedin.com/in/luiz-ant%C3%B4nio-dos-santos-machado-393bb314b/",
            icon: <Linkedin className="w-5 h-5" />,
        },
        {
            nome: "Meu Portfólio",
            url: "https://luizmachado.dev.br",
            icon: <Globe className="w-5 h-5" />,
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-black text-white px-4">
            <Link
                href="/"
                className="mt-4 mb-8 self-start bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                <ArrowLeft className="w-5 h-5" />
            </Link>

            <main className="w-full max-w-md flex flex-col flex-grow gap-6 mb-12 mt-8 mx-auto justify-center items-center">
                <Image
                    src={perfil}
                    alt="Foto de perfil do Luiz"
                    className="rounded-full border-4 border-blue-600 shadow-lg w-40 h-40 object-cover"
                />

                <h1 className="text-2xl font-bold text-blue-600">Luiz Machado | DEV</h1>
                <p className="text-gray-400 text-sm text-center -mt-4">
                    Desenvolvedor Full Stack apaixonado por código e café ☕
                </p>

                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 w-full justify-center border border-blue-600 rounded-xl py-3 px-6 text-lg font-medium text-blue-600 hover:bg-blue-950 hover:text-white transition duration-300"
                    >
                        {link.icon}
                        <span>{link.nome}</span>
                    </a>
                ))}
            </main>
            <Footer />
        </div>
    );
}
