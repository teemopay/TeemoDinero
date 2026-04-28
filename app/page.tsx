"use client";
import * as motion from "motion/react-client";
import Main from "../components/Main";
import Button from "../components/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
type secondProps = {
  data: {
    id: number;
    sort: number;
    name: string;
    sub: string;
    last: string;
  };
};
export default function Home() {
  return (
    <div>
      <div className="relative bg-[url('/img/home.png')] bg-cover bg-center bg-no-repeat lg:bg-transparent min-h-100 md:min-h-full">
        <Image
          src="/img/home.png"
          className="hidden md:block max-h-240"
          alt="logo"
          width={1920}
          height={960}
        />
        <div className="md:absolute inset-0 w-full h-full z-10 pt-20 pb-20 md:pt-0 md:pb-0 overflow-x-hidden">
          <Main className="flex  justify-center flex-col">
            <motion.div
              initial={{ opacity: 0, translateY: 40 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3 text-[50px] xl:mb-4 lg:text-[40px] xl:text-[80px]  home-title"
            >
              TeemoDinero
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 40 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="mb-4 xl:mb-6  text-[20px] lg:text-[30px] lg:leading-8.5 lg:max-w-140 xl:text-[40px] xl:leading-12  xl:max-w-150 home-submit xl:tracking-[-1.5]"
            >
              Dinero en tu cuenta cuando más lo necesitás
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 40 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
              className="mb-10 xl:mb-16 text-[16px] leading-6 max-w-185"
            >
              Comprometido con el mercado financiero local y centrado en
              "seguridad, transparencia y facilidad", ofrece préstamos
              personalizados para los argentinos, cumpliendo requisitos
              regulatorios y haciendo los servicios crediticios más accesibles y
              confiables.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, translateY: 40 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
            >
              <Button>Solicitar Ahora</Button>
            </motion.div>
          </Main>
        </div>
      </div>
      <SecondItem />
      <ThreeCard />
      <FourCard />
      <SevenCard />
      <FiveCard />
      <SixCard />
    </div>
  );
}

const SecondItem = () => {
  const list = [
    {
      sort: 1,
      id: 3,
      name: "Solicitud Inicial",
      sub: "Completá el formulario en nuestra web con tus datos básicos de contacto.",
      last: "Sin subir documentos todavía.",
    },
    {
      sort: 2,
      id: 4,
      name: "Validación de Identidad",
      sub: "Un asesor oficial te contactará por WhatsApp para verificar que sos vos.",
      last: "Esto garantiza la seguridad de tu cuenta.",
    },
    {
      sort: 3,
      id: 5,
      name: "Análisis de Perfil",
      sub: "Evaluamos tu perfil para encontrar la mejor oferta disponible",
      last: "Te presentamos una propuesta a tu medida, sin letra chica.",
    },
    {
      sort: 4,
      id: 6,
      name: "¡Dinero en tu Cuenta",
      sub: "Transferimos el monto aprobado directamente a tu CBU o CVU.",
      last: "Acreditación inmediata para usar hoy mismo.",
    },
  ];
  return (
    <div className="relative bg-[url('/img/home-2.png')] bg-cover bg-center bg-no-repeat lg:max-h-350 pt-26 pb-68">
      <Main>
        <FirstTitle
          className="mb-2"
          title="Tu dinero en cuenta en 4 pasos simples"
        ></FirstTitle>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, translateY: 40 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ transformOrigin: "bottom center" }}
          className="text-center text-[32px] font-medium mb-22"
        >
          100% online, sin filas y sin papeleos.
        </motion.div>
        <div className="grid md:grid-cols-3 items-center gap-6">
          <SecondCard data={list[0]}></SecondCard>
          <div className="flex-1 flex flex-col items-center gap-6">
            <SecondCard data={list[1]}></SecondCard>
            <SecondCard data={list[2]}></SecondCard>
          </div>
          <SecondCard data={list[3]}></SecondCard>
        </div>
      </Main>
    </div>
  );
};
const ThreeCard = () => {
  const list = [
    {
      id: 7,
      name: "DNI Argentino",
      sub: "Vigente y en buen estado.",
    },
    {
      id: 8,
      name: "Mayor de 18 años",
      sub: "Cumplir con la edad legal.",
    },
    {
      id: 9,
      name: "Cuenta Bancaria o Virtual",
      sub: "Ser titular de la cuenta.",
    },
    {
      id: 10,
      name: "Celular y Email",
      sub: "Para validar tu identidad y contactarte.",
    },
  ];
  return (
    <div className="pt-3.75 pb-50">
      <Main>
        <FirstTitle
          className="mb-44"
          title="Solo necesitás lo básico"
        ></FirstTitle>
        <div className="px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {list.map((i) => {
            return (
              <div
                key={i.id}
                className="pt-6 pl-6 xl:pt-10 xl:pl-10 pr-4.75 bg2 pb-6 xl:min-h-60"
              >
                <Image
                  className="mb-6"
                  src={`/img/home-${i.id}.png`}
                  alt="icon"
                  width={48}
                  height={48}
                />
                <div className="font-bold  text-[24px] leading-9 mb-2">
                  {i.name}
                </div>
                <div className="text-[16px] leading-4">{i.sub}</div>
              </div>
            );
          })}
          <Image
            className="absolute -bottom-19 z-[-1]"
            src={`/img/home-12.png`}
            alt="icon"
            width={1200}
            height={200}
          />
        </div>
      </Main>
    </div>
  );
};

