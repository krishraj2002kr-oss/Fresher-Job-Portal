// ===== JOB DATA =====
const allJobs = [
  {
    id: 1, title: "Junior Java Developer", company: "Infosys", location: "Bangalore",
    type: "Full-Time", category: "Software", salary: "₹4.5 – 6 LPA",
    tags: ["Java", "Spring Boot", "MySQL"], posted: "2 days ago",
    logoText: "IN", logoBg: "#e8f5e9", logoColor: "#2e7d32",
    description: "We are looking for enthusiastic Java Developer freshers to join our growing team in Bangalore.",
    responsibilities: ["Develop and maintain Java-based applications","Work with Spring Boot framework","Write clean, optimized code","Collaborate with senior developers","Participate in code reviews and testing"],
    requirements: ["B.Tech/B.E in CS, IT or related field","Strong knowledge of Core Java","Basic understanding of Spring Boot","Good problem-solving skills","CGPA 6.5 or above"],
    perks: ["Health Insurance", "5-day work week", "Free meals", "Learning budget ₹20,000/yr"]
  },
  {
    id: 2, title: "Frontend Developer Intern", company: "Swiggy", location: "Bangalore",
    type: "Internship", category: "Software", salary: "₹20,000/month",
    tags: ["HTML", "CSS", "JavaScript", "React"], posted: "1 day ago",
    logoText: "Sw", logoBg: "#fff3e0", logoColor: "#e65100",
    description: "Join Swiggy's frontend team and work on real products used by millions of users across India.",
    responsibilities: ["Build responsive UI components","Work with React.js","Integrate REST APIs","Fix UI bugs","Write unit tests"],
    requirements: ["Pursuing B.Tech/BCA (final year)","Good knowledge of HTML, CSS, JS","Basic React knowledge","Portfolio/GitHub required","Good communication skills"],
    perks: ["Paid Internship", "Full-time PPO opportunity", "Free Swiggy credits", "Work from office – Bangalore"]
  },
  {
    id: 3, title: "Data Analyst – Entry Level", company: "Amazon India", location: "Hyderabad",
    type: "Full-Time", category: "Data", salary: "₹6 – 8 LPA",
    tags: ["Python", "SQL", "Excel", "Power BI"], posted: "3 days ago",
    logoText: "Az", logoBg: "#e3f2fd", logoColor: "#1565c0",
    description: "Amazon India is hiring fresher Data Analysts to join our analytics team in Hyderabad.",
    responsibilities: ["Analyze large datasets","Build dashboards using Power BI","Write SQL queries","Create Python scripts for automation","Present insights to stakeholders"],
    requirements: ["Bachelor's degree in any field","Strong SQL and Excel skills","Knowledge of Python is a plus","Analytical mindset","Good written communication"],
    perks: ["ESOP options", "Health & dental insurance", "Gym membership", "Learning & certification budget"]
  },
  {
    id: 4, title: "Digital Marketing Executive", company: "Zomato", location: "Delhi",
    type: "Full-Time", category: "Marketing", salary: "₹3.5 – 5 LPA",
    tags: ["SEO", "Social Media", "Google Ads", "Analytics"], posted: "Today",
    logoText: "Zo", logoBg: "#fce4ec", logoColor: "#c62828",
    description: "Zomato is looking for creative and data-driven digital marketers to grow our online presence.",
    responsibilities: ["Manage social media campaigns","Run Google and Meta ads","Track and analyze campaign performance","Create content calendars","Work with creative team"],
    requirements: ["Bachelor's degree in Marketing/BBA/MBA","Knowledge of SEO and digital tools","Creative mindset","Good communication skills","Google Ads certification a plus"],
    perks: ["Free Zomato Gold subscription", "WFH Fridays", "Performance bonuses", "Health insurance"]
  },
  {
    id: 5, title: "HR Executive – Fresher", company: "TCS", location: "Mumbai",
    type: "Full-Time", category: "HR", salary: "₹3 – 4 LPA",
    tags: ["Recruitment", "Excel", "Communication", "HRMS"], posted: "4 days ago",
    logoText: "TCS", logoBg: "#fff3e0", logoColor: "#f57c00",
    description: "TCS invites fresh HR graduates to join their Human Resources department across Mumbai office.",
    responsibilities: ["Assist in end-to-end recruitment","Maintain employee records","Coordinate onboarding programs","Help with payroll processing","Organize HR events"],
    requirements: ["BBA / MBA (HR) or equivalent","Proficient in MS Excel and Word","Good communication & interpersonal skills","Knowledge of HRMS tools preferred","Freshers welcome"],
    perks: ["PF & ESI", "Annual increment", "Transport facility", "Comprehensive training program"]
  },
  {
    id: 6, title: "UI/UX Design Intern", company: "Razorpay", location: "Bangalore",
    type: "Internship", category: "Design", salary: "₹25,000/month",
    tags: ["Figma", "UI Design", "Prototyping", "Wireframing"], posted: "Today",
    logoText: "Rz", logoBg: "#ede7f6", logoColor: "#4527a0",
    description: "Razorpay is hiring passionate UI/UX designers to help shape the future of fintech in India.",
    responsibilities: ["Design user interfaces for web and mobile","Create wireframes and prototypes","Conduct user research","Collaborate with product and engineering","Iterate on designs based on feedback"],
    requirements: ["Pursuing or completed degree in Design/CS","Strong Figma skills mandatory","Portfolio required","Understanding of UX principles","Attention to detail"],
    perks: ["PPO after internship", "₹25K stipend", "MacBook provided", "Design tool subscriptions"]
  },
  {
    id: 7, title: "Python Developer – Backend", company: "Zepto", location: "Mumbai",
    type: "Full-Time", category: "Software", salary: "₹5 – 7 LPA",
    tags: ["Python", "Django", "PostgreSQL", "REST APIs"], posted: "2 days ago",
    logoText: "Ze", logoBg: "#e8f5e9", logoColor: "#1b5e20",
    description: "Zepto is India's fastest growing 10-minute delivery startup. Join our backend engineering team!",
    responsibilities: ["Build backend APIs with Django","Optimize database queries","Write automated tests","Work in agile sprints","Document code and APIs"],
    requirements: ["B.Tech/BCA in CS or IT","Good Python fundamentals","Basic Django or Flask knowledge","Understanding of REST APIs","Git knowledge preferred"],
    perks: ["Stock options", "Rapid career growth", "₹20K annual learning budget", "Team outings"]
  },
  {
    id: 8, title: "Finance Analyst Trainee", company: "HDFC Bank", location: "Chennai",
    type: "Full-Time", category: "Finance", salary: "₹3.2 – 4.5 LPA",
    tags: ["Financial Modeling", "Excel", "Tally", "Accounting"], posted: "5 days ago",
    logoText: "HD", logoBg: "#e3f2fd", logoColor: "#0d47a1",
    description: "HDFC Bank is recruiting fresh graduates for its Finance & Accounts department across Chennai branches.",
    responsibilities: ["Assist in financial reporting","Maintain accounts and ledgers","Prepare MIS reports","Help with audits","Manage invoicing and payments"],
    requirements: ["B.Com / BBA Finance / MBA Finance","Strong Excel skills","Knowledge of Tally ERP","Good analytical skills","Freshers from 2023/2024 batch"],
    perks: ["Bank benefits", "PF & gratuity", "Housing loan benefits", "Performance bonuses"]
  },
  {
    id: 9, title: "Content Writer – Fresher", company: "Byju's", location: "Remote",
    type: "Remote", category: "Content", salary: "₹2.5 – 3.5 LPA",
    tags: ["Content Writing", "SEO", "Blogging", "Research"], posted: "Today",
    logoText: "By", logoBg: "#e8f4fd", logoColor: "#1565c0",
    description: "Byju's is looking for passionate content writers to create educational content for students across India.",
    responsibilities: ["Write blog posts and articles","Create SEO-optimized content","Research topics deeply","Edit and proofread content","Meet publishing deadlines"],
    requirements: ["Any bachelor's degree","Excellent English writing skills","Understanding of SEO basics","Ability to simplify complex topics","Samples/portfolio preferred"],
    perks: ["100% remote work", "Flexible hours", "Byju's premium subscription", "Quarterly bonuses"]
  },
  {
    id: 10, title: "Mechanical Engineer – Fresher", company: "Tata Motors", location: "Pune",
    type: "Full-Time", category: "Engineering", salary: "₹4 – 5.5 LPA",
    tags: ["AutoCAD", "SolidWorks", "Manufacturing", "Quality"], posted: "3 days ago",
    logoText: "TM", logoBg: "#fafafa", logoColor: "#333",
    description: "Tata Motors is hiring fresh Mechanical Engineers to join their manufacturing and R&D divisions in Pune.",
    responsibilities: ["Assist in product design and development","Prepare engineering drawings","Participate in quality checks","Work on process improvements","Document technical specifications"],
    requirements: ["B.E/B.Tech in Mechanical Engineering","Knowledge of AutoCAD and SolidWorks","Good understanding of manufacturing processes","CGPA 6.0+","Freshers from 2023/2024 batch only"],
    perks: ["Company vehicle","Medical insurance for family","Canteen facility","Housing allowance"]
  },
  {
    id: 11, title: "Data Science Intern", company: "Flipkart", location: "Bangalore",
    type: "Internship", category: "Data", salary: "₹30,000/month",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"], posted: "1 day ago",
    logoText: "Fl", logoBg: "#fce4ec", logoColor: "#ad1457",
    description: "Flipkart's Data Science team is looking for sharp minds to work on recommendation engines and analytics.",
    responsibilities: ["Build ML models for recommendations","Analyze customer data","Experiment with A/B testing","Work with big data tools","Present findings to product teams"],
    requirements: ["Pursuing/completed B.Tech in CS/Data Science","Strong Python & ML knowledge","Familiarity with Pandas, NumPy","Kaggle profile or projects required","Statistics fundamentals"],
    perks: ["₹30K stipend", "PPO after 6 months", "Laptop provided", "Free Flipkart credits"]
  },
  {
    id: 12, title: "Business Development Executive", company: "upGrad", location: "Hyderabad",
    type: "Full-Time", category: "Marketing", salary: "₹3 – 5 LPA + Incentives",
    tags: ["Sales", "CRM", "Communication", "Target-oriented"], posted: "Today",
    logoText: "uG", logoBg: "#e8f5e9", logoColor: "#2e7d32",
    description: "upGrad is hiring energetic freshers to drive student admissions and revenue growth across India.",
    responsibilities: ["Call potential learners and explain courses","Achieve monthly admission targets","Use CRM tools to track leads","Follow up with prospects","Report daily progress to managers"],
    requirements: ["Any bachelor's degree","Excellent verbal communication","Target-oriented mindset","Basic computer skills","Freshers are highly preferred"],
    perks: ["₹50K+ monthly incentives possible", "Fast-track promotion", "Health insurance", "Sales training provided"]
  }
];

