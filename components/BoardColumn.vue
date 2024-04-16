<script setup lang="ts">
import { useBoardStore } from "~/stores/boardStore";

const props = defineProps<{
  column: {};
  columnIndex: number;
}>();

const store = useBoardStore();
const router = useRouter();
const editnameState = ref(false);
const newTaskName = ref("");

function editColumnName() {
  editnameState.value = !editnameState.value;
}

function deleteColumn(columnIndex) {
  store.deleteColumn(columnIndex);
}

function goToTask(taskId) {
  router.push(`/tasks/${taskId}/`);
}

function addTask() {
  store.addTask({
    columnIndex: props.columnIndex,
    taskName: newTaskName.value,
  });
  newTaskName.value = "";
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
          <div>
            <strong>{{ task.name }}</strong>
          </div>
          <p>{{ task.description }}</p>
        </UCard>
      </li>
    </ul>
    <UInput
      v-model="newTaskName"
      type="text"
      placeholder="Create new task"
      icon="i-heroicons-plus-circle-solid"
      @keyup.enter="addTask"
    ></UInput>
  </UContainer>
</template>

<style scoped></style>
