import Link from "next/link";
export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <Link href="/Concat" className="apply-btn">
      <div className="apply-btn-cnt">{children}</div>
      <div className="mask"></div>
    </Link>
  );
}
