# Théorie

## 1. Qu’est-ce qu’un design system ?
Ensemble de règles et recommendations visant à rendre l'expérience de navigation plus intuitive, cohérente, compréhensible.

## 2. Pourquoi est-il important dans le développement d’applications ?
Car il permet de gagner du temps et de l'argent, de proposer une constance entre les applications, de garantir une adoption des utilisateurs à une interface plus rapide, bien que l'utilisation de DS rend les interfaces très monotones et limite la créativité.

## 3. Quels sont les principaux éléments d’un design système (par exemple : typographie, couleurs, boutons, etc.) ?
- Couleurs
- Typographie
- Composants
- Iconographie
- Interactions
- Navigation
- Effets visuels
- Forme des éléments

## 3.1 Rédigez une liste de 5 éléments clés d’un design système avec un exemple pour chacun (par exemple : couleur primaire, typographie par défaut, etc.).
- Couleurs : palette avec couleurs primaires, secondaires, etc.
- Composants : bouton d'action
- Navigation : en-tête toujours disponible, liens bien en évidence
- Effets visuels : transitions systématique et discrète entre pages
- Forme des éléments : apparence géométrique, sans bords arrondis

# Analyse des composants
| #  | Question |
|----|----------|
| 1  | Est-il suffisamment générique ? |
| 2  | Est-il réutilisable dans différents contextes sans modification ? |
| 3  | Ses propriétés sont-elles bien définies ? |
| 4  | Certaines de ses propriétés sont-elles inutiles ? |
| 5  | Certaines de ses propriétés pourraient-elles être mieux nommées ? |
| 6  | Suit-il les règles du design système ? |
| 7  | Respecte-t-il les couleurs, les espacements et la typographie définis ? |
| 8  | Pourrais-je rendre mon composant plus flexible ? Comment ? |
| 9  | Pourrais-je rendre mon composant plus personnalisable ? Comment ? |
| 10 | Est-ce que d’autres composants pourraient en avoir besoin ? |
| 11 | Mon composant est-il bien documenté dans Storybook ? |
| 12 | Est-il compréhensible par un autre développeur ? |
| 13 | Les stories couvrent-elles suffisamment de cas d’usage ou d'états ? |

## Bouton
| #  | Réponse |
|----|---------|
| 1  | &check; |
| 2  | &check; |
| 3  | &check; |
| 4  | &cross; |
| 5  | &cross; |
| 6  | &check; |
| 7  | &check; |
| 8  | &cross; |
| 9  | &check; Arrondi des bords, couleur du texte, comportement au hover, icônes...|
| 10 | &check; Formulaires, boîte de dialogue, alerte, notification...|
| 11 | &check; |
| 12 | &check; |
| 13 | &check; |

## Input
| #  | Réponse |
|----|---------|
| 1  | &check; |
| 2  | &check; |
| 3  | &check; |
| 4  | &cross; |
| 5  | &cross; |
| 6  | &check; |
| 7  | &check; |
| 8  | &check; Valeur par défaut. |
| 9  | &check; Couleur du label, postion du label (inline ou block), couleur de la bordure du input... |
| 10 | &check; Formulaires. |
| 11 | &check; |
| 12 | &check; |
| 13 | &check; |

## Titre
| #  | Réponse |
|----|---------|
| 1  | &check; |
| 2  | &check; |
| 3  | &check; |
| 4  | &cross; |
| 5  | &cross; |
| 6  | &check; |
| 7  | &check; |
| 8  | &check; Niveau de heading |
| 9  | &check; Couleur du titre, couleur de fond. |
| 10 | &check; Pages, sections de page, aside... |
| 11 | &check; |
| 12 | &check; |
| 13 | &check; |

# Analyse Storybook
- Permet une documentation complète de tous les composants, leur utilité, déclinaisons et des exemples.
- Peut être implémenté en cours de projet comme au début.
- L'auto-documentation permet de documenter les informations essentielles rapidement.
- Les stories permettent de rapidement voir les différents états/déclinaisaons d'un composant.
- La documentation est dans le projet au lieu de sur un lien externe.