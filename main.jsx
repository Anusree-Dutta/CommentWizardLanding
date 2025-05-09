import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Background Elements -->
  <div class="neon-grid fixed inset-0 z-0"></div>
  
  <!-- Navigation -->
  <nav class="navbar fixed w-full z-50 my-4 px-4 md:px-8 max-w-7xl mx-auto left-0 right-0">
    <div class="flex justify-between items-center backdrop-blur-xl rounded-full py-3 px-6 border border-blue-500/20 shadow-lg relative overflow-hidden">
      <div class="nav-glow"></div>
      <a href="#" class="flex items-center gap-2 relative z-10">
        <img src="/logo.svg" alt="Comment-Wizard Logo" class="w-8 h-8 glow-effect neon-glow">
        <span class="text-2xl font-bold font-[Orbitron]"><span class="neon-text">Comment</span><span class="text-purple-400">Wizard</span></span>
      </a>
      <div class="hidden md:flex items-center gap-8 relative z-10">
        <a href="#features" class="text-gray-300 hover:text-white transition-colors hover:neon-text">Features</a>
        <a href="#how-it-works" class="text-gray-300 hover:text-white transition-colors hover:neon-text">How It Works</a>
        <a href="#waitlist" class="btn-primary rounded-full neon-border">Join Waitlist</a>
      </div>
      <button id="mobile-menu-button" class="md:hidden text-white text-xl relative z-10">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </nav>
  
  <!-- Mobile Menu -->
  <div id="mobile-menu" class="fixed left-0 right-0 w-full z-40 bg-[#0B0F1A]/95 backdrop-blur-xl hidden py-8 px-4 shadow-lg border-b border-blue-500/20 transition-all duration-300">
    <div class="flex flex-col gap-6 text-center">
      <a href="#features" class="text-lg text-gray-300 hover:text-white transition-colors hover:neon-text">Features</a>
      <a href="#how-it-works" class="text-lg text-gray-300 hover:text-white transition-colors hover:neon-text">How It Works</a>
      <a href="#waitlist" class="btn-primary rounded-full w-full text-center">Join Waitlist</a>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="relative pt-32 pb-20 px-4 md:px-8 w-full overflow-hidden">
    <div class="hero-glow"></div>
    <div class="container mx-auto max-w-6xl">      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="fade-up-animation">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[Orbitron]">
            Transform <span class="text-white">Comments Into</span>
            <br />
            <span class="neon-text">Engaged Communities</span>
          </h1>
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            Comment-Wizard solves the challenge of managing YouTube other social media comments with <span class="text-blue-400">AI-powered precision</span>. It saves hours of work and eliminates the need for manual replies.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#waitlist" class="btn-primary rounded-full text-center animate-bounce-in">Join the Waitlist</a>
            <a href="#how-it-works" class="btn-secondary rounded-full text-center backdrop-blur-sm">
              <i class="fas fa-lightbulb mr-2"></i> See How It Works
            </a>
          </div>
        </div>
        <div class="relative p-4 scale-animation delay-200">
          <div class="absolute -z-10 w-full h-full bg-blue-500/10 rounded-full blur-3xl"></div>
          <div class="card p-8 float-card-1 glass-effect border border-blue-500/20">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-gradient-to-br from-blue-500 to-purple-500 h-10 w-10 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 animate-pulse-glow">
                <i class="fas fa-robot text-white"></i>
              </div>
              <h3 class="text-xl font-semibold font-[Orbitron]">AI-Powered Comment Replies</h3>
            </div>
            <p class="text-gray-300 mb-2">Enter your video URL, get AI replies instantly</p>
            <div class="bg-[#0B0F1A]/80 p-4 rounded-lg border border-blue-500/20 mt-4 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
              <pre class="text-blue-400 font-mono text-sm relative z-10 typing-animation">Your audience is waiting for engagement...</pre>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">
        <div class="p-4 card neon-border fade-up-animation delay-100">
          <p class="text-4xl font-bold neon-text mb-2">85%</p>
          <p class="text-gray-300">Time Saved</p>
        </div>
        <div class="p-4 card neon-border fade-up-animation delay-200">
          <p class="text-4xl font-bold neon-text mb-2">3x</p>
          <p class="text-gray-300">Engagement Rate</p>
        </div>
        <div class="p-4 card neon-border fade-up-animation delay-300">
          <p class="text-4xl font-bold neon-text mb-2">24/7</p>
          <p class="text-gray-300">Response Time</p>
        </div>
        <div class="p-4 card neon-border fade-up-animation delay-400">
          <p class="text-4xl font-bold neon-text mb-2">100%</p>
          <p class="text-gray-300">Customizable</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="py-20 px-4 md:px-8 bg-gray-900/30 backdrop-blur-sm w-full relative">
    <div class="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 z-0"></div>
    <div class="container mx-auto max-w-6xl relative z-10">
      <div class="text-center mb-16 fade-up-animation">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 neon-text font-[Orbitron]">Powerful Features</h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">Comment-Wizard comes with everything you need to automate and enhance your YouTube comment section interactions. (Other social media availability comming soon) </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="feature-card card-hover-effect glass-effect border border-blue-500/20 fade-up-animation">
          <div class="text-blue-400 text-4xl mb-4 glow-effect">
            <i class="fas fa-robot"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2 font-[Orbitron]">AI-Powered Replies</h3>
          <p class="text-gray-300">Intelligent responses that match your tone and personality, creating authentic conversations.</p>
        </div>

        <!-- Feature 2 -->
        <div class="feature-card card-hover-effect glass-effect border border-blue-500/20 fade-up-animation delay-100">
          <div class="text-purple-400 text-4xl mb-4 glow-effect">
            <i class="fas fa-bolt"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2 font-[Orbitron]">Instant Responses</h3>
          <p class="text-gray-300">Respond to comments 24/7, even when you're asleep or creating your next masterpiece.</p>
        </div>

        <!-- Feature 3 -->
        <div class="feature-card card-hover-effect glass-effect border border-blue-500/20 fade-up-animation delay-200">
          <div class="text-cyan-400 text-4xl mb-4 glow-effect">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2 font-[Orbitron]">Spam Protection</h3>
          <p class="text-gray-300">Automatically filter and manage spam comments to keep your community clean.</p>
        </div>

        <!-- Feature 4 -->
        <div class="feature-card card-hover-effect glass-effect border border-blue-500/20 fade-up-animation">
          <div class="text-blue-400 text-4xl mb-4 glow-effect">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2 font-[Orbitron]">Analytics Dashboard</h3>
          <p class="text-gray-300">Track engagement metrics and see how your automated responses are performing.</p>
        </div>

        <!-- Feature 5 -->
        <div class="feature-card card-hover-effect glass-effect border border-blue-500/20 fade-up-animation delay-100">
          <div class="text-purple-400 text-4xl mb-4 glow-effect">
            <i class="fas fa-user-friends"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2 font-[Orbitron]">Community Building</h3>
          <p class="text-gray-300">Turn viewers into loyal fans by engaging with them consistently and meaningfully.</p>
        </div>

        <!-- Feature 6 -->
        <div class="feature-card card-hover-effect glass-effect border border-blue-500/20 fade-up-animation delay-200">
          <div class="text-cyan-400 text-4xl mb-4 glow-effect">
            <i class="fas fa-cogs"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2 font-[Orbitron]">Custom Voice Training</h3>
          <p class="text-gray-300">Train the AI to respond exactly like you would, maintaining your brand voice.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section id="how-it-works" class="py-20 px-4 md:px-8 w-full relative">
    <div class="absolute inset-0 opacity-30 z-0">
      <div class="neon-grid h-full"></div>
    </div>
    <div class="container mx-auto max-w-6xl relative z-10">
      <div class="text-center mb-16 fade-up-animation">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 neon-text font-[Orbitron]">How Comment-Wizard Works</h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">Get started with Comment-Wizard in three simple steps</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Step 1 -->
        <div class="card p-8 text-center glass-effect border border-blue-500/20 card-hover-effect slide-in-animation">
          <div class="bg-blue-500/10 text-blue-400 rounded-full w-16 h-16 flex items-center justify-center text-3xl mx-auto mb-6 glow-effect neon-glow">
            <i class="fas fa-link"></i>
          </div>
          <h3 class="text-xl font-semibold mb-4 font-[Orbitron] text-blue-300">1. Enter Your YouTube Link</h3>
          <p class="text-gray-300">Simply paste your video URL and connect your YouTube channel with secure OAuth.</p>
        </div>

        <!-- Step 2 -->
        <div class="card p-8 text-center glass-effect border border-purple-500/20 card-hover-effect slide-in-animation delay-150">
          <div class="bg-purple-500/10 text-purple-400 rounded-full w-16 h-16 flex items-center justify-center text-3xl mx-auto mb-6 glow-effect neon-glow">
            <i class="fas fa-cog"></i>
          </div>
          <h3 class="text-xl font-semibold mb-4 font-[Orbitron] text-purple-300">2. AI Processing</h3>
          <p class="text-gray-300">Our AI analyzes your content and language style to create perfect personalized responses.</p>
        </div>

        <!-- Step 3 -->
        <div class="card p-8 text-center glass-effect border border-cyan-500/20 card-hover-effect slide-in-animation delay-300">
          <div class="bg-cyan-500/10 text-cyan-400 rounded-full w-16 h-16 flex items-center justify-center text-3xl mx-auto mb-6 glow-effect neon-glow">
            <i class="fas fa-magic"></i>
          </div>
          <h3 class="text-xl font-semibold mb-4 font-[Orbitron] text-cyan-300">3. Auto-Replies Activated</h3>
          <p class="text-gray-300">Watch as Comment-Wizard handles your comments while you focus on creating amazing content.</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- FAQ Section -->
  <section class="py-20 px-4 md:px-8 w-full bg-gradient-to-b from-transparent to-[#141B2D]/30">
    <div class="container mx-auto max-w-6xl">      
      <div class="text-center mb-16 scale-animation">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 font-[Orbitron] gradient-text">Frequently Asked Questions</h2>
      </div>
      <div class="space-y-6">
        <!-- FAQ Item 1 -->
        <div class="faq-item card p-6 glass-effect border border-blue-500/20 fade-up-animation">
          <button class="faq-question w-full flex justify-between items-center">
            <span class="text-xl font-medium font-[Orbitron] text-blue-300">How does Comment-Wizard access my YouTube channel?</span>
            <i class="fas fa-chevron-down text-purple-500 transition-transform"></i>
          </button>
          <div class="faq-answer mt-4 text-gray-300 hidden">
            <p>Comment-Wizard uses YouTube's official OAuth authentication system, which means we never see or store your password. You can revoke access at any time from your YouTube account settings.</p>
          </div>
        </div>

        <!-- New Highlighted FAQ Item -->
        <div class="faq-item card p-6 glass-effect border border-purple-500/30 bg-purple-900/20 fade-up-animation">
          <button class="faq-question w-full flex justify-between items-center">
            <span class="text-xl font-medium font-[Orbitron] text-purple-300">Is this app only for YouTube?</span>
            <i class="fas fa-chevron-down text-purple-500 transition-transform"></i>
          </button>
          <div class="faq-answer mt-4 text-gray-300 hidden">
            <p>The first version will only support YouTube, then later other platforms like X, Instagram, etc. will be added to expand our capabilities.</p>
          </div>
        </div>

        <!-- FAQ Item 2 -->
        <div class="faq-item card p-6 glass-effect border border-blue-500/20 fade-up-animation delay-100">
          <button class="faq-question w-full flex justify-between items-center">
            <span class="text-xl font-medium font-[Orbitron] text-blue-300">Can I customize the AI's responses?</span>
            <i class="fas fa-chevron-down text-purple-500 transition-transform"></i>
          </button>
          <div class="faq-answer mt-4 text-gray-300 hidden">
            <p>Absolutely! You can train the AI using your past comments and content, provide guidelines for how to respond, and even create custom response templates for different types of comments.</p>
          </div>
        </div>

        <!-- FAQ Item 3 -->
        <div class="faq-item card p-6 glass-effect border border-blue-500/20 fade-up-animation delay-200">
          <button class="faq-question w-full flex justify-between items-center">
            <span class="text-xl font-medium font-[Orbitron] text-blue-300">What happens if the AI doesn't know how to respond?</span>
            <i class="fas fa-chevron-down text-purple-500 transition-transform"></i>
          </button>
          <div class="faq-answer mt-4 text-gray-300 hidden">
            <p>For complex comments or questions outside its training, Comment-Wizard will flag these for your personal review rather than providing an incorrect response. You can then respond manually or use it as a learning opportunity for the AI.</p>
          </div>
        </div>

        <!-- FAQ Item 4 -->
        <div class="faq-item card p-6 glass-effect border border-blue-500/20 fade-up-animation delay-300">
          <button class="faq-question w-full flex justify-between items-center">
            <span class="text-xl font-medium font-[Orbitron] text-blue-300">When will Comment-Wizard be available?</span>
            <i class="fas fa-chevron-down text-purple-500 transition-transform"></i>
          </button>
          <div class="faq-answer mt-4 text-gray-300 hidden">
            <p>We're currently in private beta testing and plan to launch publicly soon. Join our waitlist to be among the first to know when we launch and get early access!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Waitlist Section -->
  <section id="waitlist" class="py-20 px-4 md:px-8 w-full relative">
    <div class="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 z-0"></div>
    <div class="container mx-auto max-w-6xl relative z-10">      
      <div class="card p-8 md:p-12 max-w-4xl mx-auto glass-effect border border-blue-500/20 scale-animation">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 font-[Orbitron] neon-text">Join The Waitlist</h2>
          <p class="text-xl text-gray-300">Be the first to know when Comment-Wizard launches. Early access for waitlist members.</p>
        </div>

        <form id="waitlist-form" class="space-y-6 max-w-2xl mx-auto">
          <div class="fade-up-animation">
            <label for="name" class="block text-sm font-medium mb-2 text-blue-300">Full Name</label>
            <input type="text" id="name" name="name" class="input-field" placeholder="Your name" required>
          </div>
          <div class="fade-up-animation delay-100">
            <label for="email" class="block text-sm font-medium mb-2 text-blue-300">Email Address</label>
            <input type="email" id="email" name="email" class="input-field" placeholder="you@example.com" required>
          </div>
          <div class="fade-up-animation delay-400">
            <button type="submit" id="waitlist-submit" class="btn-primary w-full">
              <span>Join the Waitlist</span>
            </button>
          </div>
          <p class="text-sm text-gray-400 text-center fade-up-animation delay-500">We respect your privacy and will never share your information.</p>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-8 px-4 md:px-8 border-t border-blue-900/30 text-center w-full relative backdrop-blur-sm">
    <div class="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] to-transparent opacity-70 z-0"></div>
    <div class="relative z-10 fade-up-animation">
      <p class="text-gray-400">&copy; 2025 <span class="text-blue-400">Comment-Wizard</span>. All rights reserved.</p>
      <div class="flex justify-center gap-6 mt-4">
        <a href="https://x.com/AnupamDutta_dev" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-400 transition-colors"><i class="fab fa-twitter"></i></a>
        <a href="https://www.youtube.com/@AnupamDutta-l9" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-400 transition-colors"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
  </footer>
