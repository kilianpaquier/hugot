---
date: 2025-03-08
title: 🛖 Accueil
---

Bienvenue sur le site exemple de [**hugot**](https://github.com/kilianpaquier/hugot), un thème [**Hugo**](https://gohugo.io/).
Voici les fonctionnalités offertes par le thème:

- *Layouts* pré-définis pour créer son blog
- Un bouton *scroll to top* qui peut être désactivé
- Le style [**bootstrap**](https://getbootstrap.com/), qui peut être étendu (voir plus bas) avec du style personnalisé
- Du thème (avec le menu), chargé le plus tôt possible pour une meilleure expérience utilisateur(rice).
  Le thème est basé sur trois états :
  - L'horloge (par défaut), qui change le thème en fonction des préférences utilisateur (windows, navigateur)
  - Le soleil, qui pousse le thème clair
  - La lune, qui pousse le thème sombre
- [**lazysizes**](https://afarkas.github.io/lazysizes/) pour ne charger les images que lorsqu'elles rentrent dans le champs de vision de la page
- [**instant.page**](https://instant.page/) pour précharger les pages lorsque la souris est positionnée sur leur lien
- Redirection de la page *Home*
- La notice the *copyright*, comme Hugo propose la clé `copyright`, pourquoi ne pas l'utiliser ?
- Le *versioning* des pages (avec le menu), quelques exemples sont présents dans la section *blog*
- Un bouton copier présent en haut à droite des sections de code (uniquement visible lorsque la souris ou la main est sur la section)

#### Fonctionnalités du menu

Même si certain(e)s peuvent ne pas l'aimer, de mon point de vue c'est génial pour l'expérience sur téléphone.
En l'ayant en bas de page, il est plus simple d'accès pour la main (avec les téléphones massifs de nos jours).

##### Menus

Les menus affichés peuvent être traduits (fonctionnalité Hugo de base)
et sont exclusivement basés sur la configuration Hugo par défaut :

```yaml
# hugo.yaml, config/_default/menus/menu.*.yaml
main:
  - name: Home
    url: /
    weight: 5

  - name: Blog
    url: /blog/
    weight: 10

  - name: Cas d'usage
    url: https://kilianpaquier.com
    weight: 15
```

La clé `weight` joue pour l'ordre d'affichage dans le menu 😋.

##### Traductions

Les traductions sont basées sur la clé `languages` du fichier de configuration `hugo.*`.
Il est aussi possible de les définir autre part comme `config/_default/languages.yaml`, fonctionnalité offerte par Hugo par défaut.

```yaml
fr:
  contentDir: content
  languageName: Français

en:
  contentDir: content
  languageName: English
```

Bien sûr, `contentDir` peut aussi être `content/<lang_id>` (comme offert par Hugo par défaut), **hugot** fonctionnera sans problème dans les deux cas 😀.
Le *switch* pour changer de langue est proposé dans le menu quand une page donnée propose une version par langue.
Si une page n'est pas traduite, alors le switch n'est pas affiché.

##### *Versioning*

Le *versioning* peut être personnalisé uniquement sur le préfixe à appliquer aux versions, par défaut `v`,
il peut être modifier dans le fichier `hugo.*` avec la clé `params.versioning.prefix`.

Pour activer le *versioning* d'une page, il suffit de préciser le numéro de version dans la section `yaml` en haut des pages :

```yaml
---
...
version: 0.1
---
```

Lorsque deux pages de la même section possèdent cette clé (avec une valeur différente bien sûr), alors un *switch* est présent dans le menu.
Un exemple peut être consulté [ici](/blog/versioned-translated/0.2/).

#### Extension des styles (CSS, SCSS) et scripts

Par défaut, **hugot** fonctionne tel quel pour le chargement des styles et scripts :

- Dans la balise `head` de la page HTML (le plus tôt possible):
  - Le style **bootstrap**
  - Le style par défaut `scss/style.scss` de **hugot**
  - Les styles additionnels fournis par les configurations `params.header.css` ou `params.header.scss` (listes de styles)
  - Le script pour le *theming*
  - Le script du bouton *scroll to top*
  - Les scripts additionnels fournis par la configuration `params.header.js` (liste de scripts)
- En bas de page, après `footer`:
  - Le *bundle* script de **boostrap**
  - Le script de **instant.page**
  - Le script de **lazysizes**
  - Les scripts additionnels fournis par la configuration `params.footer.js` (liste de scripts)

#### Redirection de la page d'accueil

Peut être configuré dans le fichier de configuration `hugo.*` et par défaut est :

```yaml
params:
  homepage:
    redirect: false
    url: /
```

#### Configuration par défaut

See https://github.com/kilianpaquier/hugot/blob/main/hugo.yaml.
