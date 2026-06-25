import Image from "next/image";

export default function FeatureConversion() {
    return (
        <div className="flex flex-col gap-6 items-center md:p-0 p-10 dark:bg-[#050506]">
            <Image 
                src="/images/iTuneUp.png"
                width={512}
                height={512}
                alt="iTuneUp logo"
                className="w-16 h-16"
            />
            <div className="flex flex-col items-center md:max-w-2/3 lg:max-w-1/2">
                <h1 className={`font-semibold text-center text-[rgb(29,29,31)] text-4xl md:text-5xl dark:text-[#F5F5F7]`}>The clarity you expect.</h1>
                <h1 className={`font-semibold text-center text-4xl md:text-5xl text-[#4e949f]`}>The format you need.</h1>
            </div>
            <div className={`flex flex-row gap-6 md:max-w-2/3 lg:max-w-1/2 font-semibold text-lg text-[#6e6e73] flex-wrap md:flex-nowrap dark:text-white/62`}>
                <p className="p-4">Every track comes in the same <strong className="text-[#1D1D1F] dark:text-white">crisp</strong>, <strong className="text-[#1D1D1F] dark:text-white">high-quality</strong> format used by Apple Music — <strong className="text-[#1D1D1F] dark:text-white">AAC in .m4a</strong>. So your collection doesn&apos;t just sound complete. It sounds incredible. And thanks to AAC, every note stays true. From the deepest bass to the highest detail. All while keeping file sizes light, so your library grows without compromise.</p>
                <p className="p-4">And because it&apos;s the same format Apple Music uses, every track fits seamlessly into your library. Ready to <strong className="text-[#1D1D1F] dark:text-white">sync</strong>. Ready to <strong className="text-[#1D1D1F] dark:text-white">play</strong>. On every Apple device you own. No conversions. No adjustments. Just music that works everywhere you do. From Mac to iPhone to iPad, your collection follows effortlessly.</p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Advanced_Audio_Coding" target="_blank" rel="noreferrer" className={`no-underline hover:underline font-semibold text-lg text-[rgb(0,102,204)] p-6 dark:text-[#5eb6ff]`}>Learn more about AAC (Advanced Audio Coding) &gt;</a>
        </div>
    )
}
