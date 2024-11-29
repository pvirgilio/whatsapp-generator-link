export default function Home() {
  return (
    <main
      className="w-full h-[100dvh]"
      style={{
        backgroundImage: "url(/gradient_1x.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col text-center gap-5">
          <h1 className="text-5xl font-bold text-white">Gerador de links</h1>
          <p className="text-2xl font-light text-white">
            Crie sua mensagem personalizada com um único clique!
          </p>
        </div>
        <div className="bg-white/80 border border-[#474747] p-10 mt-10 rounded-lg ">
          <form className="flex flex-col w-[400px]    gap-10  ">
            <div className="flex flex-col gap-1 ">
              <label className="text-lg font-semibold" htmlFor="">
                Número de whatsApp
              </label>
              <input
                type="text"
                placeholder="(21) 99999-9999"
                className="p-3 border border-[#474747]  rounded-md h-[55px] bg-gray-100 text-lg  "
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label className="text-lg font-semibold" htmlFor="">
                Mensagem (opcional)
              </label>
              <textarea
                placeholder="Gostaria de agendar uma consulta"
                className="p-3 border border-[#474747] rounded-md h-[55px] bg-gray-100 text-lg "
              />
            </div>
            <button
              type="submit"
              className="px-10 py-5 text-xl bg-[#25D366]/80 text-white rounded"
            >
              Gerar Link
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
