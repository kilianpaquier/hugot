---
date: 2025-03-08
title: 🛖 Home
---

Welcome on [**hugot**](https://github.com/kilianpaquier/hugot) example site, a [**Hugo**](https://gohugo.io/) theme.
What can this Hugo theme provide ?

- Blog pre-defined layouts (see Blog section)
- Scroll to top button (scroll and see by yourself) which can be disabled
- Default stylesheeting with [**bootstrap**](https://getbootstrap.com/), can be extended with custom ones (see below)
- Theming (featured in bottom menu), loaded as soon as possible for a better user experience 🙂
  Theming is based on three state:
  - The clock (by default), which changes the theme based on user preference (light or dark)
  - The sun, which is always light mode
  - The moon, which is always dark mode
- [**lazysizes**](https://afarkas.github.io/lazysizes/) to only load images when they come in user view (while scrolling)
- [**instant.page**](https://instant.page/) to preload pages when mouse goes on their link
- Homepage redirection to a sub-page
- Footer with copyright notice (since Hugo have this `copyright` key in configuration, why not use it ?)
- Pages versioning (featured in bottom menu), examples can be found in Blog section
- Copy button present on top right of code sections (only visible when the hand or mouse is hovering the code section)

#### Bottom menu features

While some may not really like this beautiful little bottom right button, I think it's great for mobile experience.
By behind at the bottom of the page, it's easier to access which the hand (with those massive phone nowadays).

##### Menus

Shown menus can be translated (featured by Hugo itself) and are exclusively based on Hugo menus section:

```yaml
# hugo.yaml, config/_default/menus/menu.*.yaml
main:
  - name: Home
    url: /
    weight: 5

  - name: Blog
    url: /blog/
    weight: 10

  - name: Use case
    url: https://kilianpaquier.com
    weight: 15
```

Weight plays the essential part of ordering the menu in the menu 😋.

##### Translations

Translations are based on `hugo.*` file key `languages`. This key can also be configured in another file like `config/_default/languages.yaml`:

```yaml
fr:
  contentDir: content
  languageName: Français

en:
  contentDir: content
  languageName: English
```

Of course, `contentDir` may also be `content/<lang_id>` (featured by Hugo), **hugot** will work flawlessly in both cases 😀.
Translation switch is shown in bottom menu when a given page is translated. When a page is not translated, the switch doesn't exist.

##### Versioning

Versioning has little configuration, only the version prefix can be configured in `hugo.*` file with `params.versioning.prefix` key, by default it's `v`.
Versioning works with pages top configuration `version` (it can be *number*):

```yaml
---
...
version: 0.1
---
```

When two pages of the same section have this key (with a different value obviously),
a switch is present in bottom menu (see for youself [here](/blog/versioned-translated/0.2/)).

#### Stylesheet and scripts extension

By default, here's how **hugot** loads various stylesheets and scripts:

- In `head` HTML section (as soon as possible), note that both scripts and stylesheets are minimized:
  - **bootstrap** stylesheet
  - default `scss/style.scss` defined by **hugot** itself
  - additional stylesheets provided by their path in `params.header.css` or `params.header.scss` (they must be lists and are empty by default)
  - theming script
  - scroll to top script
  - additional scripts provided by their path in `params.header.js` (it must be a list and is empty by default)
- Below `footer` HTML section, all those scripts are merged together and minified during build to speed up page loading:
  - **bootstrap** bundle script with configured version `params.bootstrap.version` in `hugo.*` file
  - **instant.page** script
  - **lazysizes** script
  - additional scripts provided by their path in `params.footer.js` (it must be a list and is empty by default)

#### Home page redirection

Can be configured through `hugo.*` configuration file and is by default:

```yaml
params:
  homepage:
    redirect: false
    url: /
```

#### Default configuration

See https://github.com/kilianpaquier/hugot/blob/main/hugo.yaml.
