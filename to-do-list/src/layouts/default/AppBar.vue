<template>
    <v-app-bar>
      <v-row class="botoes-bar d-flex">
        <v-btn-toggle style="height: 100%; width: 100%;" color="black">
          <v-btn style="height: 100%; width: 50%; background-color: white;" rounded="0">
            <v-icon>mdi-home</v-icon>
            Home
          </v-btn>
          <v-btn style="height: 100%; width: 50%; background-color: white;" rounded="0">
            <v-icon>mdi-pencil</v-icon>
            To Do
          </v-btn>
        </v-btn-toggle>
      </v-row>
    </v-app-bar>
</template>

<script lang="ts" setup>
 //
</script>

<style>
.botoes-bar {
  justify-content: space-around; 
  align-items: center; 
  height: 100%;
  background-color: yellow;
}
</style>