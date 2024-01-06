"use client";

import * as React from "react";
// import { cn } from "@/lib/utils";

interface Props {
  children: any;
  MAX_ITEMS: number;
}

export function ExpandableList({ children, MAX_ITEMS = 4 }: Props) {
  const [showAllitems, setShowAllitems] = React.useState(false);

  if (children.length <= MAX_ITEMS) {
    return <>{children}</>;
  }

  return (
    <>
      {!showAllitems && children.slice(0, MAX_ITEMS)}

      {showAllitems && children}

      <button
        onClick={() => setShowAllitems(!showAllitems)}
        className="cursor-pointer text-start text-gray-500 underline"
      >
        {showAllitems ? "see less" : "see more"}
      </button>
    </>
  );
}

// const ExpandableCards = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("mt-4 flex flex-col items-start gap-6 pb-2", className)}
//     {...props}
//   />
// ));
// ExpandableCards.displayName = "ExpandableCards";

// const ExpandableCardContent = React.forwardRef<
//   HTMLDivElement,
//   React.PropsWithChildren<{ className?: string; MAX_ITEMS: number }>
// >(({ children, MAX_ITEMS, className, ...props }, ref) => {
//   const [showAllitems, setShowAllitems] = React.useState(false);

//   if (Array.isArray(children) && children.length <= MAX_ITEMS) {
//     return <>{children}</>;
//   }
//   return (
//     <div
//       ref={ref}
//       className={cn(
//         `flex flex-col gap-6 ${showAllitems ? "block" : "block"}`,
//         className,
//       )}
//       {...props}
//     >
//       {Array.isArray(children) && children?.slice(0, MAX_ITEMS)}
//     </div>
//   );
// });
// ExpandableCardContent.displayName = "ExpandableCardContent";
