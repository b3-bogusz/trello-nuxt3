<script setup lang="ts">
import BoardColumn from "~/components/BoardColumn.vue";
import { useBoardStore } from "~/stores/boardStore";

const store = useBoardStore();

const route = useRoute();
const router = useRouter();

const newColumnName = ref("");

const isModalOpen = computed(() => {
  return route.name === "index-tasks-id";
});

function closeModal() {
  router.push("/");
}

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
    <div v-show="isModalOpen" class="task-bg" @click.self="closeModal">
      <NuxtPage :key="route.fullPath" />
    </div>
  </div>
</template>
