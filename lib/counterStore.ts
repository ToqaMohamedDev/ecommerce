// store/appStore.ts
import { create } from 'zustand'
import { getData } from '.'; // تأكد من صحة مسار دالة `getData`
import { config } from '@/config';

// تحديث واجهة `User`
interface User {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    role: string;
    active: boolean;
    wishlist: any[];
    addresses: any[];
    createdAt: string;
    updatedAt: string;
    slug: string;
}

// تحديث واجهة `CategoryProps`
export interface CategoryProps {
    _id: string;
    image: string;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
}

// تحديث واجهة `ApiResponse`
export interface ApiResponse {
    results: number;
    paginationResult: {
        currentPage: number;
        limit: number;
        numberOfPages: number;
    };
    data: CategoryProps[];
}

// تحديث واجهة `AppState`
interface AppState {
    user: User | null;
    categories: CategoryProps[];
    loading: boolean;
    uid: string | null;
    search: string | null;
    setSearech: (newSearech: string) => void;
    setUID: (newUID: string) => void;
    fetchUserData: () => Promise<void>;
    fetchCategories: () => Promise<void>;
}

// إنشاء `zustand` store
const useAppStore = create<AppState>((set) => ({
    user: null,
    categories: [],
    loading: false,
    uid: typeof window !== 'undefined' ? localStorage.getItem('uid') : null, // استرجاع uid من localStorage عند التهيئة
    search:null,
    setSearech: (newSearech: string) => {
        set({ search: newSearech });
    },
    setUID: (newUID: string) => {
        localStorage.setItem('uid', newUID); // حفظ uid في localStorage
        set({ uid: newUID });
    },

    fetchUserData: async () => {
        set({ loading: true });
        try {
            const endpoint = `${config?.baseUrl}/auth/getMeNext`;

            const response = await fetch(endpoint, {
                method: 'GET',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            set({ user: data.data, loading: false });
        } catch (error) {
            console.error("Error fetching user data", error);
            set({ loading: false });
        }
    },

    fetchCategories: async () => {
        set({ loading: true });
        const endpoint = `${config?.baseUrl}/categories`;
        try {
            const response: ApiResponse = await getData(endpoint);
            if (response && response.data) {
                set({ categories: response.data, loading: false });
            }
        } catch (error) {
            console.error("Error fetching categories data", error);
            set({ loading: false });
        }
    },
}));

export default useAppStore;
