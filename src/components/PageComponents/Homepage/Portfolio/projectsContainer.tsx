"use client"
import { Project } from "@prisma/client"
import { motion } from "framer-motion"
import ProjectContainer from "./projectContainer"

export default function ProjectsContainer({projects}: {projects: Project[]}) {
	return(
		<div className="items-center justify-center m-8">
			{projects.map((project, index) => {
				if (index % 2 === 0) {
					const nextProject = projects[index+1]
					return (
						<motion.div
							initial={{ opacity: "var(--opacity-from)", x: "var(--x-from)" }}
							whileInView={{ opacity: "var(--opacity-to)", x: "var(--x-to)" }}
							exit={{ opacity: "var(--opacity-from)", x: "var(--x-to)" }}
							transition={{ duration: 1, delay: 0.1 }}
							className="w-full text-lg [--opacity-from:0%][--opacity-to:100%] [--x-from:100px] [--x-to:0px] flex max-lg:flex-col items-center justify-center">
							<ProjectContainer project={project}/>
							{nextProject?
								<ProjectContainer project={nextProject}/>								
								:
								null
							}
						</motion.div>
					)
				}
			})
			}
		</div>
    )
}   