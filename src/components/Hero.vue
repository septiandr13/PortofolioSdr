<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const heroSectionRef = ref<HTMLElement | null>(null);

// Typing effect variables
const typingText = ref('');
const fullText = "IT Developer | .NET, DevExpress & Blazor";
const typingSpeed = 100;

const startTyping = () => {
    let i = 0;
    const type = () => {
        if (i < fullText.length) {
            typingText.value += fullText.charAt(i);
            i++;
            setTimeout(type, typingSpeed);
        }
    };
    type();
};

// Canvas animation logic
interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
}

let particles: Particle[] = [];
let animationFrameId: number;
let ctx: CanvasRenderingContext2D | null = null;

const initParticles = (width: number, height: number) => {
    particles = [];
    const particleCount = Math.floor((width * height) / 10000); // Density based on area
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1, // Random velocity
            vy: (Math.random() - 0.5) * 1,
            size: Math.random() * 2 + 1
        });
    }
};

const draw = () => {
    if (!canvasRef.value || !ctx) return;
    const width = canvasRef.value.width;
    const height = canvasRef.value.height;

    ctx.clearRect(0, 0, width, height);
    
    // Update and draw particles
    particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(59, 130, 246, 0.5)'; // Blue-500 with opacity
        ctx!.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx!.beginPath();
                ctx!.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 100)})`;
                ctx!.lineWidth = 1;
                ctx!.moveTo(p.x, p.y);
                ctx!.lineTo(p2.x, p2.y);
                ctx!.stroke();
            }
        }
    });

    animationFrameId = requestAnimationFrame(draw);
};

const handleResize = () => {
    if (canvasRef.value && heroSectionRef.value) {
        canvasRef.value.width = heroSectionRef.value.offsetWidth;
        canvasRef.value.height = heroSectionRef.value.offsetHeight;
        initParticles(canvasRef.value.width, canvasRef.value.height);
    }
};

onMounted(() => {
    startTyping();

    if (canvasRef.value) {
        ctx = canvasRef.value.getContext('2d');
        handleResize();
        draw();
        window.addEventListener('resize', handleResize);
    }
});

onUnmounted(() => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <section id="hero" ref="heroSectionRef" class="relative text-center py-20 overflow-hidden">
        <!-- Canvas Background -->
        <canvas ref="canvasRef" class="absolute top-0 left-0 w-full h-full pointer-events-none z-0"></canvas>

        <div class="relative z-10 max-w-4xl mx-auto px-4">
            <h1 class="hero-animate text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">Septian Dwi Rahmanza</h1>
            <p class="hero-animate text-xl md:text-2xl text-blue-600 font-semibold mb-6 min-h-[2rem]">
                {{ typingText }}<span class="animate-pulse">|</span>
            </p>
            <p class="hero-animate text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Pengembang perangkat lunak dengan fokus pada ekosistem .NET, berpengalaman dalam menciptakan aplikasi web modern, REST API, serta dashboard interaktif menggunakan DevExpress untuk mendukung digitalisasi proses bisnis.
            </p>
            <a href="#contact" class="hero-animate inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-blue-500/50">
                Mari Terhubung
            </a>
        </div>
    </section>
</template>
