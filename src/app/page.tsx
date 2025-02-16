"use client";
// import { IoClose } from "react-icons/io5";
import { FormsWhats } from "./components/FormsWhats";
// import { useState } from "react";

export default function Home() {
  // const [modal, setModal] = useState(false);
  return (
    <main
      className="w-full h-[100dvh] max-[767px]:px-[1.25rem]"
      style={{
        backgroundImage: "url(/gradient_1x.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col text-center gap-5">
          <h1 className="text-5xl font-bold text-white max-[767px]:text-2xl">
            Gerador de links
          </h1>
          <p className="text-2xl font-light text-white max-[767px]:text-lg">
            Crie sua mensagem personalizada com um único clique!
          </p>
        </div>
        <FormsWhats />
      </section>
    </main>
  );
}
