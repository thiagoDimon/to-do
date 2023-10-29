<template>
  <v-flex id="app">
    <v-flex xs12>
      <v-toolbar
        dark
        prominent
        color="#98FB98"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Vuetify</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-toolbar>
    </v-flex>
    <v-flex class= "float-left h-screen" style="border: 1px yellow solid;">
      menu lateral
    </v-flex>
    <v-flex class="h-screen float-end d-flex w-80 w-sm-50 flex-sm-column" style="border: 2px white solid;">
      <v-row class="pt-md-10 h-100 ma-2" no-gutters style="justify-content: center;">
        <v-col cols="3" class="w-25" style="border: 1px orange solid;">toDo</v-col>
        <v-col cols="3" class="w-25 mx-15" style="border: 1px green solid;">Doing</v-col>
        <v-col cols="3" class="w-25" style="border: 1px brown solid;">Done</v-col>
      </v-row>
    </v-flex>
  </v-flex>
</template>

<script lang="ts" setup>
  //
</script>

<style>
body {
  background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
}
</style>
