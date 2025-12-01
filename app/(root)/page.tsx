import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default function Home() {
  return (
    <div className="mx-auto pt-25 max-w-5xl">
      <h1 className="font-bold text-3xl underline">Hello world</h1>
      <form
        action={async () => {
          "use server";
          await signOut({
            redirectTo: ROUTES.SIGN_IN,
          });
        }}
        className="px-10 pt-25"
      >
        <Button type="submit" className="cursor-pointer">
          Sign Out
        </Button>
      </form>
    </div>
  );
}
