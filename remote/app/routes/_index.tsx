import type { MetaFunction } from "@remix-run/cloudflare";
import Button from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Remote Project</h1>
      <Button type="button">(from remote)</Button>
    </div>
  );
}
