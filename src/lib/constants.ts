import { NavItem, Feature, Program, Stat, FooterSection, CampusHighlights } from "../types";

export const NAV_ITEMS: NavItem[] = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'features' },
    { href: '#programs', label: 'Programs' },
    { href: '#calender_view', label: 'Updates' },
    { href: '#campus_highlight', label: 'Highlights' },
    // { href: '#about', label: 'About' },
    // { href: '#contact', label: 'Contact' },
];

export const FEATURES: Feature[] = [
    {
        icon: '🎓',
        title: 'Academic Excellence',
        description: 'Learn from highly qualified lecturers and technologists committed to rigorous technical and vocational standards.',
    },
    {
        icon: '⚙️',
        title: 'Practical TVET Focus',
        description: 'Gain hands-on experience in well-equipped laboratories and workshops designed to bridge the gap between theory and industry.',
    },
    {
        icon: '🏗️',
        title: 'Industrial Training (IT)',
        description: 'Benefit from structured SIWES programs and strong links with Nigerian industries for mandatory field experience.',
    },
];

export const PROGRAMS: Program[] = [
    {
        title: "Computer Science",
        description: "Master software development, networking, and data management in a tech-driven environment.",
        icon: Code,
        duration: '2 Years (ND/HND)',
    },
    {
        title: "Business Administration & Management",
        description: "Acquire essential managerial skills for leadership roles in corporate and public sectors.",
        icon: Briefcase,
        duration: '2 Years (ND/HND)',
    },
    {
        title: "Mass Communication",
        description: "Explore journalism, broadcasting, and public relations within the School of Communication Arts.",
        icon: Mic, // Changed from Book to reflect communication
        duration: '2 Years (ND/HND)',
    },
    {
        title: "Science Laboratory Technology",
        description: "Gain hands-on experience in microbiology, biochemistry, and environmental biology.",
        icon: Microscope,
        duration: '2 Years (ND/HND)',
    },
    {
        title: "Electrical/Electronic Engineering",
        description: "Focus on power systems, telecommunications, and instrumentation technology.",
        icon: Zap, // Changed from Atom to reflect Engineering
        duration: '2 Years (ND/HND)',
    },
    {
        title: "Public Administration",
        description: "Study governance, policy making, and administrative management for the public sector.",
        icon: Landmark, // Changed from Globe for a civic/government feel
        duration: '2 Years (ND/HND)',
    },
];

export const CAMPUSHIGHLIGHTS: CampusHighlights[] = [
    {
        title: "Modern Library",
        imageUrl: "/campus/ca-1.jpg",
    },
    {
        title: "Research Facilities",
        imageUrl: "/campus/ca-2.jpg",
    },
    {
        title: "Sports Complex",
        imageUrl: "/campus/ca-3.jpg",
    },
    {
        title: "Student Housing",
        imageUrl: "/campus/ca-4.jpg",
    },
];

export const STATS: Stat[] = [
    { number: '5000+', label: 'Alumni Network' },
    { number: '95%', label: 'Employment Rate' },
    { number: '50+', label: 'Industry Partners' },
    { number: '25', label: 'Years of Excellence' },
];

export const FOOTER_SECTIONS: FooterSection[] = [
    {
        title: 'Quick Links',
        links: [
            { label: 'Programs', href: '#programs' },
            { label: 'Admissions', href: '#admissions' },
            { label: 'Research', href: '#research' },
            { label: 'Faculty', href: '#faculty' },
            { label: 'Careers', href: '#careers' },
        ],
    },
    {
        title: 'Student Resources',
        links: [
            { label: 'Student Portal', href: '/auth/signin' },
            { label: 'Library', href: '#library' },
            { label: 'Academic Calendar', href: '#calendar' },
            { label: 'Student Services', href: '#services' },
            { label: 'Alumni Network', href: '#alumni' },
        ],
    },
];


// AUTH DASHBOARD CONFIG
import {
    BookOpen,
    DollarSign,
    Flag,
    GraduationCap,
    MapPinHouse,
    PieChart,
    UserRoundPen,
    CalendarCheck,
    School2,
    MessageSquare,
    Settings2,
    LucideIcon,
    School,
    ClipboardList,
    BookOpenCheck,
    Gamepad,
    Gamepad2,
    ShieldUser,
    SendHorizonal,
    BanknoteArrowDown,
    Users,
    CreditCard,
    Atom,
    Book,
    Briefcase,
    Code,
    Globe,
    Microscope,
    Mic,
    Zap,
    Landmark
} from "lucide-react";
export interface SidebarNavItem {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: { title: string; url: string }[];
    display: boolean;
}

export interface SidebarNavConfig {
    compound: SidebarNavItem[];
    flat?: {
        title: string;
        url: string;
        icon: LucideIcon;
        display: boolean;
    }[];
}

