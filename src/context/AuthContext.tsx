import { createContext, ReactNode, useEffect, useState } from "react";
import { AuthContextType } from "@/types/auth";
import { User } from "@supabase/supabase-js";

import { supabase } from "@/lib/supabase";
import * as authService from "@/services/authService";

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

interface Props {
    children: ReactNode;
}

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    async function login(email: string, password: string) {
        const user = await authService.signIn(email, password);
        setUser(user);
    }

    async function signup(
        name: string,
        email: string,
        password: string
    ) {
        const user = await authService.signUp(
            name,
            email,
            password
        );

        setUser(user);
    }

    async function logout() {
        await authService.signOut();
        setUser(null);
    }

    useEffect(() => {
        async function restoreSession() {
            const {
                data: { session }
            } = await supabase.auth.getSession();

            setUser(session?.user ?? null);
            setLoading(false);
        }

        restoreSession();

        const {
            data: { subscription} 
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider 
            value={{
                user,
                loading,
                login,
                signup,
                logout
            }}
        >
        {children}
        </AuthContext.Provider>
    );
};