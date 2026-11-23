# Premium Multi-Restaurant Food Ordering Platform (GitHub Pages MVP)

This is a static, bilingual (English/Arabic) multi-restaurant ordering website prototype. It preserves the original premium charcoal/cream/orange visual design while changing the business flow to:
- Multiple restaurant menus on one site
- One shared cart containing items from different restaurants
- Hotel name and room number collected at checkout
- Distance-based service charge selected by delivery zone
- WhatsApp order message grouped by restaurant

## Files
- `index.html` — website layout
- `style.css` — original premium design system
- `config.js` — editable restaurants, menu, WhatsApp number and delivery zones
- `script.js` — restaurant filtering, cart, Arabic/English and WhatsApp checkout

## Customize before use
1. Open `config.js`.
2. Change `brandName`, `whatsapp`, and `location`.
3. Replace demo restaurant names, descriptions, menu, prices and image URLs with accurate information you are authorized to publish.
4. Edit `deliveryZones` and `fee` values to match your actual distance-based pricing. These current values are illustrative only.
5. Test adding items from two different restaurants; the WhatsApp message should group them separately.
6. Test checkout using your own WhatsApp number.

WhatsApp format: country code + number, digits only (Saudi example: `9665XXXXXXXX`).

## Publish on GitHub Pages
1. Create a public repository.
2. Upload all four files to the repository root.
3. Go to Settings → Pages.
4. Choose Deploy from a branch → `main` → `/ (root)` → Save.
5. Open the published Pages URL.

## Important limitations / next stage
- GitHub Pages is static hosting. This MVP does not store orders in a database, provide a live admin panel, automatically calculate road distance, process online payments, or provide live order tracking.
- The customer chooses a delivery zone and the site shows an estimated service charge. Confirm the final charge and food availability manually on WhatsApp before purchasing.
- Checkout opens WhatsApp with a prepared message. The customer must press Send.
- A mixed multi-restaurant order can involve separate restaurant visits; confirm all items and timing before accepting.
- Do not use restaurant logos, menu photos, trademarks or prices unless you have permission or another lawful basis. Confirm applicable local business, delivery and platform requirements before operating.
- Demo menu items, photos, prices and delivery fees must be replaced before commercial launch.
