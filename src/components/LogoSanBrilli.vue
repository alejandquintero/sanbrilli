<template>
    <div class="logo-title">
        <h1 class="logo-title__title">
            <span>San Brilli</span>
            <div class="stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
            </div>
        </h1>
        <h6 class="logo-title__subtitle">ACCESORIOS</h6>
    </div>
</template>

<script>
export default {
    name: 'LogoSanBrilli'
}
</script>

<style scoped>

.logo-title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.logo-title__title{
    position: relative;
    font-size: 4rem;
    font-family: 'BellaBoo';
    margin: 0;
}

.logo-title__subtitle{
    transform: translateY(-7.5px);
    font-family: 'AnonymousPro';
    font-weight: 100;
    letter-spacing: 3.2px;
    margin: 0;
}

.stars{
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    right: 0;
}

.star{
    background-color: #f7d610;
    position: absolute;
    width: 40%;
    height: 40%;
    clip-path: polygon(50% 0, 60% 20%, 68% 30%, 80% 40%, 100% 50%, 80% 60%, 68% 70%, 60% 80%, 50% 100%, 40% 80%, 32% 70%, 20% 60%, 0% 50%, 20% 40%, 32% 30%, 40% 20%);
}

.star:first-child{
    transform: translate(30%, -50%);
}

.star:nth-child(2){
    width: 32%;
    height: 32%;
    transform: translate(170%, 5%);
}
.star:last-child{
    width: 24%;
    height: 24%;
    transform: translate(300%, -90%);
}

@media screen and (min-width: 768px) {
    .logo-title__title{
        font-size: 6rem;
    }
    .stars{
        width: 35px;
        height: 35px;
    }
}
</style>