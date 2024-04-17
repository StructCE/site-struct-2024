export function ProjectCardTitle({ children }: { children: string }) {
  return (
    <p className="font-oxanium text-3xl font-bold max-[420px]:text-[1.5rem]">
      {children}
    </p>
  );
}
