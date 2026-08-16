function Button({
    children,
    variant = "primary",
    type = "button",
    onClick,
    ariaLabel
}) {
    return (
        <button
            className={`button button--${variant}`}
            type={type}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}

export default Button;