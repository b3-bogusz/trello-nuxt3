import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import boardData from "@/data/boardData.json";
import { v4 as uuid } from "uuid";

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

  const deleteTask = (taskId) => {
    for (const column of board.value.columns) {
      const taskIndex = column.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        column.tasks.splice(taskIndex, 1);
        return;
      }
    }
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

  const addTask = ({ columnIndex, taskName }) => {
    board.value.columns[columnIndex].tasks.push({
      id: uuid(),
      name: taskName,
      description: "",
    });
  };

  return {
    board,
    addColumn,
    deleteColumn,
    getTask,
    addTask,
    deleteTask,
  };
});
