import { useState } from 'react'
import Icon from '../Icon'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

export default function Drawer() {
    const [showUniverses, setShowUniverses] = useState(false)
    const [show, setShow] = useState(false)
    const router = useRouter()
    const { t } = useTranslation()

    return (
        <nav>
            <div
                className="h-10 fixed flex px-4 backdrop-blur-lg backdrop-filter z-40 transition bg-navbar cursor-pointer"
                onClick={() => setShowUniverses(true)}
                style={{
                    top: '5em'
                }}
            >
                <div className="flex items-center justify-between w-full xl:max-w-5xl xl:mx-auto xl:flex">
                    <Icon size={20} pointer name="shapes" />
                </div>
            </div>
            <div
                className={`${
                    showUniverses ? 'w-full xl:w-80 xl:h-auto' : 'w-0'
                } xl:top-16 h-full fixed z-50 top-0 left-0 overflow-x-hidden duration-300 bg-navbar-hidden`}
            >
                <div className="flex px-4 items-center justify-between h-16 relative xl:hidden">
                    <div className="xl:hidden" onClick={() => setShow(true)}>
                        <Icon size={20} pointer name="hamburger" />
                    </div>
                    <div className="hidden xl:block"></div>
                    <div>
                        <p className="text-white font-sofia font-normal text-lg">
                            {t('Universes')}
                        </p>
                    </div>
                    <div onClick={() => setShowUniverses(false)}>
                        <Icon size={28} pointer name="arrow-left" />
                    </div>
                </div>
                <div
                    className="hidden xl:block absolute right-0 px-2 py-2"
                    onClick={() => setShowUniverses(false)}
                >
                    <Icon size={28} pointer name="close" />
                </div>
                <div>
                    <div
                        className="bg-ing service-bg-drawer h-bg-drawer"
                        onClick={() => router.push('/services/ing')}
                    >
                        ING
                    </div>
                    <div
                        className="bg-ia service-bg-drawer h-bg-drawer"
                        onClick={() => router.push('/services/ia')}
                    >
                        IA
                    </div>
                    <div
                        className="bg-cloud service-bg-drawer h-bg-drawer"
                        onClick={() => router.push('/services/cloud')}
                    >
                        CLOUD
                    </div>
                </div>
            </div>
            <div
                className={`${
                    show ? 'px-4 w-full xl:max-w-xs' : 'w-0'
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