// ===== MERGE CUSTOM JOBS FROM ADMIN =====
function getAllJobsWithCustom() {
  const customJobs = JSON.parse(localStorage.getItem('freshhire_custom_jobs') || '[]');
  return [...customJobs, ...allJobs];
}

let displayedJobs = getAllJobsWithCustom();
let activeChip = 'all';
let categoryFilter = '';

// ===== RENDER JOBS =====
function renderJobs(jobs) {
  const grid = document.getElementById('jobsGrid');
  const noJobs = document.getElementById('noJobs');

  if (jobs.length === 0) {
    grid.innerHTML = '';
    noJobs.style.display = 'block';
    return;
  }
  noJobs.style.display = 'none';

  const badgeClass = { 'Full-Time': 'badge-ft', 'Internship': 'badge-intern', 'Part-Time': 'badge-pt', 'Remote': 'badge-remote' };

  grid.innerHTML = jobs.map(job => `
    <div class="job-card" onclick="openJobDetail(${job.id})">
      <div class="job-card-header">
        <div class="job-logo" style="background:${job.logoBg};color:${job.logoColor}">${job.logoText}</div>
        <div class="job-info">
          <div class="job-title">${job.title}</div>
          <div class="job-company">${job.company}</div>
        </div>
        <span class="job-badge ${badgeClass[job.type] || 'badge-ft'}">${job.type}</span>
      </div>
      <div class="job-tags">
        ${job.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="job-meta">
        <span>📍 ${job.location}</span>
        <span>🎓 Fresher</span>
        <span>🕐 ${job.posted}</span>
      </div>
      <div class="job-footer">
        <span class="job-salary">${job.salary}</span>
        <button class="apply-btn" onclick="event.stopPropagation(); applyForJob(${job.id})">Apply Now →</button>
      </div>
    </div>
  `).join('');
}

