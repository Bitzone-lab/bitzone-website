interface PropsInput {
    placeholder: string
    className?: string
    name: string
    helper?: string
    onFocus?: () => void
}

export default function Input({
    placeholder,
    name,
    helper = '',
    onFocus = () => null
}: PropsInput) {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder={placeholder}
                name={name}
                onFocus={onFocus}
                className="input input-ghost w-full text-subtle bg-input rounded-none focus:bg-white focus-input"
                autoComplete="off"
            />
            {helper && (
                <label className="label">
                    <span className="label-text-alt text-error">{helper}</span>
                </label>
            )}
        </div>
    )
}
