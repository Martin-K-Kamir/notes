import className from "classnames";

function Button({
    children,
    primary,
    secondary,
    success,
    danger,
    warning,
    outline,
    rounded,
    ...rest
}) {
    const classes = className(
        rest.className,
        "inline-flex items-center gap-2 py-1.5 px-3 border",
        {
            "bg-indigo-600 border-indigo-600 text-white": primary,
            "bg-gray-800 border-gray-800 text-white": secondary,
            "bg-green-600 border-green-600 text-white": success,
            "bg-rose-600 border-rose-600 text-white": danger,
            "bg-yellow-400 border-yellow-400 text-white": warning,
            "rounded-full": rounded,
            "bg-white": outline,
            "text-indigo-600": outline && primary,
            "text-gray-800": outline && secondary,
            "text-green-600": outline && success,
            "text-rose-600": outline && danger,
            "text-yellow-400": outline && warning,
        }
    );

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}

Button.propTypes = {
    buttonTypes: ({ primary, secondary, success, danger, warning }) => {
        const count = [primary, secondary, success, danger, warning].filter(
            Boolean
        ).length;

        if (count > 1) {
            throw new Error(
                `Only one of primary, secondary, success, danger, warning can be true, not ${count}`
            );
        }
    },
};
export default Button;
