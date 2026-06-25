import Image from "next/image";

export default function FeatureMetadata() {
    return (
        <div className="flex flex-col gap-10 bg-[#F4F4F6] pb-20 dark:bg-[#101012]">
            <div className="p-3 md:p-10 flex flex-col gap-6">
                <div className="pb-10">
                    <h1 className={`pl-7 md:p-0 text-5xl md:text-6xl text-[#708DFA] font-semibold`}>Details matter.</h1>
                    <h1 className={`pl-7 md:p-0 text-5xl md:text-6xl text-[rgb(29,29,31)] font-semibold dark:text-[#F5F5F7]`}>That&apos;s why we get them right.</h1>
                </div>
            </div>
            <Image 
                src="/images/Highlight.png"
                height={1360}
                width={2520}
                alt="Apple Music Library on an iPhone"
                className="w-full h-full"
            />
            <p className={`text-2xl text-[#6e6e73] font-semibold pl-10 pr-10 md:pl-16 pt-10 md:pt-16 pb-10 lg:pl-48 md:max-w-2/3 dark:text-white/62`}>Your music should feel <strong className="text-[#1D1D1F] dark:text-white">complete.</strong> That&apos;s why every track you download 
                comes enriched with the details that matter — titles, artists, release dates,
                artwork and more. <strong className="text-[#1D1D1F] dark:text-white">The result?</strong> A library that looks polished, 
                stays perfectly organized, and syncs seamlessly with Apple Music on every device.
            </p>
            <div className="flex flex-col gap-40 p-10 items-center">
                <div className="flex flex-col md:flex-row gap-10 items-center lg:max-w-2/3">
                    <div className="flex-1 min-w-0">
                        <h1 className={`font-semibold text-[rgb(29,29,31)] text-3xl md:text-4xl md:text-left text-center pb-4 dark:text-[#F5F5F7]`}>Complete metadata.</h1>
                        <p className={`font-semibold text-[#6e6e73] text-xl md:text-2xl md:text-left text-center dark:text-white/62`}>Every song comes with titles, artists, release dates, and more. Straight from Apple Music.</p>
                    </div>
                    <Image 
                        src="/images/iTunes.png"
                        height={872}
                        width={587}
                        alt="iTunes tab showing metadata"
                        className="rounded-2xl shadow-2xl shadow-black/20 flex-1 min-w-0"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-10 items-center lg:max-w-2/3">
                    <div className="flex-1 min-w-0">
                        <h1 className={`font-semibold text-[rgb(29,29,31)] text-3xl md:text-4xl pb-4 md:text-left text-center dark:text-[#F5F5F7]`}>Beautiful artwork.</h1>
                        <p className={`font-semibold text-[#6e6e73] text-xl md:text-2xl md:text-left text-center dark:text-white/62`}>Stunning covers, in high quality. And when Apple Music offers animated artwork, your library moves with it.</p>
                    </div>
                    <Image 
                        src="/images/AnimatedArtwork.gif"
                        height={786}
                        width={800}
                        alt="Apple Music animated artwork"
                        className="w-auto h-auto flex-1 min-w-0"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-10 items-center lg:max-w-2/3">
                    <div className="flex-1 min-w-0">
                        <h1 className={`font-semibold text-[rgb(29,29,31)] text-3xl md:text-4xl md:text-left text-center pb-4 dark:text-[#F5F5F7]`}>Seamless integration.</h1>
                        <p className={`font-semibold text-[#6e6e73] text-xl md:text-2xl md:text-left text-center dark:text-white/62`}>Built to fit perfectly into Apple Music, iTunes, and all your devices.</p>
                    </div>
                    <Image 
                        src="/images/MusicMacbook.png"
                        height={1209}
                        width={2072}
                        alt="Macbook showing Apple Music"
                        className="flex-1 min-w-0"
                    />
                </div>
            </div>
        </div>
    );
}
