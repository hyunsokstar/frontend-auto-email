import { create } from 'zustand';

interface User {
    id: number;
    email: string;
}

interface CounterState {
    count: number;
    loginUser: User;
    isLoggedIn: boolean;
    increment: () => void;
    decrement: () => void;
    setUser: (user: User) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const useStore = create<CounterState>((set) => ({
    count: 0,
    isLoggedIn: false,
    loginUser: {
        id: 0,
        email: '',
    },
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    setUser: (user: User) => set((state) => ({ loginUser: user })),
    setIsLoggedIn: (isLoggedIn: boolean) => set((state) => ({ isLoggedIn: isLoggedIn })),
}));

export default useStore;
