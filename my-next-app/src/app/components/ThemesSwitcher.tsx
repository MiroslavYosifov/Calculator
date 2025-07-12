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
            className="primary-bgr-color primary-txt-color px-4 py-2 bg-gray-300 rounded"
        >
            Toggle Theme111
        </button>
    )
}