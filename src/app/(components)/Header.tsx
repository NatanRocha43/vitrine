'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Shirt, User, Heart, ShoppingBag } from 'lucide-react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="relative z-50 border-b border-[#ededed]">
            <div className="flex items-center max-w-[1440px] mx-auto justify-between px-6 py-4">
                <div className="flex items-center gap-3 text-[#141414]">
                    <Shirt className="w-6 h-6" />
                    <h2 className="text-lg font-bold tracking-tight">Fashionista</h2>
                </div>

                <nav className="hidden lg:flex items-center gap-9">
                    <Link href="/new-arrivals" className="text-sm text-[#141414] font-medium">Novidades</Link>
                    <Link href="/men" className="text-sm text-[#141414] font-medium">Masculino</Link>
                    <Link href="/women" className="text-sm text-[#141414] font-medium">Feminino</Link>
                    <Link href="/accessories" className="text-sm text-[#141414] font-medium">Acessórios</Link>
                    <Link href="/sale" className="text-sm text-[#141414] font-medium">Promoções</Link>
                </nav>

                <div className="hidden lg:flex gap-2">
                    <button
                        className="flex items-center justify-center cursor-pointer rounded-lg h-10 bg-[#ededed] text-[#141414] px-2.5 gap-2 text-sm font-bold"
                        aria-label="Minha Conta">
                        <User className="w-5 h-5" />
                    </button>
                    <button
                        className="flex items-center justify-center cursor-pointer rounded-lg h-10 bg-[#ededed] text-[#141414] px-2.5 gap-2 text-sm font-bold"
                        aria-label="Favoritos">
                        <Heart className="w-5 h-5" />
                    </button>
                    <button
                        className="flex items-center justify-center cursor-pointer rounded-lg h-10 bg-[#ededed] text-[#141414] px-2.5 gap-2 text-sm font-bold"
                        aria-label="Meu Carrinho">
                        <ShoppingBag className="w-5 h-5" />
                    </button>
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
                    {menuOpen ? <X className="w-6 h-6 text-[#141414]" /> : <Menu className="w-6 h-6 text-[#141414]" />}
                </button>
            </div>

            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-[auto] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                <div className="flex flex-col gap-2 pt-4 px-6">
                    <button
                        className="flex items-center rounded-lg h-10 bg-[#ededed] text-[#141414] px-3 gap-2 text-sm font-bold"
                        aria-label="Minha Conta">
                        <User className="w-5 h-5" />
                        Conta
                    </button>
                    <button
                        className="flex items-center rounded-lg h-10 bg-[#ededed] text-[#141414] px-3 gap-2 text-sm font-bold"
                        aria-label="Favoritos">
                        <Heart className="w-5 h-5" />
                        Favoritos
                    </button>
                    <button
                        className="flex items-center rounded-lg h-10 bg-[#ededed] text-[#141414] px-3 gap-2 text-sm font-bold"
                        aria-label="Meu Carrinho">
                        <ShoppingBag className="w-5 h-5" />
                        Carrinho
                    </button>
                </div>
                <nav className="flex flex-col px-6 py-4 gap-4">
                    <Link href="/new-arrivals" className="text-sm text-[#141414] font-medium">
                        Novidades
                    </Link>
                    <Link href="/men" className="text-sm text-[#141414] font-medium">
                        Masculino
                    </Link>
                    <Link href="/women" className="text-sm text-[#141414] font-medium">
                        Feminino
                    </Link>
                    <Link href="/accessories" className="text-sm text-[#141414] font-medium">
                        Acessórios
                    </Link>
                    <Link href="/sale" className="text-sm text-[#141414] font-medium">
                        Promoções
                    </Link>
                </nav>
            </div>
        </header>
    );
}
