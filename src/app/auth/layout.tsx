import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

const AuthLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className={cn(
      "flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 to-blue-900",
      font.className
    )}>
      {children}
    </div>
  )
}

export default AuthLayout