import React from "react";

const Modal = (props) => {
    const { onClose } = props;
    return (
        <div className="bg-stone-700/80 justify-center items-center fixed h-full w-full top-0 left-0 flex gap-4 backdrop-blur-sm">
            <div className="bg-white h-80 w-80 p-4 rounded shadow-lg justify-center items-center flex flex-col">
                 This is a modal 
                <button >Click here to close</button>
            </div>
        </div>
    )
}

export default Modal;