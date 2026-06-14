import * as React from "react"
import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: string; onValueChange?: (value: string) => void }
>(({ className, value, onValueChange, children, ...props }, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('[data-radio-value]')
    if (target) {
      onValueChange?.(target.getAttribute('data-radio-value') || '')
    }
  }

  return (
    <div
      ref={ref}
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      onClick={handleClick}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<{ checked?: boolean; value?: string }>(child)) {
          return React.cloneElement(child, {
            checked: child.props.value === value,
          })
        }
        return child
      })}
    </div>
  )
})
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string; checked?: boolean }
>(({ className, value, checked, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      role="radio"
      aria-checked={checked}
      data-radio-value={value}
      data-slot="radio-group-item"
      className={cn(
        "flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all",
        checked
          ? "border-primary bg-primary/5 text-foreground ring-1 ring-primary"
          : "border-input bg-background text-muted-foreground hover:border-muted-foreground/30 hover:text-foreground",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors",
          checked ? "border-primary" : "border-muted-foreground/40"
        )}
      >
        {checked && (
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        )}
      </span>
      {children}
    </button>
  )
})
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
