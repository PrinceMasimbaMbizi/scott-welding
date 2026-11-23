SCOTT WELDING PROJECTS - UPDATED DEMO

1. LOGO
Put the client's final logo in assets/images/ and name it exactly: logo.png
It will appear in the top-left corner and footer. Use a transparent PNG if possible.

2. SECTION NAVIGATION
Home, About, Services, Our Work and Contact are separate content sections in index.html.
The navigation buttons show only the selected section; they do not open separate pages.

3. QUOTE FORM
The quotation form is a separate page: quote.html
The Request a Quote buttons open that page. Submitting the form prepares a WhatsApp message.
Confirm the WhatsApp destination number before launch.

4. PROJECT PHOTOS
Put photos in assets/projects/ then edit the projects array at the top of script.js.
Example:
{ title: "Sliding Gate", category: "Gates", image: "assets/projects/gate-01.jpg", description: "Custom sliding gate." }

5. RUN
Open index.html using VS Code Live Server. Keep index.html, quote.html, style.css, script.js and assets in the same website folder.


NAVIGATION UPDATE
The main website is now a normal one-page scrolling website. Home, About, Services,
Our Work and Contact are all visible as you scroll. The menu links jump to each section.
The quotation form remains a separate page: quote.html.
