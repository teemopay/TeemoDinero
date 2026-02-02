import { cn } from "@/lib/utils";

export default function Main({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="px-5 md:px-15  h-full w-full relative">
      <div className={cn(className, "max-w-300  mx-auto h-full")}>
        {children}
      </div>
    </div>
  );
}
