import pokemonApi from "@/api/pokemonApi"


const getPokemons = () => {

    const pokemonsArr = Array.from( Array(650) )

    return pokemonsArr.map( (_ , index ) => index + 1 )
}

const getPokemonOptions = () => {
    const mixedPokemons = getPokemons()
                            .sort( () => Math.random() - 0.5 )
    return getPokemonNames( mixedPokemons.splice(0, 4) )
}

const getPokemonNames = async( pokemons = [] ) => {
    const promiseArr = pokemons.reduce((acc, poke) => {
            return [... acc, pokemonApi.get(`/${poke}`)]
        }, [])

    const namePokemons = await Promise.all( promiseArr )

    return namePokemons.reduce((acc, poke) => {
        return [... acc, {
            name: poke.data.name,
            id: poke.data.id
        }]
    }, [])
}

export default getPokemonOptions;