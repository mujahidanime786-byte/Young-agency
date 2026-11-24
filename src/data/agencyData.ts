export const BRAND_LOGO_URL =
  '/assets/aistudio/file_000000002f008211afe364eb5109116c_1493ff29.png';

export const HERO_WORKSPACE_IMAGE =
  '/src/assets/images/hero_creative_workspace_1795063022564.jpg';

export const MISSION_CREATORS_IMAGE =
  '/src/assets/images/mission_student_creators_1795063022866.jpg';

export const PORTFOLIO_IMAGES = {
  aiVideo: '/src/assets/images/work_ai_video_studio_1795063023558.jpg',
  webApp: '/src/assets/images/work_web_app_design_1795063025963.jpg',
  graphicDesign: '/src/assets/images/work_brand_graphic_design_1795063025430.jpg',
  videoEditing: '/src/assets/images/work_video_editing_thumbnails_1795063026501.jpg',
} as const;

export const OFFICIAL_PHONE = '7859019119';
export const OFFICIAL_PHONE_HREF = 'tel:7859019119';
export const OFFICIAL_INSTAGRAM_HANDLE = '@youngagency.co';
export const OFFICIAL_INSTAGRAM_URL =
  'https://www.instagram.com/youngagency.co?cnvx=MTg2ejFkYzAyczVuYw==';

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Opportunities', href: '#opportunities' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

export interface CoreValue {
  index: string;
  title: string;
  description: string;
}

export const CORE_VALUES: CoreValue[] = [
  {
    index: '01',
    title: 'CREATIVITY',
    description: 'Turning ideas into meaningful work.',
  },
  {
    index: '02',
    title: 'COLLABORATION',
    description: 'Bringing talented minds together.',
  },
  {
    index: '03',
    title: 'OPPORTUNITY',
    description: 'Helping students discover their potential.',
  },
];

export interface ServiceArea {
  id: string;
  index: string;
  title: string;
  description: string;
  iconName: 'Film' | 'Globe' | 'Smartphone' | 'Palette';
  image?: string;
  imageAlt?: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'video-production',
    index: '01',
    title: 'Video Production & Editing',
    description:
      'Cinematic cuts, dynamic short-form reels, color grading, sound design, and crisp motion captions tailored for digital reach.',
    iconName: 'Film',
    image: PORTFOLIO_IMAGES.videoEditing,
    imageAlt: 'Video editing timeline setup with cinema lens and studio headphones',
  },
  {
    id: 'web-development',
    index: '02',
    title: 'Website Design & Development',
    description:
      'Responsive interfaces, fast frontend architecture, full-stack web applications, and clean digital experiences for growing brands.',
    iconName: 'Globe',
    image: PORTFOLIO_IMAGES.webApp,
    imageAlt: 'Minimalist laptop and smartphone displaying web and mobile interfaces',
  },
  {
    id: 'graphic-design',
    index: '03',
    title: 'Graphic Design & Branding',
    description:
      'Visual identity systems, logos, posters, editorial layouts, and cohesive social media graphics built with typographic precision.',
    iconName: 'Palette',
    image: PORTFOLIO_IMAGES.graphicDesign,
    imageAlt: 'Minimalist black, white, and silver brand identity guidelines and posters',
  },
  {
    id: 'mobile-apps',
    index: '04',
    title: 'Mobile Application Development',
    description:
      'Android, iOS, and cross-platform mobile apps engineered with intuitive user flows and modern mobile UI craft.',
    iconName: 'Smartphone',
  },
];

