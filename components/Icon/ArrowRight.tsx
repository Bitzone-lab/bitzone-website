export default function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 5.5l-4.8 5L0 9.249 3.6 5.5 0 1.751 1.2.5l4.8 5z"
                fill="#EDE04B"
            />
        </svg>
    )
}
