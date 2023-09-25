import { navbarStyles } from '@/styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import { FaChevronDown, FaGlobe, FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai"
import { useTranslation } from 'react-i18next';

const Navbar: FC<any> = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { locale, locales, push } = useRouter()


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        console.log('toggleMobileMenu')
    };
    const router = useRouter()
    const {t} = useTranslation()
    return (
        <div className={navbarStyles.nav}>
            <nav className='container flex justify-between items-center'>
                <div className={navbarStyles.logo}>
                    <Link href="/" >
                        <img src="/images/logo1.svg" alt="logo" />
                    </Link>
                </div>
                {/* <div> */}
                <ul className={`${navbarStyles.nav_list} ${mobileMenuOpen ? navbarStyles.active : ''}`}>
                    <li className={navbarStyles.nav__item}>
                        <Link className={navbarStyles.nav__link} href="/">{t("HOME.NAVBAR.NAV_ITEM_1")}</Link>
                        <div className={navbarStyles.hidden_line}></div>
                    </li>
                    <li className={navbarStyles.nav__item}>
                        <Link className={navbarStyles.nav__link} href="#about-us">{t("HOME.NAVBAR.NAV_ITEM_2")}</Link>
                        <div className={navbarStyles.hidden_line}></div>
                    </li>
                    {/* maybe, below codes will change to dropdown */}
                    <li className={navbarStyles.nav__item}>
                        <div className={navbarStyles.companies}>
                            <div className='flex items-center gap-2'>
                                <span>{t("HOME.NAVBAR.NAV_ITEM_3")}</span>
                                <FaChevronDown className="text-xs" />
                            </div>
                            <div className={navbarStyles.dropdown}>
                                <div>
                                    <Link href="#services">{t("HOME.NAVBAR.DROPDOWN")}</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={navbarStyles.nav__item}>
                        <Link className={navbarStyles.nav__link} href="#news">{t("HOME.NAVBAR.NAV_ITEM_3")}</Link>
                        <div className={navbarStyles.hidden_line}></div>
                    </li>
                    <li className={navbarStyles.nav__item}>
                        <Link className={navbarStyles.nav__link} href="#contacts">{t("HOME.NAVBAR.NAV_ITEM_4")}</Link>
                        <div className={navbarStyles.hidden_line}></div>
                    </li>
                    {
                        mobileMenuOpen && (
                            <>
                                <li className={navbarStyles.mobile_nav__item}>
                                    <FaGlobe style={{ fontSize: "18px" }} />
                                    <div className={navbarStyles.lang_change2}>
                                        <Link href={'/'} locale={"ru"}>Ru</Link>
                                        <div className={navbarStyles.little_line}></div>
                                        <Link href={'/'} locale={"uz"}>Uz</Link>
                                    </div>
                                </li>
                                <li className={navbarStyles.mobile_nav__item}>
                                    <FaPhoneAlt style={{ fontSize: "18px" }} />

                                    <div>
                                        <div>
                                            <a href="tel:+998971419129">
                                                <span>(+998)&nbsp;97&nbsp;141&nbsp;91&nbsp;29</span>
                                            </a>
                                        </div>
                                        <div>

                                            <a href="tel:+998951569129">
                                                <span>(+998)&nbsp;95&nbsp;156&nbsp;91&nbsp;29</span>
                                            </a>
                                        </div>
                                    </div>

                                </li>
                                <button onClick={() => setMobileMenuOpen(false)} className={navbarStyles.closeBtn}>
                                    <AiOutlineClose />
                                </button>
                            </>
                        )
                    }
                </ul>
                <ul className={navbarStyles.flexible_item}>
                    <li className={navbarStyles.lang_change}>
                        <FaGlobe />
                        <div className={navbarStyles.lang_change2}>
                            <Link href={`/ru`} locale={'ru'}>Ru</Link>
                            <div className={navbarStyles.little_line}></div>
                            <Link href={`/uz`} locale={'uz'}>Uz</Link>
                        </div>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaPhoneAlt style={{ fontSize: "18px" }} />

                        <div>
                            <div>
                                <a href="tel:+998971419129">
                                    <span>(+998)&nbsp;97&nbsp;141&nbsp;91&nbsp;29</span>
                                </a>
                            </div>
                            <div>

                                <a href="tel:+998951569129">
                                    <span>(+998)&nbsp;95&nbsp;156&nbsp;91&nbsp;29</span>
                                </a>
                            </div>
                        </div>

                    </li>
                    <li className={navbarStyles.tablet_menu_icon} onClick={() => setMobileMenuOpen(true)}>
                        &#9776;
                    </li>
                </ul>
                <li className={navbarStyles.mobile_menu_icon} onClick={() => setMobileMenuOpen(true)}>
                    &#9776;
                </li>
            </nav >
        </div >
    )
}

export default Navbar