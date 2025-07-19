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
            className="bg-[var(--color-primary)] text-[var(--color-secondary)] px-4 py-2 rounded"
        >
            Toggle Theme
        </button>
    )
}