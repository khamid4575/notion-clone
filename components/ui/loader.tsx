import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

const loaderVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-6 w-6",
      xl: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface LoaderProps extends VariantProps<typeof loaderVariants> {}

export const Loader = ({ size }: LoaderProps) => {
  return <Loader2 className={cn(loaderVariants({ size }))} />;
};
