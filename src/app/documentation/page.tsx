import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Documentation",
    description: "Read iTuneUp setup instructions, feature guides, and usage documentation on GitHub.",
    alternates: {
        canonical: "/documentation",
    },
};

export default function Page() {
    return (
        <div className="flex flex-col gap-6 md:pt-20 pt-10 md:pl-10 md:pr-10 pl-4 pr-4 items-center justify-center">
            <h1 className="md:text-6xl text-5xl font-semibold text-[#1D1D1F] text-center lg:max-w-2/3 dark:text-[#F5F5F7]">Want more?</h1>
            <p className="md:text-4xl text-3xl font-semibold text-[#6E6E73] text-center lg:max-w-2/3 dark:text-white/62">All of 
                iTuneUp&apos;s documentation is available on GitHub — with setup instructions, feature guides, 
                and everything you need to get started.
            </p>
            <a href="https://github.com/kalis26/iTuneUp/blob/main/README.md" target="_blank" rel="noreferrer" className={`no-underline hover:underline text-center md:text-left font-semibold md:text-3xl text-2xl text-[rgb(0,102,204)] p-6 dark:text-[#5eb6ff]`}>Read the full documentation on GitHub &gt;</a>
        </div>
    );
}
