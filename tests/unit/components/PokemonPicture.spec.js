import { shallowMount } from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture';

describe('PokemonPicture component', () => {
    test('Debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount( PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        } );
        expect( wrapper.html() ).toMatchSnapshot();
    })

    test('Debe de mostrar la imagen oculta y el pokemon 100', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        });
        const { pokemonId } = wrapper.props();
        const [ img1, img2 ] = wrapper.findAll('img');
        //Validamos que la imagen sin brillo este activa y la que muestra el personaje no este renderizada
        expect( img1.exists() ).toBeTruthy();
        expect( img2 ).toBeFalsy();
        //esperamos que la imagen tenga la clase hidden
        expect( img1.classes()[0] ).toBe('pokemon-hidden');
        //Validamos si el pokemonId es 100
        expect( pokemonId ).toBe( 100 );
        //Validamos que el src de la imagen este renderizando la opcion 100
        expect( img1.attributes().src ).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonId }.svg`);
    })

    test('Debe de mostrar la imagen del pokemon si showPicture = true', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        });
        const  img = wrapper.find('img');
        //Validamos que la imagen sin brillo este desactivada y la que muestra el personaje  este renderizada
        expect( img.exists() ).toBeTruthy();
        //esperamos que la imagen no tenga la clase hidden
        expect( img.classes('pokemon-hidden') ).toBeFalsy();
    })
})