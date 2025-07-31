import Image from "next/image";
import Link from "next/link";
import perfil from "../../public/perfil_menor.webp";
import { FolderCode, Phone } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
    const whatsappNumber = "5548991107709";
    const whatsappMessage = "Olá Luiz! Vi seu portfólio e gostaria de conversar.";

    const stack = [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "Prisma",
        "TailwindCSS",
        "postgresql",
        "MongoDB",
        "Redis",
        "Docker"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <main className="flex-grow flex flex-col justify-center items-center text-center gap-8 px-4 mt-8 mb-12">
                <Image
                    src={perfil}
                    alt="foto de perfil do Luiz"
                    className="rounded-full border-4 border-blue-600 shadow-lg w-40 h-40 md:w-60 md:h-60 object-cover mt-4"
                    priority
                    quality={100}
                />

                <h1 className="text-3xl md:text-5xl font-bold">
                    Olá, eu sou o Luiz!
                    <span className="text-blue-600"> Desenvolvedor Web</span>.
                </h1>

             

                {/* SOBRE MIM AQUI */}
                <section className="max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed mb-6 px-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Sobre mim</h2>
                    <p>
                        Sou apaixonado por tecnologia, café forte e resolver problemas com código. 
                        Desde que conheci o mundo da programação, venho me especializando em criar aplicações web modernas, rápidas e funcionais. 
                        Gosto de colocar a mão na massa, aprender coisa nova todo dia e transformar desafios em soluções digitais.
                    </p>
                </section>

                {/* BOTÕES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-10">
                    <Link href={"/projetos"}>
                        <div className="p-6 rounded-2xl border-2 border-blue-600 shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:bg-blue-950">
                            <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
                                <FolderCode /> Ver portfólio
                            </h2>
                            <p className="text-gray-300 mt-2">Conheça meus projetos e experiências.</p>
                        </div>
                    </Link>
                    <Link href={"/links"}>
                        <div className="p-6 rounded-2xl border-2 border-blue-600 shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:bg-blue-950">
                            <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
                                <Phone /> Fale comigo
                            </h2>
                            <p className="text-gray-300 mt-2">Descubra como me encontrar aqui.</p>
                        </div>
                    </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-3 max-w-3xl mb-6">
                    {stack.map((tech, index) => (
                        <span
                            key={index}
                            className="border border-blue-600 text-blue-600 px-4 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition mb-12"
                >
                    <span>Me chama no WhatsApp</span>
                </a>
            </main>
            <Footer />
        </div>
    );
}
