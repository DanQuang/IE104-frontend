import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./Dialog.css"; // Import file CSS cho Dialog

const Dialog = ({ children, open, onClose }) => (
  <div className={`dialog-root ${open ? 'open' : ''}`} role="dialog">
    {children}
  </div>
);

const DialogTrigger = ({ children, onClick }) => (
  <button className="dialog-trigger" onClick={onClick}>
    {children}
  </button>
);

const DialogOverlay = ({ onClick }) => (
  <div className="dialog-overlay" onClick={onClick} />
);

const DialogContent = ({ children }) => (
  <div className="dialog-content">
    {children}
  </div>
);

const DialogClose = ({ onClick }) => (
  <button className="dialog-close" onClick={onClick}>
    <Cross2Icon className="icon" />
    <span className="sr-only">Close</span>
  </button>
);

const DialogHeader = ({ children }) => (
  <div className="dialog-header">
    {children}
  </div>
);

const DialogFooter = ({ children }) => (
  <div className="dialog-footer">
    {children}
  </div>
);

const DialogTitle = ({ children }) => (
  <h2 className="dialog-title">{children}</h2>
);

const DialogDescription = ({ children }) => (
  <div className="dialog-description">{children}</div>
);

export {
  Dialog,
  DialogTrigger,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
};
