'use client'

import { useSession, signOut } from 'next-auth/react'
import { User, Heart, Settings, LogOut, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function UserDropdown() {
  const { data: session } = useSession()

  if (!session?.user) return null

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  const userInitials =
    session.user.name
      ?.split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase() || 'U'

  return (
    <div className="flex items-center gap-3">
      {/* Heart icon for saved properties */}
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <Heart size={20} className="text-gray-600" />
      </button>

      {/* Profile dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={session.user.image || ''}
                alt={session.user.name || ''}
              />
              <AvatarFallback className="text-sm font-medium">
                {userInitials}
              </AvatarFallback>
            </Avatar>
            <ChevronDown size={16} className="text-gray-500" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <div className="px-3 py-2">
            <p className="font-medium text-sm">{session.user.name}</p>
            <p className="text-xs text-gray-500">{session.user.email}</p>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <Heart className="mr-2 h-4 w-4" />
            Saved Properties
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="cursor-pointer text-red-600 focus:text-red-600"
            onClick={handleSignOut}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
