'use client'

import { useEffect, useState } from "react";

const STORAGE_KEY = "ituneup-theme";

function applyTheme(theme: "light" | "dark") {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = window.localStorage.getItem(STORAGE_KEY);
        const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : preferredTheme;

        setTheme(initialTheme);
        applyTheme(initialTheme);
        setMounted(true);
    }, []);

    const nextTheme = theme === "dark" ? "light" : "dark";

    const toggleTheme = () => {
        setTheme(nextTheme);
        applyTheme(nextTheme);
        window.localStorage.setItem(STORAGE_KEY, nextTheme);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} mode`}
            title={`Switch to ${nextTheme} mode`}
            className="grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded-full border border-black/10 bg-white/70 text-[#1D1D1F] transition-all duration-200 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
        >
            <span className="sr-only">Switch to {nextTheme} mode</span>
            {mounted && theme === "dark" ? (
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                </svg>
            ) : (
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M20.5 14.4A7.8 7.8 0 0 1 9.6 3.5 8.8 8.8 0 1 0 20.5 14.4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
                </svg>
            )}
        </button>
    );
}
