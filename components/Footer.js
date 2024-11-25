import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-white text-white mt-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Section 1: Site Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <div className="flex items-center">
                                <Image
                                    src="/logo.svg"
                                    alt="Site Logo"
                                    width={70}
                                    height={70}
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Section 2: Links */}
                    <div className="hidden md:flex space-x-20 text-black">
                        <Link href="/about">
                            About
                        </Link>
                        <Link href="/services">
                            How it work
                        </Link>
                        <Link href="/services">
                            Blog
                        </Link>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </div>

                    {/* Section 3: Social Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <div className="flex items-center">
                                <Image
                                    src="/icons/social.png"
                                    alt="Site Logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="py-2 mx-auto" style={{ width: "80%" }}>
                <hr className="border-t border-gray-400" />
            </div>
            <div className="text-sm md:text-lg mx-auto pb-4 flex justify-between text-black w-5/6 md:w-4/5">
                <p>Copyright @ 2024 CloseSwap </p>
                <p>Privacy policy</p>
            </div>
        </footer>
    );
}
