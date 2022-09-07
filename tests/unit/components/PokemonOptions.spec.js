import { shallowMount } from "@vue/test-utils";
import PokemonOptions from '@/components/PokemonOptions';
import { pokemons } from "../mocks/pokemons.mock";

describe('Pruebas sobre pokemon options', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount( PokemonOptions, {
            props: {
                pokemons
            }
        } )
    })
    // test('Debe hacer match con el snapshot', () => {
    //     expect( wrapper.html() ).toMatchSnapshot();
    // })

    test('Debe de mostrar las 4 opciones correctamente', () => {
        const listItems = wrapper.findAll('li');
        const arrayToTest = pokemons.reduce((acc, op) => {
            return [
                ... acc,
                listItems.filter( list => list.wrapperElement._value === op.id )[0]
            ]
        },[]).filter(Boolean)
        expect( arrayToTest.length ).toBeTruthy();
    })

    test('Debe emitir "selected" con sus respectivos parametros al hacer click sobre una opcion', async() => {
        const listItems = wrapper.findAll('li');

        await listItems.map(li => {
            li.trigger('click');
        })
        expect(wrapper.emitted('selected')).toBeTruthy();
    })
})
