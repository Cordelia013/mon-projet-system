# 🚀 NextJS Boilerplate

Un boilerplate moderne et optimisé pour vos projets Next.js avec TypeScript, Tailwind CSS, React Server Components et Sanity CMS.

## ✨ Fonctionnalités

- **Next.js 15** - Dernière version avec App Router et React Server Components
- **TypeScript** - Configuration stricte pour un développement type-safe
- **Tailwind CSS Modulaire** - Configuration modulaire avec système de grille avancé
- **Sanity CMS** - CMS headless moderne et flexible
- **Structure optimisée** - Architecture modulaire avec séparation des préoccupations
- **Configuration centralisée** - Couleurs, typographie, espacement et breakpoints
- **Composants UI** - Bibliothèque de composants réutilisables et accessibles
- **SEO optimisé** - Métadonnées configurées pour le référencement
- **Responsive design** - Design adaptatif pour tous les appareils
- **Grid System** - Système de grille avec overlay de débogage (Alt+G)

## 🏗️ Structure du projet

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout racine
│   └── page.tsx           # Page d'accueil
├── components/            # Composants React
│   ├── ui/               # Composants UI réutilisables
│   │   └── GridOverlay.tsx # Overlay de grille (Alt+G)
│   ├── layout/           # Composants de mise en page
│   └── sanity/           # Composants Sanity
├── config/               # Configuration centralisée
│   └── tailwind/         # Configuration Tailwind modulaire
│       ├── colors.js     # Palette de couleurs
│       ├── fonts.js      # Configuration des polices
│       ├── screens.js    # Points de rupture
│       ├── spacing.js    # Système d'espacement
│       ├── grid.js       # Configuration de grille
│       ├── animations.js # Animations et transitions
│       └── typography.js # Configuration typographique
├── lib/                  # Utilitaires et helpers
│   └── sanity.ts         # Configuration Sanity
├── types/                # Types TypeScript
└── styles/               # Styles additionnels
cms/                      # Sanity Studio
├── schemaTypes/          # Schémas de contenu
└── sanity.config.ts      # Configuration Sanity
```

## 🎨 Configuration Tailwind Modulaire

### Structure modulaire

La configuration Tailwind est maintenant organisée en modules séparés dans `src/config/tailwind/` :

- **colors.js** - Palette de couleurs complète avec couleurs sémantiques
- **fonts.js** - Configuration des familles de polices
- **screens.js** - Points de rupture responsive
- **spacing.js** - Système d'espacement cohérent
- **grid.js** - Configuration du système de grille
- **animations.js** - Animations et transitions
- **typography.js** - Configuration typographique

### Système de grille

Le système de grille inclut :

- **12 colonnes** par défaut
- **Gaps configurables** (0 à 24)
- **Marges automatiques** et personnalisées
- **Container responsive** avec max-widths
- **Utilitaires de grille** (.grid-col-1 à .grid-col-12)
- **Classes responsive** (sm:, md:, lg:)

### Grid Overlay (Alt+G)

Un overlay de grille visuel pour le développement :

- **Activation** : Alt+G
- **Affichage** : Grille de 12 colonnes avec gaps
- **Informations** : Nombre de colonnes, gap, max-width
- **Couleurs** : Configurables dans colors.js

## 🚀 Installation

1. **Cloner le projet**
```bash
git clone <url-du-repo>
cd nextjs-boilerplate
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration Sanity**
```bash
# Créer un projet Sanity (si pas déjà fait)
cd cms
npx sanity init

# Copier les variables d'environnement
cp env.local .env.local
# Éditer .env.local avec vos identifiants Sanity
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

5. **Lancer Sanity Studio**
```bash
npm run sanity
```

6. **Ouvrir dans le navigateur**
```
Frontend: http://localhost:3000
Sanity Studio: http://localhost:3333
```

## 📝 Scripts disponibles

- `npm run dev` - Démarre le serveur de développement Next.js
- `npm run build` - Construit l'application pour la production
- `npm run start` - Démarre le serveur de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run type-check` - Vérifie les types TypeScript
- `npm run sanity` - Démarre Sanity Studio en développement
- `npm run sanity:build` - Construit Sanity Studio
- `npm run sanity:deploy` - Déploie Sanity Studio

