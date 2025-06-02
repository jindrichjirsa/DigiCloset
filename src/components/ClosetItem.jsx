import React from "react";
import {TrashIcon} from "./icons/TrashIcon.jsx";

export const ClosetItem = ({item, onRemoveItem}) => {
    return (
        <div className="border-2 border-gray-300 bg-gray-100 p-4 rounded-[10px] relative h-[300px]">
            <img src={item.image} alt={item.name}
                 className="rounded-[10px] object-contain w-full h-full"/>
            <button
                onClick={() => onRemoveItem(item.id)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition duration-200 cursor-pointer">
                <div className={"w-4 h-4 fill-white"}>
                    <TrashIcon />
                </div>
            </button>
        </div>
    );
}