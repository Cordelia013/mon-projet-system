import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Layout } from '@/components/layout/Layout'
import { DemoSection } from '@/components/demo/DemoSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Démonstration du Template',
  description: 'Découvrez toutes les fonctionnalités de ce boilerplate Next.js en action.',
}

export default function DemoPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 text-balance">
              Démonstration Interactive
            </h1>
            <p className="text-xl text-secondary-600 mb-8 text-balance">
              Explorez toutes les fonctionnalités de ce boilerplate Next.js avec des exemples concrets.
            </p>
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-8">
              <p className="text-yellow-800 font-medium">
                💡 Astuce : Appuyez sur <kbd className="bg-yellow-200 px-2 py-1 rounded text-sm font-mono">Alt + G</kbd> pour afficher/masquer la grille de développement
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Grid System Demo */}
      <DemoSection
        title="Système de Grille"
        description="Démonstration du système de grille responsive avec 12 colonnes"
        id="grid-demo"
      >
        <div className="grid-container mb-8">
          <div className="grid-col-12 bg-primary-100 p-4 rounded-lg text-center">
            <span className="text-primary-800 font-medium">12 colonnes</span>
          </div>
        </div>
        
        <div className="grid-container mb-8">
          <div className="grid-col-6 bg-secondary-100 p-4 rounded-lg text-center">
            <span className="text-secondary-800 font-medium">6 colonnes</span>
          </div>
          <div className="grid-col-6 bg-secondary-100 p-4 rounded-lg text-center">
            <span className="text-secondary-800 font-medium">6 colonnes</span>
          </div>
        </div>
        
        <div className="grid-container mb-8">
          <div className="grid-col-4 bg-success-100 p-4 rounded-lg text-center">
            <span className="text-success-800 font-medium">4 colonnes</span>
          </div>
          <div className="grid-col-4 bg-success-100 p-4 rounded-lg text-center">
            <span className="text-success-800 font-medium">4 colonnes</span>
          </div>
          <div className="grid-col-4 bg-success-100 p-4 rounded-lg text-center">
            <span className="text-success-800 font-medium">4 colonnes</span>
          </div>
        </div>
        
        <div className="grid-container">
          <div className="grid-col-12 md:grid-col-8 lg:grid-col-9 bg-warning-100 p-4 rounded-lg text-center">
            <span className="text-warning-800 font-medium">Responsive : 12 → 8 → 9</span>
          </div>
          <div className="grid-col-12 md:grid-col-4 lg:grid-col-3 bg-error-100 p-4 rounded-lg text-center">
            <span className="text-error-800 font-medium">Responsive : 12 → 4 → 3</span>
          </div>
        </div>
      </DemoSection>

      {/* Components Demo */}
      <DemoSection
        title="Composants UI"
        description="Bibliothèque de composants réutilisables et accessibles"
        id="components-demo"
        className="bg-secondary-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Boutons</CardTitle>
              <CardDescription>Différentes variantes et tailles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Button variant="primary" size="sm">Primary Small</Button>
                <Button variant="secondary" size="md">Secondary Medium</Button>
                <Button variant="outline" size="lg">Outline Large</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </CardContent>
          </Card>

          {/* Cards */}
          <Card hover>
            <CardHeader>
              <CardTitle>Cartes</CardTitle>
              <CardDescription>Avec effet hover</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-secondary-600">
                Cette carte a un effet hover activé. Passez votre souris dessus pour voir l'animation.
              </p>
            </CardContent>
          </Card>

          {/* Animations */}
          <Card>
            <CardHeader>
              <CardTitle>Animations</CardTitle>
              <CardDescription>Animations CSS personnalisées</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="animate-fade-in bg-primary-100 p-3 rounded">Fade In</div>
              <div className="animate-slide-up bg-secondary-100 p-3 rounded">Slide Up</div>
              <div className="animate-bounce-in bg-success-100 p-3 rounded">Bounce In</div>
            </CardContent>
          </Card>
        </div>
      </DemoSection>

      {/* Typography Demo */}
      <DemoSection
        title="Typographie"
        description="Système typographique cohérent avec différentes tailles et poids"
        id="typography-demo"
      >
        <div className="space-y-8">
          <div>
            <h1 className="mb-2">Heading 1 - 4xl lg:5xl</h1>
            <h2 className="mb-2">Heading 2 - 3xl lg:4xl</h2>
            <h3 className="mb-2">Heading 3 - 2xl lg:3xl</h3>
            <h4 className="mb-2">Heading 4 - xl lg:2xl</h4>
            <h5 className="mb-2">Heading 5 - lg lg:xl</h5>
            <h6 className="mb-2">Heading 6 - base lg:lg</h6>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Font Sans (Inter)</h4>
              <p className="font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Font Mono (JetBrains)</h4>
              <p className="font-mono text-sm">
                const example = () =&gt; {<br />
                &nbsp;&nbsp;return "Hello World";<br />
                };
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Font Serif (Playfair)</h4>
              <p className="font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </DemoSection>

      {/* Colors Demo */}
      <DemoSection
        title="Palette de Couleurs"
        description="Système de couleurs sémantiques et cohérentes"
        id="colors-demo"
        className="bg-secondary-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Primary */}
          <div>
            <h4 className="font-semibold mb-4">Primary</h4>
            <div className="space-y-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div
                  key={shade}
                  className={`h-8 rounded flex items-center px-3 text-xs font-medium bg-primary-${shade} ${shade >= 500 ? 'text-white' : 'text-primary-900'}`}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>

          {/* Secondary */}
          <div>
            <h4 className="font-semibold mb-4">Secondary</h4>
            <div className="space-y-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div
                  key={shade}
                  className={`h-8 rounded flex items-center px-3 text-xs font-medium bg-secondary-${shade} ${shade >= 500 ? 'text-white' : 'text-secondary-900'}`}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>

          {/* Success */}
          <div>
            <h4 className="font-semibold mb-4">Success</h4>
            <div className="space-y-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div
                  key={shade}
                  className={`h-8 rounded flex items-center px-3 text-xs font-medium bg-success-${shade} ${shade >= 500 ? 'text-white' : 'text-success-900'}`}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>

          {/* Warning */}
          <div>
            <h4 className="font-semibold mb-4">Warning</h4>
            <div className="space-y-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div
                  key={shade}
                  className={`h-8 rounded flex items-center px-3 text-xs font-medium bg-warning-${shade} ${shade >= 500 ? 'text-white' : 'text-warning-900'}`}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>

          {/* Error */}
          <div>
            <h4 className="font-semibold mb-4">Error</h4>
            <div className="space-y-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div
                  key={shade}
                  className={`h-8 rounded flex items-center px-3 text-xs font-medium bg-error-${shade} ${shade >= 500 ? 'text-white' : 'text-error-900'}`}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>
        </div>
      </DemoSection>

      {/* Responsive Demo */}
      <DemoSection
        title="Design Responsive"
        description="Adaptation automatique à tous les appareils"
        id="responsive-demo"
      >
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <div className="bg-primary-100 p-4 rounded-lg text-center">
              <div className="text-primary-800 font-medium">Base</div>
              <div className="text-xs text-primary-600">Toujours visible</div>
            </div>
            <div className="hidden sm:block bg-secondary-100 p-4 rounded-lg text-center">
              <div className="text-secondary-800 font-medium">SM+</div>
              <div className="text-xs text-secondary-600">≥ 640px</div>
            </div>
            <div className="hidden md:block bg-success-100 p-4 rounded-lg text-center">
              <div className="text-success-800 font-medium">MD+</div>
              <div className="text-xs text-success-600">≥ 768px</div>
            </div>
            <div className="hidden lg:block bg-warning-100 p-4 rounded-lg text-center">
              <div className="text-warning-800 font-medium">LG+</div>
              <div className="text-xs text-warning-600">≥ 1024px</div>
            </div>
            <div className="hidden xl:block bg-error-100 p-4 rounded-lg text-center">
              <div className="text-error-800 font-medium">XL+</div>
              <div className="text-xs text-error-600">≥ 1280px</div>
            </div>
            <div className="hidden 2xl:block bg-neutral-100 p-4 rounded-lg text-center">
              <div className="text-neutral-800 font-medium">2XL+</div>
              <div className="text-xs text-neutral-600">≥ 1400px</div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              Redimensionnez votre fenêtre pour voir les éléments apparaître et disparaître selon les breakpoints.
            </p>
          </div>
        </div>
      </DemoSection>

      {/* Code Examples */}
      <DemoSection
        title="Exemples de Code"
        description="Extraits de code pour utiliser les composants"
        id="code-demo"
        className="bg-secondary-50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Grille Responsive</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary-900 text-secondary-100 p-4 rounded-lg text-sm overflow-x-auto">
{`&lt;div className="grid-container"&gt;
  &lt;div className="grid-col-12 md:grid-col-6 lg:grid-col-4"&gt;
    Contenu responsive
  &lt;/div&gt;
  &lt;div className="grid-col-12 md:grid-col-6 lg:grid-col-8"&gt;
    Contenu principal
  &lt;/div&gt;
&lt;/div&gt;`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Composants UI</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary-900 text-secondary-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

&lt;Card hover&gt;
  &lt;CardHeader&gt;
    &lt;CardTitle&gt;Titre&lt;/CardTitle&gt;
  &lt;/CardHeader&gt;
  &lt;CardContent&gt;
    &lt;Button variant="primary"&gt;
      Action
    &lt;/Button&gt;
  &lt;/CardContent&gt;
&lt;/Card&gt;`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </DemoSection>
    </Layout>
  )
}