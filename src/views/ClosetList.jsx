import React from "react";
import {ClosetItem} from "../components/ClosetItem.jsx";
import {PlusIcon} from "../components/icons/PlusIcon.jsx";
import {TrashIcon} from "../components/icons/TrashIcon.jsx";
import {AddItemModal} from "../components/AddItemModal.jsx";

export const ClosetList = () => {
    const [closet, setCloset] = React.useState([
        {id: 1, name: "Triko", color: "modrá", category: "tshirts", image: "src/assets/categories/tshirts.webp"},
        {id: 2, name: "Kalhoty", color: "černá", category: "pants", image: "src/assets/categories/pants.webp"},
        {id: 3, name: "Sukně", color: "červená", category: "skirts", image: "src/assets/categories/skirts.webp"},
        {id: 4, name: "Bunda", color: "zelená", category: "jackets", image: "src/assets/categories/jackets.webp"},
        {id: 5, name: "Boty", color: "hnědá", category: "shoes", image: "src/assets/categories/shoes.webp"},
        {
            id: 6,
            name: "Doplňky",
            color: "žlutá",
            category: "accessories",
            image: "src/assets/categories/accessories.webp"
        },
        {id: 7, name: "Triko", color: "modrá", category: "tshirts", image: "src/assets/categories/tshirts.webp"},
        {id: 8, name: "Kalhoty", color: "černá", category: "pants", image: "src/assets/categories/pants.webp"},
        {id: 9, name: "Sukně", color: "červená", category: "skirts", image: "src/assets/categories/skirts.webp"},
        {id: 10, name: "Bunda", color: "zelená", category: "jackets", image: "src/assets/categories/jackets.webp"},
    ]);

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    }

    const addItemToCloset = (item) => {
        setCloset(prevCloset => [...prevCloset, item]);
    }

    const removeItemFromCloset = (itemId) => {
        setCloset(prevCloset => prevCloset.filter(item => item.id !== itemId));
    }

    const categories = [
        {id: 1, name: "tshirts"},
        {id: 2, name: "pants"},
        {id: 3, name: "skirts"},
        {id: 4, name: "jackets"},
        {id: 5, name: "shoes"},
        {id: 6, name: "accessories"},
    ];

    const [selectedCategory, setSelectedCategory] = React.useState(null);

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory =>
            prevCategory === categoryName ? null : categoryName
        );
    };

    const filteredCloset = React.useMemo(() => {
        if (!selectedCategory) {
            return closet;
        }
        return closet.filter(item => item.category === selectedCategory);
    }, [closet, selectedCategory]);

    return (
        <div className={"h-screen overflow-y-auto pb-8 px-8 "}>
            <div>
                <h1 className={"font-poiret font-bold text-6xl py-8"}>Můj Digitální Šatník</h1>
            </div>
            <div className={"flex items-center justify-between"}>
                <div className={"flex items-center py-4 flex-wrap gap-2"}>
                    <button
                        onClick={() => handleCategoryClick(null)}
                        className={`w-16 h-16 rounded-full mr-2 shadow-lg text-sm font-medium transition-colors duration-150 cursor-pointer
                        ${selectedCategory === null
                            ? 'text-black ring-2 ring-orange-300 scale-110'
                            : ' text-gray-700 hover:scale-105'
                        }`}
                    >
                        Vše
                    </button>

                    {categories.map(category => (
                        <div
                            key={category.id}
                            onClick={() => handleCategoryClick(category.name)}
                            className={`w-16 h-16 rounded-full bg-white mr-2 shadow-lg flex items-center justify-center cursor-pointer transition-all duration-150
                            ${selectedCategory === category.name
                                ? 'ring-2 ring-offset-2 ring-orange-300 scale-110'
                                : 'hover:scale-105'
                            }`}
                            title={category.name}
                        >
                            <img
                                src={`/src/assets/categories/${category.name.toLowerCase()}.webp`}
                                alt={category.name}
                                className={"w-12 h-12 rounded-full object-contain"}
                            />
                        </div>
                    ))}
                </div>
                <div>
                    <button
                        onClick={toggleModal}
                        className={"bg-orange-300 hover:bg-orange-200 p-2 rounded-full cursor-pointer transition-all duration-300 flex items-center gap-2"}
                    >
                        <div className={"w-6 h-6 stroke-black stroke-3"}>
                            <PlusIcon/>
                        </div>
                    </button>
                </div>
            </div>

            <div className={"p-8 bg-white rounded-[10px] shadow-lg mt-4"}>
                {filteredCloset.length === 0 && selectedCategory && (
                    <p className="text-center text-gray-500 py-4">Žádné položky v kategorii '{selectedCategory}'.</p>
                )}

                {filteredCloset.length === 0 && !selectedCategory && (
                    <p className="text-center text-gray-500 py-4">Váš šatník je prázdný. Přidejte nějaké položky!</p>
                )}

                <ul className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 "}>
                    {filteredCloset.map((item, index) => (
                        <li key={`${item.id}-${index}`}>
                            <ClosetItem item={item} onRemoveItem={removeItemFromCloset}/>
                        </li>
                    ))}
                </ul>
            </div>
            <AddItemModal
                isOpen={isModalOpen}
                onClose={toggleModal}
                onAddItem={addItemToCloset}
                categories={categories}
            />
        </div>
    );
}