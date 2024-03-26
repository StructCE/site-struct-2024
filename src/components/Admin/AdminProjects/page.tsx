import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/server";
import AdminProjectsContainer from "./AdminProjectsContainer/page";
import { unstable_noStore as noStore } from "next/cache";

export default async function AdminPortfolio() {
  noStore();
  const projects = await api.project.getAll.query();
  return (
    <section className="flex h-fit w-full items-center justify-center">
      <AdminProjectsContainer projects={projects} />
    </section>
  );
}
