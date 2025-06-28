import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Layout } from '@/components/layout/Layout'
import Link from 'next/link'

// Server Component par défaut
export default function HomePage() {
  const features = [
    {
      title: 'Next.js 15',
      description: 'La dernière version de Next.js avec App Router et React Server Components.',
      icon: '⚡',
    },
    {
      title: 'TypeScript',
      description: 'Configuration TypeScript stricte pour un développement type-safe.',
      icon: '🔷',
    },
    {
      title: 'Tailwind CSS',
      description: 'Framework CSS utilitaire avec configuration personnalisée.',
      icon: '🎨',
    },
    {
      title: 'Structure Optimisée',
      description: 'Architecture modulaire avec séparation des préoccupations.',
      icon: '🏗️',
    },
    {
      title: 'Configuration Centralisée',
      description: 'Couleurs, typographie, espacement et breakpoints configurables.',
      icon: '⚙️',
    },
    {
      title: 'Composants UI',
      description: 'Bibliothèque de composants réutilisables et accessibles.',
      icon: '🧩',
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 text-balance">
              NextJS Boilerplate
            </h1>
            <p className="text-xl text-secondary-600 mb-8 text-balance">
              Un boilerplate moderne et optimisé pour vos projets Next.js avec TypeScript, 
              Tailwind CSS et React Server Components.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button size="lg">
                  🚀 Essayer le Template
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                📚 Documentation
              </Button>
            </div>
            
            {/* Grid Tip */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-blue-800 text-sm">
                💡 Appuyez sur <kbd className="bg-blue-100 px-2 py-1 rounded text-xs font-mono">Alt + G</kbd> pour voir la grille
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Fonctionnalités
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour démarrer rapidement votre prochain projet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="h-full">
                <CardHeader>
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Demo Preview Section */}
      <section className="py-20 bg-secondary-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Découvrez le Template en Action
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto mb-8">
              Explorez toutes les fonctionnalités avec notre démonstration interactive complète.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">🎨</div>
                <h3 className="font-semibold mb-2">Système de Grille</h3>
                <p className="text-sm text-secondary-600">12 colonnes responsive avec overlay de débogage</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">🧩</div>
                <h3 className="font-semibold mb-2">Composants UI</h3>
                <p className="text-sm text-secondary-600">Bibliothèque complète de composants</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">🎭</div>
                <h3 className="font-semibold mb-2">Animations</h3>
                <p className="text-sm text-secondary-600">Animations CSS fluides et configurables</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">📱</div>
                <h3 className="font-semibold mb-2">Responsive</h3>
                <p className="text-sm text-secondary-600">Design adaptatif pour tous les appareils</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Link href="/demo">
              <Button size="lg" className="text-lg px-8 py-4">
                🎯 Voir la Démonstration Complète
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Prêt à commencer ?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Clonez ce boilerplate et commencez à développer votre application dès maintenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  🚀 Essayer Maintenant
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                📥 Télécharger
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}