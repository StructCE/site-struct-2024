import { LogoHome } from "./logoHome";

export function Home() {
  return (
    <>
      <section
        className="mb-8 flex w-full flex-col items-center justify-center sm:h-[1000px]"
        id="home"
      >
        <LogoHome />
      </section>
    </>
  );
}
