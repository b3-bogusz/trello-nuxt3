<script setup lang="ts">
const route = useRoute();

const store = useBoardStore();

const newColumnName = ref("");
const editnameState = ref(false);

function addColumn() {
  store.addColumn(newColumnName.value);
  newColumnName.value = "";
}

function editColumnName() {
  editnameState.value = !editnameState.value;
}

function deleteColumn(columnIndex) {
  store.deleteColumn(columnIndex);
}
</script>

<template>
  <div class="board-wrapper">
    <main class="board">
      <UContainer
        v-for="(column, columnIndex) in store.board.columns"
        :key="column.name"
        class="column"
      >
        <div class="column-header mb-4">
          <div>
            <UInput v-if="editnameState" v-model="column.name" type="text" />
            <h2 v-else>{{ column.name }}</h2>
          </div>
          <div>
            <UButton
              icon="i-heroicons-pencil-square-solid"
              @click="editColumnName"
              class="mr-2"
            />
            <UButton
              icon="i-heroicons-trash-solid"
              color="red"
              @click="deleteColumn(columnIndex)"
            />
          </div>
        </div>

        <ul>
          <li v-for="task in column.tasks" :key="task.id">
            <UCard class="mb-4">
              <strong>{{ task.name }}</strong>
              {{ task.description }}
            </UCard>
          </li>
        </ul>
      </UContainer>
      <UContainer class="column">
        <UInput
          v-model="newColumnName"
          type="text"
          placeholder="Create new column"
          icon="i-heroicons-plus-circle-solid"
          @keyup.enter="addColumn"
        ></UInput>
      </UContainer>
    </main>
  </div>
</template>
