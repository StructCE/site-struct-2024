import Link from "next/link";

export function LogoLinkItem() {
  return (
    <Link
      href="/#home"
      className="cursor-pointer text-[28px] font-bold text-struct-7 sm:text-[36px]"
    >
      <span className="text-struct-2">{"{"}</span>
      <span className="hover:[text-shadow:_0_0_5px_rgb(255_255_255_/_40%)]">
        struct
      </span>
      <span className="text-struct-2">{"}"}</span>
    </Link>
  );
}
