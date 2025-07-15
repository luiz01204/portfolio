// app/components/Footer.tsx
import { Github, Linkedin, Globe } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full py-6 text-center text-sm text-gray-400 bg-black flex flex-col items-center gap-4">
            <p>
                Desenvolvido por{" "}
                <span className="text-blue-600 font-semibold">Luiz Antônio</span> • ©{" "}
                {new Date().getFullYear()}
            </p>

            <div className="flex gap-6">
                <a
                    href="/"
                    className="text-blue-600 hover:text-white transition"
                    title="Portfólio"
                >
                    <Globe className="w-5 h-5" />
                </a>
                <a
                    href="https://github.com/luiz01204"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-white transition"
                    title="GitHub"
                >
                    <Github className="w-5 h-5" />
                </a>
                <a
                    href="https://www.linkedin.com/in/luiz-ant%C3%B4nio-dos-santos-machado-393bb314b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-white transition"
                    title="LinkedIn"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
            </div>
        </footer>
    );
}
