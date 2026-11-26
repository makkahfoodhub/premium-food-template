# Food Hub — owner-supplied restaurant menu catalogue

This update keeps the existing premium charcoal / cream / orange design and uses the restaurant menu images supplied by the owner.

## Current first-stage features
- Seven restaurant entries: Al Romansiah, KFC, McDonald's, Mama Ghazal, Pizza Hut, Al Tazaj and Lamma Burger.
- The supplied menu images are displayed as full menu pages. No invented menu items, prices or stock data are added.
- Customers can include food from multiple restaurants in one WhatsApp request by writing the restaurant, item and quantity in the order form.
- Hotel name, room number, customer name and notes are collected in the order form.
- English / Arabic language toggle.
- WhatsApp number is configured in `config.js` (digits only).
- No cart, fake delivery-zone prices, or demo food cards are shown.

## Files
- `index.html` — page structure and order form
- `style.css` — existing design plus menu catalogue and form styles
- `config.js` — restaurant names and menu-image paths
- `script.js` — menu rendering, language toggle and WhatsApp order request
- `assets/menus/` — restaurant menu images supplied by the owner

## Add a restaurant menu image (current static version)
1. Put the new image in `assets/menus/`.
2. Add the restaurant and image path in the `restaurants` array in `config.js`.
3. Commit and push the repository to GitHub Pages.

This current static version still requires a code edit to add a restaurant. A true no-code Admin Panel needs a connected database and image storage (for example Supabase), plus secure admin authentication. Those credentials and connection have not been set up yet, so this package does not pretend that an Admin Panel is already working.

## Delivery charge
No delivery-zone price is displayed because the actual distance zones and fees have not yet been confirmed. The order form asks the operator to confirm the final delivery service charge on WhatsApp before purchasing.

## Publish
Upload the contents of this folder to the root of the existing GitHub repository, keeping `assets/menus/` intact. GitHub Pages should serve `index.html` from the repository root.


## Menu image catalogue (corrected)
- Al Romansiah: 1 page
- KFC: 1 page
- McDonald's: 3 pages
- Mama Gajir: 3 pages
- Lamma Burger: 1 page
- Pizza Hut: 1 page
- Al Tazaj: 1 page

Restaurant menus are view-only image pages. Food item selection/cart is not enabled.
