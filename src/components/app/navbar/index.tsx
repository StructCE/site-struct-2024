import { ChevronDown, MenuIcon } from "lucide-react";
import { NavContainer } from "./navContainer";
import { LinkItem, LinksList, LogoLinkItem } from "./linksList";
import { getLinksToNavbar } from "~/lib/getLinksToNavbar";
import {
  MobileNav,
  MobileNavDefaultContent,
  MobileNavMenuContent,
  MobileNavMenuTrigger,
} from "./mobileNav";

export async function Navbar() {
  const links = await getLinksToNavbar();

  return (
    <NavContainer>
      {/* desktop nav */}
      <LinksList className="hidden gap-[4vw] sm:flex">
        <LogoLinkItem />
        {links.map((link) => (
          <LinkItem href={link.href} key={link.id}>
            {link.content}
          </LinkItem>
        ))}
      </LinksList>

      {/* mobile nav */}
      <MobileNav>
        <MobileNavDefaultContent>
          <LogoLinkItem />
          <MobileNavMenuTrigger>
            <MenuIcon size={42} />
          </MobileNavMenuTrigger>
        </MobileNavDefaultContent>

        <MobileNavMenuContent>
          <LinksList className="flex flex-col gap-4">
            <LogoLinkItem />
            {links.map((link) => (
              <LinkItem href={link.href} key={link.id}>
                {link.content}
              </LinkItem>
            ))}
          </LinksList>
          <MobileNavMenuTrigger>
            <ChevronDown size={20} />
          </MobileNavMenuTrigger>
        </MobileNavMenuContent>
      </MobileNav>
    </NavContainer>
  );
}
