// APIGA Cambodia Main JavaScript
// Interactive functionality for the website

// Global variables
let particles = [];
let networkChart;
let timelineData = {
    foundation: {
        title: "Foundation Building",
        description: "Participants gain foundational knowledge of internet governance principles, ICANN's role, and the multistakeholder model through interactive workshops and expert-led sessions. This phase covers DNS management, IP addressing, and the global internet ecosystem."
    },
    policy: {
        title: "Policy Development",
        description: "Deep dive into policy development processes, understanding how internet policies are created, debated, and implemented. Participants learn about the roles of different stakeholders and how to engage effectively in policy discussions."
    },
    implementation: {
        title: "Implementation",
        description: "Practical application of knowledge through case studies, simulations, and real-world scenarios. Participants work on actual policy challenges facing Cambodia and the Asia Pacific region."
    },
    leadership: {
        title: "Leadership Development",
        description: "Advanced training in digital advocacy, public speaking, and leadership skills. Participants develop action plans for ongoing engagement in internet governance in their respective sectors."
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeHeroBackground();
    initializeScrollAnimations();
    initializeTimeline();
    initializeCounters();
    initializeNetworkChart();
    initializeMobileMenu();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                scrollToSection(targetId);
            }
        });
    });

    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Hero background with p5.js particles