export const MISSION_PILLARS: string[] = [
  'Connect talented students across India.',
  'Encourage practical learning.',
  'Help students build real projects.',
  'Create opportunities for collaboration.',
  'Support participation in hackathons and competitions.',
  'Encourage innovation and entrepreneurship.',
  'Help students build confidence and professional portfolios.',
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 'STEP 01',
    title: 'CONNECT',
    description: 'Students discover Young Agency.co and connect with our community.',
  },
  {
    step: 'STEP 02',
    title: 'SHARE SKILLS',
    description: 'Members showcase their skills, interests, and previous projects.',
  },
  {
    step: 'STEP 03',
    title: 'COLLABORATE',
    description: 'People with suitable skills come together to work on projects.',
  },
  {
    step: 'STEP 04',
    title: 'BUILD',
    description: 'Teams create websites, applications, videos, designs, and other digital projects.',
  },
  {
    step: 'STEP 05',
    title: 'GROW',
    description: 'Members improve their skills, build portfolios, showcase their work, and explore new opportunities.',
  },
];

export const EARNING_AREAS: string[] = [
  'AI video projects',
  'Video editing assignments',
  'Website development',
  'Application development',
  'Graphic design projects',
  'Thumbnail design',
  'Content creation',
];

export const EARNING_STEPS: { number: string; text: string }[] = [
  { number: '01', text: 'Develop and showcase your skills.' },
  { number: '02', text: 'Become part of the relevant talent department.' },
  { number: '03', text: 'Get considered for suitable projects.' },
  {
    number: '04',
    text: 'Agree on responsibilities, deadlines, and payment terms before starting.',
  },
  { number: '05', text: 'Complete the agreed work.' },
  {
    number: '06',
    text: 'Receive payment according to the agreed contribution and project terms.',
  },
];

export interface EventProgram {
  index: string;
  title: string;
  status: string;
  description: string;
  iconName:
    | 'Trophy'
    | 'Award'
    | 'Presentation'
    | 'GitBranch'
    | 'Lightbulb'
    | 'Compass';
}

export const ORGANIZED_PROGRAMS: EventProgram[] = [
  {
    index: '01',
    title: 'HACKATHONS',
    status: 'Planned Initiative',
    description:
      'Helping students discover competitions, find teammates, and build innovative projects.',
    iconName: 'Trophy',
  },
  {
    index: '02',
    title: 'CREATIVE COMPETITIONS',
    status: 'Planned Initiative',
    description:
      'Design, video editing, AI creation, and digital creativity competitions.',
    iconName: 'Award',
  },
  {
    index: '03',
    title: 'WORKSHOPS',
    status: 'Planned Initiative',
    description:
      'Practical learning sessions covering AI tools, web development, design, editing, and technology.',
    iconName: 'Presentation',
  },
  {
    index: '04',
    title: 'PROJECT COLLABORATIONS',
    status: 'Planned Initiative',
    description:
      'Bringing students together to create useful digital products.',
    iconName: 'GitBranch',
  },
  {
    index: '05',
    title: 'STARTUP INITIATIVES',
    status: 'Planned Initiative',
    description:
      'Encouraging students to explore ideas, develop MVPs, and learn about entrepreneurship.',
    iconName: 'Lightbulb',
  },
  {
    index: '06',
    title: 'COMMUNITY EVENTS',
    status: 'Planned Initiative',
    description:
      'Online meetups, project showcases, knowledge-sharing sessions, and student collaboration events.',
    iconName: 'Compass',
  },
];

