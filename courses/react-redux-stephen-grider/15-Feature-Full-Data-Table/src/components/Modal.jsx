import { createPortal } from "react-dom";
import { useEffect } from "react";

export default function Modal({ children, onClose }) {
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return createPortal(
        <div>
            <div
                className="fixed inset-0 bg-gray-300 opacity-80"
                onClick={onClose}
            ></div>
            <div className="fixed inset-40 p-10 bg-white">{children}</div>
        </div>,
        document.getElementById("modal")
    );
}
