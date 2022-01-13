import { useState, ReactNode } from 'react'
import Icon from '../Icon'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from './drawer.module.css'

export default function Drawer() {
    const [showUniverses, setShowUniverses] = useState(false)
    const [show, setShow] = useState(false)
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
                    className="hidden xl:block absolute right-0 px-2 py-2 z-10"
                    onClick={() => setShowUniverses(false)}
                >
                    <Icon size={28} pointer name="close" />
                </div>
                <div>
                    <Item bg="ing" to="/ing">
                        ING
                    </Item>
                    <Item bg="ia" to="/ia">
                        IA
                    </Item>
                    <Item bg="cloud" to="/cloud">
                        CLOUD
                    </Item>
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
                    <Link href="/contacts">
                        <a className="font-sofia py-4 text-3xl">
                            {t('Contact')}
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export function Item({ children, to, bg }: ItemsProps) {
    const router = useRouter()

    return (
        <div
            className={classNames(
                `bg-${bg} service-bg-drawer h-bg-drawer relative`,
                {
                    [styles['drawer-item']]: true
                }
            )}
            onClick={() => router.push(`/services${to}`)}
        >
            <div
                className={classNames(
                    'bg-black w-full h-full absolute transition-opacity',
                    {
                        [styles.shape]: true
                    }
                )}
            />
            {children}
        </div>
    )
}

interface ItemsProps {
    children: ReactNode
    to: string
    bg: string
}
