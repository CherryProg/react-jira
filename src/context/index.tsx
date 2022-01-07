import { AuthProvider } from 'context/auth-context';
import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// 需要传入children
export const AppProviders = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {/* 也可以写成<AuthProvider children={children}></AuthProvider> */}
            <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
    );
};