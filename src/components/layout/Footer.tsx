import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="border-t border-secondary-200 bg-secondary-50">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                NextJS Boilerplate
              </h3>
              <p className="text-secondary-600 mb-4 max-w-md">
                Un boilerplate moderne et optimisé pour vos projets Next.js avec TypeScript et Tailwind CSS.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-secondary-900 mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-secondary-600 hover:text-primary-600 transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="text-sm text-secondary-600 hover:text-primary-600 transition-colors">
                    Démonstration
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-secondary-600 hover:text-primary-600 transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-secondary-600 hover:text-primary-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-secondary-900 mb-4">Légal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-secondary-600 hover:text-primary-600 transition-colors">
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-secondary-600 hover:text-primary-600 transition-colors">
                    Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-secondary-200">
            <p className="text-sm text-secondary-600 text-center">
              © {new Date().getFullYear()} NextJS Boilerplate. Tous droits réservés.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}