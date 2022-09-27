# Astro GitHub Stats ✨

[![npm](https://img.shields.io/npm/v/astro-github-stats)](https://www.npmjs.com/package/astro-github-stats)
[![npm](https://img.shields.io/npm/l/astro-github-stats)](https://www.npmjs.com/package/astro-github-stats)
[![npm](https://img.shields.io/npm/dt/astro-github-stats)](https://www.npmjs.com/package/astro-github-stats)
[![github](https://img.shields.io/github/last-commit/ayoayco/astro-github-stats)](https://github.com/ayoayco/astro-github-stats)

Embed GitHub stats on your [Astro](https://astro.build) page ✨

Features:

1. Embed GitHub Account stats
1. Embed GitHub Repositories info with stars

# Insatllation

```
npm i astro-github-stats
```

# Usage

Then use on your Astro page:

```astro
---
import GithubStats from 'astro-github-stats';
---

<!-- Add your account stats -->
<GithubStats username="ayoayco" />

<!-- Add a repo card with info and stars -->
<GithubStats username="withastro" repo="astro" />
```

# Screenshots

Example Account Card:

![screenshot](https://raw.githubusercontent.com/ayoayco/astro-github-stats/main/assets/screenshot.png)

Example Repo Card:

![Screen Shot 2022-09-27 at 3 51 15 PM](https://user-images.githubusercontent.com/4262489/192545079-c602944c-6843-427a-b810-832973e6782c.png)

# Future plans

Initially this is a wrapper for [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) supporting the basic github account stats card. Other features can be supported later, depending on demand:

1. themes
1. account top languages

_Please report issues found or suggestions in the [project issues page](https://github.com/ayoayco/astro-github-stats/issues)_
