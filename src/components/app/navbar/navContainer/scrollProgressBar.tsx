export function ScrollProgressBar({
  scrollProgress,
}: {
  scrollProgress: number;
}) {
  return (
    <div
      style={{ width: `${scrollProgress}%` }}
      className="transition-width absolute bottom-0 left-0 h-[3px] w-full bg-struct-7/60 duration-75 ease-in-out sm:h-[4px]"
    />
  );
}
