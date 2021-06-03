import * as React from 'react'

export default function Hello() {
    return (
        <div className="mt-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
                <img
                    className="h-12 w-12"
                    src="img/logo.svg"
                    alt="ChitChat Logo"
                />
            </div>
            <div>
                <div className="text-xl font-medium text-black">Bitzone</div>
                <p className="text-gray-500">Website</p>
            </div>
        </div>
    )
}
