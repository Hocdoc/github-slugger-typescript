# github-slugger-typescript

This project is a small Typescript fork of the [github-slugger](https://github.com/Flet/github-slugger) Javascript library from Dan Flettre.

The original library offers more options (`maintainCase`, `reset()`) that I don't need.

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

## Install

```
npm install github-slugger-typescript
```

## Usage

Keeping track of the previously slugged strings:

```ts
import { GithubSlugger } from 'github-slugger-typescript';

const slugger = new GithubSlugger();
slugger.slug("foo");        // foo
slugger.slug("Foo Bar");    // foo-bar
slugger.slug("foo");        // foo-1
slugger.slug("foo");        // foo-2
```

Useage without keeping track of previously slugged strings:

```ts
import { slug } from 'github-slugger-typescript';

slug("foo");        // foo
slug("Foo Bar");    // foo-bar
slug("foo");        // foo
```

## License

[MIT](LICENSE)