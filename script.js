document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Multi-Agent Financial Advisor',
            description: 'A sophisticated reinforcement learning system that simulates and executes agent-based investment strategies in real-time financial markets.',
            link: 'https://github.com/sumitisthename/Multi-Agent-FinancialAdvisor',
            category: 'featured',
            imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        },
        {
            title: 'MLOps',
            description: 'A complete MLOps pipeline for experiment tracking, model versioning, and workflow automation, utilizing tools like MLflow, DagsHub, Airflow, and DVC on AWS infrastructure.',
            link: 'https://github.com/sumitisthename/ML_Projects',
            category: 'featured',
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        },
        {
            title: 'Motion Detector',
            description: 'A high-performance, real-time motion detection system built with OpenCV and Python, capable of identifying and tracking movement in a live video stream.',
            link: 'https://github.com/sumitisthename/Motion-Detector',
            category: 'featured',
            imageUrl: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        },
        {
            title: 'Airline Price Analysis',
            description: 'An in-depth exploratory data analysis (EDA) project that uncovers hidden patterns and trends in airline pricing data, providing valuable insights for travelers and industry analysts.',
            link: 'https://github.com/sumitisthename/Data-Analysis-of-Airline-Prices',
            category: 'featured',
            imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        },
        {
            title: 'Movie Recommendation System',
            description: 'A powerful, NLP-driven movie recommendation engine that leverages collaborative filtering and content-based techniques to provide personalized movie suggestions.',
            link: 'https://github.com/sumitisthename/Movie-Recommendation',
            category: 'featured',
            imageUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        },
        {
            title: 'Web Scraping Bot',
            description: 'A versatile web scraping bot designed to extract and process data from various websites, featuring advanced techniques for handling dynamic content and avoiding detection.',
            link: 'https://github.com/sumitisthename/web-scrapping',
            category: 'other',
            imageUrl: 'https://images.unsplash.com/photo-1616587896649-7c211a13a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        },
        {
            title: 'Stock Analysis Dashboard',
            description: 'A comprehensive stock analysis dashboard that provides real-time market data, interactive charts, and in-depth technical analysis for informed investment decisions.',
            link: 'https://github.com/sumitisthename/Stock-Analysis',
            category: 'other',
            imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        }
    ];

    const featuredGrid = document.getElementById('featured-projects');
    const otherGrid = document.getElementById('other-projects');

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    const closeButton = document.querySelector('.close-button');

    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}">
            <div class="project-card-content">
                <h3>${project.title}</h3>
            </div>
        `;
        card.addEventListener('click', () => {
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalLink.href = project.link;
            modal.style.display = 'block';
        });
        return card;
    }

    projects.forEach(project => {
        const card = createProjectCard(project);
        if (project.category === 'featured') {
            featuredGrid.appendChild(card);
        } else {
            otherGrid.appendChild(card);
        }
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.querySelectorAll('.scroll-button').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const grid = document.getElementById(targetId);
            const scrollAmount = grid.clientWidth * 0.8;

            if (button.classList.contains('next')) {
                grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else {
                grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        });
    });
});
