import { defineStore } from "pinia";

export const base_modal_store = defineStore("base_model", {
  state: () => {
    return {
      is_show: false,
      show_drop: false,
    };
  },
  actions: {
    show_modal() {
      this.is_show = true;
    },
    hide_modal() {
      this.is_show = false;
    },
    show_drop_modal() {
      this.show_drop = true;
    },
    hide_drop_modal() {
      this.show_drop = false;
    },
  },
  getters: {},
});
