# 🎛️ Grid System Template – React + Tailwind v4

Un template prêt à l'emploi pour intégrer un **système de grille modulaire et visuel** dans vos projets React, inspiré des meilleures pratiques UI/UX pros.  
Gestion responsive, overlay développeur (colonnes, gouttières, marges), configuration centralisée : tout pour maquetter et designer vite, bien, et sans prise de tête.

---

## 🚀 Installation

### 1. Cloner ce repo & installer les dépendances

```bash
git clone <url-de-votre-repo>
cd mon-projet-system
npm install

```
2. Lancer le serveur de dev

```bash
npm run dev
```

🏗️ Structure du projet

```bash
src/
├── grid/
│   ├── config/        # Configuration des breakpoints
│   ├── context/       # Provider & contexte React pour la grille
│   ├── hooks/         # Hooks utilitaires
│   ├── components/    # Composants Grid, Overlay, Control...
│   ├── types/         # Typescript types
│   └── index.ts       # Export centralisé
└── App.tsx

```

⚡ Utilisation de la Grid

Branchez la grille dans votre app principale :

```bash
import {
  GridProvider,
  Grid,
  GridOverlay,
  GridControl
} from "./grid";

export default function App() {
  return (
    <GridProvider>
      <GridControl />
      <GridOverlay />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Démo Grid System</h1>
        <Grid>
          <div className="bg-blue-100 p-4">Col 1</div>
          <div className="bg-blue-200 p-4">Col 2</div>
          <div className="bg-blue-300 p-4">Col 3</div>
          <div className="bg-blue-400 p-4">Col 4</div>
        </Grid>
      </div>
    </GridProvider>
  );
}

```
GridControl : bouton pour afficher/masquer la grille ou utiliser Alt+G

GridOverlay : overlay visuel des colonnes, gouttières et marges (dev only)

Grid : composant grille responsive pour aligner vos UI

🎨 Personnalisation
Breakpoints, colonnes, gouttières, marges :
➔ Modifier src/grid/config/breakpoints.ts

Couleur de l’overlay (colonnes, gouttières, marges) :
➔ Personnaliser les props dans GridOverlay

Exemple :

```bash
<GridOverlay color="#f81ce5" borderColor="#f81ce5" opacity={0.14} />

```
Gap et margin Tailwind :
➔ Les mappings sont dans Grid.tsx, adapter si besoin (gap-x-, mx-, etc.)

🧩 Avancé : Hook d’accès à la grid
Accédez à l’état courant avec le hook :

```bash
import { useGrid } from "./grid";

const { currentBreakpoint, isGridVisible, toggleGrid } = useGrid();

```
### Mode Dev Only
L’Overlay Grid ne s’affiche jamais en production (`import.meta.env.PROD`), même si le raccourci ou le bouton sont activés.


🕹️ Raccourcis et Dev Mode
Afficher/masquer la grille :
➔ Raccourci clavier Alt+G
➔ Ou bouton flottant GridControl

Démo responsive :
➔ Redimensionner la fenêtre pour voir le changement de breakpoints (et donc de colonnes, gouttières, marges, overlay...)

🛠️ Bonnes pratiques
Centralisez la config dans breakpoints.ts pour la maintenance

Utilisez l’Overlay pour caler vos designs (supprimez-le en prod !)

Adaptez les couleurs et valeurs à votre charte UI

Pour l’intégration prod, désactivez l’Overlay via une variable d’environnement si besoin

🤔 FAQ
Pourquoi ne pas générer dynamiquement les classes Tailwind ?
➔ Tailwind purge toutes les classes dynamiques, donc seules les classes écrites en dur dans le code seront générées.

Je ne vois pas la grille ou les marges/gouttières ?
➔ Vérifiez que l’Overlay est bien activé, que les valeurs de breakpoints sont correctes, et que vous avez bien redimensionné la fenêtre pour tester tous les cas.

🚩 TODO / Idées d’évolution
Overlay avec dégradé ou pattern custom
Tooltips px/rem sur chaque colonne/gouttière/marge
Version dark mode



👩‍💻 Crédit & Auteurs
Template initié par cordelia guims / Cazalyn
Feel free to fork, modifier, améliorer, pull-requester.
Pour tout bug ou suggestion : cordeliaguims@outlook.com



```yaml



Tu veux une version EN, un ajout “screenshots”, une section “contribution”, ou une table récap’ des props et composants ?  
Dis-moi, je te la complète direct selon ton branding/DA !

```