<template>
    <v-app>
        <v-main>
            <div class="page-wrap">
                <router-view class="page-cont"></router-view>
            </div>
            <Footer></Footer>
        </v-main>
    </v-app>
</template>
    
<script>
import Header from './Header.vue';
import Lnb from './Lnb.vue';
import Footer from './Footer.vue';

export default {
    components: {
        Header,
        Footer,
        Lnb
    },
    computed: {
    },
    mounted() {
    },
    created() {
    },
    beforeUnmount() {
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>