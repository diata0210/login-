import { authApi } from '@/api-client';
import { LoginPayLoad } from '@/models';
import useSWR from 'swr'
import {PublicConfiguration} from 'swr/_internal/dist'

export function useAuth(options?: Partial<PublicConfiguration>){
    const {data: profile, error, mutate, isLoading: loading} = useSWR('/profile', {
        dedupingInterval: 60*60*1000, 
        revalidateOnFocus: false, 
        ...options
    });
    
    const firstLoading = profile === undefined && error === undefined
    async function login(payload: LoginPayLoad){
        await authApi.login({
            username: payload?.username,
            password: payload?.password
        })
        await mutate()
    }
    async function logout(){
        await authApi.logout()
        mutate({}, false);
    }
    return {
        profile, 
        error,
        login, 
        logout, 
        firstLoading, 
        loading
    }
}