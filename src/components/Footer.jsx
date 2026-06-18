import logo from "../assets/logo.png";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import {
    FaTelegram,
    FaTwitter,
    FaDiscord,
    FaMedium,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const platformLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/?=about" },
    { name: "Usecase", link: "/?=usecase" },
    { name: "Presale", link: "/presale" },
];

const resourceLinks = [
    {
        name: "Whitepaper",
        link: "/",
        newTab: true,
    },
    {
        name: "Tokenomics",
        link: "/?=tokenomics",
    },
    {
        name: "Roadmap",
        link: "/?=roadmap",
    },
    {
        name: "FAQ",
        link: "/?=faq",
    },
];

const communityLinks = [
    {
        name: "Telegram",
        link: "/",
        icon: RiTelegram2Fill,
    },
    {
        name: "Twitter",
        link: "/",
        icon: FaXTwitter,
    },
    {
        name: "Discord",
        link: "/",
        icon: FaDiscord,
    },
    {
        name: "Medium",
        link: "/",
        icon: FaMedium,
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#18181B80] font-['Inter'] border-t-[0.77px] border-t-[#F0B100] mt-5 rounded-t-[20px]">
            <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-8 lg:py-14">

                {/* Top Footer */}
                <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">

                    {/* Column 1 */}
                    <div className="max-w-[300px]">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="SSC Coin"
                                className="w-[87px] mb-6"
                            />
                        </Link>

                        <p className="text-[#71717B] font-[400] text-sm leading-6">
                            Powering the future of digital payments on Binance Smart Chain.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="text-[#FDC700] font-[700] text-base mb-5">
                            Pages
                        </h4>

                        <ul className="space-y-3">
                            {platformLinks.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.link}
                                        className="text-[#71717B] font-[400] text-sm hover:text-[#FDC700] transition duration-300"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="text-[#FDC700] font-[700] text-base mb-5">
                            Resources
                        </h4>

                        <ul className="space-y-3">
                            {resourceLinks.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.link}
                                        target={item.newTab ? "_blank" : "_self"}
                                        rel={item.newTab ? "noopener noreferrer" : ""}
                                        className="text-[#71717B] font-[400] text-sm hover:text-[#FDC700] transition duration-300"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="text-[#FDC700] font-[700] text-base mb-5">
                            Community
                        </h4>

                        <ul className="space-y-3">
                            {communityLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <li key={item.name}>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-[#71717B] font-[400] text-sm hover:text-[#FDC700] transition duration-300"
                                        >
                                            <Icon className="text-lg" />

                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="h-[1px] bg-[#27272A] my-8"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-5">

                    <p className="text-[#52525C] font-[400] text-sm">
                        © {new Date().getFullYear()} SSCOIN. All rights reserved.
                    </p>

                    {/* <div className="flex flex-wrap justify-center gap-6 text-[#52525C] font-[400] text-sm">

                        <a
                            href="/privacy-policy"
                            className="hover:text-[#FDC700] transition"
                        >
                            Privacy
                        </a>

                        <a
                            href="/terms-condition"
                            className="hover:text-[#FDC700] transition"
                        >
                            Terms
                        </a>

                        <a
                            href="/disclaimer"
                            className="hover:text-[#FDC700] transition"
                        >
                            Disclaimer
                        </a>

                    </div> */}

                </div>

            </div>
        </footer>
    );
}