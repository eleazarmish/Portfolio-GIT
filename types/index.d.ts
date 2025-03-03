import { ReactNode } from "react";

// Common types used across the application
export interface BaseProps {
  children?: ReactNode;
  className?: string;
}

export interface ButtonProps extends BaseProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export interface InputProps extends BaseProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextareaProps extends BaseProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
} 