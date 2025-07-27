'use client';
import React from 'react';

export type FilterOption =
    | ''
    | 'masculino'
    | 'feminino'
    | 'joias'
    | 'preco-maior'
    | 'preco-menor'
    | 'rating-maior';

type Props = {
    selected: FilterOption;
    onChange: (value: FilterOption) => void;
};

export default function ProductFilter({ selected, onChange }: Props) {
    return (
        <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="filtro">
                Filtrar por:
            </label>
            <select
                id="filtro"
                value={selected}
                onChange={(e) => onChange(e.target.value as FilterOption)}
                className=" border border-gray-300 rounded px-3 py-2">
                <option value="">Todos os produtos</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="joias">Joias</option>
                <option value="preco-maior">Preço: Maior primeiro</option>
                <option value="preco-menor">Preço: Menor primeiro</option>
                <option value="rating-maior">Rating: Maior primeiro</option>
            </select>
        </div>
    );
}