export const AdminNavMain: SidebarNavConfig = {
    compound: [
        {
            title: "DASHBOARD",
            url: "#",
            icon: PieChart,
            isActive: true,
            items: [
                {
                    title: "Statistics",
                    url: "/admin/dashboard",
                },
            ],
            display: true,
        },
        {
            title: "USERS",
            url: "#",
            icon: Users,
            items: [
                {
                    title: "Students Listing",
                    url: "/admin/students",
                },
                {
                    title: "Teachers Listing",
                    url: "/admin/teachers",
                },
                {
                    title: "Parents Listing",
                    url: "/admin/parents",
                },
            ],
            display: true,
        },

        {
            title: "MESSAGES",
            url: "#",
            icon: SendHorizonal,
            items: [
                {
                    title: "Messages",
                    url: "/admin/messages",
                },



            ],
            display: true,
        },
        {
            title: "PAYMENT HISTORY",
            url: "#",
            icon: CreditCard,
            items: [
                {
                    title: "Payments",
                    url: "/admin/payments",
                },
            ],
            display: true,
        },
        {
            title: "STUDENT REPORTS",
            url: "#",
            icon: ClipboardList,
            items: [
                {
                    title: "View Reports",
                    url: "/admin/reports",
                },
            ],
            display: true,
        },
        // {
        //     title: "SETTINGS",
        //     url: "#",
        //     icon: Settings2,
        //     items: [
        //         {
        //             title: "Profile Settings",
        //             url: "/admin/settings",
        //         },
        //     ],
        //     display: true,
        // },
    ]
}
export const StudentNavMain: SidebarNavConfig = {
    compound: [
        {
            title: "DASHBOARD",
            url: "#",
            icon: PieChart,
            isActive: true,
            items: [
                {
                    title: "Statistics",
                    url: "/student/dashboard",
                },
            ],
            display: true,
        },
        {
            title: "PAYMENTS",
            url: "#",
            icon: DollarSign,
            items: [
                {
                    title: "Pay Acceptance Fee",
                    url: "/history/student-payments/acceptance",
                },
                {
                    title: "Pay Tuition Fee",
                    url: "/history/student-payments/tuition",
                },
            ],
            display: false,
        },
        {
            title: "MY COURSES",
            url: "#",
            icon: School,
            items: [
                {
                    title: "My Courses",
                    url: "/student/classes",
                },

            ],
            display: true,
        },
        {
            title: "HISTORY",
            url: "#",
            icon: DollarSign,
            items: [
                {
                    title: "Payment History",
                    url: "/student/history/student-payments",
                },
                {
                    title: "Result History",
                    url: "/student/history/student-results",
                },
            ],
            display: true,
        },
        {
            title: "LEADERBOARD & PERFORMANCES",
            url: "#",
            icon: Gamepad2,
            items: [
                {
                    title: "Leaderboard & Performances",
                    url: "/student/leaderboard",
                },

            ],
            display: true,
        },
        // {
        //     title: "REPORTS",
        //     url: "#",
        //     icon: Flag,
        //     items: [
        //         {
        //             title: "Grade Report",
        //             url: "/student/grade-report",
        //         },
        //     ],
        //     display: true,
        // },

        {
            title: "PROFILE",
            url: "#",
            icon: ShieldUser,
            items: [
                {
                    title: "Profile Settings",
                    url: "/student/profile",
                },
            ],
            display: true,
        },
    ]
}
export const TeacherNavMain: SidebarNavConfig = {
    compound: [
        {
            title: "DASHBOARD",
            url: "#",
            icon: PieChart,
            isActive: true,
            items: [
                {
                    title: "Overview",
                    url: "/teacher/dashboard",
                },
            ],
            display: true,
        },
    ],
    flat: [

        // {
        //     title: "STUDENTS",
        //     url: "/teacher/students",
        //     icon: GraduationCap,
        //     display: true,
        // },
        {
            title: "COURSES",
            url: "/teacher/classes",
            icon: School,
            display: true,
        },
        {
            title: "STUDENT REPORTS",
            url: "/teacher/grade-reports",
            icon: BookOpenCheck,
            display: true,
        },
        // {
        //     title: "CALENDER",
        //     url: "/teacher/calender",
        //     icon: CalendarCheck,
        //     display: true,
        // },
        {
            title: "ATTENDANCE",
            url: "/teacher/attendance",
            icon: ClipboardList,
            display: true,
        },
        {
            title: "MESSAGES",
            url: "/teacher/messages",
            icon: MessageSquare,
            display: true,
        },

        {
            title: "SETTINGS",
            url: "/teacher/settings",
            icon: Settings2,
            display: false,
        },
    ],
};
export const ParentNavMain: SidebarNavConfig = {
    compound: [
        {
            title: "DASHBOARD",
            url: "#",
            icon: PieChart,
            isActive: true,
            items: [
                {
                    title: "Overview",
                    url: "/parent/dashboard",
                },
            ],
            display: true,
        },
    ],
    flat: [

        // {
        //     title: "MESSAGES",
        //     url: "/parent/messages",
        //     icon: SendHorizonal,
        //     display: true,
        // },


        {

            title: "COURSES",
            url: "/parent/classes",
            icon: BookOpen,
            display: true,
        },
        {
            title: "PAYMENT HISTORY",
            url: "/parent/payments",
            icon: BanknoteArrowDown,
            display: true,
        },
        {
            title: "STUDENT REPORTS",
            url: "/parent/reports",
            icon: MessageSquare,
            display: true,
        },
        {
            title: "SETTINGS",
            url: "/parent/settings",
            icon: Settings2,
            display: false,
        },
    ],
};