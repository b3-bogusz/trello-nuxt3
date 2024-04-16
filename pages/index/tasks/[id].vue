<script setup lang="ts">
import { useBoardStore } from "~/stores/boardStore";

const route = useRoute();
const router = useRouter();
const store = useBoardStore();

const task = computed(() => {
  return store.getTask(route.params.id);
});

function deleteTask(taskId) {
  store.deleteTask(taskId);
  router.push("/");
}
</script>

<template>
  <div class="task-wrapper">
    <div v-if="task" class="task-view">
      <section>
        <UFormGroup label="name" class="w-full mb-4">
          <UInput :placeholder="task.name" v-model="task.name" type="text" />
        </UFormGroup>

        <UFormGroup label="description" class="w-full mb-4">
          <UTextarea
            v-model="task.description"
            type="text"
            :placeholder="task.description"
          ></UTextarea>
        </UFormGroup>
        <div>
          <UButton
            icon="i-heroicons-trash-solid"
            color="red"
            @click="deleteTask(task.id)"
            >Delete Task</UButton
          >
        </div>
      </section>
    </div>
    <section v-else>
      <p>Task not found</p>
    </section>
  </div>
</template>

<style scoped></style>
