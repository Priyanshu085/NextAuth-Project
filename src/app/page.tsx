import { LoginBtn } from "@/components/auth/login-btn";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

export default function Home() {
  return(
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 to-blue-900">
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          font.className,
        )}>
          🛡️ Auth
        </h1>
        <p className="text-white text-lg">
          A Next.js app with authentication
        </p>
        <div>
          <LoginBtn>
            SignIn
          </LoginBtn>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
        </div>
      </div>
    </main>
  );
}
