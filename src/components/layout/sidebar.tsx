"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Compass,
  LayoutDashboard,
  Briefcase,
  Home,
  FileCheck,
  Users,
  BookOpen,
  FileText,
  User,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/employment", label: "Employment", icon: Briefcase },
  { href: "/dashboard/housing", label: "Housing", icon: Home },
  { href: "/dashboard/integration", label: "Integration", icon: FileCheck },
  { href: "/dashboard/community", label: "Community", icon: Users },
  { href: "/dashboard/stories", label: "Stories", icon: BookOpen },
  { href: "/dashboard/materials", label: "Materials", icon: FileText },
  { href: "/dashboard/profile", label: "Profile", icon: User },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-card min-h-screen">
      {/* Logo */}
      <div className="h-16 flex items-center gap-2 px-4 border-b">
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
          <Compass className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="font-semibold text-primary">Arctic Compass</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t">
        <div className="text-xs text-muted-foreground">
          Salla, Lapland
        </div>
      </div>
    </aside>
  );
}
