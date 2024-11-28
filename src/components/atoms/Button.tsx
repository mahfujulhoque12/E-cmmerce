import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center max-w-full justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        roundedBtn:
          "w-[141px] h-[46px] rounded-[50px] bg-blue-gradient text-white shadow-soft-blue text-[14px] leading-[26px] font-semibold",
        bookingBtn:
          "h-[40px] bg-blue-gradient text-white shadow-deep text-[14px] leading-[26px] font-normal",
        grayBtn: "h-[44px] text-[14px] leading-[19.5px] bg-[#F3F5FF]",
        mediumRoundedBtn:
          " text-white text-sm font-bold bg-black hover:bg-[#232323] rounded-[8px] leading-[18px]",
        filteringBtn:
          "text-[#243045] h-[39px] rounded-[6px] text-[16px] font-normal bg-[#F5F7FA]",
        card1OutlineBtn:
          "w-[89px] h-[30px] rounded-[6px] border border-[#026ffc] text-[10px] font-normal leading-[13.62px]",
        card1Btn:
          "w-[82px] h-[30px] rounded-[6px] bg-blue-gradient text-[#EFEFEF] text-[10px] font-semibold leading-[13.62px]",
        outlineBigBtn:
          "w-[175px] h-[51px] rounded-[6px] border border-[#026ffc] text-[14px] font-normal leading-[19.07px]",
        outlineSmallBtn:
          "w-[70px] h-[22px] rounded-[4px] border border-[#026ffc] text-[10px] font-normal leading-[13.62px]",
        iconBtn: "w-[30px] h-[30px] bg-black shadow-lg",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      // variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
