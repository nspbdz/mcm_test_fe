<template>
  <div>
    <v-container fluid>


      <div class="d-flex">

        <h1 class="text-primary pl-10">Add Product</h1>

      </div>
      <validation-observer ref="form" v-slot="{ invalid }">
        <BaseDialogs2 v-model="dialog" :text="dialogText" @onClick="handleSubmit"></BaseDialogs2>

        <form @submit.prevent="handleConfirm">

          <div class="register-content mt-5 mb-1">

            <v-row align="center" justify="center">
              <v-col cols="12" md="4">
                <div>
                  <BaseInput v-model="formValues.title" outlined rules="required" label="title"
                    placeholder="Input title">
                  </BaseInput>
                </div>

              </v-col>
              <v-col cols="12" md="1">
              </v-col>
              <v-col cols="12" md="4">
                <div>
                  <BaseInput type="number" v-model="formValues.price" outlined rules="required" label="Price"
                    placeholder="Input Price">
                  </BaseInput>
                </div>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="12" md="4">
                <div>

                  <BaseTextArea v-model="formValues.description" outlined rules="required" label="Description"
                    placeholder="Input Description">
                  </BaseTextArea>

                </div>

              </v-col>
              <v-col cols="12" md="1">
              </v-col>
              <v-col cols="12" md="4">
                <div>
                  <BaseFileInput @change="handleImg" name="Img" label="Img" v-bind="$attrs" rules="required">
                  </BaseFileInput>

                </div>
              </v-col>
            </v-row>

            <br>
            <br>

            <v-row align="center" justify="center">
              <v-col cols="12" md="3">
                <div class="name">

                </div>
              </v-col>

            </v-row>
            <br>
            <br>
            <br>
            <div class="my-auto text-center">
              <div class="d-flex justify-center">
                <h3>Make sure the data entered is correct
                  <v-icon color="primary">mdi-check-circle</v-icon>
                </h3>

              </div>
              <br>
              <div class="register-button">

                <BaseButton :disabled="invalid" type="submit">Submit</BaseButton>
              </div>
            </div>
          </div>

        </form>
      </validation-observer>
    </v-container>
  </div>
</template>
<script>
import {
  reactive,
  ref,
  useStore,
   useRouter,
   watch,
  defineComponent
} from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const router = useRouter()
    const store = useStore()
    const dialogText = ref('')
    const dialog = ref(null)
    // const loading = ref(false)
    const formValues = reactive({
      description: '',
      title: '',
      price: '',
      file: '',

    })
    const photo = ref([

        {
          name: "img1",
          file: ""
        },

        {
          name: "img2",
          file: ""
        },
        {
          name: "img3",
          file: ""
        },
      ],)

    const handleImg = (e) => {
      photo.value[0].file = e
    }


    const handleSubmit = async () => {

      await store.dispatch('fetch/postLeads', formValues).then(() => {
        router.push('/')
      })
    }
    const handleConfirm = () => {
      dialogText.value = "Confirm"
      dialog.value = true;
      console.log(formValues, 'val')
    }

    watch([photo.value], (val) => {
      console.log(formValues, 'watch')
      formValues.file = photo
    })

    return {
      handleConfirm,
      handleImg,
      formValues,
      handleSubmit,
      dialog,
      dialogText,

    }
  },
})
</script>

<style>
.v-text-field {
  width: 400px;
  height: 50px;
  border-radius: 16px;

}
</style>
