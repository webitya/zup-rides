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
 * Format date for Transaction Date (Top of Receipt)
 * Format: "DD/MM/YYYY hh:mm:ss A"
 * Example: "16/12/2025 1:52:04 PM"
 */
export function formatTransactionDate(dateInput) {
    if (!dateInput) return ""
    const d = new Date(dateInput)
    if (isNaN(d.getTime())) return ""

    const day = d.getDate().toString().padStart(2, '0')
    const month = (d.getMonth() + 1).toString().padStart(2, '0') // 0-indexed
    const year = d.getFullYear()

    // Time with AM/PM
    const timePart = d.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    })

    return `${day}/${month}/${year} ${timePart}`
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

/**
 * Format date to "DD MMMM YYYY h:mm:ss A"
 * Example: "16 December 2025 2:43:31 PM"
 */
export function formatReceiptLongDate(dateInput) {
    if (!dateInput) return ""
    const d = new Date(dateInput)
    if (isNaN(d.getTime())) return ""

    const datePart = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    const timePart = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true })

    return `${datePart} ${timePart}`
}
