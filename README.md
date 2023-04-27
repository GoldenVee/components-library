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
- twin.macro - apply Tailwind CSS styles to styled-components styles

### Storybook

`yarn storybook` loads the stories.

### Component styling

With Tailwind. The repo uses:

- tailwind.config.js file at the root. You can use this to customize your Tailwind theme and add overrides. If you want to add your own theme colors and classes you can read more about that on [Tailwind’s theme documentation](https://tailwindcss.com/docs/theme).
- Tailwaind Just In Time (JIT) mode to make development faster.
- Purge paths to the config. This is so Tailwind can look through the specified files and only add the css classes that are being used.
- twin.macro uses the Tailwind config (see `babelMacros`, in package.json).

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
Rollup will create distribution artifacts. TypeScript Declarations are included in the distribution (configured via `tsconfig.build.json`).

#### Babel

See `.babelrc` for the config. To see the browsers that are supported by the preset-env target, use the `target` value from the config like this:
`npx browserslist <TARGET_VAL>`

e.g.:

```sh
// This is the default within Create React App
npx browserslist ">0.2%, not dead, not op_mini all"
```

The repo includes several development dependencies for Babel. It also includes a standard dependency `@babel/runtime` to share helper functions that would otherwise be duplicated when using the library.

### Release management

1. We are using [commitizen](https://github.com/commitizen/cz-cli) to standardize our commits.

2. We are using [standard-version](https://github.com/conventional-changelog/standard-version) for semantic versioning. We have 3 scripts created to achieve the release for our project:

**_Pre release:_** This takes care of build a release candidate that contains all the changes and fixes intended for the release. Test the release candidate to ensure that it works as intended.

```
yarn prerelease:dry-run
yarn prerelease
```

**_Release:_** This takes care of building a release that contains all the changes and fixes intended for the release. Push the release for the next process of creating Github Releases.

`yarn release`

#### Overall steps for versioning that we are looking at in the scripts are as follows:

1.  **SKIPPING Changelog**: By default, prerelease is created with changelogs. But for this project we would use skip creating changelogs and use [Github Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/automatically-generated-release-notes) for generating changelogs and release notes.

2.  **Dry Run**: By default, the lib bumps the version based on the commits in the release. We want to consider running release script with dry run so that we are able to verify the versioning interpreted by the lib. The lib automatically commits the version updates in `package.json`. If you use the script `yarn prerelease:dry-run`, allows you to see what commands would be run, without committing to git or updating files.

3.  **Alpha Release**: The prerelease would be created with apha versioning. eg Based on a last release `v0.0.1`, the new prerelease would be created like this `v0.0.2-alpha.0`. **Note:** We would go ahead and delete the alpha release when the alpha release is tested and final official release is created.

4.  **Commits** To allow signed commits in the release, we have used the `-s` argument in script `yarn release` as it would automatically commit changes.

5.  **Create tag** Lib automatically it creates a tag for the release.

6.  **Push changes and tags** Run command in terminal `git push --follow-tags` to publish

#### Below is the step by step process when working on a release

**Prerelease, dry run**

1. Create a prerelease with dry run using the script `yarn prerelease:dry-run`.

2. Make sure that semantic version you want for release is correctly interpreted by the lib in terms of `major.minor.patch`.

**Prerelease (Semi Automated)** (Create a alpha prerelease version)

3. You have determined with dry run what the version looks like. Now you can run the release script `yarn prerelease` to create alpha version to this release.

4. The above script also commits the new version, creates git tag for this release.

5. Push the commits and tags using the command: `git push --follow-tags`

6. Put the alpha version of component lib to use and test before the final release.

**Release (Semi Automated)** (Create a release version) 7. Run the script `yarn release`, to create a release from the alpha version. eg Prerelease alpha version `v0.0.2-alpha.0` to official release`v0.0.2` 8. The above script also commits the new version, creates git tag for this release. 9. Push the commits and tags using the command: `git push --follow-tags` 10. Create Github Release

#### Github Release

For this project we are using GitHub Releases, a feature of the GitHub platform that allows developers to publish the software release. The distribution is restricted to be read only access to other repos.

1. On GitHub.com, navigate to the main page of the repository.
2. To the right of the list of files, click Releases.
3. At the top of the page, click Draft a new release.
4. To choose a tag for the release, select the Choose a tag dropdown menu.
5. In the "Release title" field, type a title for your release.
6. Above the description field, click Generate release notes.
7. Check the generated notes to ensure they include all (and only) the information you want to include.
8. Move around the PRs to be categorized in feat, fix, doc, refactor, breaking change, etc
9. PAT (Personal Access Token - Fine grained) needs to be setup to use the release in other projects.
10. Create the PAT with time limit of 6 months and provide the read only access to `Contents`. When the token expires follow the steps [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-fine-grained-personal-access-token) to generate a new personal access token (fine-grained)
11. Generate PAT & add it to a .npmrc file when deploying the release. (.npmrc will be gitignored).
12. Try using this release version in one of your projects to ensure the latest changes are available to use.

#### Github Packages

Github Packaging is different from Github Release in terms of process too. As a part of the packaging, we would be using PAT again. PAT is created for this project and the release manager would be incharge of this process.

##### Create a Personal Access Token

To use GitHub Registry for your component library, you need to create a Personal Access Token with the appropriate permissions. The PAT expires on Oct 2023 and would need to be regenerated. Here's how to do it:

1. Go to your GitHub account settings and click on "Developer settings" in the left-hand menu.
2. Select "Personal access tokens" from the sub-menu, and create PAT Classic.
3. Click on "Generate new token".
4. Give the token a descriptive name and select the appropriate permissions. For using GitHub Registry, select the "write:packages" and "read:packages" permissions.
5. Click on "Generate token" to create the token.

##### Configure npm for GitHub Registry

To configure npm to use GitHub Registry, you need to create an .npmrc file in the root of your project directory. Here's how to do it:

1. Open a terminal and navigate to your project directory.
2. Type yarn login --registry=https://npm.pkg.github.com and enter your GitHub username and Personal Access Token when prompted - You may only need a username and email. The login information is in Dashlane as a secure note (ask the project lead for access).

3. Type echo "//npm.pkg.github.com/:\_authToken=${GITHUB_TOKEN}" >> .npmrc in your terminal. Replace GITHUB_TOKEN with your Personal Access Token. You will be able to find that information through Dashlane (Ask for access to "WL Component Lib Tokens")

This will configure npm to use GitHub Registry for your project.

##### Publish your Component Library

To publish your component library to GitHub Registry, follow these steps:

1. Type `yarn publish` in your terminal to publish your package to GitHub Registry.
2. Increments the version field in your package.json file to a new version number & also commit on success.
3. Your component library is now published and available on GitHub Registry.
   Note: If asked for a password during publishing, you may take another approach (see Troubleshooting section)

##### Installing Component Library

To install your component library in another project, follow these steps:

1. Add the following lines to the .npmrc file in your project directory:

```
//npm.pkg.github.com/:_authToken=GITHUB_TOKEN
@username:registry=https://npm.pkg.github.com
```

Replace username with your GitHub username and GITHUB_TOKEN with your Personal Access Token.

2. Type `yarn install @username/whitelabel-components` to install your component library.
3. Your component library is now installed and ready to use in your project.

### Troubleshooting and solutions

#### Storybook

Typescript 5.+ (used by this project) has dropped several methods expected for use by the current stable version of Storybook (6.+), which was preventing Storybook from building. A workaround has been put in place within package.json, as described [here](hipstersmoothie/react-docgen-typescript-plugin#78). This is a work around, which maybe not be applicable soon, if storybook republishes their version to not use @storybook/react-docgen-typescript-plugin.

#### twin.macro

There are [several examples here](https://github.com/ben-rogerson/twin.examples) which may be useful if troubleshooting issues related to twin.macro.

#### Yarn publish

If asked for an (unknown) password when publishing the component library, you could add the following line to your .npmrc file.
`@whitelabelco:registry=https://npm.pkg.github.com`
Provied you also have the authentication token in your .npmrc file as described above, this should allow you to publish to the specified registry.