// ===== FILTER JOBS =====
function filterJobs() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const location = document.getElementById('locationFilter').value;
  const type = document.getElementById('typeFilter').value;

  const mergedJobs = getAllJobsWithCustom();
  displayedJobs = mergedJobs.filter(job => {
    const matchSearch = !search ||
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.tags.some(t => t.toLowerCase().includes(search)) ||
      job.category.toLowerCase().includes(search);
    const matchLocation = !location || job.location === location;
    const matchType = !type || job.type === type || (type === 'Remote' && job.location === 'Remote');
    const matchChip = activeChip === 'all' || job.type === activeChip || (activeChip === 'Remote' && job.location === 'Remote');
    const matchCategory = !categoryFilter || job.category === categoryFilter;
    return matchSearch && matchLocation && matchType && matchChip && matchCategory;
  });
  renderJobs(displayedJobs);
  if (search || location || type || categoryFilter) {
    document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' });
  }
}

function setActive(el, type) {
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  activeChip = type;
  filterJobs();
}

function filterByCategory(cat) {
  categoryFilter = cat;
  document.getElementById('searchInput').value = '';
  document.getElementById('locationFilter').value = '';
  document.getElementById('typeFilter').value = '';
  activeChip = 'all';
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.chip').classList.add('active');
  filterJobs();
  document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' });
}

