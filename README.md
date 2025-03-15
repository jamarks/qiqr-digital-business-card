# Digital Business Card

A simple, open-source digital business card that anyone can deploy for personal use. Share your contact information easily with a QR code.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fdigital-business-card&env=NEXT_PUBLIC_USER_NAME,NEXT_PUBLIC_USER_TITLE,NEXT_PUBLIC_USER_COMPANY,NEXT_PUBLIC_USER_EMAIL,NEXT_PUBLIC_USER_PHONE,NEXT_PUBLIC_USER_LINKEDIN,NEXT_PUBLIC_USER_WEBSITE,NEXT_PUBLIC_USER_PHOTO,NEXT_PUBLIC_SITE_URL&envDescription=Configuration%20for%20your%20digital%20business%20card&envLink=https%3A%2F%2Fgithub.com%2Fyourusername%2Fdigital-business-card%23environment-variables&project-name=digital-business-card&repository-name=digital-business-card)

## Features

- 🚀 One-click deployment to Vercel
- 📱 Mobile-friendly design
- 🔄 Easy to update via environment variables
- 🔗 Share your contact information with a QR code
- 🌐 Open Graph meta tags for social media sharing
- 🎨 Clean, professional design

## Getting Started

### Option 1: One-Click Deploy to Vercel

1. Click the "Deploy with Vercel" button above
2. Fill in the environment variables with your information
3. Deploy and share your new digital business card!

### Option 2: Local Development

1. Clone this repository
```bash
git clone https://github.com/yourusername/digital-business-card.git
cd digital-business-card
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Create a `.env.local` file with your information (see `.env.example` for reference)

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Configure your digital business card by setting these environment variables in Vercel or in your `.env.local` file:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | The URL of your deployed site | https://your-card.vercel.app |
| `NEXT_PUBLIC_USER_NAME` | Your full name | John Doe |
| `NEXT_PUBLIC_USER_TITLE` | Your job title | Software Engineer |
| `NEXT_PUBLIC_USER_SUBTITLE` | A subtitle (optional) | Full Stack Developer |
| `NEXT_PUBLIC_USER_COMPANY` | Your company name | Acme Inc. |
| `NEXT_PUBLIC_USER_ABOUT` | Short bio about yourself | Passionate about building web applications... |
| `NEXT_PUBLIC_USER_EMAIL` | Your email address | john@example.com |
| `NEXT_PUBLIC_USER_PHONE` | Your phone number | +1234567890 |
| `NEXT_PUBLIC_USER_LINKEDIN` | Your LinkedIn profile URL | https://linkedin.com/in/johndoe |
| `NEXT_PUBLIC_USER_WEBSITE` | Your personal website | https://johndoe.com |
| `NEXT_PUBLIC_USER_LOCATION` | Your location | San Francisco, CA |
| `NEXT_PUBLIC_USER_PHOTO` | URL to your profile photo | https://example.com/photo.jpg |

## Customization

You can customize the appearance of your digital business card by modifying the components in the `components` directory and the styles in the `styles` directory.

## License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0).

This means you are free to:
- Use this code for personal, non-commercial purposes
- Modify and adapt the code
- Share and redistribute the code

Under the following conditions:
- You must give appropriate credit
- You may not use the material for commercial purposes

For the full license text, see the [LICENSE](LICENSE) file in this repository or visit [Creative Commons BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

For commercial use, please contact the author.

## Acknowledgements

This project was converted from a commercial project to an open-source solution to make digital business cards accessible to everyone.

---

Made with ❤️ by [Your Name](https://github.com/yourusername)
