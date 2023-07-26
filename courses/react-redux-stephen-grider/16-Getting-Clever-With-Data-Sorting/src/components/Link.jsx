import useNavigation from "../hooks/useNavigation.jsx";
import classNames from "classnames";

export default function Link({ to, children, className, activeClassName }) {
    const { navigate, curPath } = useNavigation();

    const classes = classNames(
        "text-blue-500",
        "underline",
        "hover:no-underline",
        className,
        curPath === to && activeClassName
    );

    function handleClick(e) {
        if (e.metaKey || e.ctrlKey) return;
        e.preventDefault();
        navigate(to);
    }

    return (
        <a className={classes} onClick={handleClick} href={to}>
            {children}
        </a>
    );
}
