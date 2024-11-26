import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteChat, setChatTitleFromMessage } from "@/redux/slices/chat";
import axios from "@/utils/axios";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./Chatrow.css"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import "./ChatRow.css"; // Import file CSS

const ChatRow = ({ id, title }) => {
    const pathname = usePathname();
    const router = useRouter();
    const { token } = useSelector((state) => state.auth);

    const [inputTitle, setTitle] = useState(title);
    const [isEditing, setIsEditing] = useState(false);
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!pathname) return;
        setActive(pathname.includes(`/chat/${id}`));
    }, [pathname, id]);

    const handleEditTitle = () => {
        setIsEditing(true);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleKeyPress = async (e) => {
        if (e.key === "Enter") {
            try {
                const response = await axios.patch(
                    `/chats/${id}/`,
                    { title: inputTitle },
                    {
                        headers: {
                            Authorization: `JWT ${token}`,
                        },
                    }
                );
                dispatch(
                    setChatTitleFromMessage({
                        chatId: id,
                        title: response.data.title,
                    })
                );
                setIsEditing(false);
            } catch (error) {
                console.error("Error updating title:", error);
            }
        }
    };

    const handleDeleteChat = async () => {
        try {
            await axios.delete(`/chats/${id}/`, {
                headers: {
                    Authorization: `JWT ${token}`,
                },
            });
            dispatch(deleteChat(id));
            router.replace("/chat/");
        } catch (error) {
            console.error("Error deleting chat:", error);
        }
    };

    return (
        <div className={`chat-row ${active ? "chat-row-active" : ""}`}>
            <Link href={`/chat/${id}`} className="chat-link">
                {isEditing ? (
                    <input
                        type="text"
                        value={inputTitle}
                        onChange={handleTitleChange}
                        onKeyPress={handleKeyPress}
                        onBlur={() => setIsEditing(false)}
                        autoFocus
                        className="chat-input"
                    />
                ) : (
                    <p className="chat-title">
                        {title ? title : "New Chat"}
                    </p>
                )}
                {active && (
                    <>
                        <div className="chat-gradient"></div>
                        <div className="chat-actions">
                            <Pencil1Icon
                                className="chat-icon"
                                onClick={handleEditTitle}
                            />
                            <Dialog>
                                <DialogTrigger>
                                    <TrashIcon className="chat-icon" />
                                </DialogTrigger>
                                <DialogContent className="dialog-content">
                                    <DialogHeader>
                                        <DialogTitle className="dialog-title">
                                            Delete Chat?
                                        </DialogTitle>
                                        <DialogDescription>
                                            This action cannot be undone. This will permanently delete your chat.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter className="dialog-footer">
                                        <DialogClose asChild>
                                            <Button type="button" variant="secondary">
                                                Cancel
                                            </Button>
                                        </DialogClose>
                                        <Button
                                            type="button"
                                            className="dialog-delete-button"
                                            onClick={handleDeleteChat}
                                        >
                                            Delete
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </>
                )}
            </Link>
        </div>
    );
};

export default ChatRow;
