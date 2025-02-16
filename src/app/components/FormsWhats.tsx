import Link from "next/link";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  whatsappNumber: string;
  message: string;
};

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};

export const FormsWhats = () => {
  const [generatedLink, setGeneratedLink] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const { handleSubmit, control, setValue } = useForm<FormData>({
    defaultValues: {
      whatsappNumber: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    if (!data.whatsappNumber.trim()) {
      alert("Preencha o campo de número");
      return;
    }
    // Remove os caracteres não numéricos para gerar o link corretamente
    const numeroFormatado = data.whatsappNumber.replace(/[^0-9]/g, "");
    const mensagemCodificada = encodeURIComponent(data.message);
    const link = `https://wa.me/55${numeroFormatado}?text=${mensagemCodificada}`;
    setGeneratedLink(link);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div
      suppressHydrationWarning
      className="bg-white/80 border border-[#474747] p-10 mt-10 rounded-lg max-w-[500px] max-[767px]:w-full max-[767px]:p-5 max-[767px]:mt-5"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[400px] gap-10 max-[767px]:w-full max-[767px]:gap-5"
      >
        <div className="flex flex-col gap-1">
          <label
            className="text-lg font-semibold max-[767px]:text-base"
            htmlFor="whatsappNumber"
          >
            Número de whatsApp
          </label>
          <Controller
            name="whatsappNumber"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <input
                type="text"
                id="whatsappNumber"
                placeholder="(xx) _____-____"
                value={value}
                onBlur={onBlur}
                onChange={(e) => onChange(formatPhone(e.target.value))}
                className="p-3 border border-[#474747] rounded-md h-[55px] bg-gray-100 text-lg max-[767px]:text-base"
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-lg font-semibold max-[767px]:text-base"
            htmlFor="mensagem"
          >
            Mensagem (opcional)
          </label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <textarea
                id="mensagem"
                placeholder="Gostaria de agendar uma consulta"
                className="p-3 border border-[#474747] rounded-md h-[55px] bg-gray-100 text-lg max-[767px]:text-base"
                {...field}
              />
            )}
          />
        </div>
        <button
          type="submit"
          className="px-10 py-5 text-xl bg-[#25D366]/80 text-white rounded max-[767px]:py-3 max-[767px]:text-base"
        >
          Gerar Link
        </button>
      </form>

      {generatedLink && (
        <div className="mt-10 flex flex-col text-center bg-white/60 p-5 rounded-lg backdrop-blur-md">
          <label className="text-lg font-semibold">Link gerado:</label>
          <Link
            href={generatedLink}
            target="_blank"
            className="text-[#25D366] text-lg underline"
          >
            {generatedLink}
          </Link>
          <button
            type="button"
            onClick={handleCopy}
            className="mt-4 px-5 py-2 bg-[#25D366] text-white rounded hover:bg-[#1da851]"
          >
            Copiar link
          </button>
          {copied && (
            <span className="mt-2 text-sm text-green-600">
              Link copiado com sucesso!
            </span>
          )}
        </div>
      )}
    </div>
  );
};
