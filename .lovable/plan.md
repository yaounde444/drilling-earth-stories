# Update Pacific Forage contact details only

## Scope
Replace the outdated company contact details without changing any visual styling, imagery, wording unrelated to contact information, page structure, or behavior.

## Changes
- Update the desktop header call link and displayed number to the new primary Sales number: `+237 699 517 946` / `tel:+237699517946`.
- Update the mobile menu call link to the same primary Sales number.
- Update the contact page cards to show both Call & WhatsApp numbers, both email addresses, and `Ngousso, Yaoundé, Cameroon`, using the exact supplied links.
- Update the contact page confirmation text to use the new primary Sales number and primary email.
- Update the footer to show both phone numbers, both email addresses, and the new full location, using the exact supplied links.
- Update contact-page SEO descriptions from the old general location to `Ngousso, Yaoundé, Cameroon`.

## Existing areas preserved
- Hero quotation buttons remain linked to the existing contact page because they contain no outdated contact details.
- The quote form's visitor phone and email fields remain unchanged because they collect customer information.
- No floating WhatsApp control or JSON-LD contact record currently exists, so none will be added during this contact-only replacement.
- No design, layout, colors, spacing, animations, typography, images, logos, components, or page structure will change.

## Verification
- Search the full project to confirm the old number and old general-only location are removed from contact fields.
- Confirm both new telephone links, both WhatsApp URLs, both email links, and the full location are present.
- Verify the header, mobile menu, contact page, and footer render successfully on desktop and mobile.

## Files expected to change
- `src/components/site/Header.tsx`
- `src/components/site/Footer.tsx`
- `src/routes/contact.tsx`
