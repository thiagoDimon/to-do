<template>
  <v-dialog
    v-if="dialogAdicionarTarefa"
    activator="parent"
    class="tamanho-dialog"
  >
    <v-card>
      <v-card-title>Nova Tarefa</v-card-title>
      <v-card-text>
        <v-text-field label="Título" v-model="tituloTarefa"></v-text-field>
        <v-text-field
          label="Descrição"
          v-model="descricaoTarefa"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-row class="justify-center">
          <v-btn
            color="primary"
            style="background-color: rgba(44, 111, 186, 0.25)"
            @click="adicionarTarefa(colunaTarefa)"
            >Adicionar</v-btn
          >
          <v-btn
            color="red"
            style="background-color: rgba(247, 132, 123, 0.25)"
            @click="ref((dialogAdicionarTarefa = false))"
            >Cancelar</v-btn
          >
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog v-if="dialogEditarTarefa" activator="parent" class="tamanho-dialog">
    <v-card>
      <v-card-title>Editar Tarefa</v-card-title>
      <v-card-text>
        <v-text-field
          label="Título"
          v-model="tituloTarefaAtribuida"
        ></v-text-field>
        <v-text-field
          label="Descrição"
          v-model="descricaoTarefaAtribuida"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-row class="justify-center">
          <v-btn
            color="primary"
            style="background-color: rgba(44, 111, 186, 0.25)"
            @click="salvarEdicaoTarefa(colunaTarefa)"
            >Salvar</v-btn
          >
          <v-btn
            color="red"
            style="background-color: rgba(247, 132, 123, 0.25)"
            @click="ref((dialogEditarTarefa = false))"
            >Cancelar</v-btn
          >
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog
    v-if="dialogDeletarTarefa"
    activator="parent"
    class="tamanho-dialog"
  >
    <v-card>
      <v-card-title> CONFIRMAÇÃO! </v-card-title>
      <v-card-text> Você deseja excluir a tarefa? </v-card-text>
      <v-card-actions>
        <v-row class="justify-center">
          <v-btn
            color="primary"
            style="background-color: rgba(44, 111, 186, 0.25)"
            @click="deletarTarefa(colunaTarefa)"
            >Confirmar</v-btn
          >
          <v-btn
            color="red"
            style="background-color: rgba(247, 132, 123, 0.25)"
            @click="ref((dialogDeletarTarefa = false))"
            >Cancelar</v-btn
          >
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
              @click="
                ref((dialogAdicionarTarefa = true)),
                  ref((colunaTarefa = 'toDo'))
              "
            >
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-expansion-panels
              class="ga-2"
              style="border-radius: none"
              @drop="onDrop($event, 'toDo')"
              @dragenter.prevent
              @dragover.prevent
            >
              <v-expansion-panel
                v-for="(tarefas, index) in toDos"
                :key="tarefas"
                style="background: rgba(0, 0, 0, 0.1)"
                draggable="true"
                @dragstart="startDrag($event, tarefas, index)"
              >
                <div
                  class="posicao-botao-editar"
                  style="
                    background-color: rgba(0, 0, 0, 0.1);
                    border-radius: 0px 5px 0px 0px;
                  "
                >
                  <v-btn
                    icon="mdi-pencil"
                    density="comfortable"
                    style="margin-right: 15px"
                    @click="
                      ref((dialogEditarTarefa = true)),
                        ref((tituloTarefaAtribuida = tarefas.tarefa.titulo)),
                        ref(
                          (descricaoTarefaAtribuida = tarefas.tarefa.descricao)
                        ),
                        ref((indexTarefa = index)),
                        ref((colunaTarefa = 'toDo'))
                    "
                  ></v-btn>
                  <v-btn
                    icon="mdi-delete"
                    density="comfortable"
                    style="margin-right: 15px"
                    @click="
                      ref((dialogDeletarTarefa = true)),
                        ref((indexTarefa = index))
                    "
                  ></v-btn>
                </div>
                <v-expansion-panel-title style="background-color: white">
                  {{ tarefas.tarefa.titulo }}
                </v-expansion-panel-title>
                <v-expansion-panel-text style="background-color: white">
                  {{ tarefas.tarefa.descricao }}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
        <v-card class="tamanho-card" style="background: rgba(0, 0, 0, 0.1)">
          <v-card-title>
            Working
            <v-btn
              icon="mdi-plus"
              density="comfortable"
              class="float-right"
              style="background: rgba(0, 0, 0, 0.1)"
              @click="
                ref((dialogAdicionarTarefa = true)),
                  ref((colunaTarefa = 'working'))
              "
            >
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-expansion-panels
              class="ga-2"
              style="border-radius: none"
              @drop="onDrop($event, 'working')"
              @dragenter.prevent
              @dragover.prevent
            >
              <v-expansion-panel
                v-for="(tarefas, index) in working"
                :key="tarefas"
                style="background: rgba(0, 0, 0, 0.1)"
                draggable="true"
                @dragstart="startDrag($event, tarefas, index)"
              >
                <div
                  class="posicao-botao-editar"
                  style="
                    background-color: rgba(0, 0, 0, 0.1);
                    border-radius: 0px 5px 0px 0px;
                  "
                >
                  <v-btn
                    icon="mdi-pencil"
                    density="comfortable"
                    style="margin-right: 15px"
                    @click="
                      ref((dialogEditarTarefa = true)),
                        ref((tituloTarefaAtribuida = tarefas.tarefa.titulo)),
                        ref(
                          (descricaoTarefaAtribuida = tarefas.tarefa.descricao)
                        ),
                        ref((indexTarefa = index)),
                        ref((colunaTarefa = 'working'))
                    "
                  ></v-btn>
                  <v-btn
                    icon="mdi-delete"
                    density="comfortable"
                    style="margin-right: 15px"
                    @click="
                      ref((dialogDeletarTarefa = true)),
                        ref((indexTarefa = index)),
                        ref((colunaTarefa = 'working'))
                    "
                  ></v-btn>
                </div>
                <v-expansion-panel-title style="background-color: white">
                  {{ tarefas.tarefa.titulo }}
                </v-expansion-panel-title>
                <v-expansion-panel-text style="background-color: white">
                  {{ tarefas.tarefa.descricao }}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
        <v-card class="tamanho-card" style="background: rgba(0, 0, 0, 0.1)">
          <v-card-title>
            Done
            <v-btn
              icon="mdi-plus"
              density="comfortable"
              class="float-right"
              style="background: rgba(0, 0, 0, 0.1)"
              @click="
                ref((dialogAdicionarTarefa = true)),
                  ref((colunaTarefa = 'done'))
              "
            >
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-expansion-panels
              class="ga-2"
              style="border-radius: none"
              @drop="onDrop($event, 'done')"
              @dragenter.prevent
              @dragover.prevent
            >
              <v-expansion-panel
                v-for="(tarefas, index) in done"
                :key="tarefas"
                style="background: rgba(0, 0, 0, 0.1)"
                draggable="true"
                @dragstart="startDrag($event, tarefas, index)"
              >
                <div
                  class="posicao-botao-editar"
                  style="
                    background-color: rgba(0, 0, 0, 0.1);
                    border-radius: 0px 5px 0px 0px;
                  "
                >
                  <v-btn
                    icon="mdi-pencil"
                    density="comfortable"
                    style="margin-right: 15px"
                    @click="
                      ref((dialogEditarTarefa = true)),
                        ref((tituloTarefaAtribuida = tarefas.tarefa.titulo)),
                        ref(
                          (descricaoTarefaAtribuida = tarefas.tarefa.descricao)
                        ),
                        ref((indexTarefa = index)),
                        ref((colunaTarefa = 'done'))
                    "
                  ></v-btn>
                  <v-btn
                    icon="mdi-delete"
                    density="comfortable"
                    style="margin-right: 15px"
                    @click="
                      ref((dialogDeletarTarefa = true)),
                        ref((indexTarefa = index)),
                        ref((colunaTarefa = 'done'))
                    "
                  ></v-btn>
                </div>
                <v-expansion-panel-title style="background-color: white">
                  {{ tarefas.tarefa.titulo }}
                </v-expansion-panel-title>
                <v-expansion-panel-text style="background-color: white">
                  {{ tarefas.tarefa.descricao }}
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

