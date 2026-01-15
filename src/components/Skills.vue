<script setup lang="ts">
import { skills } from '../data';
</script>

<template>
    <section id="skills" class="py-20 animate-on-scroll">
        <div class="max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">Keahlian Profesional</h2>
            <div class="flex flex-wrap justify-center gap-4">
                <span
                    v-for="skill in skills"
                    :key="skill.label"
                    class="skill-tag text-md font-medium px-4 py-2 rounded-full"
                    :class="skill.variant === 'primary' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'"
                >
                    {{ skill.label }}
                </span>
            </div>
        </div>
    </section>
</template>
