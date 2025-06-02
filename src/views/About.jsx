import React from 'react';

export const About = () => {
    return (
        <>
            <div className={'p-8 flex items-center justify-center w-full h-full gap-18'}>
                <div className={"relative after:left-10 after:top-10 after:bg-linear-120 after:from-primary after:to-orange-300 after:w-[596px] after:h-[337px] after:absolute after:inset-0 after:rounded-[10px] after:z-[-1]"}>
                    <img src="src/assets/team.jpg" alt="about" className="object-contain w-[600px] rounded-[10px]"/>
                </div>
                <div className={"mt-4"}>
                    <h1 className="font-poiret font-bold text-6xl mb-4">O nás</h1>
                    <p className="text-lg max-w-sm">
                        Máte někdy pocit, že stojíte před plnou skříní a nemáte co na sebe?
                        Já také! Proto jsem jako student v rámci své semestrální práce vytvořil/a tuto aplikaci digitálního
                        šatníku. Mým cílem je nabídnout vám nástroj, který vám pomůže lépe poznat obsah vašeho šatníku,
                        snadno plánovat outfity a znovuobjevit zapomenuté kousky.
                        <br/>Chci, aby oblékání bylo radostí, ne
                        stresem.
                    </p>
                    <button
                        onClick={() => window.location.href = '/kontakt'}
                        className="bg-orange-300 hover:bg-orange-200 text-black p-2 rounded-[10px] cursor-pointer transition-all duration-300 w-full mt-4"
                    >
                        Kontaktujte nás
                    </button>
                </div>
            </div>
        </>
    );
}