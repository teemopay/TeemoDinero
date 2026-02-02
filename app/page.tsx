"use client";
import * as motion from "motion/react-client";
import Main from "../components/Main";
import Button from "../components/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";
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
        <div className="md:absolute inset-0 w-full h-full z-10 pt-20 pb-20 md:pt-0 md:pb-0">
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
              className="mb-4 xl:mb-6  text-[20px] lg:text-[30px] lg:leading-8.5 lg:max-w-140 xl:text-[40px] xl:leading-12  xl:max-w-171 home-submit xl:tracking-[-1.5]"
            >
              TeemoDinero: Plataforma de préstamos cumplidora para argentinos
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
      sub: "Evaluamos tus datos para buscar la mejor oferta de crédito disponible.",
      last: "Propuesta a tu medida y 100%.",
    },
    {
      sort: 4,
      id: 6,
      name: "¡Dinero en tu Cuenta！",
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
      sub: "Ser titular de la cuenta.",
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
              title="Servicio humanizado, garantía de derechos"
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
