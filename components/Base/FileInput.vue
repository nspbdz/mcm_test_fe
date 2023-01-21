<template>
  <div>
    <validation-provider v-slot="{ errors }" :name="name" :rules="rules">
      <v-file-input v-model="file" :label="label" class="mt-3" :error-messages="errors"
        accept="image/png, image/jpeg, image/bmp" clearable :v-bind="$attrs" prepend-icon="mdi-camera">
        <template v-slot:selection="{ text }">
          <v-chip small label color="primary">
            {{ text }}
          </v-chip>
        </template>
      </v-file-input>
    </validation-provider>
  </div>
</template>
<script>
import { defineComponent, ref, watch } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    name: {
      type: String,
      default: "",
    },
    rules: {
      type: File,
      default: "",
    },
    outputFile: {
      type: String,
      default: "File",
    },
    label: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const imgPreview = ref("");

    const file = ref(null);

    watch(file, (val) => {
      if (props.outputFile !== "File") {
        if (val) {
          const reader = new FileReader();
          reader.onload = function (val) {
            context.emit("change", val.target.result);
            imgPreview.value = val.target.result;
          };
          reader.readAsDataURL(val);
        } else {
          context.emit("change", "");
        }
      } else {
        context.emit("change", val);
      }
    });

    return {
      imgPreview,
      file,
    };
  },
});
</script>
