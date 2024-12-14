
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Thêm useNavigate
import { CheckIcon, GitHubLogoIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { CaretDown, Cherries, Lightning } from '@phosphor-icons/react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../../../component/ui/dropdownmenu/DropdownMenu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch, useSelector } from 'react-redux';
import { toggleChatSideBar } from '../../../../redux/slices/app';
import { Button } from '../../../../component/ui/button/Button';
import { toast } from 'react-toastify';
import { signOut } from '../../../../redux/slices/auth';
import { resetChatHistory, setSelectedMode } from '../../../../redux/slices/chat';

const Header = () => {
    const user = useSelector((state) => state.auth.user);
    const selectedMode = useSelector((state) => state.chat.selectedMode);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Sử dụng navigate

    const handleItemClick = (value) => {
        dispatch(setSelectedMode({ type: value }));
    };

    const handleLogout = () => {
        dispatch(signOut());
        dispatch(resetChatHistory());

        toast.success("Logout Successful!", {
            position: "top-center",
        });

        // Điều hướng sau khi logout
        navigate('/login');
    };

    const handleGitHubNavigation = () => {
        window.open("https://github.com/DanQuang/IE104-frontend", "_blank", "noopener,noreferrer");
    };

    return (
        <div className="sticky top-0 z-30 border-b bg-slate-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
            <div className="flex px-5 py-3 items-center justify-between my-2">
                <div className="flex gap-3">
                    <Button
                        variant="outline"
                        size="icon"
                        className="md:hidden"
                        onClick={() => {
                            dispatch(toggleChatSideBar());
                        }}
                    >
                        <HamburgerMenuIcon />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-xl font-medium capitalize flex items-center gap-2">
                            {selectedMode}
                            <CaretDown size={16} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="min-w-[340px] max-w-xs p-3" align="start">
                            <DropdownMenuLabel>Mode</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onSelect={() => handleItemClick('Gói Nâng Cao')}>
                                <div className="flex items-center gap-3 cursor-pointer">
                                    <Lightning size={32} />
                                    <div>
                                        <h3 className="text-sm">Gói Nâng Cao</h3>
                                        <p className="font-extralight text-sm">Đây là gói nâng cao</p>
                                    </div>
                                    {selectedMode === 'Gói Nâng Cao' && <CheckIcon className="h-6 w-6" />}
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleItemClick('Gói cơ bản')}>
                                <div className="flex items-center gap-3 cursor-pointer">
                                    <Cherries size={32} />
                                    <div>
                                        <h3 className="text-sm">Gói cơ bản</h3>
                                        <p className="font-extralight text-sm">Chức năng cơ bản của Chatbot</p>
                                    </div>
                                    {selectedMode === 'Gói cơ bản' && <CheckIcon className="h-6 w-6" />}
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={handleGitHubNavigation}>
                        <GitHubLogoIcon className="h-4 w-4" />
                    </Button>


                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            {/* <Avatar>
                                {user && <AvatarImage src={user.profileImage} />}
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar> */}
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