export type PortfolioCategory =
  | 'All'
  | 'AI Videos'
  | 'Video Editing'
  | 'Websites'
  | 'Applications'
  | 'Graphic Design'
  | 'Thumbnails';

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'All',
  'AI Videos',
  'Video Editing',
  'Websites',
  'Applications',
  'Graphic Design',
  'Thumbnails',
];

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All'>;
  shortDescription: string;
  fullBrief: string;
  deliverables: string[];
  departmentLead: string;
  image: string;
  imageAlt: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'ai-commercial-reel',
    title: 'Generative Brand Launch Film',
    category: 'AI Videos',
    shortDescription:
      'Example concept showcasing AI-assisted storyboarding, synthetic character scenes, and pacing for a product teaser.',
    fullBrief:
      'An illustrative showcase demonstrating how our AI Video Generators department combines generative visual keyframes, controlled camera motion, and voice synthesis to produce high-concept promotional videos.',
    deliverables: ['Storyboard Keyframes', 'AI Scene Generation', 'Sound & Rhythm Cut'],
    departmentLead: 'AI Video Generators',
    image: PORTFOLIO_IMAGES.aiVideo,
    imageAlt: 'AI video storyboard and keyframe composition on studio monitor',
  },
  {
    id: 'editorial-documentary-cut',
    title: 'Creator Documentary & Reel Suite',
    category: 'Video Editing',
    shortDescription:
      'Example edit package featuring multi-cam pacing, clean color grading, and high-retention short-form social reels.',
    fullBrief:
      'An example post-production study highlighting narrative assembly, sound design, kinetic typography captions, and color calibration for modern digital storytelling.',
    deliverables: ['Long-Form Master Cut', 'Vertical Reel Adaptation', 'Color Grading & Captions'],
    departmentLead: 'Video Editors',
    image: PORTFOLIO_IMAGES.videoEditing,
    imageAlt: 'Video editing workstation showing timeline and color controls',
  },
  {
    id: 'minimal-studio-web',
    title: 'Architectural Studio Web Platform',
    category: 'Websites',
    shortDescription:
      'Example responsive web experience built with crisp Swiss typography, fast navigation, and modular React architecture.',
    fullBrief:
      'An example web engineering concept illustrating clean information hierarchy, responsive desktop-to-mobile grid systems, and accessible frontend performance.',
    deliverables: ['Responsive UI System', 'Frontend Architecture', 'Performance Optimization'],
    departmentLead: 'Web Developers',
    image: PORTFOLIO_IMAGES.webApp,
    imageAlt: 'Laptop showcasing clean minimalist website interface',
  },
  {
    id: 'student-task-mobile-app',
    title: 'Campus Collaboration Mobile App',
    category: 'Applications',
    shortDescription:
      'Example cross-platform mobile UI concept designed for student project coordination, milestones, and team updates.',
    fullBrief:
      'An example mobile application blueprint created to demonstrate intuitive thumb-zone navigation, clean card hierarchy, and cross-platform component design.',
    deliverables: ['Mobile UI Wireframes', 'Component Library', 'Interactive Prototype'],
    departmentLead: 'App Developers',
    image: PORTFOLIO_IMAGES.webApp,
    imageAlt: 'Smartphone displaying modern mobile application interface alongside laptop',
  },
  {
    id: 'monochrome-brand-system',
    title: 'Monolith Visual Identity System',
    category: 'Graphic Design',
    shortDescription:
      'Example brand book covering geometric wordmarks, poster grids, stationery, and brushed metallic packaging systems.',
    fullBrief:
      'An example branding deliverable illustrating disciplined grid systems, typography rules, print-ready packaging mockups, and cohesive social media templates.',
    deliverables: ['Logo & Grid System', 'Brand Guidelines Book', 'Packaging & Poster Layouts'],
    departmentLead: 'Graphic Designers',
    image: PORTFOLIO_IMAGES.graphicDesign,
    imageAlt: 'Minimalist monochrome brand identity book and packaging mockups',
  },
  {
    id: 'creator-thumbnail-system',
    title: 'High-Clarity Video Cover Series',
    category: 'Thumbnails',
    shortDescription:
      'Example YouTube thumbnail and episode cover series crafted for instant visual contrast and mobile legibility.',
    fullBrief:
      'An example visual packaging study focused on clear focal framing, crisp headline hierarchy, and cohesive channel branding across long-form video episodes.',
    deliverables: ['Series Art Direction', 'Thumbnail Templates', 'Typography Lockups'],
    departmentLead: 'Thumbnail Designers',
    image: PORTFOLIO_IMAGES.videoEditing,
    imageAlt: 'Creative cover artwork cards arranged on a studio desk',
  },
];
