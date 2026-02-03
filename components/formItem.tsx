"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
const reg =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default function SignupFormDemo() {
  const [active, setActive] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params: Record<string, any> = {
      amount: 0,
      idType: 0,
      name: "",
      email: "",
      lastName: "",
      tel: "",
    };
    Object.keys(params).forEach((k) => {
      params[k] = formData.get(k);
    });
    const hasEmptyValue = Object.values(params).some((v) => !v);
    if (hasEmptyValue) {
      return alert("Check required fields!");
    }

    if (!/^\d{8}$/.test(String(params.idType))) {
      return alert("ID number must be 8 digits");
    }

    if (!reg.test(params.email)) {
      return alert("Enter the correct email");
    }

    if (!active) {
      return alert("Por favor revise el acuerdo.");
    }

    if (window.confirm("Please confirm?")) {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: params }),
      });
    }
  };
  return (
    <div className="w-full p-4   z-10">
      <form onSubmit={handleSubmit}>
        <div className=" grid md:grid-cols-2 gap-6 bg4  p-5 md:p-10 form-bg relative">
          <LabelInputContainer>
            <Input
              id="amount"
              placeholder="Monto solicitado"
              type="number"
              name="amount"
              min={0}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Input
              id="idType"
              placeholder="Número de identificación"
              type="number"
              name="idType"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Input id="name" placeholder="Nombre" type="text" name="name" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Input
              id="email"
              name="email"
              placeholder="Correo electrónico"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Input
              id="lastName"
              placeholder="Apellido"
              type="text"
              name="lastName"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Input id="tel" placeholder="Teléfono" type="number" name="tel" />
          </LabelInputContainer>
        </div>
        <div
          className="z-1 flex items-baseline justify-center text-[16px] leading-6 mt-10 max-w-257.5 mx-auto text-center cursor-pointer"
          onClick={() => setActive(!active)}
        >
          {active ? (
            <Image
              src="/img/about-1.png"
              className="w-4 h-4 mr-1"
              alt="logo"
              width={16}
              height={16}
            />
          ) : (
            <div className="w-4 h-4 min-w-4 min-h-4 border border-white mr-1 rounded-xs"></div>
          )}
          Al enviar su información, significa que ha leído la Política de
          Privacidad de TeemoDinero y acepta que TeemoDinero utilice sus datos
          en todas sus comunicaciones.
        </div>

        <div className="flex items-center justify-center mt-8">
          <button className="apply-btn" type="submit">
            <div className="apply-btn-cnt  flex items-center justify-center ">
              <div className="apply-btn-cnt-center text-[16px] text-[#02081F] font-medium">
                Enviar
              </div>
            </div>
            <div className="mask"></div>
          </button>
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
