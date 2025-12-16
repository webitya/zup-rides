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

    return `${day} ${dayName} -${month} -${year}`
}

/**
 * Format date AND time to "DD dddd -MMMM -YYYY, hh:mm A"
 * Example: "17 Tuesday -December -2025, 02:30 PM"
 * @param {string|Date} dateInput 
 * @returns {string}
 */
export function formatReceiptDateTime(dateInput) {
    if (!dateInput) return ""
    const d = new Date(dateInput)
    if (isNaN(d.getTime())) return ""

    const datePart = formatReceiptDate(d)
    const timePart = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })

    return `${datePart}, ${timePart}`
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
