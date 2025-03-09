---
date: 2025-03-08
version: 0.1
---

Article versionné, avec traduction, l'arbre est comme suit :

```tree
├── _index.en.md
├── _index.fr.md
├── 0.1
│   ├── index.en.md
│   └── index.fr.md
└── 0.2
    ├── index.en.md
    └── index.fr.md
```

Les *top* sections des fichiers `.md`, par rapport à la configuration Hugo est comme suit :

```yaml
# _index.fr.md
---
cascade:
  description: Article *versionné* avec traduction, description avec un peu plus d'infos blah blah blah...
  image:
    src: /blog/default-image.png
    height: 200px
  title: 🌍 Article *versionné* avec traduction
date: 2025-03-08
---

# 0.1/index.*.md
---
date: 2025-03-08
version: 0.1
---

# 0.2/index.*.md
---
date: 2025-03-08
version: 0.2
---
```
