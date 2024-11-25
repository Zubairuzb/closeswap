import Image from "next/image";

export default function Hero() {
    return (
        <section className="mx-auto flex items-center text-center md:text-left justify-center px-0 md:px-24 py-16 bg-gray-100 rounded-3xl" style={{ width: "95%", background: 'linear-gradient(76.57deg, #0E0918 34.14%, #4A2F7E 94.67%)', }}>
            {/* Left Section */}
            <div className="text-white space-y-6 mx-12 font-sans w-full md:w-2/3">
                <h1 className="text-5xl md:text-6xl font-bold leading-loose" style={{ lineHeight: "1.5" }}>
                    Local Crypto Trading Simplified
                </h1>
                <p className="text-xl leading-normal">
                    Connect with verified merchants nearby for easy, fee-free crypto transactions
                </p>
                <div className="space-x-4">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700" style={{ backgroundColor: "#500C6F" }}>
                        Get Started
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className="hidden md:block">
                <Image
                    src="/hero.svg"
                    alt="Hero Image"
                    width={250}
                    height={200}
                    className="rounded-lg"
                />
            </div>
        </section>
    );
}
