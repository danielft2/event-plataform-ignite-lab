import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Siderbar } from "../components/SideBar";
import { Video } from "../components/Video";
import { VideoInital } from "../components/VideoInitial";

export function Event() {
    const { slug } = useParams<{ slug: string }>()
    const [menuMobileActive, setMenuMobileActive] = useState(false);

    return (
        <div className="flex flex-col min-h-screen lg:overflow-hidden">
            <Header onSetMenuMobileActive={setMenuMobileActive} menuMobileActive={menuMobileActive}/>
            <main className="flex flex-1 relative">
               { slug ? <Video lessonSlug={slug}/> : <VideoInital /> }
               <Siderbar menuMobileIsActive={menuMobileActive}/>
            </main>
        </div>  
    )
}