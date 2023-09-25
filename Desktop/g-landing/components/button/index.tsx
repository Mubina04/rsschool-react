import React, { FC } from 'react'
interface IButton {
    title: string;
    type?: "submit" | "button";
    classes?: string;
    disabled?: boolean;
    onClick?: () => void;
}
const Button: FC<IButton> = ({ title, type, onClick, classes, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={
            `bg-[#5271FF]
            flex items-center
            border border-transparent
            rounded-xl sm:rounded-full
            py-2 px-2 sm:py-4 sm:px-5
            gap-2 text-white text-center;
            ${classes}
            `} type={type}>
            {title}
        </button>
    )
}
export default Button