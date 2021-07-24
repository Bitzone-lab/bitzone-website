import { useState, useEffect, useCallback } from 'react'
import Icon from '../Icon'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import classnames from 'classnames'

export default function Navbar() {
    const [show, setShow] = useState(false)
    const router = useRouter()
    const { t } = useTranslation()
    const [fullBgNavbar, setFullBgNavbar] = useState(false)

    const cb = useCallback(() => {
        const value = window.scrollY
        if (value > 100) {
            setFullBgNavbar(true)
        } else {
            setFullBgNavbar(false)
        }
    }, [fullBgNavbar])

    useEffect(() => {
        window.addEventListener('scroll', cb)
        return () => {
            window.removeEventListener('scroll', cb)
        }
    }, [])

    return (
        <nav>
            <div
                className={classnames(
                    'h-16 fixed flex top-0 px-4 backdrop-blur-lg backdrop-filter z-30 w-full transition',
                    {
                        'bg-navbar': !fullBgNavbar,
                        'bg-navbar-2': fullBgNavbar,
                        'shadow-md': fullBgNavbar
                    }
                )}
            >
                <div className="flex items-center justify-between w-full xl:max-w-7xl xl:mx-auto xl:flex">
                    <div className="xl:hidden" onClick={() => setShow(true)}>
                        <Icon size={20} pointer name="hamburger" />
                    </div>
                    <div className="flex">
                        <img
                            height="20px"
                            width="40px"
                            alt="logo"
                            src="/img/logo_image.svg"
                            onClick={() => router.push('/')}
                        />
                        <img
                            className="hidden xl:block bg-cover xl:pl-2 cursor-pointer"
                            alt="logo text"
                            src="/img/logo.png"
                            onClick={() => router.push('/')}
                        />
                    </div>
                    <div className="hidden text-white text-base xl:block">
                        <Link href="/">
                            <a className="font-sofia pr-14">{t('We')}</a>
                        </Link>
                        <Link href="/services">
                            <a className="font-sofia pr-14">{t('Services')}</a>
                        </Link>
                        <Link href="/projects">
                            <a className="font-sofia">{t('Projects')}</a>
                        </Link>
                    </div>
                    <div className="hidden text-white text-base xl:flex">
                        <Link href="/contacts">
                            <a className="font-sofia-bold pr-10">
                                {t('Contact')}
                            </a>
                        </Link>
                        <img
                            alt="icon accesibility"
                            src="/img/Accesibility.png"
                        />
                    </div>
                    <div className="block xl:hidden"></div>
                </div>
            </div>
            <div
                className={`${
                    show ? 'px-4 w-full' : 'w-0'
                } h-full fixed z-50 top-0 left-0 overflow-x-hidden duration-300 bg-navbar-hidden`}
            >
                <div className="flex items-center justify-between h-20 relative">
                    <div className="flex justify-center w-full">
                        <img
                            height="21px"
                            width="97px"
                            alt="logo"
                            src="/img/bitzone.svg"
                        />
                    </div>
                    <div
                        className="absolute right-2"
                        onClick={() => setShow(false)}
                    >
                        <Icon size={28} pointer name="arrow-left" />
                    </div>
                </div>
                <div className="flex flex-col text-white items-center justify-center p-14 text-2xl">
                    <Link href="/">
                        <a className="font-sofia py-4 text-3xl">{t('We')}</a>
                    </Link>
                    <Link href="/services">
                        <a className="font-sofia py-4 text-3xl">
                            {t('Services')}
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className="font-sofia py-4 text-3xl">
                            {t('Projects')}
                        </a>
                    </Link>
                    <Link href="/contacts">
                        <a className="font-sofia py-4 text-3xl">
                            {t('Contact')}
                        </a>
                    </Link>
                    <hr className="w-full border-2 border-white opacity-60 my-8" />
                    <a className="font-sofia py-4 text-3xl">
                        {t('Accessibility')}
                    </a>
                </div>
            </div>
        </nav>
    )
}
