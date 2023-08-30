import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "react-loading";

interface Props{
    children: React.ReactNode;
}

export function Auth({children}: Props){
    const router = useRouter();
    const {profile, error, firstLoading} = useAuth();
    useEffect(() => {
        if(!firstLoading && !profile?.username ){
            router.push('/login');
        }
    }, [router, profile, firstLoading])
    if(!profile?.username) {
        return <Loading/>
    }
    return (
        <>{children}</>
    )
}