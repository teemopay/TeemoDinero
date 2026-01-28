export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-5 md:px-15  h-full w-full">
      <div className="max-w-300  bg-amber-300 mx-auto h-full">{children}</div>
    </div>
  );
}