const FourCard = () => {
  const list = [
    {
      id: 13,
      name: "1. Emergencias",
      sub: "No dejes que un gasto inesperado te frene. Resolvelo hoy y pagalo después.",
      steps: [
        "Gastos médicos o farmacia",
        "Reparaciones del hogar o del auto ",
        "Pago de facturas vencidas",
      ],
    },
    {
      id: 14,
      name: "2. Consumo y Estilo de Vida",
      sub: "¿Viste una oferta? Aprovechala ahora antes de que aumente.",
      steps: [
        "Electrodomésticos y tecnología",
        "Indumentaria y calzado",
        "Salidas, cenas y entretenimiento",
      ],
    },
    {
      id: 15,
      name: "3. Inversión Personal",
      sub: "Invertí en vos mismo. El capital que necesitás para dar el siguiente paso.",
      steps: [
        "Capital inicial para tu emprendimiento",
        "Cursos y capacitación profesional",
        "Herramientas para tu trabajo extra ",
      ],
    },
  ];
  return (
    <div className="pb-50">
      <Main>
        <FirstTitle
          className="mb-25"
          title="¿Para qué podés usar tu dinero?"
        ></FirstTitle>
        <Image
          className="mb-10"
          src="/img/home-11.png"
          alt="icon"
          width={68}
          height={52}
        />
        {list.map((i) => {
          return (
            <div
              key={i.id}
              className={cn(
                "lg:flex items-center justify-between mb-16 last:mb-0 gap-x-10",
                i.id === 14 ? "flex-row-reverse" : "",
              )}
            >
              <div className="flex-1 lg:max-w-123">
                <FourTitle title={i.name} sub={i.sub} />
                <div className="flex ">
                  <Image
                    className="max-w-4.5 max-h-30.5 mr-4"
                    src="/img/home-16.png"
                    alt="icon"
                    width={36}
                    height={244}
                  />
                  <div className="flex-1 -mt-1">
                    {i.steps.map((i, index) => {
                      return (
                        <div className="text-[16px]  h-13" key={index}>
                          {i}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <Image
                className="max-w-full lg:max-w-110 xl:max-w-121.5"
                src={`/img/home-${i.id}.png`}
                alt="icon"
                width={972}
                height={608}
              />
            </div>
          );
        })}
      </Main>
    </div>
  );
};

const FiveCard = () => {
  return (
    <div className="pt-9.25 pb-27.5">
      <Main>
        <FirstTitle
          className="mb-50"
          title="¿Por qué elegir TeemoDinero?"
        ></FirstTitle>
        <div className=" relative flex items-center justify-center cursor-pointer group">
          <div className="hidden md:block relative">
            <FiveItem
              className="absolute top-0 -left-[20%]  md:max-w-50 lg:max-w-88.5 -translate-y-full"
              title="Cumplimiento y transparencia, sin costos ocultos"
              id={18}
            ></FiveItem>
            <FiveItem
              className="absolute top-9  -right-[25%] md:max-w-50  lg:max-w-86 -translate-y-full"
              title="Cuota flexible, plazos opcionales"
              id={19}
            ></FiveItem>
            <FiveItem
              className="absolute top-[29%]  -left-[42%] md:max-w-60 lg:max-w-76.75"
              title="Pago rápido y fácil de recibos"
              id={23}
            ></FiveItem>
            <FiveItem
              className="absolute top-[35%]  -right-[57%] md:max-w-65  lg:max-w-102.25"
              title="Atención personalizada, tus derechos protegidos"
              id={20}
            ></FiveItem>
            <FiveItem
              className="absolute bottom-20  -left-[30%] md:max-w-60  lg:max-w-90.5"
              title="Seguridad garantizada, datos sin preocupaciones"
              id={22}
            ></FiveItem>
            <FiveItem
              className="absolute bottom-21.5  -right-[30%] md:max-w-60  lg:max-w-107"
              title="Solicitud de bajo umbral, aprobación eficiente"
              id={21}
            ></FiveItem>
            <Image
              className="md:max-w-100 md:max-h-100 lg:max-w-130 lg:max-h-130 xl:max-w-150 xl:max-h-150"
              src="/img/home-17.png"
              alt="icon"
              width={600}
              height={600}
            />
          </div>
          <div className="block md:hidden relative flex-1">
            <SevenItem
              title="Cumplimiento y transparencia, sin costos ocultos"
              id={18}
            ></SevenItem>
            <SevenItem
              title="Cuota flexible, plazos opcionales"
              id={19}
            ></SevenItem>
            <SevenItem
              title="Pago rápido y fácil de recibos"
              id={23}
            ></SevenItem>
            <SevenItem
              title="Servicio humanizado, garantía de derechos"
              id={20}
            ></SevenItem>
            <SevenItem
              title="Seguridad garantizada, datos sin preocupaciones"
              id={22}
            ></SevenItem>
            <SevenItem
              title="Solicitud de bajo umbral, aprobación eficiente"
              id={21}
            ></SevenItem>
            <Image
              className="max-w-full md:max-w-100 md:max-h-100 lg:max-w-130 lg:max-h-130 xl:max-w-150 xl:max-h-150"
              src="/img/home-17.png"
              alt="icon"
              width={600}
              height={600}
            />
          </div>
        </div>
      </Main>
    </div>
  );
};

const SixCard = () => {
  const list = [
    {
      id: 1,
      text: "¿Qué documentos necesito preparar para solicitar un préstamo?",
    },
    {
      id: 2,
      text: "Muy sencillo. Solo necesitas un DNI argentino, una cuenta bancaria a tu nombre (CBU/CVU) y un teléfono móvil.",
      style: "max-w-[488px]",
    },
    {
      id: 3,
      text: "¿Hay comisiones por solicitar el préstamo?",
    },
    {
      id: 4,
      text: "El proceso de solicitud es completamente gratuito. Solo cuando el préstamo sea aprobado y los fondos ingresen a tu cuenta, calcularemos los intereses según lo estipulado en el contrato. Si la revisión no se aprueba, no tendrás que pagar ningún costo.",
      style: "max-w-[576px]",
    },
    {
      id: 5,
      text: "¿Cuánto tiempo tarda en procesarse la revisión y el desembolso?",
    },
    {
      id: 6,
      text: "Nuestro sistema inteligente funciona las 24 horas del día, los 7 días de la semana. Normalmente, la revisión se completa en un día hábil. Una vez aprobado, los fondos se envían inmediatamente mediante el sistema de transferencias; el tiempo exacto de recepción depende de la velocidad de procesamiento del banco (generalmente instantáneo).",
      style: "max-w-[596px]",
    },
    {
      id: 7,
      text: "¿Comunicarán mi número de teléfono a mis contactos?  ",
    },
    {
      id: 8,
      text: "Definitivamente no. Respetamos estrictamente nuestra política de privacidad. Tu solicitud de préstamo es una cuestión de privacidad personal, y sin tu consentimiento, no entraremos en contacto con tus familiares o amigos ni compartiremos tu situación financiera con terceros.",
      style: "max-w-[514px]",
    },
    {
      id: 9,
      text: "Si no quiero seguir adelante con el préstamo, ¿puedo eliminar mis datos?",
    },
    {
      id: 10,
      text: "Tienes total control sobre tus datos personales. Si has saldado el préstamo y decides dejar de utilizar nuestros servicios, puedes contactar al servicio al cliente para solicitar la cancelación de la cuenta y la eliminación de tus datos personales.",
      style: "max-w-[528px]",
    },
  ];
  return (
    <div className="pt-50 mb-50">
      <Main>
        <FirstTitle className="mb-2" title="Preguntas Frecuentes"></FirstTitle>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, translateY: 40 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ transformOrigin: "bottom center" }}
          className="text-[32px] leading-12 text-center mb-22"
        >
          No te preocupes, acá están las preguntas más frecuentes.
        </motion.div>
        <div className="px-4 md:px-12 py-10 bg3">
          <Image
            className="mx-auto"
            src="/img/home-24.png"
            alt="icon"
            width={582}
            height={40}
          />
          <div className="flex flex-col mt-10">
            {list.map((i, index) => {
              return index % 2 === 0 ? (
                <div
                  key={"key2" + i.id}
                  className={`flex items-end text-left mb-5 md:mb-0`}
                >
                  <Image
                    className="mr-4 max-w-12 max-h-12"
                    src="/img/home-25.png"
                    alt="icon"
                    width={48}
                    height={48}
                  />
                  <div
                    className={cn(
                      "flex-1 text-[16px] leading-6.25 p-4 bg-[#163121] rounded-[24px] rounded-bl-none mb-6 -tracking-[0.5px]",
                      `${i.id === 3 ? "max-w-88.5" : "max-w-78.5"}`,
                    )}
                  >
                    {i.text}
                  </div>
                </div>
              ) : (
                <div
                  key={"key1" + i.id}
                  className={`flex self-end items-end text-right  mb-10`}
                >
                  <div
                    className={cn(
                      "inline-block text-[16px] leading-6.25 p-4 bg-[#1EA65D] rounded-[24px]  rounded-br-none mr-4 mb-4 -tracking-[0.5px]",
                      i.style,
                    )}
                  >
                    {i.text}
                  </div>
                  <Image
                    className=" max-w-12 max-h-12"
                    src="/img/home-26.png"
                    alt="icon"
                    width={48}
                    height={48}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Main>
    </div>
  );
};

const SecondCard = ({ data }: secondProps) => {
  const hoverStyle =
    " transition-all duration-700 ease-out   group-hover:scale-125  ";
  return (
    <div className="group w-full bg1 p-5 lg:p-10 transition-all duration-700 ease-out hover:shadow-xl hover:shadow-[#1EA65D] cursor-pointer">
      <div className="flex justify-end">
        <Image
          className={hoverStyle}
          src={`/img/home-${data.id}.png`}
          alt="icon"
          width={48}
          height={48}
        />
      </div>
      <div className="text-[28px] text-[#011909] leading-9 font-bold mb-2 lg:mb-4">
        {data.sort}.
      </div>
      <div className="relative text-[24px] text-[#011909] leading-9 font-bold  mb-6 lg:mb-7.5  inline-block  home-second-line">
        {data.name}
      </div>
      <div className="text-[16px] text-[#365535] leading-6 mb-10 lg:mb-16 ">
        {data.sub}
      </div>
      <div className="text-[18px] text-[#011909] leading-7 font-medium">
        {data.last}
      </div>
    </div>
  );
};

const FirstTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, translateY: 40 }}
      whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "bottom center" }}
      className={cn(
        "text-center text-[48px] font-semibold color-text",
        className,
      )}
    >
      {title}
    </motion.div>
  );
};

