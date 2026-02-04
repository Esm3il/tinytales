import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="flex flex-row items-center justify-between">
                    <Link href={'/'} className="logo">
                        <Image src={"/Logo.svg"} alt="logo" width={69.98} height={51}/>
                    </Link>
                    <Image src={"/icons/Group.svg"} alt="group" width={26} height={26} className="md:hidden"/>
                </div>
                <div className="flex flex-row w-full h-full justify-between pl-[2.7rem]">
                    <section className="pt-[2.375rem]">
                        <ul className="gap-[1.5rem]">
                            <Link href={"/"} className="nav-link w-[4.8125rem]">
                                <Image src={"/icons/home.svg"} alt="home" width={19} height={19}/>
                                <p>Home</p>
                            </Link>
                            <Link href={"/our-catogery"} className="nav-link">
                                <Image src={"/icons/apps.svg"} alt="our category" width={19} height={19}/>
                                <p>Our Category</p>
                            </Link>
                            <Link href={"/about"} className="nav-link">
                                <Image src={"/icons/interactive.svg"} alt="aboutus" width={19} height={19}/>
                                <p>About Us</p>
                            </Link>
                            <Link href={"/contact"} className="nav-link">
                                <Image src={"/icons/id_card.svg"} alt="contact us" width={19} height={19}/>
                                <p>Contact Us</p>
                            </Link>
                            <Link href={"/faqs"} className="nav-link">
                                <Image src={"/icons/chat.svg"} alt="faqs" width={19} height={19}/>
                                <p>FAQs</p>
                            </Link>
                        </ul>
                    </section>
                    <section className="pt-[2.5rem]">
                        <ul className="gap-[16px]">
                            <Image src={"/icons/shopping bag.svg"} alt="Shopping Bag" width={24} height={24}/>
                            <Image src={"/icons/notification.svg"} alt="Notification" width={24} height={24}/>
                            <Image src={"/icons/love.svg"} alt="Love" width={24} height={24}/>
                            <div className="nav-section2 gap-[8px]">
                                <div className="nav-section2">
                                    <p className="text-text-black-500 text-[0.875rem]">EN</p>
                                    <Image src={"/icons/down-arrow.svg"} alt="down-arrow" width={24} height={24}/>
                                </div>
                                <div className="nav-section2">
                                    <Image src={"/icons/user.svg"} alt="user" width={24} height={24}/>
                                    <Image src={"/icons/down-arrow.svg"} alt="down-arrow" width={24} height={24}/>
                                </div>
                            </div>
                        </ul>
                    </section>
                </div>
            </nav>
        </header>
    );
}
 
export default Navbar;