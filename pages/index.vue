<template>
  <div>
    <h1 class="text-center">Alfian Brand Gallery</h1>

    <br>
    <h1>Category Product </h1>
    <h5>Choose  Product  Category</h5>
    <br>
    <v-row justify="center">
      <v-col v-for="(categories, index) in category" :key="categories.id" cols="6" sm="2">
        <v-card v-if="index <= 4" class="mx-auto" max-width="200">
          <v-img :src="categories.image" alt="lorem" :class="`image` + categories.id" max-height="160" width="100%"
            @click="handleClickCategoryImg(categories.id)">
            <v-overlay v-if="selected === categories.id" :absolute="absolute">
            </v-overlay>
          </v-img>

          <v-card-title>
            <h3 class="text" v-if="categories.name.length < 11">
              {{ categories.name }}
            </h3>
            <h3 v-else>
              {{ categories.name.substring(0, 11) + ".." }}
            </h3>
          </v-card-title>
          <!-- <v-btn @click="$emit('onClick', categories)">emitan </v-btn> -->

        </v-card>
        <div v-else>

        </div>
      </v-col>
    </v-row>


    <h1> List Product </h1>
    <br>

    <v-row>
      <v-col v-for="products in list" :key="products.id" cols="6" sm="4">
        <v-card class="mx-auto" max-width="400">
          <v-img :src="products.category.image" alt="lorem" class="image" max-height="250" width="100%"
            @click="onShow(products.id)">
          </v-img>
          <v-card-title>
            <h3 class="text" v-if="products.title.length < 11">
              {{ products.title }}
            </h3>
            <h3 v-else>
              {{ products.title.substring(0, 11) + ".." }}
            </h3>
            <v-spacer></v-spacer>

            <span class="text-h6">${{ products.price }}.00</span>

          </v-card-title>

        </v-card>
      </v-col>
    </v-row>

  </div>

</template>
<script>

import { computed, reactive, watch, onMounted, ref, useStore,useRouter, } from '@nuxtjs/composition-api'
// import Child from "../components/product/list.vue";
// import ChildCategory from "../components/product/listCategory.vue";

export default {

  setup() {
    const store = useStore()
    const router = useRouter()

    const overlay = ref(false)
    const absolute = ref(true)
    const selectedCategory = ref(null)
    const search = ref('')


    const handleClickCategoryImg = async (e) => {
      console.log(e, 'name img')
      console.log(selectedCategory, 'selectedCategory img')

      if (e === selectedCategory.value) {
        selectedCategory.value = null
        await store.dispatch("fetch/getSelected", selectedCategory);

      } else {
        selectedCategory.value = e
        await store.dispatch("fetch/getSelected", selectedCategory);

      }

    }


    store.commit('SET_PAGE_TITLE', 'Home')
    const roleOptions = ref([])
    const dataFetch = reactive({
      select: '',
      categories: 'categories',
    })
    const loading = ref(false)

    const getFetch = () => {
      loading.value = true
      store.commit('SET_LOADING', true)
      console.log(selected, 'selected dijalankan')

      store.dispatch('fetch/getFetch', dataFetch).finally(() => {
        loading.value = false
        store.commit('SET_LOADING', false)
      })
    }

    onMounted(() => {
      getFetch()
      // store.dispatch("fetch/getFetch");
      store.dispatch('fetch/getCategory').then((response) => {
        console.log(response, 'response cate')
        roleOptions.value = response
      })

    });

    const list = computed(() => {
      return store.getters["fetch/items"];
    });
    const category = computed(() => {
      return store.getters["fetch/category"];
    });

    const selected = computed(() => store.state.fetch.selected)
    console.log(selected, 'index selected')
    watch(selected, (val) => {
      dataFetch.select = val
      console.log(dataFetch)
      getFetch()

    })
    const handleClick = (e) => {
      console.log(e)
    }

    const onShow = (e) => {
      router.push("/product/" + e)
    }
    return {
      onShow,
      search,
      overlay,
      absolute,
      handleClickCategoryImg,
      handleClick,
      list,
      dataFetch,
      getFetch,
      selected,
      selectedCategory,
      loading,
      category,
      roleOptions,
      // ChildCategory
    }
  },
  mounted() {
    this.$store.commit('SET_PAGE_TITLE', 'Home')
  },
}
</script>
