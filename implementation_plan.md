# Implementation Plan

[Overview]
Transform the existing Gatsby starter into a professional portfolio website with a left sidebar navigation and main content area, featuring BIO, PROFESSIONAL EXPERIENCE, PROJECTS, and CONTACT pages with dark theme styling.

This implementation will create a modern, professional portfolio site that showcases Brennan Best's software engineering background. The site will feature a persistent left sidebar navigation allowing seamless transitions between different sections, with the main content displayed in a clean, organized manner. The design will utilize a dark theme for a modern aesthetic while maintaining excellent readability and professional appearance. The structure will be designed to easily accommodate future integration with Sanity.io for dynamic content management.

[Types]
Define TypeScript interfaces and data structures for portfolio content and component props.

```typescript
interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  location?: string;
}

interface Education {
  institution: string;
  degree: string;
  minor?: string;
  gpa: string;
  duration: string;
  location: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  type: string;
  description: string[];
  technologies?: string[];
}

interface Project {
  id: string;
  name: string;
  url?: string;
  description: string;
  details: string[];
  technologies: string[];
}

interface TechnicalSkills {
  languages: string[];
  frameworks: string[];
  tools: string[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  onClick: () => void;
  technologies?: string[];
}
```

[Files]
Create new components and pages while modifying existing layout structure.

**New files to be created:**
- `src/components/Sidebar.js` - Left navigation sidebar component
- `src/components/Modal.js` - Reusable modal component for detailed views
- `src/components/Card.js` - Reusable card component for experience/projects
- `src/components/ContactForm.js` - Contact form component
- `src/pages/bio.js` - BIO page with education, skills, and profile
- `src/pages/experience.js` - Professional experience page with cards
- `src/pages/projects.js` - Projects showcase page with cards
- `src/pages/contact.js` - Contact page with form and info
- `src/data/portfolio-data.js` - Static data extracted from resume
- `src/styles/dark-theme.css` - Dark theme styling
- `src/images/profile-placeholder.jpg` - Placeholder profile image

**Existing files to be modified:**
- `src/components/layout.js` - Update to include sidebar and main content structure
- `src/components/layout.css` - Add dark theme variables and layout styles
- `src/pages/index.js` - Redirect to BIO page or serve as landing page
- `gatsby-config.js` - Update site metadata with portfolio information

**Files to be removed:**
- `src/pages/page-2.js` - Remove example page
- `src/pages/using-ssr.js` - Remove example page
- `src/pages/using-typescript.tsx` - Remove example page
- `src/templates/using-dsg.js` - Remove example template

[Functions]
Create new functions for navigation, modal management, and data handling.

**New functions:**
- `toggleModal(modalId: string)` in `src/hooks/useModal.js` - Custom hook for modal state management
- `formatDuration(duration: string)` in `src/utils/dateUtils.js` - Format date ranges for display
- `validateContactForm(formData: object)` in `src/utils/validation.js` - Form validation logic
- `handleContactSubmit(formData: object)` in `src/components/ContactForm.js` - Form submission handler
- `filterTechnologies(tech: string[])` in `src/utils/techUtils.js` - Technology filtering and display

**Modified functions:**
- Update `Layout` component in `src/components/layout.js` to include sidebar navigation
- Modify `Seo` component in `src/components/seo.js` to handle dynamic page titles
- Update `Header` component in `src/components/header.js` to work with new layout or remove if redundant

**Removed functions:**
- Remove example page components and their associated functions

[Classes]
Create new React components as functional components with hooks.

**New components:**
- `Sidebar` in `src/components/Sidebar.js` - Navigation sidebar with active state management
- `Modal` in `src/components/Modal.js` - Reusable modal with backdrop and close functionality
- `Card` in `src/components/Card.js` - Experience/project card with hover effects
- `ContactForm` in `src/components/ContactForm.js` - Form with validation and submission
- `SkillsGrid` in `src/components/SkillsGrid.js` - Technical skills display component
- `ExperienceCard` in `src/components/ExperienceCard.js` - Specialized card for work experience
- `ProjectCard` in `src/components/ProjectCard.js` - Specialized card for projects

**Modified components:**
- `Layout` component - Add sidebar integration and main content wrapper
- `Seo` component - Enhanced with dynamic meta descriptions per page

**Component architecture:**
- All components will be functional components using React hooks
- State management through useState and useContext where needed
- Custom hooks for modal management and form handling

[Dependencies]
Add new packages for enhanced functionality and maintain existing Gatsby setup.

**New dependencies:**
- `react-icons` - For navigation and UI icons
- `framer-motion` - For smooth animations and transitions
- `react-hook-form` - For contact form management and validation

**Existing dependencies maintained:**
- `gatsby` - Core framework
- `react` and `react-dom` - React framework
- `tailwindcss` - Styling framework
- `gatsby-plugin-postcss` - PostCSS integration
- All existing Gatsby plugins for image processing and SEO

**Configuration updates:**
- Update Tailwind config for dark theme colors
- Add custom CSS variables for consistent theming

[Testing]
Implement basic testing for components and user interactions.

**Test files to create:**
- `src/components/__tests__/Sidebar.test.js` - Navigation functionality tests
- `src/components/__tests__/Modal.test.js` - Modal open/close behavior tests
- `src/components/__tests__/ContactForm.test.js` - Form validation and submission tests

**Testing approach:**
- Unit tests for individual components
- Integration tests for navigation flow
- Manual testing for responsive design and accessibility
- Cross-browser compatibility testing

**Validation strategies:**
- Test modal functionality across all pages
- Verify responsive design on mobile and desktop
- Validate form submission and error handling
- Test navigation state management

[Implementation Order]
Sequential implementation to minimize conflicts and ensure smooth development.

1. **Setup and Data Structure** - Create portfolio data file and update site configuration
2. **Core Layout Components** - Build Sidebar, Modal, and Card components
3. **Page Structure** - Create BIO, Experience, Projects, and Contact pages
4. **Styling and Theme** - Implement dark theme and responsive design
5. **Interactive Features** - Add modal functionality and form handling
6. **Content Integration** - Populate pages with resume content
7. **Testing and Refinement** - Test functionality and polish user experience
8. **Cleanup and Optimization** - Remove unused files and optimize performance
