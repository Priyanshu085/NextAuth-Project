"use client"

interface LoginBtnProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChilld?: boolean;
}

export const LoginBtn = ({ children, mode="redirect", asChilld = false } : LoginBtnProps) => {

  return (
    <button>
      {children}
    </button>
  );
};