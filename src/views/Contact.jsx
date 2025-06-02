import React from 'react';
import {useToast} from "../composables/useToast.js";

export const Contact = () => {

    const { success, warning } = useToast();

    const handleSubmit = (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        if(!name || !email || !message) {
            warning("Vyplňte všechna pole formuláře!");
            return;
        }

        console.log("Jméno:", name);
        console.log("E-mail:", email);
        console.log("Zpráva:", message);
        console.log("Formulář odeslán.");

        success("Formulář byl úspěšně odeslán!");

        event.target.name.value = '';
        event.target.email.value = '';
        event.target.message.value = '';
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="font-poiret font-bold text-6xl mb-4">Kontaktujte nás</h1>
            <form className="flex flex-col w-1/3" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Vaše jméno"
                    className="border border-gray-300 p-2 mb-4 rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Váš e-mail"
                    className="border border-gray-300 p-2 mb-4 rounded"
                />
                <textarea
                    name="message"
                    placeholder="Vaše zpráva"
                    className="border border-gray-300 p-2 mb-4 rounded"
                ></textarea>
                <button
                    type="submit"
                    className="bg-orange-300 hover:bg-orange-200 text-black p-2 rounded-[10px] cursor-pointer transition-all duration-300"
                >
                    Odeslat
                </button>
            </form>
            <p className="text-lg mt-4">Děkujeme za váš zájem!</p>
        </div>
    );
}