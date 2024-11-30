'use client';

import React from 'react';
import { CheckIcon, GitHubLogoIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { CaretDown, Cherries, Lightning } from '@phosphor-icons/react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';
import { ModeToggle } from '../common/toggle';
import { useDispatch, useSelector } from 'react-redux';
import { toggleChatSideBar } from '@/redux/slices/app';
import { Button } from '../ui/button';
import { RootState } from '@/redux/store';
import { toast } from 'react-toastify';
import { signOut } from '@/redux/slices/auth';
import { resetChatHistory, setSelectedMode } from '@/redux/slices/chat';

import './Header.css'; // Import file CSS riêng

const Header = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const selectedMode = useSelector((state: RootState) => state.chat.selectedMode);
    const dispatch = useDispatch();

    const handleItemClick = (value) => {
        dispatch(setSelectedMode({ type: value }));
    };

    const handleLogout = () => {
        dispatch(signOut());
        dispatch(resetChatHistory());

        toast.success("Logout Successful!", {
            position: "top-center",
        });
    };

    return (
        <div className="header">
            <div className="header-container">
                <div className="left-section">
                    <Button variant="outline" size="icon" className="menu-button" onClick={() => {
                        dispatch(toggleChatSideBar());
                    }}>
                        <HamburgerMenuIcon />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="dropdown-trigger">
                            {selectedMode}
                            <CaretDown size={16} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="dropdown-content" align="start">
                            <DropdownMenuLabel>Mode</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onSelect={() => handleItemClick('chattergeist')}>
                                <div className="dropdown-item">
                                    <Lightning size={32} />
                                    <div>
                                        <h3 className="item-title">Chattergeist</h3>
                                        <p className="item-description">A general chatbot for engaging conversations on various topics.</p>
                                    </div>
                                    {selectedMode === 'chattergeist' && <CheckIcon className="check-icon" />}
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleItemClick('noura')}>
                                <div className="dropdown-item">
                                    <Cherries size={32} />
                                    <div>
                                        <h3 className="item-title">Noura</h3>
                                        <p className="item-description">A nutrition-focused chatbot using the RAG pipeline for personalized advice.</p>
                                    </div>
                                    {selectedMode === 'noura' && <CheckIcon className="check-icon" />}
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="right-section">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="https://github.com/anshRS/chatbot" target="_blank" rel="noopener noreferrer">
                            <GitHubLogoIcon className="icon" />
                        </Link>
                    </Button>

                    <ModeToggle />

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                {user && <AvatarImage src={user.profileImage} />}
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {user && <DropdownMenuLabel>👋 Hey, {user.full_name.split(" ")[0]}</DropdownMenuLabel>}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};

export default Header;