function sortJobs(method) {
  if (method === 'newest') {
    displayedJobs.sort((a, b) => a.id - b.id);
  } else if (method === 'salary') {
    displayedJobs.sort((a, b) => {
      const getNum = s => parseInt(s.replace(/[^0-9]/g, '')) || 0;
      return getNum(b.salary) - getNum(a.salary);
    });
  } else if (method === 'company') {
    displayedJobs.sort((a, b) => a.company.localeCompare(b.company));
  }
  renderJobs(displayedJobs);
}

function loadMore() {
  showToast('✅ All 12 jobs are loaded! More coming soon.', 'success');
}

// ===== JOB DETAIL MODAL =====
function openJobDetail(id) {
  const job = getAllJobsWithCustom().find(j => j.id === id);
  if (!job) return;

  const content = document.getElementById('jobModalContent');
  content.innerHTML = `
    <div class="jd-header">
      <div class="jd-logo" style="background:${job.logoBg};color:${job.logoColor}">${job.logoText}</div>
      <div>
        <h2 class="jd-title">${job.title}</h2>
        <p class="jd-company">${job.company} · ${job.location}</p>
        <span class="job-badge ${getBadgeClass(job.type)}">${job.type}</span>
      </div>
    </div>
    <div class="jd-quick">
      <div class="jd-quick-item">💰 <strong>${job.salary}</strong></div>
      <div class="jd-quick-item">📍 <strong>${job.location}</strong></div>
      <div class="jd-quick-item">💼 <strong>${job.type}</strong></div>
      <div class="jd-quick-item">🕐 Posted <strong>${job.posted}</strong></div>
    </div>
    <div class="jd-section">
      <h4>About the Role</h4>
      <p style="font-size:14px;color:#64748b;line-height:1.7">${job.description}</p>
    </div>
    <div class="jd-section">
      <h4>Responsibilities</h4>
      <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
    </div>
    <div class="jd-section">
      <h4>Requirements</h4>
      <ul>${job.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
    </div>
    <div class="jd-section">
      <h4>Perks & Benefits</h4>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${job.perks.map(p => `<span style="background:#f0f9ff;color:#0369a1;padding:6px 14px;border-radius:20px;font-size:13px;font-weight:500">${p}</span>`).join('')}
      </div>
    </div>
    <div class="jd-apply-row">
      <button class="apply-btn" onclick="closeModal('jobModal'); applyForJob(${job.id})">Apply Now →</button>
      <button class="btn btn-ghost" onclick="closeModal('jobModal')">Maybe Later</button>
    </div>
  `;
  openModal('jobModal');
}

