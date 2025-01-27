import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  LayoutDashboard,
  LineChart,
  Signal,
  BookOpen,
  Settings,
  LogOut,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface DashboardNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardNav({ className, ...props }: DashboardNavProps) {
  const { user } = useUser();
  const { signOut } = useClerk();

  const navItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
    },
    {
      title: 'Signals',
      icon: Signal,
      href: '/signals',
    },
    {
      title: 'Analytics',
      icon: LineChart,
      href: '/analytics',
    },
    {
      title: 'Education',
      icon: BookOpen,
      href: '/education',
    },
    {
      title: 'Settings',
      icon: Settings,
      href: '/settings',
    },
  ];

  return (
    <div className="hidden border-r bg-card/50 lg:block dark:bg-background/50 backdrop-blur-xl">
      <div className="flex h-full max-h-screen flex-col gap-2">
        {/* <div className="flex h-[60px] items-center border-b px-6">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-2 font-bold"
          >
            <span>TradeJourney</span>
          </NavLink>
        </div> */}
        <ScrollArea className="flex-1 py-6">
          <nav className="grid items-start px-4 text-sm font-medium">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={index}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'hover:bg-transparent'
                    )
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </NavLink>
              );
            })}
          </nav>
        </ScrollArea>
      </div>
    </div>
  );
}
