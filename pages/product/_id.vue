<template>
  <div v-if="dataUser != ''">
    <v-btn @click="handleBack" class="mx-" fab dark color="primary">
      <v-icon dark>
        mdi-arrow-left-circle
      </v-icon>
    </v-btn>

    <v-container fluid>

      <v-row>
        <v-col cols="12" md="8">

          <v-card>

            <v-carousel>
              <v-carousel-item v-for="(products, i) in productDetail.images" :key="i" :src="products"
                reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-card-title>
              <h2 class="text-h4">
                {{ productDetail.title }}
              </h2>
              <v-spacer></v-spacer>
              <span class="text-h6">${{ productDetail.price }}.00</span>
            </v-card-title>

            <v-card-text>
              {{ productDetail.description }}
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
              <span class="subheading">Select Color</span>

              <v-chip-group v-model="selection" active-class="deep-purple--text text--accent-4" mandatory>
                <v-chip v-for="color in colors" :key="color" :value="color">
                  {{ color }}
                </v-chip>
              </v-chip-group>
            </v-card-text>

          </v-card>

        </v-col>

      </v-row>
    </v-container>

    <!-- <Child :product="productDetail" /> -->

  </div>

  <div v-else>
    data kosong
  </div>

</template>
<script>
// import { computed } from 'vue'

import {
  ref,
  reactive,
  useRouter,
  computed,
  watch,
  onMounted,
  useStore,


} from '@nuxtjs/composition-api'

export default {


  // layout: 'agen',
  setup() {
    const store = useStore()

    const router = useRouter()
    const idUrl = computed(() => router.currentRoute.params.id)
    const id = ref([])
    const dialog = ref(0);
    const colors = ref(['Red', 'Black', 'Blue',])

    onMounted(() => {
      id.value = router.currentRoute.params.id
    });
    const dataUser = reactive({
      name: '',
      phone: '',
      selectedRole: '',
      password: '',
      email: '',
      profile: '',

    })
    const getProductById = () => {
      store.dispatch('fetch/getProductById', id).then((response) => { })
    }

    watch([id, dataUser.profile], (val) => {
      console.log(val)
      getProductById()

    })
    const productDetail = computed(() => {
      // rubah ke ammbil semua data user

      return store.getters["fetch/id"];
    });

    const handleModal = () => {
      dialog.value = true
      console.log(dialog)
    }
    const search = ref('')


    console.log(search, 'search')

    return {
      idUrl,
      dataUser,
      handleModal,
      dialog,
      search,
      productDetail,
      colors,

    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 320
        case 'sm':
          return 650
        case 'md':
          return 850
        case 'lg':
          return 1200
        case 'xl':
          return 1200
      }
    },
  },
}

</script>

<style>

</style>
