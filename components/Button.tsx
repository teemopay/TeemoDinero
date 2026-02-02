import Link from "next/link";
export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <Link href="/Concat" className="apply-btn">
      <div className="apply-btn-cnt  flex items-center justify-center ">
        <div className="apply-btn-cnt-center text-[16px] text-[#02081F] font-medium">
          {children}
        </div>
      </div>
      <div className="mask"></div>
    </Link>
  );
}
