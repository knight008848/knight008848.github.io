const i18n = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_notes: "Notes",
        hero_greeting: "Hi, I'm <span class='highlight'>Vincent</span>.",
        hero_desc: "Building robust data infrastructures and intelligent pipelines.",
        hero_cta: "Discover My Work",
        about_title: "About Me",
        about_subtitle: "Architecting Data & Intelligence",
        about_p1: "I am passionate about Data Infrastructure, Data Engineering, and Applied AI. My focus is on building scalable data pipelines and turning complex datasets into actionable visualizations and intelligent systems.",
        about_p2: "I am constantly exploring new ways to architect robust data foundations for modern machine learning and embodied AI applications.",
        projects_title: "Featured Projects",
        proj_viz_desc: "A minimalist code repository for mastering Python data visualization from scratch, focusing on practical charts and aesthetics.",
        proj_imu_desc: "A multimodal alignment tool for synchronizing iPhone IMU and camera data for advanced computer vision analysis.",
        proj_opencv_desc: "My 30-day intensive learning repository covering fundamental to advanced computer vision techniques and image processing.",
        notes_title: "Learning Notes",
        note_viz: "Getting Started with Python Visualization",
        note_opencv: "30-Day Computer Vision Roadmap",
        note_sensor: "Temporal Alignment of Heterogeneous Sensors",
        footer_text: "Let's build robust data foundations."
    },
    zh: {
        nav_home: "首页",
        nav_about: "关于我",
        nav_projects: "项目",
        nav_notes: "笔记",
        hero_greeting: "你好，我是 <span class='highlight'>Vincent</span>。",
        hero_desc: "致力于构建坚实的数据基础设施与智能管道。",
        hero_cta: "探索我的项目",
        about_title: "关于我",
        about_subtitle: "架构数据与智能底座",
        about_p1: "我热衷于数据基础设施 (Data Infra)、数据工程以及应用人工智能。我的主要研究方向是构建可扩展的数据管道，并将复杂的数据集转化为直观的可视化图表与智能系统。",
        about_p2: "我不断探索前沿技术，致力于为现代机器学习与具身智能 (Embodied AI) 应用搭建极其稳健的数据底座。",
        projects_title: "精选项目",
        proj_viz_desc: "Python 数据可视化极简入门库，用最少的代码实现最高效、最美观的实用图表绘制。",
        proj_imu_desc: "一个多模态对齐工具，用于同步 iPhone 的 IMU 传感器与相机视觉数据。",
        proj_opencv_desc: "我为期30天的计算机视觉强化学习仓库，涵盖从基础到高阶的图像处理技术。",
        notes_title: "学习随笔",
        note_viz: "Python 数据可视化快速入门指南",
        note_opencv: "计算机视觉 30 天学习路线图",
        note_sensor: "异构传感器的多模态时间对齐方案",
        footer_text: "让我们共同构建坚实的数据底座。"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // ---- i18n Language Toggle Logic ----
    const langBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('language') || 'en';

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key]) {
                el.innerHTML = i18n[lang][key];
            }
        });
        currentLang = lang;
        localStorage.setItem('language', lang);
    }

    // Initialize Language
    setLanguage(currentLang);

    langBtn.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        setLanguage(newLang);
    });

    // ---- Typewriter Effect ----
    const textElement = document.getElementById('typewriter');
    
    // Using two sets of words based on current language
    const typeWords = {
        en: ["Data Infrastructure Engineer", "Python Visualization Advocate", "Applied AI Enthusiast", "Continuous Learner"],
        zh: ["数据基础设施工程师", "Python 数据可视化倡导者", "应用人工智能爱好者", "终身学习者"]
    };
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    let erasingDelay = 50;
    let newWordDelay = 2000;

    function type() {
        const words = typeWords[currentLang];
        // Ensure wordIndex doesn't exceed array length if language switches
        if (wordIndex >= words.length) wordIndex = 0;
        
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? erasingDelay : typingDelay;

        // If word is completely typed
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = newWordDelay;
            isDeleting = true;
        } 
        // If word is completely deleted
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // brief pause before typing new word
        }

        setTimeout(type, typeSpeed);
    }

    // Start the typing effect
    setTimeout(type, 1000);

    // ---- Smooth Scrolling ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
