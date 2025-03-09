# hugot <!-- omit in toc -->

<p align="center">
  <img alt="GitHub Release" src="https://img.shields.io/github/v/release/kilianpaquier/hugot?include_prereleases&sort=semver&style=for-the-badge">
  <img alt="GitHub Issues" src="https://img.shields.io/github/issues-raw/kilianpaquier/hugot?style=for-the-badge">
  <img alt="GitHub License" src="https://img.shields.io/github/license/kilianpaquier/hugot?style=for-the-badge">
  <img alt="Go Version" src="https://img.shields.io/github/go-mod/go-version/kilianpaquier/hugot/main?style=for-the-badge&label=Go+Version">
</p>

---

- [How to use ?](#how-to-use-)
- [Features](#features)

## How to use ?

For more information please read the Hugo [official guide](https://gohugo.io/getting-started/quick-start/).

**With hugo module (recommended):**

```sh
hugo mod init github.com/username/repository
```

```yaml
theme: github.com/kilianpaquier/hugot

module:
  imports:
    - path: github.com/kilianpaquier/hugot
```

**With git submodule :**

```sh
# with ssh
git submodules add git@github.com:kilianpaquier/hugot.git themes/hugot
# with https
git submodules add https://github.com/kilianpaquier/hugot.git themes/hugot
```

```yaml
theme: hugot
```

## Features

See https://hugot.netlify.app/.
