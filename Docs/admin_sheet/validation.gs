function validateSheet() {
  const ss = SpreadsheetApp.getActive()
  const projects = ss.getSheetByName('Projects')
  if (!projects) return

  // Check duplicate slugs
  const range = projects.getDataRange().getValues()
  const header = range[0]
  const slugIdx = header.indexOf('slug')
  const seen = new Set()
  const dupes = []
  for (let i = 1; i < range.length; i++) {
    const slug = String(range[i][slugIdx] || '').trim()
    if (!slug) continue
    if (seen.has(slug)) dupes.push(i + 1)
    seen.add(slug)
  }
  if (dupes.length) {
    SpreadsheetApp.getUi().alert('Duplicate slugs at rows: ' + dupes.join(', '))
  }
}
