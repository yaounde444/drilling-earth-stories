# French-first bilingual website

## Goal
Make French the default language throughout the Pacific Forage website while retaining a clear English option.

## Changes
- Add a site-wide language control in the desktop and mobile navigation.
- Default every visit to French and remember the visitor’s French/English choice.
- Translate all visible copy across Home, Services, Equipment, Projects, About, Contact, footer, forms, and error pages.
- Translate page titles and descriptions so French is also the primary search and sharing language.
- Preserve the existing logo, real drilling photographs, page structure, and white/dark-green/grey visual identity.
- Check the complete mobile and desktop experience, including navigation, language switching, and contact form states.

## Technical details
- Use one shared language provider and typed translation content, avoiding duplicated page routes.
- Set the document language dynamically (`fr` or `en`) and use French during server rendering.
- Store only the visitor’s language preference in the browser.
