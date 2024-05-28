"use client"

import Link from "next/link"
import { Button } from "../ui/button"

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({href, label}: BackButtonProps) => {
  return (
    <Button
      size="sm"
      variant="link"
      className="w-full font-normal"
      asChild
    >
      <Link href={href}>
        {label}
      </Link>
    </Button>
  )
}

export default BackButton