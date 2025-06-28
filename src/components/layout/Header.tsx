import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary-200 bg-white/80 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-primary-600">
              NextJS Boilerplate
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                href="/" 
                className="text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors"
              >
                Accueil
              </Link>
              <Link 
                href="/demo" 
                className="text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors"
              >
                Démo
              </Link>
              <Link 
                href="/about" 
                className="text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors"
              >
                À propos
              </Link>
              <Link 
                href="/contact" 
                className="text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Se connecter
            </Button>
            <Link href="/demo">
              <Button size="sm">
                🚀 Essayer
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}