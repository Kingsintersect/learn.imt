import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AlertCircle, Calendar, Users, Award, ClipboardCheck, Briefcase } from "lucide-react";
import Link from "next/link";

const announcements = [
    {
        title: "2025/2026 Post-UTME Screening",
        date: "August 15, 2025",
        description: "Screening registration for National Diploma (ND) and Degree programs is now active. Ensure your O'Level results are uploaded.",
        icon: ClipboardCheck,
        type: "important",
    },
    {
        title: "SIWES Orientation Exercise",
        date: "July 12, 2025",
        description: "Compulsory orientation for all ND1 students proceeding on the 4-month Industrial Training (IT) program.",
        icon: Briefcase,
        type: "academic",
    },
    {
        title: "Portal Maintenance & Course Registration",
        date: "July 10, 2025",
        description: "The student portal will be down for maintenance. All students must complete fee payments and course registration before the deadline.",
        icon: AlertCircle,
        type: "alert",
    },
    {
        title: "IMT SUG Week & Elections",
        date: "June 28, 2025",
        description: "The Student Union Government (SUG) announces the upcoming cultural week and manifesto night for departmental aspirants.",
        icon: Users,
        type: "community",
    },
];

export default function Announcements() {
    return (
        <Card className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-700/30">
            <CardHeader className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#23608c] dark:text-blue-400">Announcements</h2>
                <Link
                    href="#"
                    className="text-sm font-medium text-[#d25400] dark:text-orange-400 hover:text-[#b34800] dark:hover:text-orange-300"
                >
                    View all
                </Link>
            </CardHeader>

            <CardContent className="space-y-6">
                {announcements.map((announcement, index) => (
                    <div
                        key={index}
                        className="flex gap-4 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0"
                    >
                        <div
                            className={`
                        flex-shrink-0 p-2 rounded-full
                        ${announcement.type === 'important' ? 'bg-red-100 dark:bg-red-900/30' : ''}
                        ${announcement.type === 'academic' ? 'bg-blue-100 dark:bg-blue-900/30' : ''}
                        ${announcement.type === 'alert' ? 'bg-amber-100 dark:bg-amber-900/30' : ''}
                        ${announcement.type === 'community' ? 'bg-green-100 dark:bg-green-900/30' : ''}
                    `}
                        >
                            <announcement.icon
                                className={`h-5 w-5
                            ${announcement.type === 'important' ? 'text-red-500 dark:text-red-400' : ''}
                            ${announcement.type === 'academic' ? 'text-blue-500 dark:text-blue-400' : ''}
                            ${announcement.type === 'alert' ? 'text-amber-500 dark:text-amber-400' : ''}
                            ${announcement.type === 'community' ? 'text-green-500 dark:text-green-400' : ''}
                        `}
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold dark:text-white">{announcement.title}</h3>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{announcement.date}</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{announcement.description}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}