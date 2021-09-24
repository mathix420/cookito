# Cookito

> Cook your perfect boilerplate.

## Requirements

- Node.js version 12 or higher (ES2016 support)

## Development

```bash
npm i
lerna bootstrap
lerna run dev
```

## Usage

### Bake

> Bake the boilerplate.

```bash
# Interactive
cookito bake
# Using a recipe
cookito bake -r recipe.yaml
# Using a remote recipe
cookito bake -r 'https://mathix.ninja/nuxt-recipe.yaml'
# Using a remote recipe (NPM)
cookito bake -r '@plsr/nuxt-recipe'
```

## Recipe

```yaml
global-plugins:
  - '@cookito/husky'
  - '@cookito/vscode'
  - '@mathix420/cookito-husky-template'

projects:
  .:
    base: '@cookito/nuxt-base'
    plugins:
      - '@cookito/eslint'
      - '@cookito/prettier'
      - '@cookito/npm'
        dependencies:
            - '@vuito/vue'
            - 'lodash'
        devDependencies:
            - 'dotenv'

  api:
    base: '@cookito/typescript'
    plugins:
      - '@cookito/prettier'
      - '@cookito/'
```
