export function ProjectCardTitle({ children }: { children: string }) {
  return (
    <h2 className="font-oxanium text-3xl font-bold max-[420px]:text-[1.5rem]">
      {children}
    </h2>
  );
}
