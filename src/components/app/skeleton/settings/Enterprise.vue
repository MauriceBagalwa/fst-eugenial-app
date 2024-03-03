<script lang="ts" setup></script>

<template>
  <div class="w-full h-full flex flex-col">
    <div
      class="w-full h-44 px-10 py10 bg-gradient-to-r from-[#eaeff2] to-stone-100 flex items-center rounded-md justify-between relative"
    >
      <div
        class="flex items-center justify-center w-32 h-32 rounded-md bg-gray-50 absolute -bottom-10"
      >
        <PhotoIcon class="w-8" />
      </div>
      <div class="w-full absolute top-[220px] left-0 py-5 flex flex-col pl-10">
        <div class="flex flex-col gap-16 pr-2">
          <div class="flex justify-between">
            <div class="flex flex-col gap-1">
              <h2 class="font-extrabold text-[1.7rem]">---- value ---</h2>
              <p class="text-gray-500 text-[12.5px] font-light w-[50%]">
                --- value -----
              </p>
              <div class="text-[13px] text-gray-400 flex gap-4 mt-1">
                <p>-- value ----</p>
                <p>--- value ---</p>
              </div>
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
                        value
                      </p>
                    </div>
                    <div class="flex gap-2 items-center">
                      <EnvelopeIcon class="w-4" />
                      <p class="text-[12px] font-seminbold">Email :</p>
                      <p class="">value</p>
                    </div>
                    <div class="flex gap-2 items-center">
                      <PhoneIcon class="w-[13.5px]" />
                      <p class="text-[12px] font-seminbold">Phones :</p>
                      <p>value</p>
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
                  <span> valur </span>
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
