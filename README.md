## Tecnologias

- [T3 App](https://create.t3.gg/en/introduction)
- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

---

## Bibliotecas

- [shadcn](https://ui.shadcn.com/docs) -> components
- [lucide](https://lucide.dev/icons/) -> icons
- [react-icons/fa](https://react-icons.github.io/react-icons/) -> icons
- [cloudnary](https://next.cloudinary.dev/) -> imagens
- [framer-motion](https://www.framer.com/motion/) -> animações
- [react-type-animation](https://react-type-animation.netlify.app/) -> animações
- [emailjs](https://www.emailjs.com/) -> email form
- [googlemaps-embed-api](https://developers.google.com/maps/documentation/embed/quickstart) -> mapa

---

## Banco de Dados

Estamos usando mysql para banco de dados, o qual necessita de um container Docker para rodar. Assim, vamos instalar primeiramente o Docker:

```bash
sudo snap install docker
```

Tendo o Docker instalado na sua máquina, você poderá rodar o arquivo `start-database.sh` que irá criar um container para o nosso banco de dados. Se o container já estiver criado e você quiser iniciar ele, comente no arquivo `.sh` a linha com o comando `docker run ...` e descomente a com o comando `docker start...` e, então, o execute.

Mas antes certifique-se de que você tem seu arquivo `.env` seguindo o exemplo do `.env.example`. Para a criação de banco de dados é importante essa variável de ambinete:

```bash
DATABASE_URL="mysql://root:password@localhost:3306/site-struct-2024"
```

No lugar de password, coloque uma senha aleatória para o seu banco de dados.

Por fim, empurre o esquema do seu prisma para o banco de dados rodando no container docker com o comando:

```bash
pnpm db:push
```

### Seed

Para rodar a seed, certifique-se de que todas as depêndencias estão instaladas rondado o comando:

```bash
pnpm i
```

Depois, você pode rodar a seed com o comando:

```bash
pnpm db:seed
```

Verifique as saídas no terminal, pois avisará caso ocorra algum erro na população do banco de dados.

## Organização

- `~/app/` -> onde está a aplicação, ou seja, as páginas de fato
- `~/app/page/\_components/` -> onde estão os componentes específicos dessa página, chamada "page"
- `~/components/app/` -> componentes que serão reutilizados em diversas páginas ou utilizados no RootLayout da aplicação
- `~/components/ui/` -> componentes do shadcn
- `~/hooks/` -> onde ficarão os custom hooks da aplicação
- `~/lib/` -> onde ficarão funções utilitárias ou auxiliares, para serem utilizadas em diversos locais do repositório
- `~/server/` -> aqui fica o backend
- `~/server/api/routers/` -> onde ficam as rotas do tRPC. Cada rota com suas devidas procedures
- `~/server/api/root.ts` -> aqui ocorre a exportação, para a aplicação, das rotas criadas em `~/server/api/routers/`
