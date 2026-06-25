import Image from "next/image";

export default function FeatureSearch() {
    return (
        <div className="bg-white dark:bg-[#050506]">
            <h1 className={`font-semibold text-5xl md:text-6xl pt-20 pl-10 pr-10 text-[rgb(29,29,31)] dark:text-[#F5F5F7]`}>Find it. Save it. Entire albums or single tracks.</h1>
            <h1 className={`font-semibold text-5xl md:text-6xl pb-10 pl-10 pr-10 text-[#d464ae]`}> It&apos;s that effortless.</h1>
            <div className="flex flex-row gap-5 bg-white p-10 md:flex-nowrap flex-wrap lg:max-w-4/5 mx-auto w-fit dark:bg-[#050506]">
                <div className="bg-[#F5F5F7] rounded-xl p-3 md:p-10 text-center flex flex-col justify-center dark:bg-[#151517]">
                    <Image 
                        src="/images/Macbook.png"
                        height={1242}
                        width={2048}
                        alt="iTuneUp interface on a Macbook Air M4"
                        className="h-auto w-auto p-5 pb-10"
                    />
                    <span className={`font-semibold text-base text-[#6e6e73] dark:text-white/62`}>With <strong className="text-[#1D1D1F] dark:text-white">iTuneUp,</strong> you can bring music home the way you want it. Search, then download full albums or individual tracks instantly — ready to organize, ready to play.</span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="bg-[#F5F5F7] flex-1 p-6 md:p-10 text-center rounded-xl dark:bg-[#151517]">
                        <span className={`font-semibold text-base text-[#6e6e73] dark:text-white/62`}>And because iTuneUp searches the entire <strong className="text-[#1D1D1F] dark:text-white">Apple Music</strong> catalog, every album you download is matched to the official release — <strong className="text-[#1D1D1F] dark:text-white">complete</strong>, <strong className="text-[#1D1D1F] dark:text-white">organized</strong>, and <strong className="text-[#1D1D1F] dark:text-white"> exactly where it belongs</strong> in your collection.</span>
                        <div className="flex flex-col items-center relative">
                            <div className="absolute top-0 bg-gradient-to-t from-white/0 to-[#F5F5F7] z-50 h-20 w-full dark:to-[#151517]"></div>
                            <Image 
                                src="/images/Album.png"
                                height={300}
                                width={923}
                                alt="iTuneUp album when searched"
                                className="h-auto w-auto p-5"
                            />
                            <div className="absolute bottom-0 bg-gradient-to-b from-white/0 to-[#F5F5F7] z-50 h-12 w-full dark:to-[#151517]"></div>
                        </div>
                    </div>
                    <div className="bg-[#F5F5F7] flex-1 p-6 md:p-10 text-center text-base rounded-xl dark:bg-[#151517]">
                        <div className="flex flex-col items-center">
                            <span className={`font-semibold text-base text-[#6e6e73] dark:text-white/62`}>Build a new library from the ground up. Or perfect the one you already love. With iTuneUp, it&apos;s all there. <strong className="text-[#1D1D1F] dark:text-white">Simple. Seamless. Yours.</strong></span>
                            <Image 
                                src="/images/Library.png"
                                height={305}
                                width={1174}
                                alt="iTuneUp library"
                                className="h-auto w-auto p-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
