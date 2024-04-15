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

  return {
    board,
    addColumn,
    deleteColumn,
  };
});