const FourTitle = ({
  title,
  className,
  sub,
}: {
  title: string;
  sub: string;
  className?: string;
}) => {
  return (
    <>
      <div
        className={cn(
          "text-[24px] font-semibold text-white mb-6.25 leading-9 ",
          className,
        )}
      >
        {title}
      </div>
      <div className="text-[20px] leading-6.25 mb-10">{sub}</div>
    </>
  );
};

const FiveItem = ({
  id,
  title,
  className,
}: {
  id: number;
  title: string;
  className?: string;
}) => {
  return (
    <motion.div
      animate={{ y: [2, -12, 0] }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
      className={cn(
        " flex items-center bg-[#222D23] rounded-xl p-4 lg:p-6 mb-4 md:mb-0 cursor-pointer hover:scale-105 transition-transform duration-300 ease-out",
        className,
      )}
    >
      <Image
        className="w-7 h-7 "
        src={`/img/home-${id}.png`}
        alt="icon"
        width={28}
        height={28}
      />
      <div className="flex-1 md:text-[14px]  lg:text-[16px] leading-6 pl-2 tracking-[-0.5px]">
        {title}
      </div>
    </motion.div>
  );
};

const SevenItem = ({
  id,
  title,
  className,
}: {
  id: number;
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        " flex items-center bg-[#222D23] rounded-xl p-4 lg:p-6 mb-4 md:mb-0 cursor-pointer hover:scale-105 transition-transform duration-300 ease-out",
        className,
      )}
    >
      <Image
        className="w-7 h-7 "
        src={`/img/home-${id}.png`}
        alt="icon"
        width={28}
        height={28}
      />
      <div className="flex-1 md:text-[14px]  lg:text-[16px] leading-6 pl-2 tracking-[-0.5px]">
        {title}
      </div>
    </div>
  );
};

