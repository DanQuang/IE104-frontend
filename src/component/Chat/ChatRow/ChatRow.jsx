import React, { useEffect, useState } from "react";
import { deleteChat, setChatTitleFromMessage } from "@/redux/slices/chat";
import { RootState } from "@/redux/store";
import axios from "@/utils/axios";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

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

import "./ChatRow.css"; // Import file CSS riêng

const ChatRow = ({ id, title }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { token } = useSelector((state) => state.auth);

  const [inputTitle, setTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditTitle = async () => {
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
          { headers: { Authorization: `JWT ${token}` } }
        );
        dispatch(
          setChatTitleFromMessage({ chatId: id, title: response.data.title })
        );
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating title:", error);
      }
    }
  };

  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(`/chat/${id}`));
  }, [pathname]);

  const handleDeleteChat = async () => {
    try {
      await axios.delete(`/chats/${id}/`, {
        headers: { Authorization: `JWT ${token}` },
      });
      dispatch(deleteChat(id));
      router.replace("/chat/");
    } catch (error) {
      console.error("Error deleting chat:", error);
    }
  };

  return (
    <div className={`chat-row ${active ? "active" : ""}`}>
      <Link href={`/chat/${id}`} className="chat-row-link">
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
          <p className="chat-title">{title || "New Chat"}</p>
        )}
        {active && (
          <>
            <div className="chat-row-overlay"></div>
            <div className="chat-row-actions">
              <Pencil1Icon className="icon" onClick={handleEditTitle} />
              <Dialog>
                <DialogTrigger>
                  <TrashIcon className="icon" />
                </DialogTrigger>
                <DialogContent className="dialog-content">
                  <DialogHeader>
                    <DialogTitle>Delete Chat?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your chat.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      type="button"
                      className="delete-button"
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
