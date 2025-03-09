---
date: 2025-03-08
version: 0.2
---

Versioned blog article, with translation enabled. Tree is as followed:

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

Hugo top yaml section / pages configuration is as followed:

```yaml
# _index.en.md
---
cascade:
  description: Versioned article with translation and additional description blah blah blah...
  image:
    src: /blog/default-image.png
    height: 200px
  title: 🌍 Versioned article with translation
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
