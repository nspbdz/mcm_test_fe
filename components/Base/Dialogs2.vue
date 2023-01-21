
<template>

  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog max-width="400" max-height="400" :data="data" :text="text" :url="url" v-bind="$attrs"
        v-on="$listeners">

        <template v-slot:default="dialog">
          <v-card class="pa-10">
            <br>
            <v-card-text class="text-center">
              <h1>{{ text }}</h1>
            </v-card-text>

            <v-card-actions class="justify-center">
              <v-btn color="error" @click="dialog.value = false">Close</v-btn>
              <v-btn color="primary"  @click="$emit('onClick', dialog.value= false)" >Konfirmasi </v-btn>

              <!-- <v-btn color="primary" @click="handleConfirm({ url, data, dialog })">confirm</v-btn> -->
            </v-card-actions>

          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>




</template>

<script>
import {
  // ref,
  // useRouter,
  // useStore,
  // useRoute
} from '@nuxtjs/composition-api'
export default {
  name: 'BaseDialogs2',
  inheritAttrs: false,
  props: {
    data: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  setup(props) {



    return {

    }
  }


}
</script>
