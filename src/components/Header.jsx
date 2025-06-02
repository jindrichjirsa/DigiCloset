import React from 'react';

const Header = () => {
    return (
        <header className="bg-primary text-gray-900 py-4 px-12 flex justify-between items-center">
            <h1 className="text-2xl font-bold font-poiret">DigiCloset</h1>
            <nav>
                <ul className="flex gap-6 items-center font-poiret text-xl font-bold">
                <li><a href="/" className="hover:underline">Domů</a></li>
                <li><a href="/about" className="hover:underline">O nás</a></li>
                <li><a href="/contact" className="hover:underline">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;