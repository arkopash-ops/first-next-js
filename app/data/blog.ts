export type BlogType = "Science" | "Civil" | "IT" | "Medical";

export type Comments = {
    id: string;
    comment: string;
};

export type Blog = {
    id: string;
    title: string;
    slug: string;
    type: BlogType;
    image: string;
    content: string;
    comments: Comments[];
};

export const blogs: Blog[] = [
    {
        "id": "1",
        "title": "Basics of Quantum Physics",
        "slug": "basics-of-quantum-physics",
        "type": "Science",
        "image": "/01. basics-of-quantum-physics.webp",
        "content": "An introduction to quantum mechanics and its principles. Quantum physics studies the behavior of matter and energy at the atomic and subatomic levels. It introduces concepts such as wave-particle duality, quantum superposition, and entanglement. Understanding these principles helps explain phenomena that classical physics cannot, including the behavior of electrons in atoms, quantum tunneling, and the development of technologies like semiconductors and quantum computers.",
        "comments": [
            { "id": "c1", "comment": "Amazing article!" },
            { "id": "c2", "comment": "Very helpful, thanks!" },
            { "id": "c3", "comment": "Could you add more examples of quantum phenomena?" },
            { "id": "c4", "comment": "I love how you explain complex topics simply." }
        ]
    },
    {
        "id": "2",
        "title": "Bridge Construction Techniques",
        "slug": "bridge-construction-techniques",
        "type": "Civil",
        "image": "/02. bridge-construction-techniques.webp",
        "content": "Learn modern methods used in bridge engineering. Bridge construction involves careful planning, design, and material selection to ensure safety and durability. Engineers use techniques like suspension, cable-stayed, arch, and beam construction depending on the site requirements and load capacity. Advances in materials, such as high-strength concrete and steel, as well as construction methods like prefabrication and modular assembly, have improved efficiency and reduced construction time. Understanding these techniques is essential for designing bridges that are not only functional but also aesthetically pleasing and resilient to environmental challenges.",
        comments: []
    },
    {
        "id": "3",
        "title": "Introduction to Web Development",
        "slug": "introduction-to-web-development",
        "type": "IT",
        "image": "/03. introduction-to-web-development.jpg",
        "content": "Understand HTML, CSS, and JavaScript fundamentals. Web development is the process of creating websites and web applications, combining structure, style, and interactivity. HTML provides the backbone of a webpage, defining elements like headings, paragraphs, and links. CSS adds design and layout, controlling colors, fonts, and positioning. JavaScript enables dynamic behavior, such as form validation, animations, and interactive content. Learning these core technologies lays the foundation for more advanced topics like frameworks, responsive design, and backend integration.",
        "comments": [
            { "id": "c1", "comment": "Great for beginners!" },
            { "id": "c3", "comment": "Would love a section on frameworks like React or Vue." },
            { "id": "c4", "comment": "Helpful overview, thanks!" }
        ]
    },
    {
        "id": "4",
        "title": "Human Heart Functionality",
        "slug": "human-heart-functionality",
        "type": "Medical",
        "image": "/04. human-heart-functionality.webp",
        "content": "Explore how the human heart works and pumps blood. The heart is a muscular organ responsible for circulating blood throughout the body, delivering oxygen and nutrients to tissues and removing waste products. It consists of four chambers: two atria and two ventricles, which work in a coordinated cycle of contraction and relaxation. Valves ensure one-way blood flow, while the electrical conduction system regulates heartbeat rhythm. Understanding heart functionality is essential for recognizing conditions like arrhythmia, heart attacks, and heart failure, and highlights the importance of maintaining cardiovascular health through diet, exercise, and lifestyle choices.",
        "comments": [
            { "id": "c1", "comment": "Very educational!" },
            { "id": "c2", "comment": "I like the clear explanation of heart chambers." },
            { "id": "c3", "comment": "Could you add a diagram of the blood flow cycle?" }
        ]
    },
    {
        "id": "5",
        "title": "The Science of Climate Change",
        "slug": "the-science-of-climate-change",
        "type": "Science",
        "image": "/05. the-science-of-climate-change.jpg",
        "content": "A deep dive into global warming and environmental impact. Climate change refers to long-term alterations in Earth's temperature, weather patterns, and ecosystems, primarily driven by human activities like burning fossil fuels and deforestation. Rising greenhouse gas concentrations trap heat in the atmosphere, leading to extreme weather events, sea-level rise, and biodiversity loss. Understanding the science behind climate change is essential for developing mitigation strategies, promoting sustainable practices, and informing policy decisions to protect our planet for future generations.",
        "comments": [
            { "id": "c1", "comment": "Eye-opening!" },
            { "id": "c2", "comment": "Important topic." },
            { "id": "c3", "comment": "Could you include examples of climate action initiatives?" },
            { "id": "c4", "comment": "Great explanation of the greenhouse effect." }
        ]
    },
    {
        "id": "6",
        "title": "Road Design Fundamentals",
        "slug": "road-design-fundamentals",
        "type": "Civil",
        "image": "/06. road-design-fundamentals.jpg",
        "content": "Key principles behind safe and efficient road construction. Road design involves planning, geometric layout, material selection, and traffic management to ensure safety, durability, and smooth traffic flow. Engineers consider factors like lane width, road alignment, slope, drainage, and pavement structure. Proper design reduces accidents, maintenance costs, and environmental impact while accommodating current and future traffic volumes. Advances in materials, construction techniques, and smart traffic systems are enhancing the quality and sustainability of modern road networks.",
        "comments": [
            { "id": "c1", "comment": "Useful tips." },
            { "id": "c2", "comment": "Well-written." },
            { "id": "c3", "comment": "Could you include examples of innovative road designs?" },
            { "id": "c4", "comment": "Helpful for civil engineering students." }
        ]
    },
    {
        "id": "7",
        "title": "Understanding Database",
        "slug": "understanding-database",
        "type": "IT",
        "image": "/07. understanding-database.webp",
        "content": "Learn about SQL, NoSQL, and data management systems. Databases are organized collections of data that allow efficient storage, retrieval, and management. SQL databases use structured tables and relationships to manage data, while NoSQL databases provide flexibility for unstructured or semi-structured data. Understanding database types, indexing, queries, and transactions is crucial for building reliable applications. Modern data management also involves considerations for scalability, security, backup, and cloud integration, making databases a cornerstone of IT infrastructure.",
        "comments": [
            { "id": "c1", "comment": "Very informative." },
            { "id": "c2", "comment": "Good examples!" },
            { "id": "c3", "comment": "Could you explain more about relational vs non-relational databases?" },
            { "id": "c4", "comment": "Helpful for beginner developers." },
            { "id": "c5", "comment": "I'd like a section on database optimization techniques." },
            { "id": "c6", "comment": "Clear and concise explanation, thanks!" }
        ]
    },
    {
        "id": "8",
        "title": "Basics of Pharmacology",
        "slug": "basics-of-pharmacology",
        "type": "Medical",
        "image": "/08. basics-of-pharmacology.jpg",
        "content": "Introduction to drugs and their effects on the body. Pharmacology is the study of how drugs interact with biological systems to produce therapeutic or adverse effects. It covers drug classification, mechanisms of action, absorption, distribution, metabolism, and excretion. Understanding pharmacology is essential for safe medication use, predicting side effects, and developing new treatments. This knowledge is crucial for healthcare professionals in prescribing, monitoring, and optimizing patient care.",
        comments: []
    },
    {
        "id": "9",
        "title": "Space Exploration Advances",
        "slug": "space-exploration-advances",
        "type": "Science",
        "image": "/09. space-exploration-advances.jpg",
        "content": "Recent developments in space missions and technology. Space exploration has advanced rapidly with innovations in spacecraft, satellites, and propulsion systems. Current missions focus on lunar exploration, Mars rovers, asteroid mining, and deep-space telescopes. Private companies and international collaborations are expanding access to space, enabling scientific research, planetary defense, and commercial opportunities. Understanding these advances highlights humanity’s growing capability to explore, utilize, and understand the universe beyond Earth.",
        "comments": [
            { "id": "c1", "comment": "Fascinating!" },
            { "id": "c2", "comment": "Love space topics." },
            { "id": "c3", "comment": "Could you include recent Mars mission updates?" },
            { "id": "c4", "comment": "Great overview of current space technology." },
            { "id": "c5", "comment": "I'd like to see more about commercial space travel." },
            { "id": "c6", "comment": "Amazing how fast space tech is evolving!" },
            { "id": "c7", "comment": "Can you add details on upcoming telescope missions?" },
            { "id": "c8", "comment": "Very inspiring for future scientists." }
        ]
    },
    {
        "id": "10",
        "title": "Software Development Lifecycle",
        "slug": "software-development-lifecycle",
        "type": "IT",
        "image": "/10. software-development-lifecycle.jpg",
        "content": "Understand the phases of building software systems. The Software Development Lifecycle (SDLC) is a structured process used to design, develop, test, and maintain software efficiently. Key phases include requirement analysis, system design, implementation, testing, deployment, and maintenance. Following SDLC ensures higher quality, predictable timelines, and better risk management. It also helps teams coordinate tasks, track progress, and incorporate feedback, enabling the creation of robust and scalable software applications.",
        "comments": [
            { "id": "c1", "comment": "Clear steps." },
            { "id": "c2", "comment": "Very useful!" },
            { "id": "c3", "comment": "Could you add examples of SDLC models like Agile or Waterfall?" },
            { "id": "c4", "comment": "Helpful for project management beginners." },
            { "id": "c5", "comment": "Nice overview of each phase." },
            { "id": "c6", "comment": "I'd like more on testing strategies." }
        ]
    }
];
