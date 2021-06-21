export default function Shapes(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9 0L3.5 9h11L9 0zM14.5 20a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM0 11.5h8v8H0v-8z"
                fill="#fff"
            />
        </svg>
    )
}
