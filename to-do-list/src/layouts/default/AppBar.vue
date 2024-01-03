<template>
    <v-app-bar>
      <v-row class="botoes-bar d-flex">
        <v-btn-toggle style="height: 100%; width: 100%;" color="black" v-model="isToggled">
          <v-btn style="height: 100%; width: 50%; background-color: white;" rounded="0" @click="naviagateToHome">
            <v-icon>mdi-home</v-icon>
            Home
          </v-btn>
          <v-btn style="height: 100%; width: 50%; background-color: white;" rounded="0" @click="navigateToDo">
            <v-icon>mdi-pencil</v-icon>
            To Do
          </v-btn>
        </v-btn-toggle>
      </v-row>
    </v-app-bar>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';

  const isToggled = ref(0);
  
  const router = useRouter();

  const naviagateToHome = () => {
    router.push('/');
  };

  const navigateToDo = () => {
      router.push('/toDo');
    };
</script>

<style>
.botoes-bar {
  justify-content: space-around; 
  align-items: center; 
  height: 100%;
  background-color: yellow;
}
</style>