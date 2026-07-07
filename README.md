# The Battle of Do Ab — Book Landing Page

Marketing landing page for the book **_Miraculous Turn of Events: The Battle of Do Ab_**,
a true story of courage, leadership, and brotherhood, co-authored by **John Kelling** and
**LTC Justin Foote**.

Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and TypeScript.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and build for production
npm run preview  # preview the production build
```

## Project structure

```
index.html               # HTML entry point + Google Fonts
src/
  main.tsx               # React entry point
  App.tsx                # page composition
  index.css              # global styles / design system
  components/
    Navbar.tsx
    Hero.tsx
    AboutBook.tsx
    Authors.tsx          # both authors (Justin Foote + John Kelling)
    BuyBook.tsx
    Gallery.tsx
    Engage.tsx           # reviews + contact form
    Footer.tsx
    icons.tsx            # inline SVG icon set
public/images/           # SVG placeholder artwork
```

## Replacing the placeholder artwork

All imagery lives in `public/images/` as lightweight themed SVG placeholders. To use the
real photography, drop the final assets in and update the referenced paths:

| File | Used for |
| --- | --- |
| `book-cover.svg` | 3D book cover in the hero and buy sections |
| `hero-bg.svg` | faded background behind the hero |
| `about-book.svg` | "About the Book" photo |
| `author-foote.svg` | LTC Justin Foote (uniform) portrait |
| `author-kelling.svg` | John Kelling (suit) portrait |
| `gallery-1.svg` … `gallery-7.svg` | gallery grid |

Swap in `.jpg`/`.png` files and update the corresponding `src` paths in the components.
