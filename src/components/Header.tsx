import React, { SetStateAction } from 'react';
import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
    onSetMenuMobileActive: React.Dispatch<React.SetStateAction<boolean>>;
    menuMobileActive: boolean;
}

export function Header({ onSetMenuMobileActive, menuMobileActive }: HeaderProps) {
    function handleClickMenu() {
        if (menuMobileActive) 
            onSetMenuMobileActive(false);
        else 
           onSetMenuMobileActive(true);
    }

    return (
        <header className="w-full py-5 flex items-center justify-between bg-gray-700 border-b border-gray-500 gap-8 px-8">
           <Logo />
           <button
                className='hidden lg:flex items-center gap-3 text-blue-500'
                onClick={handleClickMenu}
            >   
                <span className='text-sm font-medium text-gray-300'>Aulas</span>
                {(!menuMobileActive) ? <List size={26}/> : <X size={26} /> }
                
           </button>
        </header>
    )
}