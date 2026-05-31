// src/lib/utils.ts

export function formatPhoneNumber(phone: string): string {
    // Removes spaces and ensures it starts with +
    return phone.replace(/\s+/g, '');
  }
  
  export function formatCurrency(amount: number | string): string {
    return `KES ${Number(amount).toLocaleString('en-KE')}`;
  }
  
  export function getCurrentYear(): number {
    return new Date().getFullYear();
  }
  
  // Slugify for URLs
  export function slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')     // Remove special characters
      .replace(/[\s_-]+/g, '-')     // Replace spaces and underscores with -
      .replace(/^-+|-+$/g, '');     // Remove leading/trailing hyphens
  }
  
  // Truncate text with ellipsis
  export function truncateText(text: string, maxLength: number = 120): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  }
  
  // Format date
  export function formatDate(date: Date | string): string {
    return new Intl.DateTimeFormat('en-KE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(date));
  }