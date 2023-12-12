import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/style.css";
import { defineRule } from "vee-validate";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

defineRule("required", (value: any) => {
  if (!value || !value.length) {
    return "This field is required";
  }
  return true;
});

defineRule("email", (value: any) => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true;
  }
  // Check if email
  if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
    return "This field must be a valid email";
  }
  return true;
});
