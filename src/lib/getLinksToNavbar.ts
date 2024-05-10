import { getServerAuthSession } from "~/server/auth";

let links = [
  {
    content: "Serviços",
    href: "/#servicos",
    id: 1,
  },
  {
    content: "Portfólio",
    href: "/#portfolio",
    id: 2,
  },
  {
    content: "Sobre Nós",
    href: "/#sobrenos",
    id: 3,
  },
  {
    content: "Contato",
    href: "/#contato",
    id: 4,
  },
];

export async function getLinksToNavbar() {
  if (links.length < 5) {
    const session = await getServerAuthSession();

    if (session) {
      links = [
        ...links,
        session.user && { content: "Admin", href: "/dashboard", id: 5 },
      ];
    }
  }

  return links;
}
