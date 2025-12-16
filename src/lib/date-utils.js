/**
 * Format date to "DD dddd -MMMM -YYYY"
 * Example: "17 Tuesday -December -2025"
 * @param {string|Date} dateInput 
 * @returns {string}
 */
export function formatReceiptDate(dateInput) {
    if (!dateInput) return ""
    const d = new Date(dateInput)
    if (isNaN(d.getTime())) return ""

    const day = d.getDate()
    const dayName = d.toLocaleDateString('en-US', { weekday: 'long' })
    const month = d.toLocaleDateString('en-US', { month: 'long' })
    const year = d.getFullYear()

    // Time part for reference if needed, but requested format is specific
    // "17 Tuesday -December -2025"
    return `${day} ${dayName} -${month} -${year}`
}

/**
 * Combine Date and Time strings into ISO string
 * @param {string} dateStr YYYY-MM-DD
 * @param {string} timeStr HH:MM
 * @returns {string} ISO string or empty
 */
export function combineDateTime(dateStr, timeStr) {
    if (!dateStr || !timeStr) return ""
    return new Date(`${dateStr}T${timeStr}`).toISOString()
}