const SevenCard = () => {
  return (
    <div className="w-full">
      <Main>
        <FirstTitle
          className="mb-2"
          title="Calculo cuánto puedo prestarte"
        ></FirstTitle>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, translateY: 40 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ transformOrigin: "bottom center" }}
          className="text-[32px] leading-12 text-center"
        >
          Simulá tu préstamo online en el acto
        </motion.div>
      </Main>
      <div className="mt-22 relative w-full">
        <div className="absolute top-17.5 left-0 w-full h-full bg-[url('/img/home-27.png')] bg-cover bg-center bg-no-repeat"></div>
        <Main>
          <div className="relative sevenBg rounded-[24px] py-20 px-4">
            <div className="text-7 text-center">
              Ingresá el monto que necesitás
            </div>
            <LoanFormInline />
            <div className="text-4 text-center leading-6 text-[rgba(255,255,255,0.56)] max-w-222.5 mx-auto mt-16">
              Los TNA, TEA y CFT varían según el perfil crediticio del
              solicitante, el monto aprobado y el plazo elegido, y están sujetos
              a modificaciones conforme a las condiciones vigentes al momento
              del otorgamiento.
              <br /> TNA de referencia: 99%. TEA de referencia: 158,90%. CFTNA
              con IVA de referencia: 119,79%. CFTEA con IVA de referencia:
              213,24%. <br />
              Las tasas finales aplicables serán informadas al solicitante antes
              de la aceptación del préstamo y constarán en la solicitud y/o
              contrato de otorgamiento.
            </div>
          </div>
        </Main>
      </div>
    </div>
  );
};

