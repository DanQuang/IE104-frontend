import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StackIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom"; // React Router v6
import { addChat } from "../../../../redux/slices/chat"; // Redux action
import axios from "../../../../utils/axios";

const NewChat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  // Function to create a new chat
  const createNewChat = async () => {
    if (!token) {
      console.error("No token found. User might not be logged in.");
      return;
    }

    try {
      const response = await axios.post(
        "/chats/",
        {},
        {
          headers: {
            Authorization: `JWT ${token}`,
          },
        }
      );
      const newChat = response.data;

      // Convert newChat.id to an integer
      const chatId = parseInt(newChat.id, 10); // Ensures the chat ID is an integer

      dispatch(addChat({ ...newChat, id: chatId }));
      navigate(`/chat/${chatId}`); // Navigate to the newly created chat
    } catch (error) {
      console.error("Error creating new chat:", error);
    }
  };

  return (
<div className="sticky top-0 left-0 py-0 z-10">
  <button
    onClick={createNewChat} // Make sure the click works for the button
    className="flex justify-between items-center px-2 py-2 rounded-md 
              bg-sidebar hover:bg-input cursor-pointer 
              border-2 border-gray-300 z-50 bg-white w-full"
  >
    <div className="flex gap-3 flex-1 justify-between">
      <StackIcon className="h-8 w-6" />
      <h1 className="text-[18px] text-left px-4">New chat</h1>
    <Pencil2Icon
      className="h-7 w-5 cursor-pointer"
      onClick={createNewChat}
      />
      </div>
  </button>
</div>

  );
};

export default NewChat;
