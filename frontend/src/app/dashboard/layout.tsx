import { ReactNode } from "react"
import './dashboard.css'
import C_Navigation from "./components/Navigation"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <C_Navigation>
      {children}
    </C_Navigation>
  )
}