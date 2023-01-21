<template>
  <div>
    <v-row>
      <v-col>
        <h1 class="text-center">❤️ This is My Example Web  ❤️</h1>
        <h3 class="text-center"> In this Website I Using Nuxt js  </h3>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { useStore } from '@nuxtjs/composition-api'

export default {

  setup() {
    const store = useStore()

    store.commit('SET_PAGE_TITLE', 'About')
  },
}
</script>
