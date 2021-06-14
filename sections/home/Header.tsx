import * as React from 'react'

export default function Header() {
    return (
        <header className="h-screen w-full flex flex-col p-4 pt-24 bg-gradient-to-r from-purple-600 to-purple-900 text-white">
            <h1 className="text-5xl mb-6 font-bold">
                Construye tu futuro de Bitzone
            </h1>
            <p className="mb-9 text-xl">
                En Bitzone contamos con los profesionales para construir tu
                futuro
            </p>
            <a className="font-bold" href="#">
                Descubre cómo
            </a>
        </header>
    )
}
