'use client'
import { useEffect, useState } from 'react'

export default function ThemesSwitcher() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const root = window.document.documentElement
        if (isDark) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [isDark])

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="bg-[var(--btn-bg)] hover:bg-[var(--btn-hover-bg)] text-[var(--btn-text)] px-4 py-2 rounded cursor-pointer"
        >
            Toggle Theme
        </button>
    )
}