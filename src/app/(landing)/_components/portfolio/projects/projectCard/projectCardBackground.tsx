import Link from "next/link";
import CloudinaryImg from "~/components/app/cloudinaryImage";

export function ProjectCardBackground({
  children,
  href,
  imgSrc,
}: React.PropsWithChildren<{ href: string; imgSrc?: string }>) {
  return (
    <>
      <CloudinaryImg
        width="460"
        height="250"
        crop="fill"
        src={imgSrc ?? ""}
        alt="Imagem do Projeto"
        className="rounded-[8px]"
      />
      <Link
        href={href}
        target="_blank"
        className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded-[8px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 hover:duration-700"
      >
        {children}
      </Link>
    </>
  );
}
