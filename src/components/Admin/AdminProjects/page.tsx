import { api } from "~/trpc/server";
import AdminProjectsContainer from "./AdminProjectsContainer/page";

export default async function AdminPortfolio() {
  const projects = await api.project.getAll.query();
  return (
    <section className="flex h-fit w-full items-center justify-center">
      <AdminProjectsContainer projects={projects} />
    </section>
  );
}
