import { useState } from 'react'
import Icon from '../Icon'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
    const [show, setShow] = useState(false)
    const { t } = useTranslation()

    return (
        <nav>
            <div className="bg-navbar h-16 fixed flex top-0 px-4 backdrop-blur-lg backdrop-filter z-30 w-full">
                <div className="flex items-center justify-between w-full xl:max-w-5xl xl:mx-auto xl:flex">
                    <div className="xl:hidden" onClick={() => setShow(true)}>
                        <Icon size={20} pointer name="hamburger" />
                    </div>
                    <div className="flex">
                        <img
                            height="20px"
                            width="40px"
                            alt="logo"
                            src="img/logo_image.svg"
                        />
                        <img
                            className="hidden xl:block bg-cover xl:pl-2"
                            alt="logo text"
                            src="img/logo.png"
                        />
                    </div>
                    <div className="hidden text-white text-base xl:block">
                        <Link href="/">
                            <a className="font-sofia font-medium pr-14">
                                {t('We')}
                            </a>
                        </Link>
                        <a className="font-sofia font-medium pr-14">
                            {t('Services')}
                        </a>
                        <a className="font-sofia font-medium">
                            {t('Projects')}
                        </a>
                    </div>
                    <div className="hidden text-white text-base xl:flex">
                        <Link href="/contacts">
                            <a className="font-sofia font-bold pr-10">
                                {t('Contact')}
                            </a>
                        </Link>
                        <img
                            alt="icon accesibility"
                            src="img/Accesibility.png"
                        />
                    </div>
                    <div className="block xl:hidden"></div>
                </div>
                <div
                    className={`${
                        show ? 'px-4 w-full' : 'w-0'
                    } h-full fixed z-50 top-0 left-0 overflow-x-hidden duration-300 bg-navbar-hidden`}
                >
                    <div className="flex items-center justify-between h-16">
                        <div className="w-6"></div>
                        <div>
                            <img
                                height="21px"
                                width="97px"
                                alt="logo"
                                src="img/bitzone.svg"
                            />
                        </div>
                        <div onClick={() => setShow(false)}>
                            <Icon size={24} pointer name="arrow-left" />
                        </div>
                    </div>
                    <div className="flex flex-col text-white items-center px-8 text-2xl">
                        <Link href="/">
                            <a className="font-sofia py-2">{t('We')}</a>
                        </Link>
                        <a className="font-sofia py-2">{t('Services')}</a>
                        <a className="font-sofia py-2">{t('Projects')}</a>
                        <Link href="/contacts">
                            <a className="font-sofia py-2">{t('Contact')}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
