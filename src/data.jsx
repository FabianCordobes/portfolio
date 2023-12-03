import {
	FaHome,
	FaUser,
	FaFolderOpen,
	FaEnvelopeOpen,
	FaBriefcase,
	FaGraduationCap,
	FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink, FiGithub } from 'react-icons/fi';

import Work1 from './assets/project-2(1).png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';

import Work7 from './assets/project-7.png';
import Work8 from './assets/project-8.png';
import Work9 from './assets/project-9.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

import nextJsIcon from './assets/nextjs.svg';

export const links = [
	{
		id: 1,
		name: 'Home',
		icon: <FaHome className="nav__icon" />,
		path: '/',
	},

	{
		id: 2,
		name: 'Sobre mi',
		icon: <FaUser className="nav__icon" />,
		path: '/about',
	},

	{
		id: 3,
		name: 'Portfolio',
		icon: <FaFolderOpen className="nav__icon" />,
		path: '/portfolio',
	},

	{
		id: 4,
		name: 'Contacto',
		icon: <FaEnvelopeOpen className="nav__icon" />,
		path: '/contact',
	},
];

export const personalInfo = [
	{
		id: 1,
		title: 'Nombre : ',
		description: 'Fabian',
	},

	{
		id: 2,
		title: 'Apellido : ',
		description: 'Cordobes',
	},

	{
		id: 3,
		title: 'Edad : ',
		description: '19 años',
	},

	{
		id: 4,
		title: 'Nationalidad : ',
		description: 'Argentina',
	},

	{
		id: 5,
		title: 'Freelance : ',
		description: 'Disponible',
	},

	{
		id: 6,
		title: 'Address : ',
		description: 'Tunis',
	},

	{
		id: 7,
		title: 'Telefono movil : ',
		description: '+54 9 11 7637-1182',
	},

	{
		id: 8,
		title: 'Email : ',
		description: 'fabianarielcordobes@gmail.com',
	},

	{
		id: 9,
		title: 'Linkedin : ',
		description: '-',
	},
	{
		id: 10,
		title: 'Linkedin : ',
		description: '-',
	},

	{
		id: 11,
		title: 'Idiomas : ',
		description: 'Español: nativo, Inglés: intermedio',
	},
];

export const stats = [
	{
		id: 1,
		no: '2+',
		title: 'Años de <br /> Experiencia',
	},

	{
		id: 2,
		no: '20+',
		title: 'Proyectos <br /> realizados',
	},

	{
		id: 3,
		no: '15+',
		title: 'Clientes <br /> felices',
	},
];

export const resume = [
	{
		id: 1,
		category: 'experience',
		icon: <FaBriefcase />,
		year: 'Presente',
		title: 'Desarrollador web <span> Freelance </span>',
		desc: 'Me encargo de desarrollar apps para los clientes que solicitan mis servicios a través de las redes sociales.',
	},

	{
		id: 2,
		category: 'experience',
		icon: <FaBriefcase />,
		year: '2023 - 2023',
		title: 'Desarrollador web <span> front-end </span>',
		desc: 'En mi rol desarrollé aplicaciones web personalizadas para nuestros clientes, garantizando que sus necesidades se traduzcan en soluciones efectivas y visualmente atractivas.',
	},

	// {
	//   id: 3,
	//   category: 'experience',
	//   icon: <FaBriefcase />,
	//   year: '2005 - 2013',
	//   title: 'Consultant <span> Videohive </span>',
	//   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
	// },

	{
		id: 4,
		category: 'education',
		icon: <FaGraduationCap />,
		year: '2023',
		title: 'Full-Stack Developer <span> SoyHenry Bootcamp </span>',
		desc: 'Soy Henry me permitió adentrarme de lleno en el mundo Tech a través de su modalidad de enseñanza que abarcó la creación de proyectos reales y el trabajo colaborativo en equipo.',
	},

	{
		id: 5,
		category: 'education',
		icon: <FaGraduationCap />,
		year: '2022',
		title:
			'JavaSript Algorithms and Data Structures Certification <span> FreeCodeCamp </span>',
		// desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
	},

	{
		id: 6,
		category: 'education',
		icon: <FaGraduationCap />,
		year: '2022',
		title: 'Responsive Web Certifiation <span> FreeCodeCamp </span>',
		// desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
	},
];

