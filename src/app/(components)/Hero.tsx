'use client';

export default function Hero() {
    return (
        <section className="flex items-center justify-center py-16 px-4">
            <div
                className="w-full max-w-5xl rounded-2xl bg-cover bg-center bg-no-repeat text-white shadow-lg min-h-[420px] flex items-center justify-center"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("./hero.png")',
                }}>
                <div className="text-center max-w-xl mx-auto flex flex-col gap-6 px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                        Eleve seu Estilo
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                        Explore as últimas tendências e descubra peças clássicas cuidadosamente selecionadas para você.
                    </p>

                    <button className="mx-auto h-12 px-6 rounded-full bg-neutral-900 cursor-pointer text-white font-semibold hover:bg-neutral-800 transition-colors">
                        Comprar Agora
                    </button>
                </div>
            </div>
        </section>
    );
}
