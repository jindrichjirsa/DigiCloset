import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
    const linkClasses = "block relative group text-gray-900 px-6 py-4 transition-colors duration-300 ease-out overflow-hidden z-0";

    const navItems = [
        { href: "/", label: "Domů" },
        // { href: "/outfity", label: "Outfity" },
        // { href: "/generator", label: "Generátor" },
        { href: "/o-nas", label: "O nás" },
        { href: "/kontakt", label: "Kontakt" },
    ];

    return (
        <div className="bg-linear-120 from-primary to-orange-300 text-gray-900 w-64 h-screen pr-6 py-4 shrink-0">
            <h2 className="text-4xl font-bold font-poiret mb-8 pl-6">DigiCloset</h2>
            <ul className={"space-y-2 font-poppins font-bold text-lg uppercase"}>
                {navItems.map((item) => (
                    <li key={item.label}>
                        <NavLink
                            to={item.href}
                            className={`${linkClasses} w-fit`}
                        >
                            {({ isActive }) => (
                                <>
                                    <span
                                        className={`absolute inset-0 bg-white transition-all duration-300 ease-out -z-10 ${
                                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                    ></span>
                                    <span className="relative z-10">{item.label}</span>
                                </>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};