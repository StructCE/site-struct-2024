export function MobileNavDefaultContent({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-4 flex items-center justify-between font-oxanium font-bold">
      {children}
    </div>
  );
}
