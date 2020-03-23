# Documentation

## Directory Structure

```
mock-data/
src/
  components/
  mock-data/
  pages/
  services/
  types/
```

- `/mock-data` a place to drop any mock data while developing.
- `src/` any top level components or folders
  - `src/App.tsx` has the full page layout (header, main, footer)
  - `src/Main.tsx` has all the main routing for the application.
- `src/pages/` any pages that we route to
- `src/components/` has any UI components the application uses.
- `src/services/` has any async data service methods. (firebase, google api, etc)
- `src/types/` any custom typescript types for the application
