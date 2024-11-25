import Image from "next/image"

const CallToAction = () => {
    return (
        <div className="font-sans">
            <section className="w-5/6 md:w-4/5 mx-auto text-center my-12 px-2 py-12 bg-gray-100 rounded-3xl" style={{ background: 'linear-gradient(76.57deg, #0E0918 34.14%, #4A2F7E 94.67%)', }}>
                {/* Left Section */}
                <p className="text-2xl pb-6 px-4 md:px-0 leading-snug font-light text-white">
                    New Users? Sign up today and find merchants ready to help with your next crypto trade.</p>
                <div className="space-x-4">
                    <button className="px-12 py-3 my-4 bg-blue-600 text-white rounded-3xl hover:bg-blue-700" style={{ backgroundColor: "#500C6F" }}>
                        Sign up now
                    </button>
                </div>
            </section>
            <section className="w-5/6 md:w-4/5 mx-auto text-center my-12 px-2 py-12 bg-gray-100 rounded-3xl" style={{ background: 'linear-gradient(76.57deg, #0E0918 34.14%, #4A2F7E 94.67%)', }}>
                {/* Left Section */}

                <p className="text-2xl pb-6 px-4 md:px-0 leading-snug font-light text-white">
                    Want to be a Merchants? Want to become a CloseSwap merchant? Apply to join our verified network and start connecting with local users.
                </p>
                <div className="space-x-4">
                    <button className="px-12 py-3 my-4 bg-blue-600 text-white rounded-3xl hover:bg-blue-700" style={{ backgroundColor: "#500C6F" }}>
                        Apply now
                    </button>
                </div>
            </section>
            <section className="w-5/6 md:w-4/5 relative mx-auto my-8 flex-col md:flex items-between justify-center px-8 rounded-3xl" style={{ height: "500px", background: '#0e0918', }}>
                {/* Left Section */}
                <div className="w-full md:w-1/2 text-white space-y-6 mx-2 md:mx-12 font-sans">
                    <h1 className="pt-8 md:mt-0 text-3xl md:text-6xl font-bold leading-snug">
                        Try it right now
                    </h1>
                    <p className="text-lg md:text-2xl">
                        Download CloseSwap on the AppStore and Google Play and discover a simplified crypto P2P trading with merchants around you. Enjoy the simplicity directly on your device.
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 text-center">

                        <div className="mx-auto md:mx-0">
                            <Image src="/icons/google.png" width={150} height={80} />
                        </div>
                        <div className="mx-auto md:mx-0">
                            <Image src="/icons/apple.png" width={150} height={80} />
                        </div>
                    </div>

                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 hidden md:block">
                    <div className="flex absolute bottom-0 right-10">
                        <Image
                            src="/image3.png"
                            alt="Hero Image"
                            width={300}
                            height={400}
                            className="rounded-lg"
                        />
                        <Image
                            src="/image4.png"
                            alt="Hero Image"
                            width={250}
                            height={200}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>
        </div>

    )
};

export default CallToAction;
