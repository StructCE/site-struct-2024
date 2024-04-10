export function ServicesContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="my-6 flex flex-wrap justify-center gap-4 font-nunito sm:mx-12 sm:my-8 sm:gap-6 lg:gap-8">
      {children}
    </div>
  );
}
