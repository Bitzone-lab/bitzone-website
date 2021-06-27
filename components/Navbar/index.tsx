import { useState } from 'react'
import Icon from '../Icon'

export default function Navbar() {
    const [show, setShow] = useState(false)

    return (
        <nav>
            <div className="bg-navbar h-16 fixed top-0 flex items-center justify-between w-full px-4 backdrop-blur-lg backdrop-filter">
                <div onClick={() => setShow(true)}>
                    <Icon size={20} pointer name="hamburger" />
                </div>
                <div>
                    <img
                        height="20px"
                        width="40px"
                        alt="logo"
                        src="img/logo_image.svg"
                    />
                </div>
                <div></div>
            </div>
            <div
                className={`${
                    show ? 'px-4 w-full' : 'w-0'
                } h-full fixed z-10 top-0 left-0 overflow-x-hidden duration-300 bg-navbar-hidden`}
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
                    <a className="font-sofia py-2">Nosotros</a>
                    <a className="font-sofia py-2">Servicios</a>
                    <a className="font-sofia py-2">Proyectos</a>
                    <a className="font-sofia py-2">Contacto</a>
                </div>
            </div>
        </nav>
    )
}
