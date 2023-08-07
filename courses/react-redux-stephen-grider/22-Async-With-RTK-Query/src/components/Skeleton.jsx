import classNames from "classnames";

export default function Skeleton({ times = 1, className }) {
    const outerClasses = classNames(
        "relative",
        "overflow-hidden",
        "bg-gray-200",
        "rounded",
        "mb-2.5",
        className
    );
    const innerClasses = classNames(
        "animate-shimmer",
        "absolute",
        "inset-0",
        "-translate-x-full",
        "bg-gradient-to-r",
        "from-gray-200",
        "via-white",
        "to-gray-200",
        className
    );

    const renderedBoxes = Array(times)
        .fill(0)
        .map((_, index) => (
            <div key={index} className={outerClasses}>
                <div className={innerClasses} />
            </div>
        ));

    return renderedBoxes;
}
