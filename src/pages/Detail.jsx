import { useParams } from "react-router";
import { useGetPokemon } from "../services/pokemonService";
import { AddToCollection } from "../components/PokemonActions/AddToCollection";

export const Detail = () => {
    const { pokecod } = useParams();
    const { pokemonData, isLoading, error } = useGetPokemon(pokecod);

    const typeColors = {
        normal: "bg-gray-300",
        fire: "bg-red-400",
        water: "bg-blue-400",
        electric: "bg-yellow-400",
        grass: "bg-green-400",
        ice: "bg-cyan-300",
        fighting: "bg-red-800",
        poison: "bg-purple-600",
        ground: "bg-yellow-800",
        flying: "bg-indigo-300",
        psychic: "bg-pink-400",
        bug: "bg-green-600",
        rock: "bg-gray-600",
        ghost: "bg-purple-800",
        dragon: "bg-indigo-600",
        dark: "bg-gray-900",
        steel: "bg-gray-400",
        fairy: "bg-pink-200",
    };

    return (
        <>
            {isLoading && <div>Loading ....</div>}
            {error && <div>Error al Cargar el Pokemon</div>}
            {!isLoading && pokemonData && (
                <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4 capitalize">{pokemonData.name}</h1>
                    <div className="flex justify-center mb-4">
                        <img className="w-48 h-48 object-contain" src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                    </div>
                    <div className="flex justify-center gap-4 mb-4">
                        <img className="w-20 h-20 object-contain" src={pokemonData.sprites.front_default} alt={`${pokemonData.name} front`} />
                        <img className="w-20 h-20 object-contain" src={pokemonData.sprites.back_default} alt={`${pokemonData.name} back`} />
                    </div>

                    <div className="mb-4">
                        <AddToCollection code={pokecod} name={pokemonData.name} />
                    </div>

                    <div className="mb-4">
                        <strong className="block mb-2">Types:</strong>
                        <div className="flex gap-2">
                            {pokemonData.types.map((type) => (
                                <span key={type.slot} className={`px-2 py-1 rounded-full text-white ${typeColors[type.type.name]}`}>
                                    {type.type.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <strong className="block mb-2">Stats:</strong>
                        <div className="grid grid-cols-2 gap-2">
                            {pokemonData.stats.map((stat) => (
                                <div key={stat.stat.name} className="flex items-center gap-2">
                                    <span className="capitalize w-24">{stat.stat.name}:</span>
                                    <span>{stat.base_stat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};