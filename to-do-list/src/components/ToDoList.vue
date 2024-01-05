<template>
  <v-dialog v-if="dialog" activator="parent" class="tamanho-dialog">
    <v-card>
       <v-card-title>Nova Tarefa</v-card-title>
      <v-card-text>
        <v-text-field label="Título" v-model="tituloTarefa"></v-text-field>
        <v-text-field label="Descrição" v-model="descricaoTarefa"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-row class="justify-center">
            <v-btn color="primary" style="background-color: rgba(44, 111, 186, 0.25)" @click="adicionarTarefa">Adicionar</v-btn>
            <v-btn color="red" style="background-color: rgba(247, 132, 123, 0.25);" @click="ref(dialog = false)">Cancelar</v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    style="height: 100%; width: 100%"
  >
    <div class="d-flex pt-16">
      <v-row class="justify-center ga-3">
        <v-card class="tamanho-card" style="background: rgba(0, 0, 0, 0.1)">
          <v-card-title>
            To Do
            <v-btn
              icon="mdi-plus"
              density="comfortable"
              class="float-right"
              style="background: rgba(0, 0, 0, 0.1)"
              @click="ref(dialog = true)"
            >
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-expansion-panels class="ga-2">
              <v-expansion-panel v-for="tarefas in toDos" :key="tarefas">
                <v-expansion-panel-title collapse-icon="mdi-pencil">
                  {{ tarefas.tarefa.titulo }}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  {{ tarefas.tarefa.descricao }}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
        <v-card class="tamanho-card" style="background: rgba(0, 0, 0, 0.1)">
          <v-card-title> Working </v-card-title>
          <v-card-text>
            <v-expansion-panels class="ga-2">
              <v-expansion-panel v-for="i in 3" :key="i">
                <v-expansion-panel-title> Teste </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Meu texto vai aqui
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
        <v-card class="tamanho-card" style="background: rgba(0, 0, 0, 0.1)">
          <v-card-title> Done </v-card-title>
          <v-card-text>
            <v-expansion-panels class="ga-2">
              <v-expansion-panel v-for="i in 3" :key="i">
                <v-expansion-panel-title> Teste </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Meu texto vai aqui, mesmo
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-row>
    </div>
  </v-parallax>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// const mounted = onMounted();

interface Tarefa {
  titulo: string;
  descricao: string;
}

interface ToDo {
  tarefa: Tarefa;
}

const toDos = ref([]);   

const tituloTarefa = ref('');
const descricaoTarefa = ref(''); 

const dialog = ref(false);

function adicionarTarefa() {
    const novaTarefa: ToDo = {
        tarefa: {
            titulo: tituloTarefa.value,
            descricao: descricaoTarefa.value,
        }
      }
    ref(dialog.value = false)
    return ref(toDos.value.push(novaTarefa));
}
</script>

<style>
@media screen and (max-width: 600px) {
  .tamanho-card {
    width: 350px;
  }
  .tamanho-dialog {
    width: 100%
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .tamanho-card {
    width: 600px;
  }
  .tamanho-dialog {
    width: 75%;
  }
}

@media (min-width: 961px) {
  .tamanho-card {
    width: 500px;
  }
  .tamanho-dialog {
    width: 50%;
  }
}
</style>
