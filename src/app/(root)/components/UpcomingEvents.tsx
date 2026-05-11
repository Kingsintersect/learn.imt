import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function UpcomingEvents() {
    const events = [
        {
            title: "Entrepreneurship Exhibition",
            date: "May 22",
            time: "10:00 AM - 4:00 PM",
            location: "International Conference Centre (ICC)",
        },
        {
            title: "Faculty Guest Lecture: Emerging Tech",
            date: "May 25",
            time: "12:00 PM - 2:00 PM",
            location: "ETF Lecture Theater",
        },
        {
            title: "IMT Cultural Day Celebration",
            date: "June 05",
            time: "11:00 AM - 5:00 PM",
            location: "IMT Sports Complex, Campus III",
        },
        {
            title: "Old Boys/Alumni Dinner",
            date: "June 12",
            time: "6:00 PM - 9:00 PM",
            location: "School of Financial Studies Hall",
        },
    ];

    return (
        <Card className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-700/30 h-full">
            <CardHeader className="text-2xl font-bold text-[#23608c] dark:text-blue-400 mb-6">
                Upcoming Events
            </CardHeader>

            <CardContent className="space-y-4">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="flex items-start border-l-2 border-[#d25400] dark:border-orange-400 pl-4 py-2"
                    >
                        <div className="mr-4 text-center">
                            <div className="bg-[#23608c] dark:bg-blue-600 text-white font-bold rounded px-3 py-1">
                                {event.date}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold dark:text-white">{event.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{event.time}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{event.location}</p>
                        </div>
                    </div>
                ))}
            </CardContent>

            <CardFooter className="mt-6 text-center">
                <Link
                    href="#"
                    className="inline-block bg-[#23608c] dark:bg-blue-600 hover:bg-[#1d5175] dark:hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
                >
                    View Calendar
                </Link>
            </CardFooter>
        </Card>
    );
}