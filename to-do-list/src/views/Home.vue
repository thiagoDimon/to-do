<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" style="height: 100%; width: 100%;">
    <div class="d-flex justify-center">
      <div class="pt-16">
        <h1 class="text-center">TO-DO LIST</h1>
        <v-card style="background: rgba(0, 0, 0, 0.1)">
          <v-card-text class="text-justify tamanho-card">
            A to-do list is just a list of things you have to-do. 
            That means basically anything and everything can be on your to-do 
            list—but just because you've written your to-dos down doesn't mean your to-do list is actually useful. 
            Effectively tracking when your work is due can help you prioritize and get great work done.
          </v-card-text>
        </v-card>
        <h1 class="text-center pt-16">WHY TO-DO LIST?</h1>
        <v-expansion-panels class="pt-2">
          <v-expansion-panel 
          class="tamanho-card"
          style="background: rgba(0, 0, 0, 0.1)"
          title="Prioritize tasks" 
          text="At work and at home, having a to-do list may help you prioritize your work and personal tasks. This allows you to organize and complete the most crucial tasks."
          >
        </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels class="pt-2">
          <v-expansion-panel 
          class="tamanho-card"
          style="background: rgba(0, 0, 0, 0.1)"
          title="Boost motivation" 
          text="Helps with motivation: To do lists are a great motivational tool because you can use them to clarify your goals."
          >
        </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels class="pt-2">
          <v-expansion-panel 
          class="tamanho-card"
          style="background: rgba(0, 0, 0, 0.1)"
          title="Ability to plan your workflow" 
          text="Productivity: Because you can prioritize tasks on your to-do list, you're not going to waste time on less critical tasks."
          >
        </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels class="pt-2">
          <v-expansion-panel 
          class="tamanho-card"
          style="background: rgba(0, 0, 0, 0.1)"
          title="Divide larger tasks" 
          text="We usually have many different goals, projects, and things we need to do. You can have your tasks for different projects on different lists."
          >
        </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels class="pt-2">
          <v-expansion-panel 
          class="tamanho-card"
          style="background: rgba(0, 0, 0, 0.1)"
          title="Improved memory" 
          text="We are all incapable of remembering every single thing that happens in life. And to-do lists are an aid to your memory in retaining important information. You won't lose any of this information if you look at the list daily."
          >
        </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels class="pt-2">
          <v-expansion-panel 
          class="tamanho-card"
          style="background: rgba(0, 0, 0, 0.1)"
          title="Increases productivity" 
          text="A business, work and daily activities can only run efficiently with a task list. This list is the primary support for efficiency and productivity."
          >
        </v-expansion-panel>
        </v-expansion-panels>
      </div>
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
