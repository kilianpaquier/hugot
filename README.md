# hugot <!-- omit in toc -->

<p align="center">
  <img alt="GitHub Release" src="https://img.shields.io/github/v/release/kilianpaquier/hugot?include_prereleases&sort=semver&style=for-the-badge">
  <img alt="GitHub Issues" src="https://img.shields.io/github/issues-raw/kilianpaquier/hugot?style=for-the-badge">
  <img alt="GitHub License" src="https://img.shields.io/github/license/kilianpaquier/hugot?style=for-the-badge">
  <img alt="Go Version" src="https://img.shields.io/github/go-mod/go-version/kilianpaquier/hugot/main?style=for-the-badge&label=Go+Version">
</p>

---

- [How to use ?](#how-to-use-)
- [Configuration](#configuration)

## How to use ?

For more information please read the Hugo [official guide](https://gohugo.io/getting-started/quick-start/).

**With hugo module (recommended):**

```sh
hugo mod init github.com/username/repository
```

```yaml
module:
  imports:
    - path: github.com/kilianpaquier/hugot
theme: github.com/kilianpaquier/hugot
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

## Configuration

You may defined (and it's recommended) an `hugo.toml` or `hugo.yml` at the root folder of your project.
By default, the following [config.yml](./config/_default/config.yml) is applied and your `hugo.*` root file can extend or override only the specific keys you want.

Multiple configuration can be tuned depending on your needs:

- Copyright notice
- Homepage redirection to another page
- Bottom right menu icon
- Theming activation with light icon and night icon
- internationalization activation (language selection in bottom right menu)
- Docs and blog versioning activation, with version prefix (default is `v`)
- [Instant Page](https://instant.page/) activation and version
- [Lazysizes](https://afarkas.github.io/lazysizes/) activation
- Bootstrap version (can't be deactivated since it's the main framework used for all pages)
- Additional CSS stylesheets and JS scripts to add in head page section (critical stylesheets and scripts to load the page faster)
- Additional CSS stylesheets and JS scripts to add in footer page section (less critical stylesheets and scripts)
