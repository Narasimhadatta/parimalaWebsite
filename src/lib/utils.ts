import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes properly.
 * @param inputs - Class names to combine
 * @returns Combined and properly merged class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date to a readable string
 * @param date - The date to format
 * @param options - Intl.DateTimeFormatOptions to customize the output
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }
): string {
  const dateObject = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-US", options).format(dateObject);
}

/**
 * Truncates text to a specified length and adds ellipsis if needed
 * @param text - The text to truncate
 * @param maxLength - Maximum length of the text
 * @returns Truncated text with ellipsis if truncated
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

/**
 * Handles form submit errors and displays them in a user-friendly way
 * @param error - The error object
 * @returns User-friendly error message
 */
export function handleFormError(error: unknown): string {
  if (typeof error === "string") return error;
  if (error instanceof Error) return error.message;
  return "An unexpected error occurred. Please try again.";
}

/**
 * Creates a slug from a string (for URLs, IDs, etc.)
 * @param text - The text to slugify
 * @returns Slugified text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

/**
 * Checks if an element is in view (for animations, lazy loading, etc.)
 * @param element - The DOM element to check
 * @param offset - Offset before the element is considered in view
 * @returns Whether the element is in view
 */
export function isElementInView(
  element: HTMLElement,
  offset = 0
): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top - offset <= window.innerHeight &&
    rect.bottom + offset >= 0 &&
    rect.left - offset <= window.innerWidth &&
    rect.right + offset >= 0
  );
}

/**
 * Formats currency values
 * @param amount - The amount to format
 * @param currency - Currency code (default: USD)
 * @returns Formatted currency string
 */
export function formatCurrency(
  amount: number,
  currency = "USD"
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Generates a random ID (useful for temporary keys)
 * @param length - Length of the ID
 * @returns Random ID string
 */
export function generateRandomId(length = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}
