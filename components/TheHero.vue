<template>
  <section class="pt-32">
    <div class="container h-full grid lg:grid-cols-3 items-center gap-16">
      <div><img :src="heroData.img" alt="" /></div>
      <div class="col-span-2">
        <p class="text-[#4E2ADD] text-3xl font-semibold">
          {{ heroData.subTitle }}
        </p>
        <h1 class="font-bold text-9xl mb-8">{{ heroData.title }}</h1>
        <p class="text-3xl font-semibold mb-8">{{ heroData.description }}</p>
        <div class="flex gap-4 mb-8">
          <button class="bg-[#4E2ADD] px-4 py-2 text-white">
            {{ heroData.button1Text }}
          </button>
          <button class="border-[#4E2ADD] px-4 py-2 border-2">
            {{ heroData.button2Text }}
          </button>
        </div>
        <p class="text-sm max-w-[600px] leading-7">{{ heroData.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const heroData = reactive({
  img: "/young-man-smiling-and-looking-at-camera-waving-ha-2023-12-06-00-30-08-utc.jpg",
  subTitle: "Hello, I am",
  title: "John Smith",
  description: "I am Profesional Web Developer",
  button1Text: " About Me",
  buttonLink: "/about",
  button2Text: " Contact Us",
  buttonLink: "/contact",
  text: "From innovative designs to compelling content, each project reflects my commitment to delivering excellence and pushing boundaries. I invite you to explore my portfolio and dis cover how my skills and experiences can bring value to your projects and endeavors.",
});
</script>

<style></style>
