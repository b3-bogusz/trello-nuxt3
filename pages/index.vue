<script setup lang="ts">
import BoardColumn from "~/components/BoardColumn.vue";

const store = useBoardStore();

const newColumnName = ref("");

function addColumn() {
  store.addColumn(newColumnName.value);
  newColumnName.value = "";
}
</script>

<template>
  <div class="board-wrapper">
    <main class="board">
      <BoardColumn
        v-for="(column, columnIndex) in store.board.columns"
        :key="columnIndex"
        :column="column"
        :columnIndex="columnIndex"
      />
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
