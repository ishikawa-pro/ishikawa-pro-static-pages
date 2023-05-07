# ishikawa-pro's static pages
ishikawa-proの静的ページです。

## 🚀 Project Structure
```
/
├── public/*/ (static assets)
├── src/
│   ├── components/*/ (Astro components)
│   ├── layouts/ (Astro layouts)
│   │   └── Layout.astro
│   └── pages/ (Astro pages)
│       └── link.astro
└── package.json
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
