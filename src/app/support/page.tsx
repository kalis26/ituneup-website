import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Support",
    description: "Get iTuneUp support through GitHub issues for bug reports, feature requests, and setup questions.",
    alternates: {
        canonical: "/support",
    },
};

export default function Page() {
    return (
        <div className="flex flex-col gap-6 md:pt-20 pt-10 md:pl-10 md:pr-10 pl-4 pr-4 items-center justify-center">
            <h1 className="md:text-6xl text-5xl font-semibold text-[#1D1D1F] text-center lg:max-w-2/3 dark:text-[#F5F5F7]">We&apos;re here for you.</h1>
            <p className="md:text-4xl text-3xl font-semibold text-[#6E6E73] text-center lg:max-w-2/3 dark:text-white/62">We keep support simple. If you run into an issue or have a request, just head to our GitHub page and open an issue. We&apos;ll take it from there.</p>
            <a href="https://github.com/kalis26/iTuneUp/issues" target="_blank" rel="noreferrer" className={`text-center md:text-left no-underline hover:underline font-semibold md:text-3xl text-2xl text-[rgb(0,102,204)] p-6 dark:text-[#5eb6ff]`}>Get support on Github &gt;</a>
        </div>
    );
}
