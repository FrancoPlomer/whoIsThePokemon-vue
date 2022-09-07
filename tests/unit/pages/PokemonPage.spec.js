import { mount, shallowMount } from "@vue/test-utils"
import * as arrayPoke from "../mocks/pokemons.mock";
import PokemonPage from "@/pages/PokemonPage";
import PokemonOptions from "@/components/PokemonOptions";
import PokemonPicture from "@/components/PokemonPicture";

describe('PokemonPage Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount( PokemonPage );
    })

    test('Debe de llamar al  mixPokemonArray al montar', () => {
        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' );
        shallowMount( PokemonPage );

        expect( mixPokemonArraySpy ).toHaveBeenCalled();
    })

    test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
        const wrapper = mount( PokemonPage, {
            data() {
                return {
                    arrayOptions: arrayPoke.pokemons,
                    pokemon: arrayPoke.pokemons[0].id,
                    show: false,
                    showAnswer: false,
                    message: ''
                }
            }
        });
        const componentOptions = wrapper.findComponent(PokemonOptions);
        const componentPictures = wrapper.findComponent(PokemonPicture);
        const { pokemonId } = componentPictures.props(); 
        const { pokemons } = componentOptions.props();

        expect(componentOptions).toBeTruthy();
        expect(componentPictures).toBeTruthy();
        expect(pokemonId).toBe(5);
        expect(pokemons).toBeTruthy();
    })

    test('Pruebas sobre handleSelected', async() => {
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    arrayOptions: arrayPoke.pokemons,
                    pokemon: arrayPoke.pokemons[0].id,
                    show: false,
                    showAnswer: false,
                    message: ''
                }
            }
        });

        await wrapper.vm.handleSelected(5);

        expect( wrapper.find('h2').exists() ).toBeTruthy();
    })
})