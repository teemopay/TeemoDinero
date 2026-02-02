"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import Main from "./Main";
import Image from "next/image";
import { websit } from "@/config/site";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={cn(
        "fixed inset-0 h-20  z-50 transition-all duration-300",
        `${scrolled ? "bg-[#010D05]/80  backdrop-blur-md" : "bg-transparent"}`,
      )}
    >
      <Main>
        <div className="flex items-center justify-between h-full">
          <Link href="/">
            <Image src="/img/logo-2.png" alt="logo" width={196} height={40} />
          </Link>
          <div>
            <div className="hidden  lg:flex md:gap-x-10">
              {websit.map((i) => {
                return (
                  <Link
                    className={cn(
                      "text-[16px] leading-4  cursor-pointer transition-colors duration-300",
                      `${
                        i.href === pathname
                          ? "text-[#FFFFFF] font-semibold"
                          : "text-[#A2A2A2] "
                      }`,
                    )}
                    key={i.id}
                    href={i.href}
                    target={i.target}
                  >
                    {i.name}
                  </Link>
                );
              })}
            </div>
            <svg
              viewBox="0 0 100 100"
              width="60"
              className={`lg:hidden mobile-icon mobile-icon-animate ${active ? "active" : ""}`}
              onClick={() => setActive(!active)}
            >
              <path
                className="line top "
                d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381"
              />
              <path className="line" d="m 30,50 h 40" />
              <path
                className="line bottom"
                d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381"
              />
            </svg>
            <div
              className={`fixed md:hidden right-0 top-0 bg-amber-500 z-[-1] w-[70%] sm:w-[50%] h-100 mobile-clip ${active ? "active" : ""}`}
            ></div>
          </div>
        </div>
      </Main>
    </div>
  );
}
