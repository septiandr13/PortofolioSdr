<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Project } from '../types';

const props = defineProps<{ project: Project }>();

const currentIndex = ref(0);
let intervalId: number | null = null;

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % props.project.images.length;
};

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + props.project.images.length) % props.project.images.length;
};

const goToSlide = (index: number) => {
    currentIndex.value = index;
    resetAutoSlide();
};

const startAutoSlide = () => {
    intervalId = setInterval(nextSlide, 5000);
};

const stopAutoSlide = () => {
    if (intervalId) clearInterval(intervalId);
};

const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
};

onMounted(() => {
    startAutoSlide();
});

onUnmounted(() => {
    stopAutoSlide();
});
</script>

<template>
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row mt-12 animate-on-scroll first:mt-0">
        
        <!-- Gallery Section -->
        <div 
            class="w-full h-80 md:h-auto md:w-1/2 bg-gray-200 relative"
            :class="{ 'md:order-2': project.reverseLayout, 'md:order-1': !project.reverseLayout }"
        >
            <div class="project-gallery relative w-full h-full overflow-hidden"
                 @mouseenter="stopAutoSlide"
                 @mouseleave="startAutoSlide">
                <div class="gallery-inner flex transition-transform duration-500 ease-in-out h-full"
                     :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                    <img 
                        v-for="(img, idx) in project.images" 
                        :key="idx" 
                        :src="img" 
                        :alt="`${project.title} screenshot ${idx + 1}`" 
                        class="w-full h-full object-cover flex-shrink-0"
                    >
                </div>
                
                <button @click="prevSlide(); resetAutoSlide()" class="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none hover:bg-opacity-75 transition">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button @click="nextSlide(); resetAutoSlide()" class="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none hover:bg-opacity-75 transition">
                    <i class="fas fa-chevron-right"></i>
                </button>
                
                <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    <div 
                        v-for="(_, idx) in project.images" 
                        :key="idx"
                        class="gallery-dot"
                        :class="{ 'active': idx === currentIndex }"
                        @click="goToSlide(idx)"
                    ></div>
                </div>
            </div>
        </div>

        <!-- Content Section -->
        <div 
            class="md:w-1/2 p-8 md:p-12 flex flex-col justify-center"
            :class="{ 'md:order-1': project.reverseLayout, 'md:order-2': !project.reverseLayout }"
        >
            <div class="flex items-center mb-4">
                <span 
                    class="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    :class="project.categoryColor === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'"
                >
                    {{ project.category }}
                </span>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ project.title }}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed" v-html="project.description"></p>
            
            <div class="space-y-4 mb-8">
                <div v-for="(feature, idx) in project.features" :key="idx" class="flex items-start">
                    <i :class="[feature.icon, feature.iconColor, 'mt-1 mr-3']"></i>
                    <p class="text-gray-700">
                        <strong>{{ feature.title }}</strong> <span v-html="feature.desc"></span>
                    </p>
                </div>
            </div>

            <div class="flex flex-wrap gap-2 mb-8">
                <span 
                    v-for="(tech, idx) in project.techStack" 
                    :key="idx"
                    class="px-3 py-1 bg-gray-100 text-sm rounded-md font-medium"
                    :class="tech.isHighlight ? 'text-orange-600 font-bold' : 'text-gray-600'"
                >
                    {{ tech.name }}
                </span>
            </div>
        </div>
    </div>
</template>
