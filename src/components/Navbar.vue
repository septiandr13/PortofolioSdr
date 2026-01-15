<script setup lang="ts">
import { ref } from 'vue';
import { navLinks } from '../data';

const isMobileMenuOpen = ref(false);
</script>

<template>
    <header class="bg-white shadow-md sticky top-0 z-50">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" class="text-2xl font-bold text-blue-600">SeptianDR</a>
            <div class="hidden md:flex space-x-6 items-center">
                <a
                    v-for="link in navLinks"
                    :key="link.href"
                    :href="link.href"
                    :class="link.variant === 'primary' ? 'bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300' : 'text-gray-600 hover:text-blue-600 transition duration-300'"
                >
                    {{ link.label }}
                </a>
            </div>
            <div class="md:hidden">
                <button class="text-gray-600 focus:outline-none" @click="isMobileMenuOpen = !isMobileMenuOpen">
                    <i class="fas fa-bars fa-lg"></i>
                </button>
            </div>
        </nav>
        <div id="mobile-menu" class="md:hidden bg-white border-t" :class="{ 'hidden': !isMobileMenuOpen }">
            <a
                v-for="link in navLinks"
                :key="link.href + '-mobile'"
                :href="link.href"
                class="block py-2 px-4 text-sm hover:bg-gray-100"
                @click="isMobileMenuOpen = false"
            >
                {{ link.label }}
            </a>
        </div>
    </header>
</template>
