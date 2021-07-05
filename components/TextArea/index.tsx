export interface PropsTextArea {
    placeholder: string
    name: string
    helper?: string
    onFocus?: () => void
}

export default function TextArea({
    helper = '',
    name,
    placeholder,
    onFocus = () => null
}: PropsTextArea) {
    return (
        <>
            <textarea
                placeholder={placeholder}
                name={name}
                className="textarea resize-none h-36 textarea-ghost w-full text-subtle bg-input rounded-none focus-input"
                onFocus={onFocus}
            ></textarea>
            {helper && (
                <label className="label">
                    <span className="label-text-alt text-error">{helper}</span>
                </label>
            )}
        </>
    )
}
