import React, {useState, useEffect} from "react";
import {useToast} from "../composables/useToast.js";

export const AddItemModal = ({isOpen, onClose, onAddItem, categories}) => {
    const [itemName, setItemName] = useState('');
    const [itemColor, setItemColor] = useState('');
    const [itemCategory, setItemCategory] = useState('');
    const [itemImage, setItemImage] = useState('');

    const {success, warning} = useToast();

    useEffect(() => {
        if (isOpen && categories && categories.length > 0) {
            if (!itemCategory || !categories.find(c => c.name === itemCategory)) {
                setItemCategory(categories[0].name);
            }
        }
        if (isOpen) {
            setItemName('');
            setItemColor('');
            setItemImage('');
        }
    }, [isOpen, categories, itemCategory]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!itemName.trim() || !itemColor.trim()) {
            warning("Prosím, vyplňte název a barvu.");
            return;
        }
        const newItem = {
            id: Date.now(),
            name: itemName.trim(),
            color: itemColor.trim(),
            category: itemCategory,
            image: itemImage.trim() || `/src/assets/categories/${itemCategory.toLowerCase()}.webp`
        };
        onAddItem(newItem);
        onClose();

        success("Položka byla úspěšně přidána!");
        console.log("Nová položka:", newItem);

        setItemName('');
        setItemColor('');
        if (categories && categories.length > 0) {
            setItemCategory(categories[0].name);
        } else {
            setItemCategory('');
        }
        setItemImage('');
    };

    return (
        <div
            className="fixed inset-0 flex justify-center items-center p-4"
            aria-modal="true"
            role="dialog"
        >
            <div className={"bg-black opacity-50 z-40 w-full h-full absolute inset-0"}/>
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md z-50"
                 onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Přidat novou položku</h2>
                    <button onClick={onClose}
                            className="cursor-pointer text-gray-600 hover:text-gray-900 text-3xl font-bold leading-none">&times;</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="itemName" className="block text-sm font-medium text-gray-700 mb-1">Název</label>
                        <input
                            type="text"
                            id="itemName"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="itemColor"
                               className="block text-sm font-medium text-gray-700 mb-1">Barva</label>
                        <input
                            type="text"
                            id="itemColor"
                            value={itemColor}
                            onChange={(e) => setItemColor(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="itemCategory"
                               className="block text-sm font-medium text-gray-700 mb-1">Kategorie</label>
                        <select
                            id="itemCategory"
                            value={itemCategory}
                            onChange={(e) => setItemCategory(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 sm:text-sm"
                        >
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.name}>{cat.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="itemImage" className="block text-sm font-medium text-gray-700 mb-1">Obrázek (URL
                            nebo cesta)</label>
                        <input
                            type="text"
                            id="itemImage"
                            value={itemImage}
                            onChange={(e) => setItemImage(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 sm:text-sm"
                        />
                        <p className="text-xs text-gray-500 mt-1">Pokud necháte prázdné, použije se výchozí obrázek
                            kategorie.</p>
                    </div>
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition-colors duration-150"
                        >
                            Zrušit
                        </button>
                        <button
                            type="submit"
                            className="cursor-pointer px-4 py-2 text-sm font-medium text-black bg-orange-300 hover:bg-orange-200 rounded-md shadow-sm transition-colors duration-150 flex items-center gap-2"
                        >
                            Přidat položku
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};