interface Tarefa {
  titulo: string;
  descricao: string;
  coluna: string;
}
interface ToDo {
  tarefa: Tarefa;
}

const toDos: any = ref([]);
const working: any = ref([]);
const done: any = ref([]);

const tituloTarefa = ref("");
const descricaoTarefa = ref("");
const colunaTarefa = ref("");
const tituloTarefaAtribuida = ref("");
const descricaoTarefaAtribuida = ref("");
const indexTarefa = ref(0);

const dialogAdicionarTarefa = ref(false);
const dialogEditarTarefa = ref(false);
const dialogDeletarTarefa = ref(false);

function adicionarTarefa(coluna: string) {
  const novaTarefa: ToDo = {
    tarefa: {
      titulo: tituloTarefa.value,
      descricao: descricaoTarefa.value,
      coluna: colunaTarefa.value,
    },
  };

  if (coluna === "toDo") {
    ref(toDos.value.push(novaTarefa));
  } else if (coluna === "working") {
    ref(working.value.push(novaTarefa));
  } else {
    ref(done.value.push(novaTarefa));
  }

  ref((tituloTarefa.value = ""));
  ref((descricaoTarefa.value = ""));

  return ref((dialogAdicionarTarefa.value = false));
}

function salvarEdicaoTarefa(coluna: string) {
  const tarefaEditada: ToDo = {
    tarefa: {
      titulo: tituloTarefaAtribuida.value,
      descricao: descricaoTarefaAtribuida.value,
      coluna: colunaTarefa.value,
    },
  };

  if (coluna === "toDo") {
    ref((toDos.value[indexTarefa.value] = tarefaEditada));
  } else if (coluna === "working") {
    ref((working.value[indexTarefa.value] = tarefaEditada));
  } else {
    ref((done.value[indexTarefa.value] = tarefaEditada));
  }

  return ref((dialogEditarTarefa.value = false));
}

