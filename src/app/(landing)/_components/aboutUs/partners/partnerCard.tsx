import Link from "next/link";
import CloudinaryImg from "~/components/app/cloudinaryImage";

function PartnerCard({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      target="_blank"
      className="delay-50 size-[92px] rounded-full bg-struct-7 transition ease-in-out  hover:scale-[1.03] hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.2)] sm:size-28"
    >
      {children}
    </Link>
  );
}

function PartnerCardImg({ src, alt }: { src: string; alt: string }) {
  return (
    <CloudinaryImg
      alt={alt}
      src={src}
      width={112}
      height={112}
      className="h-[92px] w-[92px] rounded-full sm:h-[112px] sm:w-[112px]"
    />
  );
}

export { PartnerCard, PartnerCardImg };
