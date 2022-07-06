<template>
  <v-app>
    <v-main>
      <section-users/>
    </v-main>

    <v-footer app v-bind="localAttrs">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import SectionUsers from './views/SectionUsers';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    SectionUsers,
    Footer
  },
  computed: {
    localAttrs () {
      const attrs = {}

      attrs.absolute = true
      attrs.fixed = false

      return attrs
    },
  },

  data: () => ({
    //
  }),
};
</script>