function initializeHeroBackground() {
    const container = document.getElementById('p5-container');
    if (!container) return;

    new p5(function(p) {
        let particles = [];
        let numParticles = 50;
        
        p.setup = function() {
            let canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
            canvas.parent('p5-container');
            
            // Create particles
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(2, 6),
                    opacity: p.random(0.3, 0.8)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and draw particles
            for (let particle of particles) {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                // Draw particle
                p.fill(212, 175, 55, particle.opacity * 255);
                p.noStroke();
                p.ellipse(particle.x, particle.y, particle.size);
                
                // Draw connections
                for (let other of particles) {
                    let distance = p.dist(particle.x, particle.y, other.x, other.y);
                    if (distance < 100) {
                        p.stroke(212, 175, 55, (1 - distance/100) * 50);
                        p.strokeWeight(1);
                        p.line(particle.x, particle.y, other.x, other.y);
                    }
                }
            }
        };
        
        p.windowResized = function() {
            p.resizeCanvas(container.offsetWidth, container.offsetHeight);
        };
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-element');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 800,
                    easing: 'easeOutCubic'
                });
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Timeline functionality
function initializeTimeline() {
    const timelineNodes = document.querySelectorAll('.timeline-node');
    const timelineTitle = document.getElementById('timeline-title');
    const timelineDescription = document.getElementById('timeline-description');
    
    timelineNodes.forEach(node => {
        node.addEventListener('click', function() {
            const phase = this.dataset.phase;
            const data = timelineData[phase];
            
            if (data) {
                // Update content
                timelineTitle.textContent = data.title;
                timelineDescription.textContent = data.description;
                
                // Update active state
                timelineNodes.forEach(n => n.classList.remove('active'));
                this.classList.add('active');
                
                // Animate content change
                anime({
                    targets: '#timeline-details',
                    opacity: [0.5, 1],
                    scale: [0.98, 1],
                    duration: 400,
                    easing: 'easeOutCubic'
                });
            }
        });
        
        // Hover effects
        node.addEventListener('mouseenter', function() {
            anime({
                targets: this.querySelector('div'),
                scale: 1.1,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        node.addEventListener('mouseleave', function() {
            anime({
                targets: this.querySelector('div'),
                scale: 1,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
}

// Animated counters
function initializeCounters() {
    const counters = document.querySelectorAll('.animate-counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                
                anime({
                    targets: entry.target,
                    innerHTML: [0, target],
                    duration: 2000,
                    easing: 'easeOutCubic',
                    round: 1
                });
                
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Network chart initialization
function initializeNetworkChart() {
    const chartContainer = document.getElementById('network-chart');
    if (!chartContainer) return;
    
    networkChart = echarts.init(chartContainer);
    
    // Network data
    const networkData = {
        nodes: [
            // Government
            { id: 'mptc', name: 'Ministry of Posts & Telecommunications', category: 'government', symbolSize: 60 },
            { id: 'mef', name: 'Ministry of Economy & Finance', category: 'government', symbolSize: 50 },
            { id: 'nbc', name: 'National Bank of Cambodia', category: 'government', symbolSize: 45 },
            
            // Private Sector
            { id: 'metfone', name: 'Metfone', category: 'private', symbolSize: 55 },
            { id: 'smart', name: 'Smart Axiata', category: 'private', symbolSize: 55 },
            { id: 'cellcard', name: 'Cellcard', category: 'private', symbolSize: 50 },
            { id: 'ezcom', name: 'Ezecom', category: 'private', symbolSize: 45 },
            
            // Civil Society
            { id: 'youth-igf', name: 'Youth IGF Cambodia', category: 'civil', symbolSize: 40 },
            { id: 'cso', name: 'Cambodian CSO Coalition', category: 'civil', symbolSize: 35 },
            { id: 'tech-hub', name: 'Phnom Penh Tech Hub', category: 'civil', symbolSize: 35 },
            
            // International
            { id: 'icann', name: 'ICANN', category: 'international', symbolSize: 60 },
            { id: 'apiga', name: 'APIGA Network', category: 'international', symbolSize: 50 },
            { id: 'itu', name: 'ITU', category: 'international', symbolSize: 45 },
            { id: 'world-bank', name: 'World Bank', category: 'international', symbolSize: 40 }
        ],
        links: [
            { source: 'mptc', target: 'metfone' },
            { source: 'mptc', target: 'smart' },
            { source: 'mptc', target: 'cellcard' },
            { source: 'mptc', target: 'ezcom' },
            { source: 'mptc', target: 'icann' },
            { source: 'mptc', target: 'itu' },
            { source: 'mef', target: 'nbc' },
            { source: 'mef', target: 'world-bank' },
            { source: 'nbc', target: 'metfone' },
            { source: 'nbc', target: 'smart' },
            { source: 'icann', target: 'apiga' },
            { source: 'apiga', target: 'youth-igf' },
            { source: 'youth-igf', target: 'tech-hub' },
            { source: 'cso', target: 'youth-igf' },
            { source: 'tech-hub', target: 'ezcom' },
            { source: 'metfone', target: 'smart' },
            { source: 'smart', target: 'cellcard' }
        ],
        categories: [
            { name: 'Government', itemStyle: { color: '#0F4C5C' } },
            { name: 'Private Sector', itemStyle: { color: '#D4AF37' } },
            { name: 'Civil Society', itemStyle: { color: '#FF6B6B' } },
            { name: 'International', itemStyle: { color: '#2C3E50' } }
        ]
    };
    
    const option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.dataType === 'node') {
                    return `<strong>${params.data.name}</strong><br/>Type: ${networkData.categories[params.data.category].name}`;
                }
                return '';
            }
        },
        legend: {
            data: networkData.categories.map(cat => cat.name),
            orient: 'horizontal',
            bottom: 10,
            textStyle: {
                color: '#2C3E50'
            }
        },
        series: [{
            type: 'graph',
            layout: 'force',
            data: networkData.nodes,
            links: networkData.links,
            categories: networkData.categories,
            roam: true,
            focusNodeAdjacency: true,
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 2
            },
            lineStyle: {
                color: 'source',
                curveness: 0.3,
                opacity: 0.7
            },
            emphasis: {
                focus: 'adjacency',
                lineStyle: {
                    width: 3
                }
            },
            force: {
                repulsion: 1000,
                gravity: 0.1,
                edgeLength: 150,
                layoutAnimation: true
            },
            label: {
                show: true,
                position: 'bottom',
                formatter: '{b}',
                fontSize: 12,
                color: '#2C3E50'
            }
        }]
    };
    
    networkChart.setOption(option);
    
    // Filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-primary', 'text-white');
                b.classList.add('bg-gray-200', 'text-gray-700');
            });
            this.classList.add('active', 'bg-primary', 'text-white');
            this.classList.remove('bg-gray-200', 'text-gray-700');
            
            // Filter nodes
            let filteredNodes = networkData.nodes;
            if (filter !== 'all') {
                const categoryMap = {
                    'government': 0,
                    'private': 1,
                    'civil': 2,
                    'international': 3
                };
                filteredNodes = networkData.nodes.filter(node => 
                    node.category === categoryMap[filter]
                );
            }
            
            // Update chart
            const updateOption = {
                series: [{
                    data: filteredNodes
                }]
            };
            networkChart.setOption(updateOption);
        });
    });
    
    // Resize handler
    window.addEventListener('resize', function() {
        if (networkChart) {
            networkChart.resize();
        }
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
window.addEventListener('resize', debounce(function() {
    // Handle resize events
    if (networkChart) {
        networkChart.resize();
    }
}, 250));

// Smooth page transitions
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0';
});

// Add loading animation
window.addEventListener('load', function() {
    anime({
        targets: 'body',
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutCubic'
    });
});

// Export functions for global access
window.scrollToSection = scrollToSection;