export const skillsFront = [
	{
		id: 1,
		title: 'Html',
		percentage: '80',
		src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
		alt: 'Html Icon',
	},

	{
		id: 2,
		title: 'JavaScript',
		percentage: '78',
		src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
		alt: 'JavaScript Icon',
	},

	{
		id: 3,
		title: 'Css',
		percentage: '90',
		src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
	},

	{
		id: 4,
		title: 'TypeScript',
		percentage: '62',
		src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
		alt: 'TypeScript Icon',
	},

	{
		id: 5,
		title: 'TailwindCss',
		percentage: '75',
		src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
		alt: 'Tailwind Icon',
	},

	{
		id: 6,
		title: 'Bootstrap',
		percentage: '75',
		src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
		alt: 'Bootstrap Icon',
	},

	{
		id: 7,
		title: 'NextJs',
		percentage: '50',
		src: nextJsIcon,
		alt: 'Next Js Icon',
	},

	{
		id: 8,
		title: 'React',
		percentage: '85',
		src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		alt: 'React Icon',
	},

	{
		id: 9,
		title: 'Sass',
		percentage: '75',
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png',
		alt: 'Sass Icon',
	},
];

export const skillsBack = [
	{
		id: 1,
		title: 'Node Js',
		percentage: '75',
		src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
		alt: 'Node JS Icon',
	},
	{
		id: 2,
		title: 'Express Js',
		percentage: '75',
		src: 'https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png',
		alt: 'Express JS Icon',
	},

	{
		id: 3,
		title: 'PostgreSQL',
		percentage: '55',
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png',
		alt: 'PostgreSQL icon',
	},

	{
		id: 4,
		title: 'Sequelize',
		percentage: '75',
		src: 'https://avatars.githubusercontent.com/u/3591786?s=280&v=4',
		alt: 'Sequelize Icon',
	},

	{
		id: 5,
		title: 'MongoDB',
		percentage: '75',
		src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg',
		alt: 'MongoDB JS Icon',
	},
];

export const skillsTools = [
	{
		id: 1,
		title: 'Vs Code',
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png',
		alt: 'VsCode Icon',
	},
	{
		id: 2,
		title: 'Git',
		src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
		alt: 'Git Icon',
	},
	{
		id: 3,
		title: 'Thunder Client',
		src: 'https://rangav.gallerycdn.vsassets.io/extensions/rangav/vscode-thunder-client/1.19.1/1663361559511/Microsoft.VisualStudio.Services.Icons.Default',
		alt: 'Thunder Client Icon',
	},
];

