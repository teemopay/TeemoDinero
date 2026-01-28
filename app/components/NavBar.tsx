"use client";
import { useState } from "react";
import Link from "next/link";
import Main from "./Main";
import { websit } from "@/config/site";
export default function NavBar() {
  const [active, setActive] = useState(false);
  return (
    <div className="fixed inset-0 h-15 bg-amber-50 z-50">
      <Main>
        <div className="flex items-center justify-between h-full">
          <div>346345</div>
          <div>
            <div className="hidden md:flex ">
              {websit.map((i) => {
                return (
                  <Link
                    className="mx-1"
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
              className={`md:hidden mobile-icon mobile-icon-animate ${active ? "active" : ""}`}
              onClick={() => setActive(!active)}
            >
              <path
                className="line top"
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
