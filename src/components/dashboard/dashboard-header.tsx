import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" flex h-16 items-center justify-between pl-10 pr-10">
        <div className="flex items-center">
          <Link to="/dashboard" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dtgmhmxlx/image/upload/v1737832292/algomatic/DALL_E_2025-01-25_01.19.26_-_Auri_is_a_cute_and_magnetic_humanoid_AI_character_with_an_approachable_and_modern_design._She_has_a_youthful_and_friendly_appearance_with_soft_glowin_avl6ch.webp"
              alt="Auri Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="ml-2 text-xl font-semibold">Auri</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-primary text-[11px] font-medium text-primary-foreground flex items-center justify-center">
              4
            </span>
          </Button>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: 'h-9 w-9',
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}
