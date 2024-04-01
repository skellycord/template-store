<<<<<<< Updated upstream
# skellycord-template-store
Template skellycord plugin store
=======
# Skellycord Template Store
This repository contains the minimum code to set up a plugin store for [Skellycord](https://github.com/skullbite/skellycord)


## Development features
- Ez store hosting via github pages
- Import support for css files

## How to
1. Clone this repo.
2. Fill in the fields "name", "description" and "author" in `package.json`.
3. Run `npm i` or `bun i`.
4. Write your plugin code in `src/plugins`, be sure to export `src/plugins/index.*` with a default object containing your plugins.

Example (based on `src/plugins`):
```ts
// src/plugins/index.ts
import DemoPlugin from "./DemoPlugin";

export default {
    DemoPlugin
}
```

5. Push changes to your repo, if your code builds successfully, the workflow should distribute your plugin store at `<gh_username>.github.io/<your_store>`.

6. Maybe change the contents of this readme.

### Debugging 
If you wish to test your plugin store, without distributing it, you can run either `npm run test` or `bun bun:test`. These commands compile, and serve your store locally.

### Types
Assuming you're coding in an environment with intellisense, types for the Skellycord API are availible at either `window.skellycord`, or the module `@skellycord`.

### Documentation
Coming at some point...
>>>>>>> Stashed changes
