import { NavLink, Skill, Experience, Project } from './types';

export const navLinks: NavLink[] = [
    { href: '#about', label: 'Tentang Saya', variant: 'default' },
    { href: '#skills', label: 'Keahlian', variant: 'default' },
    { href: '#experience', label: 'Pengalaman', variant: 'default' },
    { href: '#projects', label: 'Proyek', variant: 'default' },
    { href: '#education', label: 'Pendidikan', variant: 'default' },
    { href: '#contact', label: 'Hubungi Saya', variant: 'primary' }
];

export const skills: Skill[] = [
    { label: 'C#', variant: 'primary' },
    { label: 'ASP.NET Core', variant: 'primary' },
    { label: 'Blazor', variant: 'primary' },
    { label: 'SQL Server', variant: 'primary' },
    { label: 'DevExpress', variant: 'primary' },
    { label: 'Visual Basic .NET (VB.NET)', variant: 'secondary' },
    { label: 'Unity', variant: 'secondary' },
    { label: 'Tortoise SVN', variant: 'secondary' },
    { label: 'Google Data Studio', variant: 'secondary' },
    { label: 'REST API', variant: 'secondary' },
    { label: 'CSS', variant: 'secondary' },
    { label: 'Swagger', variant: 'secondary' }
];

export const experiences: Experience[] = [
    {
        role: 'IT Developer',
        company: 'PT Cakrawala Dinamika Energi',
        employmentType: 'Full-time',
        period: 'Nov 2023 -  Des 2025',
        highlights: [
            'Mengembangkan platform MyAudits untuk digitalisasi proses audit internal.',
            'Menciptakan fitur baru berbasis ASP.NET Core, Blazor, dan SQL Server.',
            'Mengembangkan REST API untuk integrasi dengan aplikasi mobile.',
            'Membangun custom dashboard interaktif menggunakan Blazor untuk visualisasi data.',
            'Melakukan troubleshooting, bug fixing, dan maintenance rutin.'
        ]
    },
    {
        role: 'Game Developer',
        company: 'Ahmad Dahlan University',
        employmentType: 'Freelance',
        period: 'Jul 2023 - Nov 2023 · 5 bln',
        highlights: [
            'Membangun aplikasi media pembelajaran puisi dengan Augmented Reality menggunakan Unity dan C#.',
            'Membuat aset animasi 3D untuk kebutuhan Augmented Reality.'
        ]
    },
    {
        role: 'Data Management',
        company: 'PT. TELKOM AKSES',
        employmentType: 'Internship',
        period: 'Nov 2022 - Des 2022 · 2 bln',
        highlights: [
            'Membuat visualisasi data cuti karyawan menggunakan Google Data Studio.',
            'Melakukan input dan validasi data menggunakan Oracle Communication UIM.',
            'Mengembangkan proyek Bot Telegram untuk otomatisasi tugas.'
        ]
    }
];

export const projects: Project[] = [
    {
        title: 'MyAudits',
        category: 'Enterprise Solution',
        categoryColor: 'blue',
        description: 'Sistem manajemen audit internal terintegrasi yang dirancang untuk mendigitalisasi seluruh siklus audit, mulai dari perencanaan hingga pemantauan tindak lanjut temuan secara <i>real-time</i>.',
        features: [
            {
                icon: 'fas fa-check-circle',
                title: 'Interactive Dashboards:',
                desc: 'Visualisasi data temuan (Major/Minor) menggunakan <i>Donut Charts</i> dan <i>Bar Charts</i> untuk memudahkan pengambilan keputusan manajemen.',
                iconColor: 'text-green-500'
            },
            {
                icon: 'fas fa-check-circle',
                title: 'Monitoring Status:',
                desc: 'Fitur pelacakan progres perbaikan temuan dengan status Open, On-Progress, dan Closed.',
                iconColor: 'text-green-500'
            },
            {
                icon: 'fas fa-check-circle',
                title: 'Reporting:',
                desc: 'Generasi laporan otomatis yang detail mencakup Audit Unit, Findings, dan Due Date.',
                iconColor: 'text-green-500'
            },
            {
                icon: 'fas fa-check-circle',
                title: 'API Integration:',
                desc: 'Pengembangan RESTful API untuk integrasi yang lancar dengan aplikasi seluler.',
                iconColor: 'text-green-500'
            }
        ],
        techStack: [
            { name: 'ASP.NET Core' },
            { name: 'Blazor' },
            { name: 'MS SQL Server' },
            { name: 'RESTful API' },
            { name: 'C#' },
            { name: 'DevExpress' },
            { name: 'Swagger' }
        ],
        images: [
            '/images/myaudits-dashboard.png',
            '/images/myaudits-audit-monitoring.png',
            '/images/myaudits-findings-monitoring.png',
            '/images/myaudits-audit-list.png',
            '/images/myaudits-report-status.png'
        ],
        reverseLayout: false
    },
    {
        title: 'MOP (Mining Operation)',
        category: 'Mining ERP Solution',
        categoryColor: 'orange',
        description: 'Platform ERP komprehensif yang dirancang untuk mengelola seluruh aspek operasional pertambangan secara <i>end-to-end</i>, mulai dari perencanaan tambang hingga pemantauan produksi harian secara presisi.',
        features: [
            {
                icon: 'fas fa-chart-line',
                title: 'Production Monitoring:',
                desc: 'Dashboard visual menggunakan grafik <i>gauge</i> untuk membandingkan target (Plan) vs realisasi (Actual) pada aktivitas OB Removal dan Coal Getting.',
                iconColor: 'text-orange-500'
            },
            {
                icon: 'fas fa-calendar-check',
                title: 'Daily Planning:',
                desc: 'Manajemen perencanaan harian yang terintegrasi dengan berbagai entitas perusahaan untuk sinkronisasi target tambang.',
                iconColor: 'text-orange-500'
            },
            {
                icon: 'fas fa-truck-monster',
                title: 'Fleet Management:',
                desc: 'Pemantauan status unit alat berat (Digger, Hauler, Support) dan pencatatan <i>Equipment Time Sheet</i> yang akurat.',
                iconColor: 'text-orange-500'
            }
        ],
        techStack: [
            { name: '.NET' },
            { name: 'VB.NET' },
            { name: 'DevExpress' },
            { name: 'Enterprise ERP' },
            { name: 'Operational Analytics' },
            { name: 'Real-time Data', isHighlight: true }
        ],
        images: [
            '/images/mop-production-dashboard.png',
            '/images/mop-dashboard-main.png',
            '/images/mop-daily-plan.png'
        ],
        reverseLayout: true
    }
];