function getBadgeClass(type) {
  return { 'Full-Time': 'badge-ft', 'Internship': 'badge-intern', 'Part-Time': 'badge-pt', 'Remote': 'badge-remote' }[type] || 'badge-ft';
}




function handleFileUpload(input) {
  const display = document.getElementById('fileNameDisplay');
  if (input.files.length > 0) {
    display.style.display = 'block';
    display.textContent = '📄 ' + input.files[0].name + ' selected';
  }
}

function submitApplication() {
  const name = document.getElementById('appName').value.trim();
  const email = document.getElementById('appEmail').value.trim();
  const phone = document.getElementById('appPhone').value.trim();
  const degree = document.getElementById('appDegree').value.trim();
  const skills = document.getElementById('appSkills').value.trim();
  const cover = document.getElementById('appCover').value.trim();

  if (!name || !email || !phone || !degree) {
    showToast('❗ Please fill in all required fields.', 'error');
    return;
  }
  if (!email.includes('@') || !email.includes('.')) {
    showToast('❗ Please enter a valid email address.', 'error');
    return;
  }

  // Get current job being applied for
  const jobTitle = document.getElementById('applyJobTitle').textContent;

  // Build application object
  const application = {
    id: 'APP' + Date.now(),
    applicantName: name,
    email: email,
    phone: phone,
    degree: degree,
    skills: skills,
    coverLetter: cover,
    jobTitle: jobTitle,
    appliedOn: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
    status: 'Pending'
  };

  // Save to localStorage
  const existing = JSON.parse(localStorage.getItem('freshhire_applications') || '[]');
  existing.push(application);
  localStorage.setItem('freshhire_applications', JSON.stringify(existing));

  closeModal('applyModal');
  renderMyApplications();
  setTimeout(() => {
    showToast('🎉 Application submitted! Track status in My Applications.', 'success');
  }, 400);

  // Reset form
  ['appName','appEmail','appPhone','appDegree','appSkills','appCover'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('fileNameDisplay').style.display = 'none';
}

// ===== AUTH: localStorage users =====
function getUsers() {
  return JSON.parse(localStorage.getItem('freshhire_users') || '[]');
}
function saveUsers(users) {
  localStorage.setItem('freshhire_users', JSON.stringify(users));
}
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('freshhire_current_user') || 'null');
}
function setCurrentUser(user) {
  localStorage.setItem('freshhire_current_user', JSON.stringify(user));
}

function handleRegister() {
  const firstName = document.getElementById('regFirstName').value.trim();
  const lastName = document.getElementById('regLastName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  const role = document.getElementById('regRole').value;
  const college = document.getElementById('regCollege').value.trim();

  if (!firstName || !email || !password) {
    showToast('❗ Please fill in First Name, Email, and Password.', 'error');
    return;
  }
  if (!email.includes('@') || !email.includes('.')) {
    showToast('❗ Please enter a valid email address.', 'error');
    return;
  }
  if (password.length < 4) {
    showToast('❗ Password must be at least 4 characters.', 'error');
    return;
  }

  const users = getUsers();
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    showToast('❗ An account with this email already exists. Try logging in.', 'error');
    return;
  }

  const newUser = {
    id: 'USR' + Date.now(),
    firstName,
    lastName,
    email: email.toLowerCase(),
    password,
    role,
    college,
    createdOn: new Date().toISOString()
  };
  users.push(newUser);
  saveUsers(users);

  // Auto-login after register
  setCurrentUser({ id: newUser.id, firstName: newUser.firstName, lastName: newUser.lastName, email: newUser.email });
  closeModal('registerModal');
  updateNavForAuth();
  setTimeout(() => showToast('🎉 Account created! Welcome to FreshHire, ' + firstName + '!', 'success'), 400);
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    showToast('❗ Please fill in email and password.', 'error');
    return;
  }

  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

  if (!user) {
    showToast('❗ Invalid email or password. Please try again.', 'error');
    return;
  }

  setCurrentUser({ id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email });
  closeModal('loginModal');
  updateNavForAuth();
  renderMyApplications();
  setTimeout(() => showToast('👋 Welcome back, ' + user.firstName + '!', 'success'), 400);
}

