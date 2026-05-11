import { getApiHost } from "./lib/utils";

// APPLICATION BASE URLS
export const initials = "imt_";
export const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL ?? "");
export const remoteApiBaseUrl = (process.env.NEXT_PUBLIC_API_URL ?? "")
export const lmsBaseUrl = (process.env.NEXT_PUBLIC_LMS_BASE_URL ?? "")

export const apiUrl = baseUrl + "/api";
export const remoteApiUrl = remoteApiBaseUrl + "/api/v1";
export const ROOT_IMAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL || (remoteApiBaseUrl + "/storage");
export const remoteApiHost = getApiHost(remoteApiBaseUrl);

// APPLICATION BASE CONFIG
export const SITE_SHORT_NAME = "IMT ENUGU CAMPUS";
export const SITE_NAME = "IMT ENUGU CAMPUS";
export const SITE_TITLE = "IMT ENUGU CAMPUS";

// COOKIE AND SESSION CONFIG
export const ssoSessionKey = `${initials}sso_auth_session`;
export const loginSessionKey = `${initials}login_session`;
export const appSessionKey = `${initials}session`;

export const sessionSecret = process.env.NEXT_PUBLIC_SESSION_SECRET ?? "";
export const sessionPassword =
    process.env.NEXT_PUBLIC_SESSION_PASSWORD ?? "";

const secretKey = process.env.NEXT_PUBLIC_SESSION_SECRET;
export const encodedKey = new TextEncoder().encode(secretKey);
export type PaymentStatus = "FULLY_PAID" | "PART_PAID" | "UNPAID" | null;

export type SessionPayload<T = Record<string, unknown>> = T & {
    issuedAt?: number;
    expiresAt: number;
};
export enum UserRole {
    ADMIN = "ADMIN",
    STUDENT = "STUDENT",
    TEACHER = "TEACHER",
    MANAGER = "MANAGER",
    DIRECTOR = "DIRECTOR",
    PARENT = "PARENT",
}

export const APPLICATION_FEE = 37000;
export const ACCEPTANCE_FEE = 30000;
export const FULL_TUITION_FEE = 195000;


export const APP_CONFIG = {
    version: "1.0.0",
    name: SITE_NAME,
    short_name: SITE_SHORT_NAME,
    apiUrl: remoteApiUrl,
    description: "IMT ENUGU CAMPUS Student Portal System",
    keywords: ["IMT", "IMT ENUGU CAMPUS", "Student Portal", "Instutute Management Technology", "Nigeria", 'Education', 'School Management', 'School Portal', 'Student Information System'],
    authors: [{ name: "IMT Enugu Campus" }],
    creator: "Q-verse Limited",
    publisher: "Q-verse Limited",
    icons: [
        { url: "/logo/logo.jpg", sizes: "any" },
        { url: "/logo/logo.jpg", type: "image/jpg" },
    ],
} as const;

export const ROUTES = {
    home: '/',
    login: '/auth/signin',
    dashboard: '/dashboard',
    profile: '/profile',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
} as const;

export const QUERY_KEYS = {
    auth: {
        user: ['auth', 'user'] as const,
        profile: ['auth', 'profile'] as const,
    },
    dashboard: {
        stats: ['dashboard', 'stats'] as const,
    },
} as const;

export const LOCAL_STORAGE_KEYS = {
    accessToken: `${initials}access_token`,
    refreshToken: `${initials}refresh_token`,
    user: `${initials}user`,
    rememberMe: `${initials}remember_me`,
    parentOTP: 'false',
} as const;
