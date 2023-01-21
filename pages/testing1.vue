<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <template  >
        <v-col
        cols="12"
        sm="2"
      >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            Column
          </v-card>
        </v-col>
        <v-col
        cols="12"
        sm="8"
      >
      <v-card
      flat
      tile
      >

      <v-card-title>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
      </v-text-field>
      </v-card-title>


      <v-container
        v-for="type in types"
        :key="type"
        class="grey lighten-4"
        fluid
      >
        <v-subheader>{{ type }}</v-subheader>

        <v-row>
          <v-spacer></v-spacer>
          <v-col
            v-for="card in cards"
            :key="card"
            cols="6"
            sm="4"

          >
            <v-card>
              <v-img
                :src="`https://picsum.photos/200/300?image=${getImage()}`"
                alt="lorem"
                class="image"
                max-height="250"
                width="100%"
              >
                <span
                  class="text-h5 white--text pl-4 pt-4 d-inline-block"
                  v-text="card"
                ></span>
              </v-img>
              <v-card-actions class="white justify-center">
                <v-btn
                  v-for="(social, i) in socials"
                  :key="i"
                  :color="social.color"
                  class="white--text"
                  fab
                  icon
                  small
                >
                  <v-icon>{{ social.icon }}</v-icon>
                </v-btn>
              </v-card-actions>


            </v-card>
          </v-col>
        </v-row>

      </v-container>
      </v-card>
        </v-col>


      </template>

    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      types: ['Places to Be', 'Places to See'],
      cards: ['Good', 'Best', 'Finest'],
      socials: [
        {
          icon: 'mdi-facebook',
          color: 'indigo',
        },
        {
          icon: 'mdi-linkedin',
          color: 'cyan darken-1',
        },
        {
          icon: 'mdi-instagram',
          color: 'red lighten-3',
        },
      ],
    }),

    methods: {
      getImage () {
        const min = 550
        const max = 560

        return Math.floor(Math.random() * (max - min + 1)) + min
      },
    },
  }
</script>