function deletarTarefa(coluna: string) {
  if (coluna === "toDo") {
    if (toDos.value.length > 1) {
      ref(toDos.value.splice(indexTarefa.value, 1));
    } else {
      ref((toDos.value = []));
    }
    return ref((dialogDeletarTarefa.value = false));
  } else if (coluna === "working") {
    if (working.value.length > 1) {
      ref(working.value.splice(indexTarefa.value, 1));
    } else {
      ref((working.value = []));
    }
    return ref((dialogDeletarTarefa.value = false));
  } else {
    if (done.value.length > 1) {
      ref(done.value.splice(indexTarefa.value, 1));
    } else {
      ref((done.value = []));
    }
    return ref((dialogDeletarTarefa.value = false));
  }
}

const startDrag = (event: any, tarefa: any, index: any) => {
  console.log("tarefa", tarefa);
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("indexTarefa", index);
};

const onDrop = (event: any, colunaTarefa: string) => {
  const indexTarefa = event.dataTransfer.getData("indexTarefa");
  const tarefa = toDos.value.find((tarefa: any) => tarefa.index == indexTarefa);
  tarefa.colunaTarefa = colunaTarefa;
};
</script>

<style>
@media screen and (max-width: 600px) {
  .tamanho-card {
    width: 350px;
  }
  .tamanho-dialog {
    width: 100%;
  }
  .posicao-botao-editar {
    display: flex;
    justify-content: start;
    padding-top: 4px;
    padding-bottom: 5px;
    margin-right: 15px;
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .tamanho-card {
    width: 600px;
  }
  .tamanho-dialog {
    width: 75%;
  }
  .posicao-botao-editar {
    display: flex;
    justify-content: end;
    padding-top: 4px;
    padding-bottom: 5px;
    margin-right: 15px;
  }
}

@media (min-width: 961px) {
  .tamanho-card {
    width: 500px;
  }
  .tamanho-dialog {
    width: 50%;
  }
  .posicao-botao-editar {
    display: flex;
    justify-content: end;
    padding-top: 4px;
    padding-bottom: 5px;
  }
}
</style>