function handleLogout() {
  localStorage.removeItem('freshhire_current_user');
  updateNavForAuth();
  showToast('👋 Logged out successfully.', 'success');
}

function updateNavForAuth() {
  const user = getCurrentUser();
  const navActions = document.getElementById('navActions');
  const navLoggedIn = document.getElementById('navLoggedIn');
  const navMyApps = document.getElementById('navMyApps');
  const myAppsSection = document.getElementById('myApplications');

  if (user) {
    navActions.style.display = 'none';
    navLoggedIn.style.display = 'flex';
    navMyApps.style.display = 'list-item';
    document.getElementById('userGreeting').textContent = '👋 Hi, ' + user.firstName;
    myAppsSection.style.display = 'block';
    renderMyApplications();
  } else {
    navActions.style.display = 'flex';
    navLoggedIn.style.display = 'none';
    navMyApps.style.display = 'none';
    myAppsSection.style.display = 'none';
  }
}

// ===== MY APPLICATIONS DASHBOARD =====
function renderMyApplications() {
  const user = getCurrentUser();
  if (!user) return;

  const allApps = JSON.parse(localStorage.getItem('freshhire_applications') || '[]');
  const myApps = allApps.filter(a => a.email.toLowerCase() === user.email.toLowerCase());

  const grid = document.getElementById('myAppsGrid');
  const noApps = document.getElementById('noMyApps');

  if (myApps.length === 0) {
    grid.innerHTML = '';
    noApps.style.display = 'block';
    return;
  }
  noApps.style.display = 'none';

  const statusIcons = {
    'Pending': '⏳',
    'Reviewing': '🔍',
    'Shortlisted': '✅',
    'Rejected': '❌'
  };
  const statusClasses = {
    'Pending': 'my-app-pending',
    'Reviewing': 'my-app-reviewing',
    'Shortlisted': 'my-app-shortlisted',
    'Rejected': 'my-app-rejected'
  };

  grid.innerHTML = myApps.map(app => `
    <div class="my-app-card ${statusClasses[app.status] || 'my-app-pending'}">
      <div class="my-app-status-bar"></div>
      <div class="my-app-header">
        <h4>${app.jobTitle}</h4>
        <span class="my-app-status-badge ${statusClasses[app.status]}">${statusIcons[app.status] || '⏳'} ${app.status}</span>
      </div>
      <div class="my-app-details">
        <div class="my-app-detail"><span>📅 Applied:</span> ${app.appliedOn}</div>
        <div class="my-app-detail"><span>🎓 Degree:</span> ${app.degree}</div>
        ${app.skills ? `<div class="my-app-detail"><span>🛠️ Skills:</span> ${app.skills}</div>` : ''}
      </div>
      <div class="my-app-id">ID: ${app.id}</div>
    </div>
  `).join('');
}

// Auto-refresh My Applications every 3 seconds to pick up admin changes
setInterval(() => {
  const user = getCurrentUser();
  if (user) renderMyApplications();
}, 3000);

// ===== APPLY: auto-fill if logged in =====
function applyForJob(id) {
  const user = getCurrentUser();
  if (!user) {
    showToast('❗ Please login or register to apply for jobs.', 'error');
    openModal('loginModal');
    return;
  }
  const job = getAllJobsWithCustom().find(j => j.id === id);
  if (job) document.getElementById('applyJobTitle').textContent = job.title + ' at ' + job.company;

  // Auto-fill name and email from logged-in user
  document.getElementById('appName').value = user.firstName + (user.lastName ? ' ' + user.lastName : '');
  document.getElementById('appEmail').value = user.email;
  openModal('applyModal');
}

// ===== MODAL HELPERS =====
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}
function switchModal(from, to) {
  closeModal(from);
  setTimeout(() => openModal(to), 250);
}

// Close modals on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['jobModal','applyModal','loginModal','registerModal'].forEach(id => closeModal(id));
  }
});

// ===== TOAST =====
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show ' + type;
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
});

// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderJobs(getAllJobsWithCustom());
  updateNavForAuth();
  // Prevent save-credential prompts
  document.querySelectorAll('form').forEach(f => f.setAttribute('autocomplete', 'off'));
});

