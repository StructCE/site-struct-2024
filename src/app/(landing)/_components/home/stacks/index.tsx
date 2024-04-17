import { FaDocker, FaReact } from "react-icons/fa";
import { StacksContainer } from "./stacksContainer";
import { SiPrisma, SiTailwindcss } from "react-icons/si";
import { StackCard, StackCardIcon, StackCardTitle } from "./stackCard";

const stacksData = [
  {
    name: "Docker",
    icon: <FaDocker />,
    id: 1,
  },
  {
    name: "React",
    icon: <FaReact />,
    id: 2,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    id: 3,
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
    id: 4,
  },
];

export function Stacks() {
  return (
    <StacksContainer>
      {stacksData.map((stack) => (
        <StackCard key={stack.id}>
          <StackCardIcon>{stack.icon}</StackCardIcon>
          <StackCardTitle>{stack.name}</StackCardTitle>
        </StackCard>
      ))}
    </StacksContainer>
  );
}