export const portfolio = [
	{
		id: 1,
		img: Work1,
		title: 'Landing Page',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: "Hard Floor's Landing ",
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Hard Floor',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React Js',
			},
		],

		links: [
			{
				side: 'left',
				icon: <FiExternalLink />,
				title: 'Preview : ',
				href: 'https://hard-floor.vercel.app/',
			},
			{
				side: 'right',
				icon: <FiGithub />,
				title: 'Repository : ',
				href: 'https://github.com/FabianCordobes/hardFloor',
			},
		],
	},

	{
		id: 2,
		img: Work2,
		title: 'Dogs App',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Dogs Api Rest',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Dribble',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React JS',
			},
		],

		links: [
			{
				side: 'left',
				icon: <FiExternalLink />,
				title: 'Preview : ',
				href: 'https://hard-floor.vercel.app/',
			},
			{
				side: 'right',
				icon: <FiGithub />,
				title: 'Repository : ',
				href: 'https://github.com/FabianCordobes/pi-dogs',
			},
		],
	},

	{
		id: 3,
		img: Work3,
		title: 'Pokedex App',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Pokemon Api rest',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Dribble',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React Js',
			},
		],

		links: [
			{
				side: 'left',
				icon: <FiExternalLink />,
				title: 'Preview : ',
				href: 'https://hard-floor.vercel.app/',
			},
			{
				side: 'right',
				icon: <FiGithub />,
				title: 'Repository : ',
				href: 'https://github.com/FabianCordobes/pi-pokemon',
			},
		],
	},

	{
		id: 4,
		img: Work4,
		title: 'Landing Page',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Travel App',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Dribble',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React Js',
			},
		],

		links: [
			{
				side: 'left',
				icon: <FiExternalLink />,
				title: 'Preview : ',
				href: 'https://travel-web-six-pi.vercel.app/',
			},
			{
				side: 'right',
				icon: <FiGithub />,
				title: 'Repository : ',
				href: 'https://github.com/FabianCordobes/travelApp/tree/master',
			},
		],
	},

	{
		id: 5,
		img: Work5,
		title: 'Rick and Morty App',
		details: [
			{
				title: 'Project : ',
				desc: 'Rick and Morty Api Rest',
			},
			{
				title: 'Client : ',
				desc: 'Dribble',
			},
			{
				title: 'Language : ',
				desc: 'React JS, Node JS',
			},
		],

		links: [
			{
				side: 'left',
				icon: <FiExternalLink />,
				title: 'Preview : ',
				href: 'https://hard-floor.vercel.app/',
			},
			{
				side: 'right',
				icon: <FiGithub />,
				title: 'Repository : ',
				href: 'https://github.com/FabianCordobes/rick-and-morty-app',
			},
		],
	},

	{
		id: 6,
		img: Work6,
		title: 'E-Commerce',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'E-Commerce App',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Dribble',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React Js',
			},
		],

		links: [
			{
				side: 'left',
				icon: <FiExternalLink />,
				title: 'Preview : ',
				href: 'https://e-commerce-app-eta-two.vercel.app/',
			},
			{
				side: 'right',
				icon: <FiGithub />,
				title: 'Repository : ',
				href: 'https://github.com/FabianCordobes/eCommerceApp/tree/master',
			},
		],
	},

	{
		id: 7,
		img: Work7,
		title: 'JQuery Calculator',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'JQuery Calculator App',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Dribble',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'Javascript',
			},
		],

		links: [
			{
				side: 'left',
				icon: <FiExternalLink />,
				title: 'Preview : ',
				href: 'https://j-query-calculator-sigma.vercel.app/',
			},
			{
				side: 'right',
				icon: <FiGithub />,
				title: 'Repository : ',
				href: 'https://github.com/FabianCordobes/jQuery-Calculator',
			},
		],
	},

	{
		id: 8,
		img: Work8,
		title: 'Landing Page',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'TecnoaberturasDC',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'TecnoaberturasDC',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'React Js',
			},
		],

		links: [
			{
				side: 'left',
				icon: <FiExternalLink />,
				title: 'Preview : ',
				href: 'https://hard-floor.vercel.app/',
			},
			{
				side: 'right',
				icon: <FiGithub />,
				title: 'Repository : ',
				href: 'https://github.com/Nanomarquez/aberturas',
			},
		],
	},

	{
		id: 9,
		img: Work9,
		title: 'Pixel Art Maker',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Pixel Art Maker',
			},
			{
				icon: <FiUser />,
				title: 'Client : ',
				desc: 'Dribble',
			},
			{
				icon: <FaCode />,
				title: 'Language : ',
				desc: 'JavasCript',
			},
		],

		links: [
			{
				side: 'left',
				icon: <FiExternalLink />,
				title: 'Preview ',
				href: 'https://pixel-art-maker-psi.vercel.app/',
			},
			{
				side: 'right',
				icon: <FiGithub />,
				title: 'Repository ',
				href: 'https://github.com/FabianCordobes/Pixre-Art-Maker',
			},
		],
	},
];

export const themes = [
	{
		id: 1,
		img: Theme1,
		color: 'hsl(252, 35%, 51%)',
	},

	{
		id: 2,
		img: Theme2,
		color: 'hsl(4, 93%, 54%)',
	},

	{
		id: 3,
		img: Theme3,
		color: 'hsl(271, 76%, 53%)',
	},

	{
		id: 4,
		img: Theme4,
		color: 'hsl(225, 73%, 57%)',
	},

	{
		id: 5,
		img: Theme5,
		color: 'hsl(43, 74%, 49%)',
	},

	{
		id: 6,
		img: Theme6,
		color: 'hsl(339, 81%, 66%)',
	},

	{
		id: 7,
		img: Theme7,
		color: 'hsl(80, 61%, 50%)',
	},

	{
		id: 8,
		img: Theme8,
		color: 'hsl(19, 96%, 52%)',
	},

	{
		id: 9,
		img: Theme9,
		color: 'hsl(88, 65%, 43%)',
	},

	{
		id: 10,
		img: Theme10,
		color: 'hsl(42, 100%, 50%)',
	},
];
