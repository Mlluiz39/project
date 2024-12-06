import { Droplet, Home, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const categories = [
  { name: 'Esporte', href: '#sport' },
  { name: 'Casual', href: '#casual' },
  { name: 'Infantil', href: '#kids' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-2">
          <Droplet className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">AquaStyle</span>
        </div>

        <NavigationMenu className="mx-auto hidden md:flex">
          <NavigationMenuList>
            {categories.map(category => (
              <NavigationMenuItem key={category.name}>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href={category.href}
                >
                  {category.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Home className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
