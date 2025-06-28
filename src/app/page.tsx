import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Layout } from '@/components/layout/Layout'

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
              <Button size="lg">
                Commencer
              </Button>
              <Button variant="outline" size="lg">
                Documentation
              </Button>
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
            <Button variant="secondary" size="lg">
              Télécharger
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  )
}