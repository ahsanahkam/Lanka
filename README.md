# Lanka Trails

A modern, responsive React website showcasing Sri Lanka's beautiful travel trails with inline CSS styling.

## Features

- **Hero Section**: Stunning Sri Lanka background with call-to-action
- **Trail Finder**: Filter and browse trails by type (cultural, coastal, highland, wildlife)
- **Stories Section**: Travel stories from fellow explorers
- **Sponsors Section**: Partner organizations and sponsors
- **Responsive Design**: Works perfectly on desktop and mobile
- **Inline CSS**: All styling done with JavaScript style objects
- **Clean Architecture**: Simplified folder structure

## Project Structure

```
src/
├── components/          # All reusable components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TrailFinder.jsx
│   ├── Stories.jsx
│   ├── Sponsors.jsx
│   └── Footer.jsx
├── data.js             # Sample data for trails, stories, sponsors
├── App.js              # Main app component
└── main.jsx            # Entry point
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Images**
   Place your images in `public/assets/images/` folder:
   - `srilanka.jpg` (Hero background)
   - Trail images (sigiriya.jpg, mirissa.jpg, etc.)
   - Story images
   - Sponsor logos

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Customization

### Adding New Trails
Edit `src/data.js` and add new trail objects to the `trails` array:

```javascript
{
  id: 7,
  title: "Your Trail Name",
  type: "cultural", // cultural, coastal, highland, wildlife
  description: "Trail description",
  image: "/assets/images/your-image.jpg",
  location: "Location",
  duration: "Duration",
  difficulty: "Easy/Moderate/Challenging"
}
```

### Styling
All styles are inline CSS using JavaScript objects. To modify styles, edit the style objects in each component file.

### Colors
The site uses a consistent color scheme:
- Primary Green: `#10b981`
- Dark Green: `#059669`
- Gray variants for text and backgrounds

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- No external CSS dependencies

## Technologies Used

- React 18
- Vite (build tool)
- Inline CSS (JavaScript style objects)
- No external UI libraries

## License

This project is open source and available under the MIT License.

---

## Original Project Info

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/365d6886-f655-48b4-b612-b5cf1ad1263f

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/365d6886-f655-48b4-b612-b5cf1ad1263f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/365d6886-f655-48b4-b612-b5cf1ad1263f) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
