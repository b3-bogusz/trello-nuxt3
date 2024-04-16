<script setup lang="ts">
import { useBoardStore } from "~/stores/boardStore";

const route = useRoute();
const store = useBoardStore();

const task = computed(() => {
  return store.getTask(route.params.id);
});
</script>

<template>
  <div class="task-wrapper">
    <div class="task-view">
      <h1>{{ task.name }}</h1>
      <p>{{ task.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
