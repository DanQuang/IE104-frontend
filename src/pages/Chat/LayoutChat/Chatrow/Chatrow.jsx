import React, { useEffect, useState } from "react";
import {
  deleteChat,
  setChatTitleFromMessage,
} from "../../../../redux/slices/chat";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../../utils/axios";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom"; // Change this line
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../component/ui/dialog/Dialog";
import { Button } from "../../../../component/ui/button/Button";

const ChatRow = ({ id, title }) => {
  const navigate = useNavigate(); // Change this line
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
          {
            headers: {
              Authorization: `JWT ${token}`,
            },
          }
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

  const [active, setActive] = useState(true);
  const dispatch = useDispatch();

  // useEffect(() => {
  //     if (window.location.pathname.includes(`/chat/${id}`)) {
  //         setActive(true);
  //     }
  // }, [id]);

  const handleDeleteChat = async () => {
    try {
      await axios.delete(`/chats/${id}/`, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      dispatch(deleteChat(id));
      navigate("/chat/"); // Change this line
    } catch (error) {
      console.error("Error deleting chat:", error);
    }
  };

  return (
    <div
      className={`group hover:bg-slate-300  rounded-md p-2 relative ${
        active && "bg-slate-100"
      }`}
    >
      <div
        //
        className="flex item-center"
      >
        {" "}
        {/* Change this line */}
        {isEditing ? (
          <input
            type="text"
            value={inputTitle}
            onChange={handleTitleChange}
            onKeyPress={handleKeyPress}
            onBlur={() => setIsEditing(false)}
            autoFocus
            className="px-2 focus:outline-muted w-full"
          />
        ) : (
          <p
            onClick={() => navigate(`/chat/${id}`)}
            className="truncate text-sm !p-0 !m-[6px] cursor-pointer"
          >
            {title ? title : "New Chat"}
          </p>
        )}
        {active && (
          <>
            <div className="absolute bottom-0 right-0 top-0 bg-gradient-to-l from-input w-20 from-60%"></div>
            <div className="absolute top-0 bottom-0 right-0 flex items-center pr-2 gap-1">
              <Pencil1Icon
                className="w-5 h-5 group-hover:block cursor-pointer"
                onClick={handleEditTitle}
              />
              <Dialog>
                <DialogTrigger>
                  <TrashIcon className="w-5 h-5 group-hover:block cursor-pointer " />
                </DialogTrigger>
                <DialogContent className="max-w-md bg-white">
                  <DialogHeader>
                    <DialogTitle className="py-5">Delete Chat?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your chat.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      type="button"
                      className="bg-red-400 hover:bg-red-500"
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
      </div>
    </div>
  );
};

export default ChatRow;
