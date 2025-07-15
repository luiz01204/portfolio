import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Projetos() {
    const projetos = [
        {
            nome: "Landing page estética automotiva",
            descricao: "Página de conversão de alta performance e SEO otimizado.",
            imagem: "/mk.png",
            link: "https://www.mkstudioautomotivo.com.br/",
            whatsappMsg: "Olá! Gostei da landing page de estética automotiva. Podemos conversar?",
        },
        {
            nome: "Landing page Nails designer",
            descricao: "Página portfólio de uma nails designer.",
            imagem: "/ana.png",
            link: "https://ana-landing-page-puce.vercel.app/",
            whatsappMsg: "Oi! Achei incrível a página da Nails Designer. Bora trocar uma ideia?",
        },
        {
            nome: "Landing page Pet Shop",
            descricao: "Página de alta conversão para prestadores de serviços e venda de produtos.",
            imagem: "/pet.png",
            link: "https://landing-page-pet-shop-sage.vercel.app/",
            whatsappMsg: "Olá! Me interessei pela landing page do Pet Shop. Pode me contar mais?",
        },
        {
            nome: "Landing page professora de inglês",
            descricao: "Página de alta conversão para professores.",
            imagem: "/ingles.png",
            link: "https://mileny-landing-page.vercel.app/",
            whatsappMsg: "Olá! Me interessei pela landing page da professora de ingês. Pode me contar mais?",
        },
    ];

    const telefone = "5548991107709";

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <div className="px-6 py-10 flex flex-col items-center flex-grow">
                <Link
                    href="/"
                    className="mb-8 self-start flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>

                <h1 className="text-4xl font-bold text-center mb-10">
                    Meus <span className="text-blue-600">Projetos</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
                    {projetos.map((projeto, index) => (
                        <div
                            key={index}
                            className="border-2 border-blue-600 rounded-2xl p-5 shadow-md hover:shadow-xl hover:bg-blue-950 transition duration-300 flex flex-col items-center gap-4"
                        >
                            <Link
                                href={projeto.link}
                                target="_blank"
                                className="w-full flex flex-col items-center gap-4"
                            >
                                <Image
                                    src={projeto.imagem}
                                    alt={`Imagem do projeto ${projeto.nome}`}
                                    width={500}
                                    height={300}
                                    className="rounded-xl object-cover h-48 w-full"
                                />
                                <h2 className="text-2xl font-semibold text-blue-600 text-center">
                                    {projeto.nome}
                                </h2>
                                <p className="text-gray-300 text-center">{projeto.descricao}</p>
                            </Link>

                            <a
                                href={`https://wa.me/${telefone}?text=${encodeURIComponent(projeto.whatsappMsg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                            >
                                Falar no WhatsApp
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
