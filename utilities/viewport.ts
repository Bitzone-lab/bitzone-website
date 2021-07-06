export function viewportWidth() {
    return Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    )
}

export function viewportHeight() {
    return Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
    )
}
