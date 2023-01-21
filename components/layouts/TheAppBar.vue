<template>
  <div>


    <v-app-bar dense flat app>

      <v-app-bar-nav-icon @click="handleSidebar"></v-app-bar-nav-icon>

      <PageTitle>{{ pageTitle || 'Page' }}</PageTitle>

      <v-spacer></v-spacer>

      <!-- {{ chart.length }} -->

     

      <v-menu bottom min-width="200px" rounded offset-y>
        <template #activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="brown" size="24">
              <v-img
                src="https://i0.wp.com/global.ac.id/wp-content/uploads/2015/04/speaker-3-v2.jpg?fit=768%2C768&ssl=1">
              </v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="brown" size="24">
                <v-img
                  src="https://i0.wp.com/global.ac.id/wp-content/uploads/2015/04/speaker-3-v2.jpg?fit=768%2C768&ssl=1">
                </v-img>
              </v-avatar>
              <h3 class="mt-3">{{ user.fullName }}</h3>
              <p class="text-caption mt-1">{{ user.email }}</p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text>Edit Account</v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout()">Logout</v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>

    </v-app-bar>
  </div>

</template>
<script>
import {
  reactive,
  onMounted,
  watch,
  useRouter,
  ref, useStore, computed,
} from '@nuxtjs/composition-api'

export default {

  setup(props, context) {
    const store = useStore()
    const router = useRouter()
    // const loading = ref(false)
    const dialog = ref(null)

    const user = reactive({
      initials: 'JD',
      fullName: 'John Doe',
      email: 'john.doe@doe.com',
    })
    let drawer = ref(null);
    const items = computed(() => store.state.sidebar.items)
    const pageTitle = computed(() => store.state.pageTitle)
    const dataCart = computed(() => {
      return store.getters["cart/cart"];
    });
    const handleSidebar = () => {
      context.emit('sidebar', drawer = !drawer)
    }

    const logout = async () => {
      await store.dispatch('user/logout')
      router.push('/login')

    }

    const handleCart = () => {
      // await store.dispatch('user/logout')
      dialog.value = true
      console.log(dialog, 'value')
    }

    watch(dataCart, (val) => {
      console.log(val, 'isi chart')

    })

    onMounted(() => {

    });

    return {
      user,
      drawer,
      items,
      pageTitle,
      logout,
      handleSidebar,
      dataCart,
      dialog,
      handleCart,
    }
  }


}

</script>
