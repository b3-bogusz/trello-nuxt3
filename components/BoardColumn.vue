<script setup lang="ts">
const props = defineProps<{
  column: {};
  columnIndex: number;
}>();

const store = useBoardStore();
const router = useRouter();
const editnameState = ref(false);

function editColumnName() {
  editnameState.value = !editnameState.value;
}

function deleteColumn(columnIndex) {
  store.deleteColumn(columnIndex);
}

function goToTask(taskId) {
  router.push(`/tasks/${taskId}/`);
}
</script>

<template>
  <UContainer class="column">
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
        <UCard class="mb-4" @click="goToTask(task.id)">
          <strong>{{ task.name }}</strong>
          {{ task.description }}
        </UCard>
      </li>
    </ul>
  </UContainer>
</template>

<style scoped></style>
