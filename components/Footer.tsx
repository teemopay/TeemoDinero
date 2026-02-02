import Main from "./Main";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Footer() {
  const textStyle =
    "block text-[14px] text-white hover:text-[#1EA65D] transition-colors duration-300 cursor-pointer";
  const basicText = "block text-[14px] text-white ";
  return (
    <div className="w-full min-h-96.5 bg-[url('/img/footer.png')] bg-cover bg-center bg-no-repeat ">
      <Main>
        <div className="pt-13 pb-16">
          <Link className="mb-12 block" href="/">
            <Image src="/img/logo-2.png" alt="logo" width={196} height={40} />
          </Link>
          <div className="text-[24px] leading-9 text-white mb-8 font-semibold">
            Contáctenos
          </div>
          <div className={cn(basicText, "mb-6")}>
            Nombre de la empresa：Teemopay S.R.L.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className={cn(basicText)}>
              Dirección de la empresa：Avenida Corrientes 485, piso 9, Ciudad de
              Buenos Aires, Argentina
            </div>
            <Link
              className={cn(textStyle, "md:text-right hidden md:block")}
              href="/file/Privacy.pdf"
              target="_blank"
            >
              Política de privacid
            </Link>
            <a
              className={(cn(textStyle), "md:hidden")}
              href="mailto:matias.horacio@teemopay.com"
            >
              Correo electrónico para contactar：matias.horacio@teemopay.com
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              className={(cn(textStyle), "hidden md:block")}
              href="mailto:matias.horacio@teemopay.com"
            >
              Correo electrónico para contactar： matias.horacio@teemopay.com
            </a>
            <Link
              className={cn(textStyle, "md:text-right  md:hidden")}
              href="/file/Privacy.pdf"
              target="_blank"
            >
              Política de privacid
            </Link>
            <Link
              className={cn(textStyle, "md:text-right")}
              href="/file/Terms.pdf"
              target="_blank"
            >
              Términos y Condiciones para Pedir tu Préstamo
            </Link>
          </div>
        </div>
      </Main>
    </div>
  );
}
