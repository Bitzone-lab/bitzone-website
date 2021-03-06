function Close(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M18 6L6 18M6 6l12 12"
                stroke="#fff"
                strokeWidth={2}
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Close
