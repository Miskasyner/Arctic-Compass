"use client";

import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut, Menu } from "lucide-react";
import { useState } from "react";
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
} from "lucide-react";

const mobileNavItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/employment", label: "Employment", icon: Briefcase },
  { href: "/dashboard/housing", label: "Housing", icon: Home },
  { href: "/dashboard/integration", label: "Integration", icon: FileCheck },
  { href: "/dashboard/community", label: "Community", icon: Users },
];

export function Header() {
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="h-16 border-b bg-card flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 -ml-2 hover:bg-muted rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="font-semibold text-lg hidden sm:block">
            {session?.user?.name ? `${session.user.name}'s Journey` : "Your Journey"}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground hidden sm:block">
            {session?.user?.email}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => signOut({ callbackUrl: "/" })}
            title="Sign out"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setMobileOpen(false)}>
          <div className="w-64 h-full bg-card border-r" onClick={(e) => e.stopPropagation()}>
            <div className="h-16 flex items-center gap-2 px-4 border-b">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <Compass className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-primary">Arctic Compass</span>
            </div>
            <nav className="py-4 px-3 space-y-1">
              {mobileNavItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/dashboard" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
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
          </div>
        </div>
      )}
    </>
  );
}
