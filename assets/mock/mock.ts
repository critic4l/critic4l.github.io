import PortfolioItem from 'src/app/classes/portfolioItem';

const mme: PortfolioItem = {
    title: "MME",
    description: "Simple static webpage created for a company",
    image: "assets/img/portfolio/MME/mme.webp",
    technologies: [
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Angular Material",
        "Material Icons"
    ],
    responsibilities: null,
    links: ["http://mme.com.pl"]
}

const zeroKilled: PortfolioItem = {
    title: "Zero Killed",
    description: "Multiplayer VR Shooter",
    image: "assets/img/portfolio/ZeroKilled/zerokilled.webp",
    technologies: ["C++", "Unreal Engine 4", "GIT", "Microsoft Visual Studio"],
    responsibilities: [
        "Implementing game systems based on Game Design Document",
        "Programming character animation state machines",
        "Implementing engine tools for graphic department",
        "Designing and implementing game state coordinating module"
    ],
    links: [
        "https://store.steampowered.com/app/645930/Zero_Killed/"
    ]
}

const taskManager: PortfolioItem = {
    title: "Task Manager",
    description: "Small, simple project, for educational purposes, for managing tasks",
    image: "assets/img/portfolio/TaskManager/taskmanager.webp",
    technologies: [
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Angular Material",
        "Java",
        "Spring Boot"
    ],
    responsibilities: null,
    links: [
        "https://github.com/critic4l/TaskManager",
    ]
}

const redicle: PortfolioItem = {
    title: "Redicle",
    description: "Diploma thesis - Content management system for editorial offices. Robust tool to provide functionalities for creating and displaying content, provided with set of tools to allow easier management of such offices i.e. posting orders for articles on desired topics.",
    image: "assets/img/portfolio/Redicle/redicle.webp",
    technologies: [
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Angular Material",
        "Node.JS",
        "MongoDB"
    ],
    responsibilities: null,
    links: null

}

const portfolio: PortfolioItem[] = [
    mme,
    zeroKilled,
    redicle,
    taskManager
];



export default portfolio;