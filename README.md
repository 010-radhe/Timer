# Timer — Countdown to Midnight

A single-page countdown that shows **time until 12:00 AM (midnight)**.  
**After midnight**, the countdown hides and a **button appears** that redirects to your chosen link.

## How to use

1. **Open the page**  
   Open `index.html` in a browser (double-click or run a local server from the `timer` folder).

2. **Change where the button goes**  
   Edit `script.js` and set `REDIRECT_URL` at the top to your link, e.g. your memory site or any URL.

3. **Countdown**  
   The page shows hours, minutes, and seconds until the **next 12:00 AM**.  
   At midnight, the countdown is replaced by the “Open your surprise” button.

## Files

- `index.html` — Page structure
- `styles.css` — Layout and styling
- `script.js` — Countdown logic and redirect URL

## Link to this page from elsewhere

Use this URL in your memory site or any page:

- If both are on the same server: `/timer/index.html` or the full path to `timer/index.html`
- From the memory site: e.g. `../timer/index.html` or the absolute path to the timer folder
