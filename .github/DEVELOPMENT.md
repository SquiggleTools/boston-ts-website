# Development

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo) and [installing pnpm](https://pnpm.io/installation):

```shell
git clone https://github.com/<your-name-here>/boston-ts-website
cd boston-ts-website
pnpm install
```

> This repository includes a list of suggested VS Code extensions.
> It's a good idea to use [VS Code](https://code.visualstudio.com) and accept its suggestion to install them, as they'll help with development.

## Dev

Run the [**Remix**](https://remix.run/docs/en/main/start/quickstart) quickstart dev server locally to preview the website:

```shell
pnpm dev
```

### Production Builds

Pending something coming to Remix, we `pnpm dev` and then manually `wget` scrape:

```shell
mkdir temp
cd temp
wget -k -E -r -l 10 -p -N -F -nH http://localhost:5173 http://localhost:5173/ad
rm -rf @id app node_modules
```

...then touch up the files for static hosting:

1. Remove all `<script>` and `modulepreload` tags from the generated output
2. Move files like `about.html` to `index/about.html`
3. Swap `href` attributes from `.html` paths like `"about.html"` to absolute paths like `"/about"`

## Formatting

[Prettier](https://prettier.io) is used to format code.
It should be applied automatically when you save files in VS Code or make a Git commit.

To manually reformat all files, you can run:

```shell
pnpm format --write
```

## Linting

This package includes several forms of linting to enforce consistent code quality and styling.
Each should be shown in VS Code, and can be run manually on the command-line:

- `pnpm lint` ([ESLint](https://eslint.org) with [typescript-eslint](https://typescript-eslint.io)): Lints JavaScript and TypeScript source files
- `pnpm lint:knip` ([knip](https://github.com/webpro/knip)): Detects unused files, dependencies, and code exports
- `pnpm lint:md` ([Markdownlint](https://github.com/DavidAnson/markdownlint): Checks Markdown source files
- `pnpm lint:packages` ([pnpm dedupe --check](https://pnpm.io/cli/dedupe)): Checks for unnecessarily duplicated packages in the `pnpm-lock.yml` file
- `pnpm lint:spelling` ([cspell](https://cspell.org)): Spell checks across all source files

Read the individual documentation for each linter to understand how it can be configured and used best.

For example, ESLint can be run with `--fix` to auto-fix some lint rule complaints:

```shell
pnpm run lint --fix
```

## Type Checking

You should be able to see suggestions from [TypeScript](https://typescriptlang.org) in your editor for all open files.

However, it can be useful to run the TypeScript command-line (`tsc`) to type check all files in `src/`:

```shell
pnpm tsc
```

Add `--watch` to keep the type checker running in a watch mode that updates the display as you save files:

```shell
pnpm tsc --watch
```
