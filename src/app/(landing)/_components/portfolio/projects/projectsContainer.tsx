export function ProjectsContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center lg:w-[1024px] lg:flex-row">
      {children}
    </div>
  );
}
