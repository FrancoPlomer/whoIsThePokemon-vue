<template>
    <div class="pokemon-container" v-if="pokemonId">
        <img v-if="showPokemon" class="fade-in" :src="imgSrc" alt="pokemon">
        <img v-else class="pokemon-hidden" :src="imgSrc" alt="pokemon">
    </div>
    <div v-else>
        ...Loading
    </div>
</template>

<script>
export default {
    props: {
        pokemonId: {
            type: Number
        },
        showPokemon: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        imgSrc(){
            return  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    },
    watch: {
        pokemonId: {
            handler(){
                return this.pokemonId;
            }
        },
    }
}
</script>

<style scoped>
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    width: 100vw;
    margin-left: -50vw;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    }
.pokemon-hidden{
    filter: brightness(0);
}
</style>