import { useState, useEffect, useCallback } from 'react'
import Icon from '../Icon'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import Button from '../Button'

export default function Navbar() {
    const [show, setShow] = useState(false)
    const router = useRouter()
    const { t } = useTranslation()

    const [floatNav, setFlotNav] = useState(false)

    const cb = useCallback(() => {
        const value = window.scrollY
        if (value > 100) {
            setFlotNav(true)
        } else {
            setFlotNav(false)
        }
    }, [floatNav])

    useEffect(() => {
        window.addEventListener('scroll', cb)
        return () => {
            window.removeEventListener('scroll', cb)
        }
    }, [])

    function active(path: string) {
        return {
            'text-yellow-300': router.pathname.search(path) > -1
        }
    }

    return (
        <nav>
            <div
                className={classnames(
                    'h-16 fixed flex top-0 px-4 backdrop-blur-lg backdrop-filter z-30 w-full transition',
                    {
                        'bg-navbar': true,
                        'shadow-md': floatNav
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
                            width="auto"
                            height="auto"
                            src="/img/logo.png"
                            onClick={() => router.push('/')}
                        />
                    </div>
                    <div className="hidden text-white text-base xl:block">
                        <Link href="/about">
                            <a
                                className={classnames(
                                    'font-sofia pr-14',
                                    active('/about')
                                )}
                            >
                                {t('We')}
                            </a>
                        </Link>
                        <Link href="/services">
                            <a
                                className={classnames(
                                    'font-sofia pr-14',
                                    active('/services')
                                )}
                            >
                                {t('Services')}
                            </a>
                        </Link>
                        <Link href="/projects">
                            <a
                                className={classnames(
                                    'font-sofia',
                                    active('/projects')
                                )}
                            >
                                {t('Projects')}
                            </a>
                        </Link>
                    </div>
                    <div className="hidden text-white text-base xl:flex items-center">
                        <Button
                            className="btn-sm bg-white hover:bg-white"
                            onClick={() => router.push('/contact')}
                        >
                            {t('Contact')}
                        </Button>
                        <Lang />
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
                    <Link href="/about">
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
                    <Link href="/contact">
                        <a className="font-sofia py-4 text-3xl">
                            {t('Contact')}
                        </a>
                    </Link>
                    <div className="text-center">
                        <Lang />
                    </div>
                </div>
            </div>
        </nav>
    )
}

function Lang() {
    const { i18n } = useTranslation()

    const changeLanguage = (language: 'es' | 'en') => {
        localStorage.setItem('lang', language)
        i18n.changeLanguage(language)
    }

    const lng = i18n.language.split('-')[0]

    return (
        <div className="xl:ml-8 mt-5 xl:mt-0 text-xl xl:text-xs">
            <span
                className={`cursor-pointer font-sofia-${
                    lng === 'es' ? 'bold' : 'light'
                }`}
                onClick={() => changeLanguage('es')}
            >
                ESP
            </span>
            <span className="inline mx-1">|</span>
            <span
                className={`cursor-pointer font-sofia-${
                    lng === 'en' ? 'bold' : 'light'
                }`}
                onClick={() => changeLanguage('en')}
            >
                ENG
            </span>
        </div>
    )
}
