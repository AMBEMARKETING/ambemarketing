# AMBE MARKETING – Website Preview

This is the local preview build requested before deployment.

## Main changes
- AMBE-only business content and product categories.
- Premium blue/orange corporate visual direction inspired by the supplied reference style.
- 7 product categories: Epson, HP, Brother, Elnova, PeopleLink, CP PLUS, Compatible Cartridge.
- Category cards include View Products interaction and a category detail modal.
- Brand strip uses local, non-broken brand marks and an infinite slider.
- Hero, About, Services and Contact areas use separate visual treatments.
- Product/category imagery is stored locally under `public/assets/`.
- Catalogue source remains under `public/catalogue/` and is not used as the hero image.
- Product/category content is centralized in `src/data/products.ts` so future catalogue updates can be made without rebuilding page components.
- AMBE favicon/page title are configured in `index.html`.
- Responsive desktop/mobile layouts and reduced-motion support are included.

## Run locally
Open a terminal in this `ambe_build` folder:

```bash
npm install
npm run dev
```

Then open the localhost address shown by Vite.

## Future product updates
- Replace/update image files in `public/assets/`.
- Update product names, descriptions and product lists in `src/data/products.ts`.
- Do not edit the page components just to change normal catalogue content.

Deployment is intentionally not included in this step.
