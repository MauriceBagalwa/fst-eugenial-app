<script lang="ts" setup>
import Field from "@/components/tools/Field.vue";
import Input from "@/components/tools/Input.vue";
import Logo from "@/assets/svg/logo.svg";
import { computed, reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, maxLength } from "@vuelidate/validators";
import { useRouter } from "vue-router";

const route = useRouter();

const _fields = [
  {
    id: "email",
    label_name: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    id: "password",
    label_name: "Password",
    type: "password",
    placeholder: "Enter user password",
    required: true,
  },
];

const _form_data = reactive({
  email: "",
  password: "",
});

const rules = computed(() => {
  return {
    password: { required },
    email: { required, email },
  };
});

const v$ = useVuelidate(rules, _form_data);

// Methodes
const _create_acount = async () => {
  const result = await v$.value.$validate();

  if (result) route.push({ name: "verify-otp" });
  // else return;
};

const _terms = ref(false);
const _type_input = ref<string>("password");

const _show_password = () => {
  return _type_input.value == "password" ? "text" : "password";
};
</script>

<template>
  <div
    class="flex flex-col w-full h-full min-h-[84svh] md:min-h-[20svh] md:justify-center"
  >
    <div
      class="flex flex-col md:min-h-[76svh] md:pt-3 lg:min-h-[79.4svh] 2xl:min-h-[66svh] 2xl:pt-5"
    >
      <div class="flex flex-col gap-7 md:gap-12 lg:gap-7 h-[25%]">
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

      <div class="h-[75%]">
        <form class="flex flex-col gap-6 mt-8 md:mt-12 lg:mt-8">
          <Field
            :id="_fields[0].id"
            :input_type="_fields[0].type"
            :label_name="_fields[0].label_name"
            :required="_fields[0].required"
          >
            <Input
              :id="_fields[0].id"
              :input_type="_fields[0].type"
              :placeholder="_fields[0].placeholder"
              :required="true"
              :message_error="
                v$.email.$errors.find((item:any) => item.$propertyPath == 'email')
                  ?.$uid
              "
              v-model="_form_data.email"
            />
          </Field>

          <Field
            :id="_fields[1].id"
            :input_type="_fields[1].type"
            :label_name="_fields[1].label_name"
            :required="_fields[1].required"
          >
            <Input
              :id="_fields[1].id"
              :input_type="_fields[1].type"
              :placeholder="_fields[1].placeholder"
              :required="_fields[1].required"
              :message_error="
                v$.password.$errors.find(
                  (item:any) => item.$propertyPath == 'password'
                )?.$uid
              "
              v-model="_form_data.password"
            />
          </Field>

          <div class="flex justify-between w-full items-center">
            <div class="flex gap-2 mt-2 items-center">
              <input
                type="checkbox"
                class="mt-1 focus:outline-none w-[25px] cursor-pointer"
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
              type="submit"
              class="w-full bg-[#0059F5] py-3 rounded-md text-gray-50 font-bold leading-normal focus:outline-none my-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
              :v-bind:disabled="_terms"
              @click.prevent="_create_acount"
            >
              Login
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex gap-2 w-full text-[14px]">
            <p>We don't have account ?</p>
            <a href="" class="font-bold text-[#0059F5] cursor-pointer"
              >Sign Up</a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
