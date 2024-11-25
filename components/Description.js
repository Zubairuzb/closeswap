import Image from "next/image"

const Description = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto text-center p-6 font-sans">
                <p className="text-2xl mb-4">
                    CloseSwap is a peer-to-peer platform designed to make small crypto trades more accessible.

                </p>
                <p className="text-2xl mb-4">
                    By connecting users with verified local merchants who serve as Points of Sale (POS), CloseSwap offers a secure and easy way to trade crypto and get gas tokens without fees.

                </p>
                <p className="text-2xl mb-4">
                    With a focus on transparency, we empower users to trade where and when it suits them best.

                </p>
            </div>
            <div>
                <h2 className="text-center font-bold text-3xl py-2">How it Works</h2>
            </div>
            <div className="container mx-auto">
                <section className="mx-auto my-12 flex items-center font-sans justify-center px-0 md:px-8 py-16 rounded-3xl w-5/6 md:w-4/5" style={{ background: 'linear-gradient(76.57deg, #0E0918 34.14%, #4A2F7E 94.67%)', }}>
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 text-white  md:space-y-0 md:space-y-6 mx-4 md:mx-12">
                        <h2 className="font-bold text-2xl md:text-3xl py-6 md:py-12">Find a Nearby Merchant</h2>
                        <p className="text-2xl leading-snug font-light">
                            Use our app to locate verified merchants in your area, each with
                            a POS system and deposit-backed credentials.                        </p>

                    </div>

                    {/* Right Section */}
                    <div className="hidden md:block">
                        <Image
                            src="/image1.png"
                            alt="Hero Image"
                            width={350}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                </section>
                <section className="mx-auto my-12 flex items-center font-sans justify-center px-0 md:px-8 py-16 rounded-3xl w-5/6 md:w-4/5" style={{ background: 'linear-gradient(76.57deg, #0E0918 34.14%, #4A2F7E 94.67%)', }}>
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 text-white  md:space-y-0 md:space-y-6 mx-4 md:mx-12">
                        <h2 className="font-bold text-2xl md:text-3xl py-6 md:py-12">Set Your Trade Terms</h2>
                        <p className="text-2xl leading-snug font-light">
                            Connect with the merchant, negotiate your terms, and make an agreement that works best for you both.                       </p>

                    </div>

                    {/* Right Section */}
                    <div className="hidden md:block">
                        <Image
                            src="/image2.png"
                            alt="Hero Image"
                            width={350}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                </section>
                <section className="mx-auto my-12 flex items-center font-sans justify-center px-0 md:px-8 py-16 rounded-3xl w-5/6 md:w-4/5" style={{ background: 'linear-gradient(76.57deg, #0E0918 34.14%, #4A2F7E 94.67%)', }}>
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 text-white  md:space-y-0 md:space-y-6 mx-4 md:mx-12">
                        <h2 className="font-bold text-2xl md:text-3xl py-6 md:py-12">Complete the Exchange</h2>
                        <p className="text-2xl leading-snug font-light">
                            Meet with the merchant to finalize the trade in person. Our merchants have the flexibility to offer free or discounted services based on your agreement.
                        </p>

                    </div>

                    {/* Right Section */}
                    <div className="hidden md:block">
                        <Image
                            src="/image3.png"
                            alt="Hero Image"
                            width={350}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Description;
