/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-base-to-string */
import { PrismaClient } from "@prisma/client";
import { z, type ZodError } from "zod";
import { data, type dataSchema } from "./seedData";
const prisma = new PrismaClient();

const memberDataResSchema = z.object({
  name: z.string(),
  logoPublicId: z.string().optional(),
  directorships: z.object({
    create: z.array(
      z.object({
        directorshipId: z.string(),
        directorshipRoleId: z.string(),
      }),
    ),
  }),
  projects: z
    .object({
      create: z.array(
        z.object({
          projectId: z.string(),
          projectRoleId: z.string(),
        }),
      ),
    })
    .optional(),
});

type memberDataResType = z.infer<typeof memberDataResSchema>;

async function memberDataFactory(
  member: dataSchema["Members"][0],
): Promise<memberDataResType | ZodError> {
  const [name, directorshipsData, logoPublicId, projectsData] = member;

  const directorships = await Promise.all(
    directorshipsData.map(async (directorship) => ({
      directorshipId: (
        await prisma.directorship.findFirst({
          where: {
            name: directorship[0],
          },
        })
      )?.id,
      directorshipRoleId: (
        await prisma.directorshipRole.findFirst({
          where: {
            name: directorship[1],
          },
        })
      )?.id,
    })),
  );

  let projects;
  if (projectsData !== undefined) {
    projects = await Promise.all(
      projectsData.map(async (project) => ({
        projectId: (
          await prisma.project.findFirst({
            where: {
              name: project[0],
            },
          })
        )?.id,
        projectRoleId: (
          await prisma.projectRole.findFirst({
            where: {
              name: project[1],
            },
          })
        )?.id,
      })),
    );
  }

  const data = {
    name: name,
    logoPublicId: logoPublicId,
    directorships: {
      create: directorships,
    },
    projects: projects ? { create: projects } : undefined,
  };

  const res = memberDataResSchema.safeParse(data);
  if (res.success) return res.data;
  return res.error;
}

async function createMembers(members: dataSchema["Members"]) {
  for (const member of members) {
    try {
      const data = await memberDataFactory(member);
      const res = await prisma.member.create({
        data,
      });
      console.log(`Membro ${member[0]} criado - ` + JSON.stringify(res));
    } catch (e) {
      console.log(
        `Erro na criação do membro ${member[0]} - ` + JSON.stringify(e),
      );
    }
  }
}

async function createDirectorships(names: dataSchema["Directorships"]) {
  for (const name of names) {
    try {
      const res = await prisma.directorship.create({
        data: {
          name: name,
        },
      });
      console.log(`Diretoria ${name} criada - ` + JSON.stringify(res));
    } catch (e) {
      console.log(
        `Erro na criação da diretoria ${name} - ` + JSON.stringify(e),
      );
    }
  }
}

async function createDirectorshipRoles(
  names: dataSchema["DirectorshipsRoles"],
) {
  for (const name of names) {
    try {
      const res = await prisma.directorshipRole.create({
        data: {
          name: name,
        },
      });
      console.log(`Cargo ${name} de diretoria criado - ` + JSON.stringify(res));
    } catch (e) {
      console.log(
        `Erro na criação do cargo ${name} de diretoria - ` + JSON.stringify(e),
      );
    }
  }
}

async function createProjects(projects: dataSchema["Projects"]) {
  for (const project of projects) {
    try {
      const res = await prisma.project.create({
        data: {
          name: project[0],
          description: project[1],
          link: project[2],
          logoPublicId: project[3],
          show: project[4],
        },
      });
      console.log(`Projeto ${project[0]} criado - ` + JSON.stringify(res));
    } catch (e) {
      console.log(
        `Erro na criação do projeto ${project[0]} - ` + JSON.stringify(e),
      );
    }
  }
}

async function createProjectRoles(names: dataSchema["ProjectsRoles"]) {
  for (const name of names) {
    try {
      const res = await prisma.projectRole.create({
        data: {
          name: name,
        },
      });
      console.log(`Cargo ${name} de projetos criado - ` + JSON.stringify(res));
    } catch (e) {
      console.log(
        `Erro na criação do cargo ${name} de projetos - ` + JSON.stringify(e),
      );
    }
  }
}

async function createPartners(partners: dataSchema["Partners"]) {
  for (const partner of partners) {
    try {
      const res = await prisma.partner.create({
        data: {
          name: partner[0],
          link: partner[1],
          logoPublicId: partner[2],
        },
      });
      console.log(`Parceiro ${partner[0]} criado - ` + JSON.stringify(res));
    } catch (e) {
      console.log(
        `Erro na criação do parceiro ${partner[0]} - ` + JSON.stringify(e),
      );
    }
  }
}

async function main() {
  await createPartners(data.Partners);
  await createDirectorships(data.Directorships);
  await createDirectorshipRoles(data.DirectorshipsRoles);
  await createProjects(data.Projects);
  await createProjectRoles(data.ProjectsRoles);
  await createMembers(data.Members);
  await prisma.$disconnect();
}

main().catch((e) => console.log(e));
