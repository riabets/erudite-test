<template>
    <v-container fluid class="pt-0">
        <v-row>
            <v-col cols="12" class="pa-0">
                <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" style="max-height: 250px;"></v-parallax>
            </v-col>
            <v-col cols="12">
                <v-card
                    class="ma-3 pa-6"
                    outlined
                    tile
                >
                    <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum unde vero? Assumenda deleniti
                        eius, eos harum natus nisi possimus quisquam quo. Debitis deserunt dicta ipsam suscipit ut
                        voluptate voluptatem?</p>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card
                    class="ma-3 pa-6"
                    outlined
                    tile
                >
                    <div class="text-center">
                        <v-form
                            ref="form"
                            v-model="valid"
                            :lazy-validation="lazy"
                            class="pr-4 pl-4"
                        >
                            <v-text-field
                                v-model="name"
                                :counter="30"
                                :rules="nameRules"
                                label="Name"
                                required
                            ></v-text-field>

                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            ></v-text-field>

                            <v-select
                                v-model="select"
                                :items="items"
                                :rules="[v => !!v || 'Item is required']"
                                label="Item"
                                required
                            ></v-select>

                            <a-button
                                v-if="showA"
                                text="Submit"
                                class="mr-4"
                                @toggle="toggle"
                            ></a-button>

                            <b-button
                                v-else
                                text="Submit"
                                class="mr-4"
                                @toggle="toggle"
                            ></b-button>
                        </v-form>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 30) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: [
                'Option 1',
                'Option 2',
                'Option 3',
            ],
            lazy: false,
            showA: true,
        }
    },
    methods: {
        toggle() {
            this.showA = !this.showA;
        },
    }
}
</script>