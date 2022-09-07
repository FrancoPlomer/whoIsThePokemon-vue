import getPokemonOptions, { getPokemons, getPokemonNames } from "@/helpers/PokemonOptions"

describe('getPokemonOptions helpers', () => {
    test('Debe devolver un arreglo con numeros del 1 al 650 ', () => {
        const pokemons = getPokemons();
        expect( pokemons.length ).toBe( 650 );
    })
    test(' Debe ingresar un arreglo de 4 elementos con numeros aleatorios y este debe devolver un array con objetos ', async () => {
        const pokemons = await getPokemonNames([1, 2 ,3 ,4]);
        const arrayTest = [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ]
        //No usamos toBe ya que si bien ambas constantes son iguales estas apuntan a lugares distintos en memoria, por eso aplicamos un toStrictEqual
        expect( pokemons ).toStrictEqual( arrayTest );
    })

    test(' getPokemonOptions debe de retornar un arreglo mezclado ', async () => {
        const pokemons = await getPokemonOptions();
        //Validamos que devuelva 4 elementos del arreglo
        expect( pokemons.length ).toBe( 4 );
        //Validamos que los datos ingresados sean del tipo esperado
        expect( pokemons ).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
        ])
    })
})