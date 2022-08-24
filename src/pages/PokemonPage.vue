<template>
    <div>
        <h1>
            Who is this pokemon ?
        </h1>
        <PokemonPictureVue 
            :pokemonId="pokemon" 
            :showPokemon="show"
        />
        <PokemonOptionsVue 
            :pokemons="arrayOptions" 
            @selected="handleSelected"
            />
        <template v-if="showAnswer" class="fade-in">
            <h2 >
                {{ message }}
            </h2>
            <button @click="newGame">
                Nuevo juego
            </button>
        </template>       
    </div>
</template>

<script>
import PokemonOptionsVue from '@/components/PokemonOptions.vue';
import PokemonPictureVue from '@/components/PokemonPicture.vue';
import getPokemonOptions from '@/helpers/PokemonOptions.js';

export default {
    data(){
        return {
            arrayOptions: null,
            pokemon: null,
            show: false,
            showAnswer: false,
            message: ''
        }
    },
    mounted() {
        this.mixPokemonArray();
    },
    methods: {
        async mixPokemonArray() {
            this.arrayOptions = await getPokemonOptions();
            const rndInt = Math.floor( Math.random() * 4 );
            this.pokemon = this.arrayOptions[ rndInt ].id;
        },
        handleSelected(event){
            this.show = true;
            this.showAnswer = true;
            this.message = this.pokemon === event ? 'Correcto' : 'Incorrecto'
        },
        newGame(){
            this.arrayOptions = null;
            this.pokemon = null;
            this.show = false;
            this.showAnswer = false;
            this.message = '';
            this.mixPokemonArray();
        },
    },
    components:{
        PokemonOptionsVue, PokemonPictureVue
    }
}
</script>

<style>

</style>