<template>
	<div>
    <header-global />
    <router-view />
    <footer-global />
  </div>
</template>

<script>
import HeaderGlobal from './components/Header.vue';
import FooterGlobal from './components/Footer.vue';

export default {
	components: {
		HeaderGlobal,
    FooterGlobal
	},
  metaInfo: {
    title: 'Butterfly Design',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  mounted() {
    console.log(process.env.NODE_ENV);
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/_main.scss';
</style>
