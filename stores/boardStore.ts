import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import boardData from "@/data/boardData.json";

export const useBoardStore = defineStore("boardStore", () => {
  const board = useStorage("board", boardData);

  const addColumn = (columnName) => {
    board.value.columns.push({
      name: columnName,
      tasks: [],
    });
  };

  const deleteColumn = (columnIndex) => {
    board.value.columns.splice(columnIndex, 1);
  };

  const getTask = computed(() => {
    return (taskId) => {
      for (const column of board.value.columns) {
        const task = column.tasks.find((task) => task.id === taskId);
        if (task) {
          return task;
        }
      }
    };
  });

  return {
    board,
    addColumn,
    deleteColumn,
    getTask,
  };
});
