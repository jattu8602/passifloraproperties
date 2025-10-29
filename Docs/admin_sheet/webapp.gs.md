# Google Apps Script Web App (Sheet Writer)

Bind this script to your target Google Sheet (Extensions → Apps Script). Then deploy as a Web App.

```javascript
const SHEET_NAME = 'Projects'

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents)
    if (!body || body.pin !== ADMIN_PIN) {
      return json({ ok: false, error: 'Invalid PIN' }, 401)
    }
    const ss = SpreadsheetApp.getActive()
    const sheet = ss.getSheetByName(SHEET_NAME)
    if (!sheet) return json({ ok: false, error: 'Sheet not found' }, 404)

    const header = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    const rowObj = body.row || {}

    // Build row values in header order
    const values = header.map((key) => rowObj[key] ?? '')
    sheet.appendRow(values)

    return json({ ok: true })
  } catch (err) {
    return json({ ok: false, error: String(err) }, 500)
  }
}

function json(payload, status) {
  const output = ContentService.createTextOutput(JSON.stringify(payload))
  output.setMimeType(ContentService.MimeType.JSON)
  const response = HtmlService.createHtmlOutput()
  if (status) {
    // Apps Script doesn't set HTTP status directly for Web Apps; this is acceptable for our usage
  }
  return output
}
```

## Deploy Steps

1. Extensions → Apps Script → paste the code above.
2. Replace `ADMIN_PIN` with your shared PIN (must match your Next.js `ADMIN_PIN`).
3. File → Project properties → set Time zone if needed.
4. Deploy → New deployment → Type: Web app
   - Execute as: Me
   - Who has access: Anyone
5. Copy the deployment URL → set it in your Next.js `.env.local` as `APPS_SCRIPT_WEBAPP_URL`.

Test with curl:

```bash
curl -X POST "$APPS_SCRIPT_WEBAPP_URL" \
  -H 'Content-Type: application/json' \
  -d '{"pin":"YOUR_PIN","row":{"slug":"test","title":"Test","status":"active","type":"farm_plot"}}'
```
