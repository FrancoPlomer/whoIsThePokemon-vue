<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id" :value="pokemon.id" @click="handleClick">
                {{pokemon.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        pokemons: {
            type: Array,
            default: []
        }
    },
    watch: {
        pokemons: {
            handler(){
                return this.pokemons;
            }
        }
    },
    methods: {
        handleClick(event) {
            this.$emit('selected', event.target.value);
        }
    },
}
</script>

<style scoped>
    ul {
        list-style-type: none;
    }
    li {
        background-color: white;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        cursor: pointer;
        margin-bottom: 10px;
        width: 250px;
    }

    li:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .options-container {
        display: flex;
        justify-content: center;
    }
</style>