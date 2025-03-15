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
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
}; 