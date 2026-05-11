import { SlideData } from "@/types/slide";

export const slidesData: SlideData[] = [
    {
        id: 1,
        title: "Center of Excellence",
        subtitle: "Technical & Vocational Mastery",
        description: "Join Nigeria's premier polytechnic. Since 1973, we've been training the next generation of engineers, technologists, and managers to lead the nation's industrial growth.",
        image: "/slides/ai1.jpg",
        category: "Academic Tradition",
        primaryAction: { text: "View Faculties", icon: "🏢", url: "programs" },
        secondaryAction: { text: "Apply Now", icon: "📝", url: "/auth/create-account" }
    },
    {
        id: 2,
        title: "Practical Innovation",
        subtitle: "Skills for the Real World",
        description: "Move beyond the textbooks. Our workshops and the International Conference Centre (ICC) provide a landscape for hands-on learning and technical exhibition.",
        image: "/slides/ai2.jpg",
        category: "TVET Training",
        primaryAction: { text: "Our Facilities", icon: "🛠️", url: "programs" },
        secondaryAction: { text: "Inquiry", icon: "📞", url: "/auth/create-account" }
    },
    {
        id: 3,
        title: "Enugu Campus Life",
        subtitle: "The Heart of the Coal City",
        description: "Experience a vibrant student culture at Campus I, II, and III. From SUG Week to departmental competitions, build lifelong networks in the historic city of Enugu.",
        image: "/slides/ai3.jpg",
        category: "Campus Experience",
        primaryAction: { text: "Student Events", icon: "🇳🇬", url: "programs" },
        secondaryAction: { text: "Gallery", icon: "🖼️", url: "/auth/create-account" }
    },
    {
        id: 4,
        title: "Industry Ready",
        subtitle: "Bridge the Gap to Employment",
        description: "Our graduates are the backbone of Nigeria's technical workforce. Leverage our strong SIWES partnerships and extensive alumni network across Africa.",
        image: "/slides/ai4.jpg",
        category: "Career Success",
        primaryAction: { text: "SIWES Portal", icon: "⚙️", url: "programs" },
        secondaryAction: { text: "Alumni Association", icon: "🎓", url: "/auth/create-account" }
    }
];

