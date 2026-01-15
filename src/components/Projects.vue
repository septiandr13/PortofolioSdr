<script setup lang="ts">
import { projects } from '../data';
import ProjectItem from './ProjectItem.vue';
</script>

<template>
    <section id="projects" class="py-20 animate-on-scroll">
        <div class="max-w-6xl mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">Proyek Unggulan</h2>
            <ProjectItem 
                v-for="project in projects" 
                :key="project.title" 
                :project="project" 
            />
        </div>
    </section>
</template>
