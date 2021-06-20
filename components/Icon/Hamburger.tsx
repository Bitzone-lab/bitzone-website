import * as React from 'react'

function Hamburger(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1.5h20V3H0V1.5zM0 9h20v1.5H0V9zm0 7.5h20V18H0v-1.5z"
                fill="#fff"
            />
        </svg>
    )
}

export default Hamburger
