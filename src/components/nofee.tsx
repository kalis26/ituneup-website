import Image from "next/image";

export default function NoFee() {
    return (
        <div className="bg-white flex flex-col items-center gap-10 lg:max-w-2/3 mx-auto p-4 md:p-10 dark:bg-[#050506]">
            <div className="flex flex-col items-center">
                <h1 className={`font-semibold text-6xl md:text-7xl text-center text-[rgb(29,29,31)] dark:text-[#F5F5F7]`}>What&apos;s better than music?</h1>
                <h1 className={`font-semibold text-6xl md:text-7xl text-center text-[rgb(29,29,31)] pb-10 dark:text-[#F5F5F7]`}>Music that&apos;s free.</h1>
                <p className={`font-semibold text-xl text-[#6E6E73] text-center lg:max-w-4/5 dark:text-white/62`}>With iTuneUp, there are no barriers between you and your music. No subscriptions. No limits. Freedom built in. Just everything you love, ready to download and enjoy.</p>
            </div>
            <div className="flex flex-row items-center gap-10">
                <div className="flex flex-col gap-4">
                    <div className="p-4">
                        <p className={`text-xl text-[#6e6e73] font-semibold dark:text-white/62`}><strong className="text-[#1D1D1F] dark:text-white">No subscription.</strong></p> 
                        <p className={`text-xl text-[#6e6e73] font-semibold dark:text-white/62`}>Enjoy full access without paying a cent.</p>
                    </div>
                    <div className="p-4">
                        <p className={`text-xl text-[#6e6e73] font-semibold dark:text-white/62`}><strong className="text-[#1D1D1F] dark:text-white">No hidden costs.</strong></p> 
                        <p className={`text-xl text-[#6e6e73] font-semibold dark:text-white/62`}>What you see is what you get.</p>
                    </div>
                    <div className="p-4">
                        <p className={`text-xl text-[#6e6e73] font-semibold dark:text-white/62`}><strong className="text-[#1D1D1F] dark:text-white">Free forever.</strong></p> 
                        <p className={`text-xl text-[#6e6e73] font-semibold dark:text-white/62`}>All the features. Always available.</p>
                    </div>
                </div>
                <Image 
                    src="/images/NoFee.png"
                    height={90}
                    width={90}
                    alt="No hidden fee icon"
                />
            </div>
        </div>
    );
}
