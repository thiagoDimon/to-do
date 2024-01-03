<template>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" style="height: 100%; width: 100%;">
        <div class="d-flex pt-16">
            <v-row class="justify-center ga-3">
                <v-card class="tamanho-card">
                    <v-card-title>
                        To Do
                        <v-card-text>
                            Coisas para fazer
                        </v-card-text>
                    </v-card-title>
                </v-card>
                <v-card class="tamanho-card">
                    <v-card-title>
                        Working
                        <v-card-text>
                            Coisas que eu estou trabalhando
                        </v-card-text>
                    </v-card-title>
                </v-card>
                <v-card class="tamanho-card">
                    <v-card-title>
                        Done
                        <v-card-text>
                            Coisas que eu já fiz
                        </v-card-text>
                    </v-card-title>
                </v-card>
            </v-row>
        </div>
    </v-parallax>
</template>

<script lang="ts" setup>
//
</script>

<style>
@media screen and (max-width: 600px) {
  .tamanho-card {
    width: 350px;
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .tamanho-card {
    width: 600px;
  }
}

@media (min-width: 961px) {
  .tamanho-card {
    width: 500px;
  }
}
</style>