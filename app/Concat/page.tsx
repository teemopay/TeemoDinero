"use client";
import FormItem from "@/components/formItem";
import Main from "../../components/Main";
import * as motion from "motion/react-client";

export default function Concat() {
  return (
    <div>
      <div className="relative bg-[url('/img/about.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center pb-31 pt-30">
        <Main className="flex items-center justify-center">
          <div className="relative w-full">
            <motion.div
              initial={{ opacity: 0, translateY: 40 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center text-[48px] font-semibold color-text mb-12"
            >
              Contáctenos
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 40 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <FormItem />
            </motion.div>
          </div>
        </Main>
      </div>
    </div>
  );
}
