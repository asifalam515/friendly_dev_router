import type { Route } from "./+types/index";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Dev|Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div>New webstie</div>;
}