## 🎨 Utilisation du système de grille

### Grid Container

```tsx
<div className="grid-container">
  <div className="grid-col-12 md:grid-col-6 lg:grid-col-4">
    Contenu responsive
  </div>
</div>
```

### Grid Overlay

Appuyez sur **Alt+G** pour afficher/masquer l'overlay de grille pendant le développement.

### Classes utilitaires

```css
/* Colonnes de base */
.grid-col-1 à .grid-col-12

/* Responsive */
.sm:grid-col-1 à .sm:grid-col-12
.md:grid-col-1 à .md:grid-col-12
.lg:grid-col-1 à .lg:grid-col-12

/* Debug */
.debug-grid - Affiche une grille de débogage
.debug-container - Outline le container
```

## 🧩 Composants UI

### Container

Composant pour centrer et limiter la largeur du contenu :

```tsx
import { Container } from '@/components/ui/Container'

<Container size="lg">
  {/* Contenu */}
</Container>
```

### Button

Composant bouton avec plusieurs variantes :

```tsx
import { Button } from '@/components/ui/Button'

<Button variant="primary" size="lg">
  Cliquez ici
</Button>
```

### Card

Composant carte pour organiser le contenu :

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

<Card>
  <CardHeader>
    <CardTitle>Titre</CardTitle>
  </CardHeader>
  <CardContent>
    Contenu de la carte
  </CardContent>
</Card>
```

## 📚 Sanity CMS

### Schémas de contenu

Le CMS inclut les schémas suivants :

- **Page** - Pages statiques du site
- **Post** - Articles de blog
- **Author** - Auteurs des articles
- **Category** - Catégories d'articles

### Utilisation des données Sanity

```tsx
import { client, queries } from '@/lib/sanity'

// Récupérer tous les articles
const posts = await client.fetch(queries.getAllPosts)

// Récupérer un article par slug
const post = await client.fetch(queries.getPostBySlug, { slug: 'mon-article' })
```

### Composant PortableText

Pour afficher le contenu riche de Sanity :

```tsx
import { PortableText } from '@/components/sanity/PortableText'

<PortableText value={post.content} />
```

## 🔧 Personnalisation

### Modifier les couleurs

1. Éditez `src/config/tailwind/colors.js`
2. Les couleurs sont automatiquement appliquées via Tailwind CSS

### Ajouter de nouveaux composants

1. Créez votre composant dans `src/components/ui/`
2. Utilisez les utilitaires de `src/lib/utils.ts` pour la gestion des classes CSS
3. Exportez votre composant depuis le fichier index approprié

### Modifier la grille

1. Éditez `src/config/tailwind/grid.js`
2. Ajustez le nombre de colonnes, gaps, marges
3. Personnalisez les couleurs de l'overlay dans `colors.js`

### Modifier la typographie

1. Éditez `src/config/tailwind/typography.js`
2. Ajoutez vos polices Google Fonts dans `src/app/globals.css`

### Ajouter des schémas Sanity

1. Créez un nouveau fichier dans `cms/schemaTypes/`
2. Ajoutez le schéma à `cms/schemaTypes/index.ts`
3. Redémarrez Sanity Studio

## 📱 Responsive Design

Le boilerplate utilise une approche mobile-first avec les breakpoints suivants :

- **xs**: 475px et plus
- **sm**: 640px et plus  
- **md**: 768px et plus
- **lg**: 1024px et plus
- **xl**: 1280px et plus
- **2xl**: 1400px et plus

## 🔍 SEO

Les métadonnées SEO sont configurées dans :
- `src/app/layout.tsx` - Métadonnées globales
- Pages individuelles - Métadonnées spécifiques
- Schémas Sanity - Champs SEO personnalisés

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connectez votre repository GitHub à Vercel
2. Ajoutez les variables d'environnement Sanity
3. Vercel détectera automatiquement Next.js
4. Déployez en un clic

### Variables d'environnement

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### Autres plateformes

1. Construisez l'application : `npm run build`
2. Déployez le dossier `.next` selon votre plateforme

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Si vous avez des questions ou rencontrez des problèmes :

- Ouvrez une issue sur GitHub
- Consultez la documentation Next.js
- Consultez la documentation Sanity
- Rejoignez la communauté Discord

---

**Bon développement ! 🎉**