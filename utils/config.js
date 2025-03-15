/**
 * Configuration utility for the Digital Business Card
 * This replaces the previous database implementation with environment variables
 */

export const getUserData = () => {
  return {
    name: process.env.NEXT_PUBLIC_USER_NAME || 'Your Name',
    title: process.env.NEXT_PUBLIC_USER_TITLE || 'Your Title',
    subtitle: process.env.NEXT_PUBLIC_USER_SUBTITLE || '',
    company: process.env.NEXT_PUBLIC_USER_COMPANY || 'Your Company',
    about: process.env.NEXT_PUBLIC_USER_ABOUT || 'About me',
    email: process.env.NEXT_PUBLIC_USER_EMAIL || 'your.email@example.com',
    phone: process.env.NEXT_PUBLIC_USER_PHONE || '+1234567890',
    linkedin: process.env.NEXT_PUBLIC_USER_LINKEDIN || 'https://linkedin.com/in/yourprofile',
    website: process.env.NEXT_PUBLIC_USER_WEBSITE || 'https://yourwebsite.com',
    location: process.env.NEXT_PUBLIC_USER_LOCATION || 'Your Location',
    photo: process.env.NEXT_PUBLIC_USER_PHOTO || '/images/default-profile.jpg',
  };
};

export const getSiteUrl = () => {
  // If we're in the browser, we can get the current URL
  if (typeof window !== 'undefined') {
    // If NEXT_PUBLIC_SITE_URL is set, use that (allows for custom domains)
    if (process.env.NEXT_PUBLIC_SITE_URL) {
      return process.env.NEXT_PUBLIC_SITE_URL;
    }
    
    // Otherwise, use the current URL (protocol + host)
    return `${window.location.protocol}//${window.location.host}`;
  }
  
  // During server-side rendering, fall back to the environment variable or localhost
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
}; 