const LoanFormInline = () => {
  const [amount, setAmount] = useState("2.954");
  const [afterAmount, setAfterAmount] = useState("0");
  const [isEditor, setIsEditor] = useState(false);
  const MIN = 1000;
  const MAX = 2954000;
  const format = (num: any) => num.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const handleChange = (e: any) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (!value) {
      setAmount("");
      return;
    }
    setAmount(format(value));
  };
  const handleBlur = () => {
    if (!amount) return;
    let num = parseInt(amount.replace(/\./g, ""), 10);
    if (num < MIN) num = MIN;
    if (num > MAX) num = MAX;
    setAmount(format(num.toString()));
  };

  const handleClick = () => {
    const raw = amount.replace(/\./g, ""); // 去掉千分位
    const num = Number(raw);
    const result = num * 1.099825;
    const formatDecimal = (n: number, decimals = 2) => {
      const s = n.toFixed(decimals);
      const parts = s.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return parts.join(",");
    };
    setAfterAmount(formatDecimal(result, 3));
  };

  const handleEditor = () => {
    setIsEditor(!isEditor);
    if (!!isEditor) {
      setAmount("2.954");
    } else {
      handleClick();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-28.55 text-center mt-16 w-full">
        <div className="border-b border-white flex items-center justify-center max-w-[70%]   sm:max-w-100 mx-auto">
          <div className="flex-1">
            {!isEditor ? (
              <div className="w-full p-3  text-center text-[72px] font-semibold color-text">
                ${amount}
              </div>
            ) : (
              <input
                type="text"
                value={amount}
                onChange={handleChange}
                onBlur={handleBlur}
                inputMode="numeric"
                className="w-full p-3 bg-transparent text-center text-[72px] font-semibold outline-none"
              />
            )}
          </div>
          <svg
            onClick={handleEditor}
            className="min-w-7 min-h-7"
            width="28px"
            height="28px"
            viewBox="0 0 28 28"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>图形</title>
            <g
              id="图形"
              stroke="none"
              fill="none"
              fillRule="evenodd"
              strokeWidth={1}
            >
              <g id="编组">
                <path
                  d="M14,0 C6.26818183,0 0,6.26818183 0,14 C0,21.7318182 6.26818183,28 14,28 C21.7318182,28 28,21.7318182 28,14 C28,6.2680135 21.7319865,0 14,0 Z M14,26.7272727 C6.97072729,26.7272727 1.27272729,21.0292727 1.27272729,14 C1.27272729,6.97072729 6.97072729,1.27272729 14,1.27272729 C21.0292727,1.27272729 26.7272727,6.97072729 26.7272727,14 C26.7272727,17.3754826 25.3863675,20.6127142 22.9995408,22.9995408 C20.6127142,25.3863675 17.3754826,26.7272727 14,26.7272727 Z"
                  id="形状"
                  fill="#A0FC99"
                  fillRule="nonzero"
                />
                <path
                  d="M15.9964675,5.12771217 C16.6166086,4.51298483 17.6163264,4.51298483 18.2364675,5.12771217 L20.641922,7.55862125 C20.9349331,7.8500518 21.0996785,8.24626623 21.0996785,8.65953034 C21.0996785,9.07279445 20.9349331,9.46900888 20.641922,9.76043943 L12.521922,17.8804394 C12.4052792,17.9799442 12.2716169,18.0575545 12.1273766,18.1095303 L10.5113333,18.6666667 L20.3636364,18.6666667 C20.7150903,18.6666667 21,18.9515764 21,19.3030303 C21,19.6544842 20.7150903,19.9393939 20.3636364,19.9393939 L6.80070991,19.9391811 C6.75626547,19.9434139 6.71182104,19.940197 6.66737659,19.9295303 L6.72433333,19.9386667 L6.46969696,19.9393939 C6.11824303,19.9393939 5.83333333,19.6544842 5.83333333,19.3030303 C5.83333333,19.2653999 5.83659958,19.2285323 5.84286403,19.1926957 C5.82785701,19.0966789 5.83128416,18.996917 5.85283113,18.8986213 L5.85283113,18.8349849 L7.6346493,13.6422576 C7.66977468,13.4907665 7.74958519,13.3533151 7.86374021,13.2477122 Z M8.42374021,14.3804394 L6.93733333,18.6666667 L7.54633333,18.6666667 L11.3382857,17.3968031 L8.42374021,14.3804394 Z M14.9528311,7.57134854 L8.94555839,13.5786213 L12.1910129,16.8240758 L18.1982857,10.8168031 L14.9528311,7.57134854 Z M17.5237402,5.84043943 C17.2881552,5.61740415 16.9193253,5.61740415 16.6837402,5.84043943 L15.4110129,7.11316671 L18.681922,10.3713485 L19.9546493,9.09862125 C20.0618806,8.98151799 20.1129666,8.82361588 20.0946493,8.66589397 L20.092104,8.57214556 C20.0778358,8.44863913 20.0207625,8.33285651 19.9291948,8.24589397 Z"
                  id="形状结合"
                  fill="#9EF997"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div className="text-5 text-[#A7FCA0] mt-6 text-center">
        Podès pedirentre{" "}
        <span className="font-semibold">$1.000y$2.954.000</span>
      </div>
      {isEditor && (
        <>
          <div className="count-card p-8 w-[80%] sm:w-108 rounded-[24px] flex flex-col items-center mt-16">
            <svg
              width="36px"
              height="36px"
              viewBox="0 0 36 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>形状</title>
              <defs>
                <linearGradient
                  x1="50%"
                  y1="100%"
                  x2="50%"
                  y2="0%"
                  id="linearGradient-1"
                >
                  <stop stopColor="#9BFF93" offset="0%" />
                  <stop stopColor="#FCFEFF" offset="100%" />
                </linearGradient>
              </defs>
              <g
                id="页面-1"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
                opacity="0.99"
              >
                <g
                  id="首页"
                  fillRule="nonzero"
                  transform="translate(-942, -5291)"
                  fill="url(#linearGradient-1)"
                >
                  <g
                    id="编组"
                    fillRule="evenodd"
                    transform="translate(744, 5259)"
                  >
                    <path
                      d="M216,32 C206.059,32 198,40.059 198,50 C198,59.941 206.059,68 216,68 C225.941,68 234,59.941 234,50 C234,40.059 225.941,32 216,32 Z M212.389,57.301 L205.861,50.8875 L207.014,49.199 L212.389,53.074 L225.014,42.699 L226.139,43.574 L212.389,57.301 L212.389,57.301 Z"
                      id="形状"
                      fillRule="nonzero"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <div className="mt-4 text-[22px] text-[#A7FCA0] leading-8.5">
              1 Cuotas de
            </div>
            <div className="text-[28px] text-white font-semibold mt-2">
              ${afterAmount}
            </div>
          </div>
          <div className="flex justify-center mt-16" onClick={handleClick}>
            <div className="apply-btn">
              <div className="apply-btn-cnt  flex items-center justify-center bg-transparent ">
                <div className="apply-btn-cnt-center text-[16px] text-[#02081F] font-medium">
                  Quiero un préstamo
                </div>
              </div>
              <div className="mask"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
