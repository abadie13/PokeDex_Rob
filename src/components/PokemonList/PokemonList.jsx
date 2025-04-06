import React from 'react';

export const PokemonList = ({ pokemons, onShowDetail }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pokemons.map((pokemon, index) => (
                <div
                    key={pokemon.name}
                    className={`bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer fade-in`}
                    onClick={() => onShowDetail(pokemon.name)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <h2 className="text-xl font-bold mb-2 capitalize">{pokemon.name}</h2>
                    <img
                        className="w-full h-32 object-contain mb-2"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                        alt={pokemon.name}
                    />
                </div>
            ))}
        </div>
    );
};