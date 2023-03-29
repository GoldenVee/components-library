# whitelabel-components

Whitelabel's UI Component library

---

### TLDR

#### How do I see components rendered?

[See here, with Storybook](#Storybook).

#### How do I create a new component, test and story?

Use the [Generator](#Generator) provided.

#### Tests

`yarn test` to check that everything passes the TS compiler and that all the Jest tests pass.

#### How do I build the library locally?

Before building locally, perform [code-quality checks](#Code-Style-and-Quality), and run [tests](#Tests), then run `yarn build`.
See more [here](#Build).

#### Where's the entry point for the library?

`src/index.ts`
This module exports all of the components and types defined for the components.

---

### Packages used:

- React - building components
- TypeScript - optional static typing
- Tailwind - CSS framework
- ESLint - linting
- Prettier - formatting
- Husky - git hooks
- Hygen - code generation
- React Testing Library - guiding principles for flexible tests.
- Jest DOM - utility package for React Testing Library, providing custom matchers to write reliable tests
- TS Jest - TypeScript pre-processor to allow Jest to consume and typecheck tests
- Rollup, and Babel - bundle the application for distribution

### Storybook

`yarn storybook` loads the stories.

### Component styling

With Tailwind. The repo uses:

- tailwind.config.js file at the root. You can use this to customize your Tailwind theme and add overrides. If you want to add your own theme colors and classes you can read more about that on [Tailwind’s theme documentation](https://tailwindcss.com/docs/theme).
- Tailwaind Just In Time (JIT) mode to make development faster.
- Purge paths to the config. This is so Tailwind can look through the specified files and only add the css classes that are being used.
- A `build` script that includes the Tailwind build (when building, a `tailwind.css` file will be included in `dist`).

### Code Style and Quality

ESLint is used for code quality. Recommended rule-sets are used for plugins.
`yarn lint` will run ESLint, which will also run a formatting check with Prettier.
`yarn lint:fix` will fix ESLint and Prettier errors where possible.

VSCode settings are included for the linter and formater; Formatting with Prettier is also run on-save.

### Git hooks

`yarn husky:init` is used to bootstrap pre-commit checks run with Husky. The hook that is created by this command shouldn't be modified directly. This command should only be run when updating the checks for the pre-commit hook.

### Generator

The repo comes with a generator to help with consistency and avoiding pointless work. The generator has the following capabilities:

Generate component: `yarn generate:component Thing --type atom` (or `pattern` / `screen` instead of `atom`). See the `component/new` folder for the templates that are used when generating such a component.

### Build

`yarn build`
The repo uses Babel and Rollup for the build configuration.
Rollup will create distribution artifacts. Tailwind will also create a minified CSS file when the build is run. TypeScript Declarations are included in the distribution (configured via `tsconfig.build.json`).

#### Babel

See `.babelrc` for the config. To see the browsers that are supported by the preset-env target, use the `target` value from the config like this:
`npx browserslist <TARGET_VAL>`

e.g.:

```sh
// This is the default within Create React App
npx browserslist ">0.2%, not dead, not op_mini all"
```

The repo includes several development dependencies for Babel. It also includes a standard dependency `@babel/runtime` to share helper functions that would otherwise be duplicated when using the library.

### Troubleshooting and solutions

#### Storybook

Typescript 5.+ (used by this project) has dropped several methods expected for use by the current stable version of Storybook (6.+), which was preventing Storybook from building. A workaround has been put in place within package.json, as described [here](hipstersmoothie/react-docgen-typescript-plugin#78). This is a work around, which maybe not be applicable soon, if storybook republishes their version to not use @storybook/react-docgen-typescript-plugin.
