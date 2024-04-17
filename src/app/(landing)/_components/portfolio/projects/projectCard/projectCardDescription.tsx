export function ProjectCardDescription({ children }: { children: string }) {
  return (
    <p className="text-1xl font-nunito text-[#d3d3d4] max-[420px]:text-[1rem]">
      {children}
    </p>
  );
}
