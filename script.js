// =========================================
// 1. NAVBAR DYNAMIC FOCUS SCROLL LOGIC
// =========================================
const sections = document.querySelectorAll('.glass-section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 160)) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// =========================================
// 2. MULTI-MODAL LOGIC (1BHK, 2BHK, 3BHK)
// =========================================
const modalTriggers = {
    'open1BHK': 'bhkModal1',
    'open2BHK': 'bhkModal2',
    'open3BHK': 'bhkModal3'
};

// Open Modals
Object.keys(modalTriggers).forEach(triggerId => {
    const btn = document.getElementById(triggerId);
    if (btn) {
        btn.addEventListener('click', () => {
            const modalId = modalTriggers[triggerId];
            document.getElementById(modalId).classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    }
});

// Close Modals via Close Button Element Attribute
document.querySelectorAll('.close-modal-btn').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});

// Close Modals on Outer Overlay Wrapper Click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
});

// =========================================
// 3. EXECUTIVE ENQUIRY LEAD PROCESSOR
// =========================================
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    const email = document.getElementById('userEmail').value;

    const targetDeskNumber = "919634298218"; // <-- Real phone number yahan dalen 91 prefix ke sath
    const textTemplate = `Hello UMRSHA INVESTMENT,%0AI am interested in your residential units.%0A%0A*Official Business Lead Info:*%0A- *Client Name:* ${name}%0A- *Verified Phone:* ${phone}%0A- *Email Id:* ${email}%0A%0APlease assign a Relationship Desk Officer to contact me.`;
    
    alert(`Thank you for choosing us, ${name}. Connecting your request to our Secure Executive Response System...`);
    window.location.href = `https://api.whatsapp.com/send?phone=${targetDeskNumber}&text=${textTemplate}`;
});