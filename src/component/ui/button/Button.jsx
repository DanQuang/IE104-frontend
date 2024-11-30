import React from "react";
import { Slot } from "@radix-ui/react-slot";
import "./Button.css"; // Import file CSS cho Button

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={`button ${variant} ${size} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
