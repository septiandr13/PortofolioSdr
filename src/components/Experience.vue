<script setup lang="ts">
import { experiences } from '../data';
</script>

<template>
    <section id="experience" class="py-20 bg-white rounded-xl shadow-lg animate-on-scroll">
        <div class="max-w-4xl mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-16 text-gray-900">Pengalaman Kerja</h2>
            <div class="relative border-l-2 border-blue-200 pl-8">
                <div
                    v-for="experience in experiences"
                    :key="experience.role + experience.company"
                    class="mb-12 timeline-item"
                >
                    <h3 class="text-xl font-bold text-gray-900">{{ experience.role }}</h3>
                    <p class="font-semibold text-blue-600 mb-1">
                        {{ experience.company }} · {{ experience.employmentType }}
                    </p>
                    <p class="text-sm text-gray-500 mb-3">{{ experience.period }}</p>
                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                        <li
                            v-for="(item, index) in experience.highlights"
                            :key="index"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
