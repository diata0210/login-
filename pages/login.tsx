import { authApi } from "@/api-client";
import { LoginForm } from "@/components/auth";
import { useAuth } from "@/hooks";
import { LoginPayLoad } from "@/models";
import { useRouter } from "next/router";
import React from "react";
import Loading from "react-loading";

type Props = {};

export default function LoginPage({}: Props) {
    const router = useRouter()
    const {login, logout, profile, loading} = useAuth({
        revalidateOnMount: false
    });
    async function handleLoginSubmit(payload: LoginPayLoad){
        try{
            await login(payload);
            console.log('login success');
            router.push('/profile');
        }catch(error){
            console.log('fail to login', error)
        }
    }
    async function handleLogoutClick(){
        try{
            await logout();
            console.log('logout success');
        }catch(error){
            console.log('fail to logout', error);
        }
    }
  return (
    <div className="flex justify-center h-screen bg-slate-50">
        <LoginForm onSubmit={handleLoginSubmit}/>
    </div>
  );
}
