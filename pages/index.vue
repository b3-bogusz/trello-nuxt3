<script setup lang="ts">
const route = useRoute();

const store = useBoardStore();
</script>

<template>
  <div class="board-wrapper">
    <main class="board">
      <UContainer
        v-for="column in store.board.columns"
        :key="column.name"
        class="column"
      >
        <h2 class="mb-4">{{ column.name }}</h2>
        <ul>
          <li v-for="task in column.tasks" :key="task.id">
            <UCard class="mb-4">
              <strong>{{ task.name }}</strong>
              {{ task.description }}
            </UCard>
          </li>
        </ul>
      </UContainer>
    </main>
  </div>
</template>
