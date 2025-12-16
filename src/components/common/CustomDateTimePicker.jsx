"use client"

import { useState, useEffect } from "react"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// Data for 3-step picker
const HOURS_12 = Array.from({ length: 12 }, (_, i) => i + 1)
const MINUTES = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, "0")) // 00, 05, ... 55
const AMPM = ["AM", "PM"]

export default function CustomDateTimePicker({
    label,
    dateValue,
    timeValue,
    onDateChange,
    onTimeChange,
    minDate,
    color = "green" // green or orange
}) {
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [showCalendar, setShowCalendar] = useState(false)
    const [showTimePicker, setShowTimePicker] = useState(false)

    // Time Picker States
    const [timeStep, setTimeStep] = useState(0) // 0: Hour, 1: Minute, 2: AM/PM
    const [tempTime, setTempTime] = useState({ h: null, m: null, ampm: null })

    // Reset picker state when opening
    useEffect(() => {
        if (showTimePicker) {
            setTimeStep(0)
            setTempTime({ h: null, m: null, ampm: null })
        }
    }, [showTimePicker])

    // Helper to format display date
    const formatDateDisplay = (dateStr) => {
        if (!dateStr) return "Select Date"
        const d = new Date(dateStr)
        return d.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric' })
    }

    // Helper to format time for display (12h)
    const formatTimeDisplay = (timeStr) => {
        if (!timeStr) return ""
        const [h, m] = timeStr.split(':')
        const hour = parseInt(h)
        const date = new Date()
        date.setHours(hour, parseInt(m))
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
    }

    // Colors
    const activeColorClass = color === "green" ? "bg-green-600 border-green-600 text-white shadow-green-200" : "bg-orange-500 border-orange-500 text-white shadow-orange-200"
    const hoverColorClass = color === "green" ? "hover:bg-green-50 hover:text-green-700 hover:border-green-200" : "hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200"
    const badgeColorClass = color === "green" ? "text-green-600 bg-green-50" : "text-orange-500 bg-orange-50"

    // Calendar Logic
    const getDaysInMonth = (date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const days = []
        for (let i = 0; i < firstDay.getDay(); i++) days.push(null)
        for (let i = 1; i <= lastDay.getDate(); i++) days.push(new Date(year, month, i))
        return days
    }

    const handlePrevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
    const handleNextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))

    const isDateDisabled = (date) => {
        if (!minDate) return false
        const min = new Date(minDate)
        min.setHours(0, 0, 0, 0)
        const current = new Date(date)
        current.setHours(0, 0, 0, 0)
        return current < min
    }

    const isDateSelected = (date) => {
        if (!dateValue || !date) return false
        const selected = new Date(dateValue)
        return date.getDate() === selected.getDate() &&
            date.getMonth() === selected.getMonth() &&
            date.getFullYear() === selected.getFullYear()
    }

    const handleDateSelect = (date) => {
        if (!date) return
        const offset = date.getTimezoneOffset()
        const d = new Date(date.getTime() - (offset * 60 * 1000))
        onDateChange(d.toISOString().split('T')[0])
        setShowCalendar(false)
    }

    // Time Logic
    const handleHourSelect = (h) => {
        setTempTime(prev => ({ ...prev, h }))
        setTimeStep(1)
    }

    const handleMinuteSelect = (m) => {
        setTempTime(prev => ({ ...prev, m }))
        setTimeStep(2)
    }

    const handleAmpmSelect = (ampm) => {
        // Finalize selection
        let hour24 = tempTime.h
        if (ampm === "PM" && hour24 < 12) hour24 += 12
        if (ampm === "AM" && hour24 === 12) hour24 = 0

        const finalTime = `${hour24.toString().padStart(2, '0')}:${tempTime.m}`
        onTimeChange(finalTime)
        setShowTimePicker(false)
    }

    const getStepTitle = () => {
        switch (timeStep) {
            case 0: return "Select Hour"
            case 1: return "Select Minute"
            case 2: return "Select Format"
            default: return ""
        }
    }

    const getTempDisplay = () => {
        const h = tempTime.h || "--"
        const m = tempTime.m || "--"
        const ap = tempTime.ampm || "--"
        return <span className="text-lg font-bold text-gray-800 tracking-wider">
            {timeStep > 0 ? <span className="text-gray-900">{h}</span> : <span className="text-gray-400">HH</span>}
            <span className="mx-1 text-gray-400">:</span>
            {timeStep > 1 ? <span className="text-gray-900">{m}</span> : <span className="text-gray-400">MM</span>}
            <span className="mx-1"></span>
            {/* AM/PM is usually last step, so just placeholder until done really */}
        </span>
    }

    const resetTime = () => {
        if (timeStep > 0) setTimeStep(timeStep - 1)
    }

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Header / Label */}
            <div className={`px-4 py-3 border-b border-gray-100 flex items-center justify-between ${color === "green" ? "bg-green-50/50" : "bg-orange-50/50"}`}>
                <label className="text-sm font-bold text-gray-800 flex items-center gap-2">
                    {label}
                </label>
            </div>

            <div className="p-4 grid grid-cols-2 gap-4">
                {/* Date Trigger */}
                <div
                    onClick={() => { setShowCalendar(!showCalendar); setShowTimePicker(false) }}
                    className={`cursor-pointer border rounded-lg p-3 flex items-center gap-3 transition-all ${showCalendar ? `border-${color === 'green' ? 'green-500 ring-1 ring-green-100' : 'orange-500 ring-1 ring-orange-100'}` : 'border-gray-200 hover:border-gray-300'}`}
                >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${badgeColorClass}`}>
                        <CalendarTodayIcon sx={{ fontSize: 16 }} />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Date</p>
                        <p className="text-sm font-bold text-gray-900">{formatDateDisplay(dateValue)}</p>
                    </div>
                </div>

                {/* Time Trigger */}
                <div
                    onClick={() => { setShowTimePicker(!showTimePicker); setShowCalendar(false) }}
                    className={`cursor-pointer border rounded-lg p-3 flex items-center gap-3 transition-all ${showTimePicker ? `border-${color === 'green' ? 'green-500 ring-1 ring-green-100' : 'orange-500 ring-1 ring-orange-100'}` : 'border-gray-200 hover:border-gray-300'}`}
                >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${badgeColorClass}`}>
                        <AccessTimeIcon sx={{ fontSize: 18 }} />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Time</p>
                        <p className="text-sm font-bold text-gray-900">{timeValue ? formatTimeDisplay(timeValue) : "Select Time"}</p>
                    </div>
                </div>
            </div>

            {/* Calendar Popover */}
            {showCalendar && (
                <div className="p-4 border-t border-gray-100 bg-white animate-in slide-in-from-top-2 fade-in duration-200">
                    <div className="flex items-center justify-between mb-4">
                        <button onClick={handlePrevMonth} type="button" className="p-1 hover:bg-gray-100 rounded-full text-gray-600"><ChevronLeftIcon /></button>
                        <span className="font-bold text-gray-800">{MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
                        <button onClick={handleNextMonth} type="button" className="p-1 hover:bg-gray-100 rounded-full text-gray-600"><ChevronRightIcon /></button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2">
                        {DAYS.map(d => <div key={d} className="text-center text-xs font-semibold text-gray-400 py-1">{d}</div>)}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                        {getDaysInMonth(currentMonth).map((date, idx) => {
                            if (!date) return <div key={idx} />
                            const disabled = isDateDisabled(date)
                            const selected = isDateSelected(date)
                            return (
                                <button
                                    key={idx}
                                    onClick={(e) => { e.preventDefault(); !disabled && handleDateSelect(date) }}
                                    disabled={disabled}
                                    type="button"
                                    className={`
                                        h-9 w-9 rounded-full flex items-center justify-center text-sm font-medium transition-all
                                        ${selected ? `${activeColorClass} shadow-lg scale-105` : disabled ? "text-gray-300 cursor-not-allowed" : `text-gray-700 ${hoverColorClass}`}
                                    `}
                                >{date.getDate()}</button>
                            )
                        })}
                    </div>
                </div>
            )}

            {/* 3-Step Time Picker Popover */}
            {showTimePicker && (
                <div className="p-4 border-t border-gray-100 bg-white animate-in slide-in-from-top-2 fade-in duration-200">
                    {/* Time Picker Header */}
                    <div className="flex items-center justify-between mb-4">
                        {timeStep > 0 ? (
                            <button onClick={resetTime} className="p-1 hover:bg-gray-100 rounded-full text-gray-600"><ArrowBackIcon sx={{ fontSize: 20 }} /></button>
                        ) : <div></div>}

                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-gray-400">{getStepTitle()}</span>
                            {getTempDisplay()}
                        </div>
                        <div className="w-8"></div>
                    </div>

                    {/* Step 1: Hours */}
                    {timeStep === 0 && (
                        <div className="grid grid-cols-4 gap-2">
                            {HOURS_12.map(h => (
                                <button
                                    key={h}
                                    onClick={(e) => { e.preventDefault(); handleHourSelect(h) }}
                                    type="button"
                                    className={`py-2 rounded-lg text-sm font-bold border transition-all ${hoverColorClass} border-gray-100`}
                                >{h}</button>
                            ))}
                        </div>
                    )}

                    {/* Step 2: Minutes */}
                    {timeStep === 1 && (
                        <div className="grid grid-cols-4 gap-2">
                            {MINUTES.map(m => (
                                <button
                                    key={m}
                                    onClick={(e) => { e.preventDefault(); handleMinuteSelect(m) }}
                                    type="button"
                                    className={`py-2 rounded-lg text-sm font-bold border transition-all ${hoverColorClass} border-gray-100`}
                                >{m}</button>
                            ))}
                        </div>
                    )}

                    {/* Step 3: AM/PM */}
                    {timeStep === 2 && (
                        <div className="grid grid-cols-2 gap-4">
                            {AMPM.map(period => (
                                <button
                                    key={period}
                                    onClick={(e) => { e.preventDefault(); handleAmpmSelect(period) }}
                                    type="button"
                                    className={`py-4 rounded-xl text-lg font-bold border-2 transition-all ${hoverColorClass} border-gray-100`}
                                >{period}</button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
