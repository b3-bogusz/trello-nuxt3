import { defineStore } from "pinia";
import boardData from "@/data/boardData.json";

export const useBoardStore = defineStore("boardStore", () => {
  const board = ref<{}>(boardData);

  return {
    board,
  };
});
