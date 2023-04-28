import panaverse from '../../public/panaverse.jpg'
import todo from '../../public/todo.jpg'
import pricing from '../../public/pricing.jpg'
import responsive from '../../public/responsive.png'
import ux from '../../public/ux-design.jpg'
import front from '../../public/front.png'
import ui from '../../public/ui.webp'



export const projects = [
    {
        id: 1,
        link: "https://panaverse-syllabus-tau.vercel.app/",
        image: panaverse,
        webHead: "Panaverse Syllabus website",
        webText: "Using next.js and Chakra Ui",
    },
    {
        id: 2,
        link: "https://pricing-fdw04ny9c-abdur-rehman8.vercel.app/",
        image: pricing,
        webHead: "Pricing Ui",
        webText: "Using Next.js and Chakra Ui",
    },
    {
        id: 3,
        link: "https://todo-app-eight-drab.vercel.app/",
        image: todo,
        webHead: "Todo App",
        webText: "Using Next.js and Typescript",
    },

]

export const service = [
    {
        id: 1,
        mainHead: "User Experience Design",
        headText: "Make every interaction with your digital product or service a delight for your users. Our User Experience (UX) Design services focus on creating engaging, intuitive interfaces that keep users coming back for more. Let us help you exceed your customers' expectations and stand out from the competition.",
        subHead1: "User Research and Analysis",
        subText1: "Gain a deeper understanding of your target audience and their needs through comprehensive user research and analysis. Our UX experts conduct surveys, user interviews, and usability tests to inform the design process and ensure a user-centered approch",
        subhead2: "User Interface Design",
        subtext2: "Create an engaging and intuitive interface that seamlessly guides users through your digital product or service. Our team of UX/UI designers are skilled at creating visually appealing and user-friendly interfaces that enhance user engagement and increase conversions.",
        image: ux
    },
    {
        id: 2,
        mainHead: "Responsive Web Design",
        headText: "I specialize in creating websites that look and function seamlessly on all devices, from desktops to smartphones. Using the latest web design technologies, I ensure that your website is fully optimized for mobile users, offering a user-friendly experience that engages and converts",
        subHead1: "Mobile-First Design",
        subText1: "Create a website that looks and performs great on any device, with a focus on the mobile experience. We prioritize designing for mobile screens first and then expanding to larger screens to ensure your website looks and functions seamlessly on any device.",
        subhead2: "User-Centered Design",
        subtext2: "Our responsive web design services take into account your users' needs, behaviors, and preferences to create a website that is not only visually appealing but also easy to use and navigate. By putting the user at the center of the design process, we ensure that your website is optimized for engagement and conversions.",
        image: responsive
    },
    {
        id: 3,
        mainHead: "front-end development",
        headText: "Bring your digital vision to life with our Front-end Development services. Our team of experts specialize in creating visually stunning and intuitive user interfaces that make navigating your website a breeze. Let us help you captivate your audience and leave a lasting impression with a website that sets you apart from the competition",
        subHead1: "Responsive Web Development",
        subText1: "Create a website that adapts to any device, screen size or resolution, with a focus on mobile-first design. Our team of front-end developers specializes in responsive web development, ensuring that your website looks and performs flawlessly across all devices.",
        subhead2: "Custom Web Application Development",
        subtext2: "Build a custom web application that meets the unique needs of your business or organization. Our front-end development team is skilled in creating powerful and dynamic web applications that provide a seamless user experience and help streamline your business processes.",
        image: front
    },
    {
        id: 4,
        mainHead: "Custom UI Design",
        headText: "I specialize in designing unique user interfaces (UI) using Chakra UI and Tailwind CSS, tailored to your brand and vision. From layout and color schemes to typography and iconography, I create visually appealing interfaces that enhance the overall user experience and strengthen your brand identity. I use the latest web technologies to ensure that your UI is optimized for performance and responsiveness, providing a seamless experience for your users.",
        subHead1: "Branding and Identity Design",
        subText1: "Establish a strong brand identity and convey your unique message through Custom UI Design. Our designers work closely with you to understand your brand's personality and values, and translate them into a visual language that resonates with your target audience.",
        subhead2: "Interactive UI Design",
        subtext2: "Create an engaging and memorable user experience with Interactive UI Design. Our designers are experts in creating visually stunning and interactive user interfaces that encourage user engagement and promote conversion. From animations to micro-interactions, we bring your UI to life and keep your users coming back for more.",
        image: ui
    }
]