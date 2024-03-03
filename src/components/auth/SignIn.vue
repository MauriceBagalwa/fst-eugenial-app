<script lang="ts" setup>
import Logo from "@/assets/svg/logo.svg";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Form, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import DynamicField from "../tools/DynamicField.vue";
import * as yup from "yup";

const router = useRouter();
const _fields = [
  {
    id: "email",
    field_name: "Email",
    placeholder: "Enter your email",
    as: "input",
    type: "text",
    rules: "required|email",
  },
  {
    id: "password",
    field_name: "Password",
    placeholder: "Enter user password",
    as: "input",
    type: "password",
    rules: "required",
  },
];

const schema = toTypedSchema(
  yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
);

const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
});

// Methodes
const _submit = handleSubmit((values) => {
  resetForm();
  router.push({ name: "app" });
});

const _terms = ref(false);
// const _type_input = ref<string>("password");

// const _show_password = () => {
//   return _type_input.value == "password" ? "text" : "password";
// };
</script>

<template>
  <div class="flex flex-col w-full md:min-h-[20svh] md:justify-center px-2">
    <div
      class="flex flex-col gap-4 h-full md:min-h-[76svh] md:pt-3 lg:min-h-[79.4svh] 2xl:min-h-[66svh] 2xl:pt-5 2xl:gap-12 justify-center"
    >
      <div class="flex justify-center">
        <div class="flex flex-col gap-7 md:gap-12 lg:gap-7 justify-center">
          <div class="">
            <Logo class="w-auto h-12" />
          </div>
          <div class="flex flex-col lg:gap-2">
            <h1 class="text-3xl font-bold mb-2 lg:text-3xl">
              Sign Up for an Account
            </h1>
            <p class="text-gray-500 pl-0 text-[13px] w-[87%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              dolores suscipit.
            </p>
          </div>
        </div>
      </div>
      <div class="">
        <div class="h-[75%] flex flex-col gap-7">
          <form @submit="_submit" class="flex flex-col gap-5">
            <div v-for="(item, i) in _fields" :key="i">
              <DynamicField :_input="item" />
            </div>

            <div class="flex justify-between w-full items-center">
              <div class="flex gap-2 items-center">
                <input
                  type="checkbox"
                  class="focus:outline-none w-[25px] cursor-pointer"
                  v-model="_terms"
                />
                <label class="text-[13px] w-[80%] cursor-pointer"
                  >Remenber me</label
                >
              </div>
              <a
                href=""
                class="font-bold text-[#0059F5] cursor-pointer text-[13px]"
                >Forget Password ?
              </a>
            </div>
            <div>
              <button
                class="w-full bg-[#0059F5] py-3 rounded-md text-gray-50 font-bold leading-normal focus:outline-none my-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
              >
                Login
              </button>
            </div>
          </form>

          <div class="flex gap-2 w-full text-[14px]">
            <p>We don't have account ?</p>
            <a href="" class="font-bold text-[#0059F5] cursor-pointer"
              >Sign Up</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
