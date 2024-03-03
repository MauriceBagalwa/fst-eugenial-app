<script lang="ts" setup>
import {
  PhotoIcon,
  PencilSquareIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClipboardDocumentListIcon,
  BookmarkIcon,
  LockClosedIcon,
} from "@heroicons/vue/24/outline";

const _enterprise = {
  rccm: "YRK93948-39K390",
  email: "enterprise@gmail.com",
  phones: ["+243986735423", "+6478954132"],
};

const _services = [
  "Coupe de cheveux",
  "Coiffure pour événements spéciaux",
  "Coloration",
  "Mèches et balayage",
  "Brushing",
  "Traitement capillaire",
  "Extensions capillaires",
  "Coiffures pour mariage",
  "Défrisage",
  "Permanente",
  "Coiffure pour hommes",
  "Coiffure pour enfants",
  "Rasage à l'ancienne",
  "Conseils en coiffure",
];

const get_data = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
};

await get_data();
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div
      class="w-full h-[26%] bg-gradient-to-r from-[#eaeff2] to-stone-100 flex items-center rounded-md justify-between relative"
    ></div>
    <div class="w-full relative px-10">
      <div
        class="flex items-center justify-center w-32 h-32 rounded-md bg-gray-50 absolute -top-20"
      >
        <PhotoIcon class="w-8" />
      </div>
      <div class="w-full absolute top-10 left-0 py-5 flex flex-col pl-10">
        <div class="flex flex-col gap-14 pr-2">
          <div class="flex justify-between">
            <div class="flex flex-col gap-1">
              <h2 class="font-extrabold text-[1.7rem]">Wambombo salon</h2>
              <p class="text-gray-500 text-[12.5px] font-light w-[50%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                fugit laudantium neque corporis earum sint amet dolor
                voluptatem!
              </p>
              <div class="text-[13px] text-gray-400 flex gap-4 mt-1">
                <p>NK-Goma RDC</p>
                <p>2ans</p>
              </div>
            </div>

            <div class="justify-normal">
              <button
                class="inline-flex px-8 w-full bg-gray-800 py-2 rounded-[4px] text-gray-50 font-semibold leading-normal focus:outline-none my-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
              >
                <PencilSquareIcon class="w-5 mr-2" />Update
              </button>
            </div>
          </div>

          <div class="flex justify-between">
            <div class="flex flex-col gap-12">
              <div class="flex flex-col gap-4">
                <div class="flex gap-2">
                  <BookmarkIcon class="w-4" />
                  <h2 class="font-bold text-[0.9rem]">Enterprise Info</h2>
                </div>
                <div class="">
                  <div class="pl-6 flex flex-col gap-2">
                    <div class="flex gap-2 items-center">
                      <ClipboardDocumentListIcon class="w-4" />
                      <p class="text-[13.5px] font-seminbold">Rccm :</p>
                      <p
                        class="text-gray-500 text-[14px] cursor-pointer hover:text-gray-900"
                      >
                        {{ _enterprise.rccm }}
                      </p>
                    </div>
                    <div class="flex gap-2 items-center">
                      <EnvelopeIcon class="w-4" />
                      <p class="text-[12px] font-seminbold">Email :</p>
                      <p
                        class="text-gray-500 text-[14px] cursor-pointer hover:text-gray-900"
                      >
                        {{ _enterprise.email }}
                      </p>
                    </div>
                    <div class="flex gap-2 items-center">
                      <PhoneIcon class="w-[13.5px]" />
                      <p class="text-[12px] font-seminbold">Phones :</p>
                      <p
                        v-for="(phone, i) in _enterprise.phones"
                        :key="i"
                        class="text-gray-500 text-[14px] cursor-pointer hover:text-gray-900 hover:font-semibold"
                      >
                        {{ phone
                        }}{{ i !== _enterprise.phones.length - 1 ? " , " : "" }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex gap-2">
                  <BookmarkIcon class="w-4" />
                  <h2 class="font-bold text-[0.9rem]">Services</h2>
                </div>
                <div class="flex flex-wrap w-[80%] gap-2 pl-6">
                  <span
                    v-for="item in _services.slice(0, 8)"
                    class="bg-gray-300/20 px-3 py-2 inline-block rounded-md text-[12px] text-gray-500 hover:text-gray-900 cursor-pointer"
                    >{{ item }}
                  </span>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-[40%] gap-3">
              <div class="flex gap-2">
                <LockClosedIcon class="w-4" />
                <h2 class="font-bold text-[0.9rem]">Personel</h2>
              </div>

              <p class="text-[12.5px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                ex, obcaecati voluptatem in beatae aspernatur officia possimus
                animi cum consequatur!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