`

// JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // FAQ accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = question.querySelector('i');
    
    question.addEventListener('click', () => {
      answer.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
      
      // Close other open FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherIcon = otherItem.querySelector('i');
          
          if (!otherAnswer.classList.contains('hidden')) {
            otherAnswer.classList.add('hidden');
            otherIcon.classList.remove('rotate-180');
          }
        }
      });
    });
  });

  // Simple waitlist form handling with client-side submission only
  const waitlistForm = document.getElementById('waitlist-form');
  const waitlistSubmit = document.getElementById('waitlist-submit');
  
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get user data
      const userName = document.getElementById('name').value;
      const userEmail = document.getElementById('email').value;
      
      // Show loading state
      waitlistSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
      waitlistSubmit.disabled = true;
      
      // Log data for debugging
      console.log('Form submission (frontend only):', { name: userName, email: userEmail });
      
      // Simulate processing with a short delay
      setTimeout(() => {
        // Replace form with success message
        const formContainer = waitlistForm.parentElement;
        formContainer.innerHTML = `
          <div class="text-center py-8 animate-scale-in">
            <div class="text-5xl text-green-500 mb-4 animate-bounce-in">
              <i class="fas fa-check-circle"></i>
            </div>
            <h3 class="text-2xl font-bold mb-2 font-[Orbitron] neon-text">You're on the list, ${userName}!</h3>
            <p class="text-gray-300 mb-6">Thanks for joining our waitlist. We'll notify you when Comment-Wizard launches.</p>
            <p class="text-gray-400">This is a demo version with frontend-only functionality.</p>
          </div>
        `;
      }, 1500);
    });
  }

  // Improved parallax effect for futuristic feel
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    // Parallax for background elements
    document.querySelectorAll('.neon-grid').forEach(grid => {
      const speed = 0.05;
      grid.style.transform = `translateY(${scrollY * speed}px)`;
    });
    
    // Add glow intensity based on scroll
    const heroSection = document.querySelector('.hero-glow');
    if (heroSection) {
      const scrollDistance = Math.min(scrollY / 500, 1);
      heroSection.style.opacity = 0.3 + (scrollDistance * 0.3);
    }
    
    // Animate cards on scroll
    document.querySelectorAll('.card').forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight * 0.85) {
        card.style.transform = 'translateY(0)';
        card.style.opacity = '1';
      }
    });
  });

  // Enhanced scroll reveal animations
  const animateElements = document.querySelectorAll('.fade-up-animation, .scale-animation, .slide-in-animation');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // Add special animation for elements with neon effect
        if (entry.target.classList.contains('neon-glow')) {
          entry.target.style.animation = 'glowPulse 2s ease-in-out infinite alternate';
        }
      }
    });
  }, observerOptions);
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
  
  // Super smooth scrolling implementation with physics-based animation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      // Physics-based smooth scrolling
      const startPosition = window.scrollY || window.pageYOffset;
      const targetPosition = targetElement.getBoundingClientRect().top + startPosition - 80; // Adjusted offset
      
      // More refined parameters for smoother scrolling
      const duration = 1200; // longer duration for smoother feel
      const startTime = performance.now();
      
      // Using a more sophisticated easing function for butter-smooth scrolling
      function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      }
      
      function smoothScroll(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutExpo(progress);
        
        // Calculate the precise position to scroll to based on the easing
        const currentPosition = startPosition + (targetPosition - startPosition) * easedProgress;
        
        // Use both for best browser compatibility
        window.scrollTo({
          top: currentPosition,
          behavior: 'auto' // We're handling the smoothness ourselves
        });
        
        // Continue the animation until duration is complete
        if (progress < 1) {
          requestAnimationFrame(smoothScroll);
        }
      }
      
      // Start the animation
      requestAnimationFrame(smoothScroll);
      
      // If mobile menu is open, close it
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
  });
  
  // Helps prevent scroll jank by optimizing scroll handlers
  let scrollTimeout;
  let lastScrollY = window.scrollY;
  const scrollHandler = () => {
    const scrollY = window.scrollY;
    
    // Only process if scroll change is significant 
    if (Math.abs(scrollY - lastScrollY) > 5) {
      lastScrollY = scrollY;
      
      // Optimize animations on scroll
      const heroSection = document.querySelector('.hero-glow');
      if (heroSection) {
        const scrollDistance = Math.min(scrollY / 500, 1);
        heroSection.style.opacity = 0.3 + (scrollDistance * 0.3);
      }
      
      // Parallax optimized to run on main thread with transform instead of top/left
      document.querySelectorAll('.neon-grid').forEach(grid => {
        const speed = 0.05;
        grid.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }
  };
  
  window.addEventListener('scroll', () => {
    // Use requestAnimationFrame to limit scroll handling for better performance
    if (!scrollTimeout) {
      scrollTimeout = requestAnimationFrame(() => {
        scrollHandler();
        scrollTimeout = null;
      });
    }
  }, { passive: true }); // Using passive for better scroll performance
  
  // Typing effect for code snippet
  const codeElements = document.querySelectorAll('.typing-animation');
  
  codeElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    
    let charIndex = 0;
    const typingSpeed = 70; // ms per character
    
    function typeText() {
      if (charIndex < text.length) {
        element.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        element.classList.add('typing-complete');
      }
    }
    
    // Start typing when element is in view
    const typingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            typeText();
          }, 500);
          typingObserver.unobserve(element);
        }
      });
    }, { threshold: 0.5 });
    
    typingObserver.observe(element);
  });
  
  // Adds a parallax mouse movement effect to certain elements
  const parallaxElements = document.querySelectorAll('.card');
  let mouseMoveTimeout;
  
  document.addEventListener('mousemove', (e) => {
    if (!mouseMoveTimeout) {
      mouseMoveTimeout = requestAnimationFrame(() => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        parallaxElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const elementCenterX = rect.left + rect.width / 2;
          const elementCenterY = rect.top + rect.height / 2;
          
          const diffX = mouseX - elementCenterX;
          const diffY = mouseY - elementCenterY;
          
          // Only apply effect if mouse is relatively close to the element
          const distance = Math.sqrt(diffX * diffX + diffY * diffY);
          const maxDistance = 500;
          
          if (distance < maxDistance) {
            const strength = 0.02;
            const moveX = diffX * strength;
            const moveY = diffY * strength;
            
            // Using transform instead of top/left for better performance
            element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
          } else {
            element.style.transform = 'translate3d(0, 0, 0)';
          }
        });
        
        mouseMoveTimeout = null;
      });
    }
  }, { passive: true });
  
  // Preload all sections to ensure smooth transitions
  setTimeout(() => {
    document.querySelectorAll('section').forEach(section => {
      section.style.visibility = 'visible';
    });
  }, 100);

  // Force smooth scrolling by preventing default wheel event
  document.addEventListener('wheel', function(e) {
    const scrollAmount = e.deltaY;
    const currentScroll = window.scrollY || window.pageYOffset;
    
    window.scrollTo({
      top: currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  }, { passive: false });
});