import * as React from 'react'

export default function Left(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.6 10l9.964 10L12 18.56 3.407 9.977l8.57-8.56L10.564 0 .6 10z"
                fill={props.color}
            />
        </svg>
    )
}
