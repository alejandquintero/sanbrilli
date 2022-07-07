<template>
    <section class="section">
        <article v-for="(acc, index) in data" :key="index" class="article">
            <div class="container__img">
                <img :src="acc.img" :alt="acc.alt"/>
            </div>
            <p>{{ acc.name }}</p>
            <p>{{ acc.price }}</p>
        </article>
    </section>
</template>

<script>
    export default{
        name: "AccesoryList",
        data(){
            return {
                data : null
            }
        },
        mounted(){
            fetch('./data/data.json')
                .then(res => res.json())
                .then(res => this.data = res.anillos)
        }
    }
</script>

<style scoped> 
    .container__img{
        margin-bottom : 15px;
        max-height: 500px;
        overflow: hidden;
    }

    .section{
        display: grid;
        grid-template-columns: repeat(2, minmax(100px, 400px));
        justify-content: center;
        grid-gap: 5vw;
        width: 100%;
    }
    .article{
        margin-bottom: 15px;
    }

    p{
        margin: 0;
        margin-bottom: 10px;

    }

</style>