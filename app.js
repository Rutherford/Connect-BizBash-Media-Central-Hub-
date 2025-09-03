// Application Data from JSON
const appData = {
  complete_offerings: {
    live_event: [
      {
        name: "Preshow/Post-Show Attendee Email",
        description: "Email blasts sent to attendees before/after events to drive booth traffic and recap with a call-to-action",
        benefits: "Keeps brand top-of-mind; drives pre-event awareness and post-event follow-ups",
        pricing: "$5,000 per email",
        notes: "Typically timed around specific live events",
        category: "Live Event"
      },
      {
        name: "Event Targeting",
        description: "Pixel-based retargeting during events; ads within 5-mile radius of the convention center and cross-device after event",
        benefits: "Generates highly targeted brand awareness; device-agnostic targeting and extended reach after event",
        pricing: "$6,000 for ~400 clicks; $12,000 for ~1,000 clicks",
        notes: "Uses pixel capture of event attendees",
        category: "Live Event"
      }
    ],
    owned_media: [
      {
        name: "Onsite Display Ads",
        description: "Banner ads alongside daily editorial content on website",
        benefits: "High visibility next to fresh editorial content",
        pricing: "From $3,000 for 100k impressions",
        notes: "Ads placed next to regularly updated articles",
        category: "Owned Media"
      },
      {
        name: "Wallpapers",
        description: "Full-screen wallpapers across website for one week",
        benefits: "Appears on every page for maximum visibility",
        pricing: "$15,000",
        notes: "High-impact visual presence",
        category: "Owned Media"
      },
      {
        name: "Interstitial",
        description: "Full-screen ads that appear between page loads",
        benefits: "100% share-of-voice during viewing",
        pricing: "$10,000",
        notes: "Premium placement opportunity",
        category: "Owned Media"
      },
      {
        name: "Sponsored Social",
        description: "Sponsored posts across social media channels",
        benefits: "Leverages social media reach and engagement",
        pricing: "$5,000",
        notes: "Cross-platform social promotion",
        category: "Owned Media"
      },
      {
        name: "Multimedia Package",
        description: "Combination of multiple media formats and placements",
        benefits: "Comprehensive brand exposure across channels",
        pricing: "$20,000",
        notes: "Bundled offering for maximum impact",
        category: "Owned Media"
      },
      {
        name: "Dedicated Eblast",
        description: "Standalone email campaigns to targeted databases",
        benefits: "Direct communication with qualified audiences",
        pricing: "$10,000 (BizBash) - $7,500 (Connect/TSNN/CEN)",
        notes: "Database segmentation available",
        category: "Owned Media"
      },
      {
        name: "Newsletter Sponsorship",
        description: "Sponsored content within regular newsletters",
        benefits: "Integration with trusted editorial content",
        pricing: "$4,000",
        notes: "Multiple newsletter options available",
        category: "Owned Media"
      }
    ],
    paid_media_digital: [
      {
        name: "Content Activation",
        description: "Native retargeting campaigns with sponsored content",
        benefits: "Seamless integration with content consumption",
        pricing: "$7,500+",
        notes: "Native advertising approach",
        category: "Paid Media / Digital"
      },
      {
        name: "Video Pre-Roll",
        description: "Video advertisements that play before main content",
        benefits: "High engagement with video content viewers",
        pricing: "$10,000+ for completed views",
        notes: "Pay for completed views model",
        category: "Paid Media / Digital"
      },
      {
        name: "Banner Retargeting",
        description: "Display banner ads to previous website visitors",
        benefits: "Re-engages interested prospects",
        pricing: "$10,000 for 930,233 impressions",
        notes: "CPM: $10.75",
        category: "Paid Media / Digital"
      },
      {
        name: "Social Media Retargeting",
        description: "Targeted social media advertising campaigns",
        benefits: "Leverages social platform targeting capabilities",
        pricing: "Variable based on platform and reach",
        notes: "Multi-platform approach",
        category: "Paid Media / Digital"
      },
      {
        name: "Connected TV",
        description: "Video advertising on streaming platforms",
        benefits: "Reaches cord-cutters and streaming audiences",
        pricing: "$20,000 for 125,000 impressions",
        notes: "CPM: $160.00, platforms: YouTube TV, Prime, Hulu, MLB.tv, ESPN, Roku, Fire TV",
        category: "Paid Media / Digital"
      },
      {
        name: "Online Radio",
        description: "Audio advertising on digital radio platforms",
        benefits: "Reaches audio content consumers",
        pricing: "Variable based on platform and duration",
        notes: "Audio advertising option",
        category: "Paid Media / Digital"
      }
    ],
    print_media: [
      {
        name: "Spring Issue",
        description: "BizBash Spring magazine featuring Event Experience Awards and 40 Under 40",
        benefits: "High-quality print presence with industry recognition",
        pricing: "$7,000",
        notes: "March 2025 publication",
        category: "Print Media"
      },
      {
        name: "Fall Issue",
        description: "BizBash Fall magazine and marketplace guide",
        benefits: "Premium print advertising in industry publication",
        pricing: "$7,000",
        notes: "August 2025 publication",
        category: "Print Media"
      },
      {
        name: "Texas Meeting Planners Guide",
        description: "Comprehensive resource for Texas meeting planning",
        benefits: "Targeted regional market penetration",
        pricing: "$9,950",
        notes: "November 2025 publication",
        category: "Print Media"
      },
      {
        name: "Sports Facilities Guide",
        description: "Comprehensive sports facilities resource publication",
        benefits: "Specialized sports market targeting",
        pricing: "$7,000",
        notes: "April 2025 publication",
        category: "Print Media"
      }
    ]
  },
  technical_specifications: {
    content_marketing: [
      { item: "Copy Length", specification: "Max 500 words; informative and inspiring for planners; avoid excessive promotion" },
      { item: "Image Specs", specification: "One JPG/PNG image 1280x720; 72 DPI, low resolution; <30% text overlay recommended" },
      { item: "Caption & Credit", specification: "Include caption and photo credit (required for posting)" },
      { item: "Submission", specification: "Submit one week prior to post date via bizbash.com/contentmarketing" },
      { item: "Best Days", specification: "Ideal posting days are Tuesday and Thursday" },
      { item: "Editorial Style", specification: "Copy may be edited to match editorial style; first company mention links to BizBash listing" }
    ],
    video_pre_roll: [
      { item: "Duration", specification: "15-30 seconds maximum" },
      { item: "Audio", specification: "Audio permitted and recommended" },
      { item: "Formats", specification: ".flv, .mpg, .mp4, .mov, .wmv supported" },
      { item: "File Size", specification: "Maximum 200MB file size" },
      { item: "Aspect Ratio", specification: "4:3 or 16:9 aspect ratio" },
      { item: "Frame Rate", specification: "24+ fps minimum" },
      { item: "Click-Through", specification: "Click-through URL required" },
      { item: "Tracking", specification: "Third-party tracking supported (VAST 2.0, FLV, MP4, VPAID SWF)" }
    ],
    native_ads: [
      { item: "Title", specification: "Maximum of 55 characters, minimum of 5 characters, including spaces" },
      { item: "Body/Description", specification: "Maximum of 120 characters, minimum of 5 characters, including spaces" },
      { item: "Images", specification: "1200x627, 600x600, 800x600 pixel images required; JPG, PNG formats; <30% text overlay; optimal 750kb, max 4MB" },
      { item: "Logo", specification: "300x300 pixels, 1:1 ratio square on white background; minimum 72 PPI, recommended 144 PPI" },
      { item: "Sponsored By", specification: "25 character limit in Sponsored By text field" },
      { item: "Special Characters", specification: "No emojis; avoid UTF-8 special characters, trademark symbols, all caps to ensure compatibility" }
    ],
    banner_ads: [
      { item: "Desktop Leaderboard", specification: "970 x 90 pixels; JPG, GIF formats; 100KB-250KB max size; 5 business days lead time" },
      { item: "Mobile Leaderboard", specification: "300 x 50 pixels; JPG, GIF formats; 100KB-250KB max size; 5 business days lead time" },
      { item: "Half Page", specification: "300 x 600 pixels; JPG, GIF formats; 100KB-250KB max size; 5 business days lead time" },
      { item: "Billboard", specification: "970 x 250 pixels; JPG, GIF formats; 100KB-250KB max size; 5 business days lead time" },
      { item: "Display Box", specification: "300 x 250 pixels; JPG, GIF formats; 100KB-250KB max size; 5 business days lead time" },
      { item: "Rich Media", specification: "HTML5 supported; 15s animation max; 3x loop limit; 10 business days lead time" }
    ],
    email_marketing: [
      { item: "Width", specification: "600-728px width recommended" },
      { item: "Min Height", specification: "820px minimum height" },
      { item: "Images", specification: "~50KB each image; JPG, GIF, PNG formats" },
      { item: "HTML", specification: "HTML, CSS limited; no JavaScript or Flash" },
      { item: "Lead Time", specification: "5 business days minimum" },
      { item: "Content", specification: "Subject line, HTML content, plaintext version, images/links required" }
    ]
  },
  editorial_calendar_2025: {
    q1: [
      {
        month: "January",
        features: ["Most anticipated venue openings across U.S. and Canada for 2025", "Super Bowl watch party ideas", "Industry Innovators - Catering"],
        events: ["CES", "College Football Playoff", "Go West", "Grammy Awards"]
      },
      {
        month: "February",
        features: ["Valentine's Day-themed event ideas", "New/Recently Renovated Venues for Spring 2025"],
        events: ["New York Fashion Week", "Super Bowl", "NBA All-Star Weekend"]
      },
      {
        month: "March",
        features: ["St. Patrick's Day event ideas", "Spring 2025 benefits and gala design ideas", "2025 40 Under 40", "Event Experience Awards"],
        events: ["South by Southwest", "Academy Awards", "NCAA Final Four", "TED Conference"]
      }
    ],
    q2: [
      {
        month: "April",
        features: ["Pride event highlights and brand activations", "Industry Innovators - Event Technology"],
        events: ["Coachella", "NFT.NYC", "Connect Spring Marketplace", "NFL Draft"]
      },
      {
        month: "May",
        features: ["Industry Innovators - Experiential Agencies"],
        events: ["Met Gala", "Google I/O", "Robin Hood Benefit"]
      },
      {
        month: "June",
        features: ["Industry Innovators - Brands", "Summer 2025 benefits and gala design ideas"],
        events: ["White House Correspondents Association Dinner", "MPI WEC 2024", "IPW"]
      }
    ],
    q3: [
      {
        month: "July",
        features: ["Fourth of July-themed event ideas", "New/Recently Renovated Venues for Summer 2025", "BizBash Sports Power Players 2025"],
        events: ["ESSENCE Festival", "San Diego Comic-Con", "ESPY Awards"]
      },
      {
        month: "August",
        features: ["Holiday party ideas from corporate brands", "Back-to-school brand activations"],
        events: ["Cannes Lions", "Miami Swim Week", "MTV Video Music Awards", "Connect Marketplace"]
      },
      {
        month: "September",
        features: ["Fall 2025 benefits and gala design ideas", "2025 Most Innovative Meetings"],
        events: ["New York Fashion Week", "US Open", "Primetime Emmy Awards"]
      }
    ],
    q4: [
      {
        month: "October",
        features: ["2025 trend predictions", "Halloween-themed events and activations", "New/Recently Renovated Venues for Fall 2025"],
        events: ["IMEX America", "C2 Montreal", "Austin City Limits"]
      },
      {
        month: "November",
        features: ["Most Influential People From Past 25 Years", "Corporate Holiday Party Ideas"],
        events: ["Dreamforce", "New York City Wine & Food Festival"]
      },
      {
        month: "December",
        features: ["Event Experience Awards"],
        events: ["Zoomtopia", "MJBizCon", "Sports Innovation Forum"]
      }
    ],
    print_issues: [
      {
        name: "2025 Spring Issue",
        date: "March",
        features: ["Event Experience Awards", "40 Under 40", "Connect Spring Marketplace Guide"],
        focus: "New and renovated venues, city spotlights, meeting planning guides"
      },
      {
        name: "2025 Fall Issue",
        date: "August",
        features: ["Industry Innovators", "Connect Marketplace Guide"],
        focus: "Top events, innovative strategies, latest event technology"
      }
    ]
  },
  connect_events_2025_2026: [
    {
      name: "Connect Marketplace",
      dates: "Aug. 25-27, 2025",
      location: "Miami, FL",
      focus: "Corporate, Association, Sports, Specialty, International Business Travel",
      website: "informaconnect.com/connect-marketplace"
    },
    {
      name: "Connect West",
      dates: "Oct. 27-29, 2025",
      location: "Lake Tahoe, CA",
      website: "informaconnect.com/connect-west"
    },
    {
      name: "Connect South",
      dates: "Nov. 17-19, 2025",
      location: "Fort Worth, TX",
      focus: "South, Faith, Texas, Southeast",
      website: "informaconnect.com/connect-south"
    },
    {
      name: "Connect Winter Marketplace",
      dates: "Dec. 1-3, 2025",
      location: "Washington, D.C.",
      focus: "DC, Medical",
      website: "informaconnect.com/connect-winter-marketplace"
    },
    {
      name: "Connect North",
      dates: "Jan. 26-28, 2026",
      location: "Pittsburgh, PA",
      focus: "Midwest, North",
      website: "informaconnect.com/connect-north"
    },
    {
      name: "Connect Spring Marketplace",
      dates: "Apr. 14-16, 2026",
      location: "Louisville, KY",
      focus: "Corporate, Association, Citywide, Incentive, Diversity, International",
      website: "informaconnect.com/connect-spring-marketplace"
    },
    {
      name: "Connect Marketplace",
      dates: "Aug. 24-26, 2026",
      location: "Tampa Bay, FL",
      focus: "Corporate, Association, Sports, Specialty, International Business Travel"
    },
    {
      name: "Connect NYC",
      dates: "Feb. TBD, 2026",
      location: "New York City, NY",
      focus: "Corporate, Association, New York City"
    }
  ],
  registration_packages: [
    {
      name: "Deal Closer",
      price: "$5,650",
      meetings: 40,
      features: ["40 one-on-one appointments with qualified planners", "Top 5 appointments guaranteed", "Preferred supplier listing placement", "3-day event access", "All networking features", "Educational content", "Closing party access"],
      description: "The ultimate power move for serious partnership building"
    },
    {
      name: "Elite Connector",
      price: "$5,250",
      meetings: 30,
      features: ["30 one-on-one appointments with qualified planners", "3-day event access", "All networking features", "Educational content", "Closing party access"],
      description: "Supercharge your schedule and amplify success"
    },
    {
      name: "Growth Accelerator",
      price: "$4,850",
      meetings: 24,
      features: ["24 one-on-one appointments with qualified planners", "3-day event access", "All networking features", "Educational content", "Closing party access"],
      description: "Twice the meetings, twice the momentum"
    },
    {
      name: "Ice Breaker",
      price: "$4,250",
      meetings: 12,
      features: ["12 one-on-one appointments with qualified planners", "3-day event access", "All networking features", "Educational content", "Closing party access"],
      description: "Perfect for targeted connections and key opportunities"
    },
    {
      name: "The Networker",
      price: "$1,950",
      meetings: 0,
      features: ["No one-on-one appointments", "3-day event access", "All networking features", "Educational content", "Closing party access"],
      description: "Build your network at your own pace without appointment pressure"
    }
  ],
  customer_acquisition_programs: [
    {
      name: "FAM Trip Recruiting",
      price: "Starting at $25,000",
      description: "Connect will conduct an audit of your meeting/exhibit space, hotels or overall venue. Using audit results, we target specific planners based on compatibility with your destination or hotel.",
      features: ["Minimum 10 high-qualified planners", "Complete recruitment and coordination", "All travel expenses covered", "Information collection on interested planners", "Review process prior to securing attendees", "Optional air travel and rooming list services"],
      process: "Audit → Target → Recruit → Coordinate → Execute"
    },
    {
      name: "Destination Focus Groups",
      price: "Starting at $30,000",
      description: "Comprehensive focus group program with pre/post surveys and detailed reporting to understand attendee perceptions and experiences.",
      features: ["Audit of meeting/exhibit space", "Information collection and review process", "Pre-arrival survey design", "Optimal agenda creation", "2-hour comprehensive focus group session", "Post-arrival survey comparison", "Detailed report within 14 days"],
      deliverables: ["Focus group participant profiles", "Pre-arrival survey results", "Session discussion summary", "Post-event survey analysis", "Comprehensive final report"]
    }
  ],
  media_kit_statistics: {
    network_overview: {
      social_audience: "378K",
      monthly_visits: "164K",
      monthly_views: "411K",
      newsletter_subscribers: "93.8K",
      avg_event_budget: "$1.1M"
    },
    bizbash: {
      monthly_uniques: "107K",
      monthly_views: "231K",
      newsletter_subs: "46.7K",
      focus: "Event innovation, marketing, PR, experiential activations"
    },
    tsnn: {
      monthly_users: "53K",
      monthly_views: "175K",
      newsletter_subs: "42.9K",
      focus: "Trade show professionals, industry insights, venue information"
    },
    corporate_event_news: {
      focus: "Corporate event planning and marketing",
      delivery: "Weekly newsletter",
      audience: "Corporate planners and marketers"
    }
  }
};

// Application State
let currentSection = 'media-offerings';
let originalData = {};
let isSearchActive = false;

// DOM Elements
const navTabs = document.querySelectorAll('.nav-tab');
const contentSections = document.querySelectorAll('.content-section');
const globalSearch = document.getElementById('global-search');
const exportButton = document.getElementById('export-data');
const contactButton = document.getElementById('contact-btn');
const printButton = document.getElementById('print-proposal');
const contactModal = document.getElementById('contact-modal');
const closeModalButton = document.getElementById('close-contact-modal');
const cancelContactButton = document.getElementById('cancel-contact');
const contactForm = document.getElementById('contact-form');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Connect Media Portfolio Dashboard...');
  
  // Store original data for search/filter reset
  originalData = JSON.parse(JSON.stringify(appData));
  
  initializeNavigation();
  populateAllSections();
  initializeSearch();
  initializeFilters();
  initializeCharts();
  initializeContactForm();
  initializePrintFunctionality();
  
  console.log('Dashboard initialization complete!');
});

// Navigation Functions
function initializeNavigation() {
  console.log('Setting up navigation...');
  
  navTabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      console.log('Switching to section:', section);
      switchSection(section);
    });
  });
}

function switchSection(sectionId) {
  console.log('Switching section to:', sectionId);
  
  // Update active tab
  navTabs.forEach(tab => tab.classList.remove('active'));
  const activeTab = document.querySelector(`[data-section="${sectionId}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
    console.log('Tab activated:', sectionId);
  }
  
  // Update active section
  contentSections.forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });
  
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add('active');
    activeSection.style.display = 'block';
    console.log('Section displayed:', sectionId);
  }
  
  currentSection = sectionId;
  
  // Reset search when switching sections
  if (globalSearch && globalSearch.value) {
    clearSearch();
  }
}

// Data Population Functions
function populateAllSections() {
  console.log('Populating all sections...');
  
  populateMediaOfferings();
  populateTechnicalSpecs();
  populateEditorialCalendar();
  populateConnectEvents();
  populateRegistrationPackages();
  populateCustomerAcquisitionPrograms();
  
  console.log('All sections populated!');
}

function populateMediaOfferings() {
  // Live Event Products
  populateProductGrid('live-event-products', appData.complete_offerings.live_event);
  
  // Owned Media
  populateProductGrid('owned-media-products', appData.complete_offerings.owned_media);
  
  // Paid Media / Digital
  populateProductGrid('paid-media-products', appData.complete_offerings.paid_media_digital);
  
  // Print Media
  populateProductGrid('print-media-products', appData.complete_offerings.print_media);
}

function populateProductGrid(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
      <h4>${product.name}</h4>
      <div class="product-description">${product.description}</div>
      <div class="product-details">
        <div class="detail-item">
          <span class="detail-label">Pricing:</span>
          <span class="detail-value price">${product.pricing}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Benefits:</span>
          <span class="detail-value">${product.benefits}</span>
        </div>
        ${product.notes ? `
          <div class="detail-item">
            <span class="detail-label">Notes:</span>
            <span class="detail-value">${product.notes}</span>
          </div>
        ` : ''}
      </div>
    `;
    
    container.appendChild(card);
  });
}

function populateTechnicalSpecs() {
  // Content Marketing Specs
  populateSpecDetails('content-marketing-specs', appData.technical_specifications.content_marketing);
  
  // Video Pre-Roll Specs
  populateSpecDetails('video-preroll-specs', appData.technical_specifications.video_pre_roll);
  
  // Native Ads Specs
  populateSpecDetails('native-ads-specs', appData.technical_specifications.native_ads);
  
  // Banner Ads Specs Table
  populateBannerAdsTable();
  
  // Email Marketing Specs
  populateSpecDetails('email-marketing-specs', appData.technical_specifications.email_marketing);
}

function populateSpecDetails(containerId, specs) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  specs.forEach(spec => {
    const specItem = document.createElement('div');
    specItem.className = 'spec-item';
    specItem.innerHTML = `
      <span class="spec-label">${spec.item}:</span>
      <span class="spec-value">${spec.specification}</span>
    `;
    container.appendChild(specItem);
  });
}

function populateBannerAdsTable() {
  const tbody = document.getElementById('banner-ads-specs');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  appData.technical_specifications.banner_ads.forEach(spec => {
    const parts = spec.specification.split(';');
    const dimensions = parts[0] || spec.specification;
    const formats = parts[1] || 'JPG, GIF';
    const maxSize = parts[2] || '100KB-250KB';
    const leadTime = parts[3] || '5 business days';
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${spec.item}</td>
      <td>${dimensions}</td>
      <td>${formats}</td>
      <td>${maxSize}</td>
      <td>${leadTime}</td>
    `;
    tbody.appendChild(row);
  });
}

function populateEditorialCalendar() {
  const container = document.getElementById('editorial-calendar-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Populate quarterly calendar
  const quarters = ['q1', 'q2', 'q3', 'q4'];
  
  quarters.forEach(quarter => {
    const months = appData.editorial_calendar_2025[quarter];
    
    months.forEach(monthData => {
      const monthCard = document.createElement('div');
      monthCard.className = 'month-card';
      monthCard.setAttribute('data-quarter', quarter);
      
      const featuresHTML = monthData.features.map(feature => `<li>${feature}</li>`).join('');
      const eventsHTML = monthData.events.map(event => `<li>${event}</li>`).join('');
      
      monthCard.innerHTML = `
        <div class="month-header">
          <h4 class="month-name">${monthData.month}</h4>
          <div class="quarter-label">${quarter.toUpperCase()}</div>
        </div>
        <div class="features-list">
          <h5>Editorial Features</h5>
          <ul>${featuresHTML}</ul>
        </div>
        <div class="events-list">
          <h5>Major Events</h5>
          <ul>${eventsHTML}</ul>
        </div>
      `;
      
      container.appendChild(monthCard);
    });
  });
  
  // Populate print issues
  const printIssuesContainer = document.getElementById('print-issues-grid');
  if (printIssuesContainer) {
    printIssuesContainer.innerHTML = '';
    
    appData.editorial_calendar_2025.print_issues.forEach(issue => {
      const issueCard = document.createElement('div');
      issueCard.className = 'print-issue-card';
      
      const featuresHTML = issue.features.map(feature => `<li>${feature}</li>`).join('');
      
      issueCard.innerHTML = `
        <h4>${issue.name}</h4>
        <div class="detail-item">
          <span class="detail-label">Date:</span>
          <span class="detail-value">${issue.date}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Focus:</span>
          <span class="detail-value">${issue.focus}</span>
        </div>
        <div class="features-list">
          <h5>Features</h5>
          <ul>${featuresHTML}</ul>
        </div>
      `;
      
      printIssuesContainer.appendChild(issueCard);
    });
  }
}

function populateConnectEvents() {
  const container = document.getElementById('connect-events-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.connect_events_2025_2026.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';
    eventCard.setAttribute('data-year', event.dates.includes('2025') ? '2025' : '2026');
    
    eventCard.innerHTML = `
      <div class="event-header">
        <h3 class="event-name">${event.name}</h3>
        <div class="event-dates">${event.dates}</div>
        <div class="event-location">${event.location}</div>
      </div>
      ${event.focus ? `<div class="event-focus">${event.focus}</div>` : ''}
      ${event.website ? `<a href="https://${event.website}" target="_blank" class="event-website">${event.website}</a>` : ''}
    `;
    
    container.appendChild(eventCard);
  });
}

function populateRegistrationPackages() {
  const container = document.getElementById('registration-packages-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.registration_packages.forEach((pkg, index) => {
    const packageCard = document.createElement('div');
    packageCard.className = 'package-card';
    
    // Mark the Deal Closer as featured
    if (pkg.name === 'Deal Closer') {
      packageCard.classList.add('featured');
    }
    
    const featuresHTML = pkg.features.map(feature => `<li>${feature}</li>`).join('');
    
    packageCard.innerHTML = `
      <div class="package-header">
        <h3 class="package-name">${pkg.name}</h3>
        <div class="package-price">${pkg.price}</div>
        <div class="package-meetings">${pkg.meetings > 0 ? `${pkg.meetings} Meetings` : 'No Scheduled Meetings'}</div>
        <div class="package-description">${pkg.description}</div>
      </div>
      <ul class="package-features">
        ${featuresHTML}
      </ul>
    `;
    
    container.appendChild(packageCard);
  });
}

function populateCustomerAcquisitionPrograms() {
  const container = document.getElementById('acquisition-programs-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.customer_acquisition_programs.forEach(program => {
    const programCard = document.createElement('div');
    programCard.className = 'program-card';
    
    const featuresHTML = program.features.map(feature => `<li>${feature}</li>`).join('');
    
    let deliverablesHTML = '';
    if (program.deliverables) {
      const deliverablesListHTML = program.deliverables.map(item => `<li>${item}</li>`).join('');
      deliverablesHTML = `
        <div class="program-features">
          <h5>Deliverables</h5>
          <ul>${deliverablesListHTML}</ul>
        </div>
      `;
    }
    
    programCard.innerHTML = `
      <div class="program-header">
        <h3 class="program-name">${program.name}</h3>
        <div class="program-price">${program.price}</div>
      </div>
      <div class="program-description">${program.description}</div>
      <div class="program-features">
        <h5>Features</h5>
        <ul>${featuresHTML}</ul>
      </div>
      ${deliverablesHTML}
      ${program.process ? `
        <div class="program-process">
          <h6>Process</h6>
          <div class="process-steps">${program.process}</div>
        </div>
      ` : ''}
    `;
    
    container.appendChild(programCard);
  });
}

// Search Functionality
function initializeSearch() {
  if (!globalSearch) return;
  
  globalSearch.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    performSearch(searchTerm);
  });
  
  globalSearch.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const searchTerm = this.value.toLowerCase();
      performSearch(searchTerm);
    }
  });
}

function performSearch(searchTerm) {
  console.log('Performing search for:', searchTerm);
  
  if (!searchTerm) {
    clearSearch();
    return;
  }
  
  isSearchActive = true;
  
  // Search in current section
  switch(currentSection) {
    case 'media-offerings':
      searchInMediaOfferings(searchTerm);
      break;
    case 'editorial-calendar':
      searchInEditorialCalendar(searchTerm);
      break;
    case 'connect-events':
      searchInConnectEvents(searchTerm);
      break;
    default:
      // For other sections, highlight matching text
      highlightSearchTerms(searchTerm);
      break;
  }
  
  showNotification(`Search results for "${searchTerm}"`, 'info');
}

function clearSearch() {
  console.log('Clearing search...');
  
  if (globalSearch) {
    globalSearch.value = '';
  }
  
  isSearchActive = false;
  
  // Restore original data
  populateAllSections();
  
  // Show all elements
  document.querySelectorAll('.category-section').forEach(section => {
    section.style.display = 'block';
  });
}

function searchInMediaOfferings(searchTerm) {
  const categories = ['live_event', 'owned_media', 'paid_media_digital', 'print_media'];
  let totalResults = 0;
  
  categories.forEach(category => {
    const data = appData.complete_offerings[category];
    const filtered = data.filter(item => 
      JSON.stringify(item).toLowerCase().includes(searchTerm)
    );
    
    totalResults += filtered.length;
    
    const containerId = category.replace('_', '-') + '-products';
    const container = document.getElementById(containerId);
    if (container) {
      if (filtered.length === 0) {
        container.innerHTML = '<div class="no-results">No results found for your search.</div>';
        container.parentElement.style.display = 'none';
      } else {
        populateProductGrid(containerId, filtered);
        container.parentElement.style.display = 'block';
      }
    }
  });
  
  console.log('Search results:', totalResults);
}

function searchInEditorialCalendar(searchTerm) {
  const container = document.getElementById('editorial-calendar-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  const quarters = ['q1', 'q2', 'q3', 'q4'];
  let hasResults = false;
  
  quarters.forEach(quarter => {
    const months = originalData.editorial_calendar_2025[quarter];
    
    const filteredMonths = months.filter(monthData => 
      JSON.stringify(monthData).toLowerCase().includes(searchTerm)
    );
    
    filteredMonths.forEach(monthData => {
      hasResults = true;
      const monthCard = document.createElement('div');
      monthCard.className = 'month-card';
      monthCard.setAttribute('data-quarter', quarter);
      
      const featuresHTML = monthData.features
        .filter(feature => feature.toLowerCase().includes(searchTerm))
        .map(feature => `<li>${feature}</li>`).join('');
        
      const eventsHTML = monthData.events
        .filter(event => event.toLowerCase().includes(searchTerm))
        .map(event => `<li>${event}</li>`).join('');
      
      monthCard.innerHTML = `
        <div class="month-header">
          <h4 class="month-name">${monthData.month}</h4>
          <div class="quarter-label">${quarter.toUpperCase()}</div>
        </div>
        ${featuresHTML ? `
          <div class="features-list">
            <h5>Editorial Features</h5>
            <ul>${featuresHTML}</ul>
          </div>
        ` : ''}
        ${eventsHTML ? `
          <div class="events-list">
            <h5>Major Events</h5>
            <ul>${eventsHTML}</ul>
          </div>
        ` : ''}
      `;
      
      container.appendChild(monthCard);
    });
  });
  
  if (!hasResults) {
    container.innerHTML = '<div class="no-results">No results found in editorial calendar.</div>';
  }
}

function searchInConnectEvents(searchTerm) {
  const container = document.getElementById('connect-events-grid');
  if (!container) return;
  
  const filtered = originalData.connect_events_2025_2026.filter(event => 
    JSON.stringify(event).toLowerCase().includes(searchTerm)
  );
  
  container.innerHTML = '';
  
  if (filtered.length === 0) {
    container.innerHTML = '<div class="no-results">No events found for your search.</div>';
    return;
  }
  
  filtered.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';
    eventCard.setAttribute('data-year', event.dates.includes('2025') ? '2025' : '2026');
    
    eventCard.innerHTML = `
      <div class="event-header">
        <h3 class="event-name">${event.name}</h3>
        <div class="event-dates">${event.dates}</div>
        <div class="event-location">${event.location}</div>
      </div>
      ${event.focus ? `<div class="event-focus">${event.focus}</div>` : ''}
      ${event.website ? `<a href="https://${event.website}" target="_blank" class="event-website">${event.website}</a>` : ''}
    `;
    
    container.appendChild(eventCard);
  });
}

function highlightSearchTerms(searchTerm) {
  // Simple text highlighting for technical specs and other content
  const activeSection = document.querySelector('.content-section.active');
  if (!activeSection) return;
  
  const textElements = activeSection.querySelectorAll('p, span, td, li');
  
  textElements.forEach(element => {
    if (element.textContent.toLowerCase().includes(searchTerm)) {
      element.style.backgroundColor = 'rgba(var(--color-warning-rgb), 0.2)';
    } else {
      element.style.backgroundColor = '';
    }
  });
}

// Filter Functionality
function initializeFilters() {
  console.log('Setting up filters...');
  
  // Media Offerings filter
  const offeringsFilter = document.getElementById('offerings-filter');
  if (offeringsFilter) {
    offeringsFilter.addEventListener('change', function() {
      console.log('Filtering offerings by:', this.value);
      filterMediaOfferings(this.value);
    });
  }
  
  // Editorial Calendar quarter filter
  const quarterFilter = document.getElementById('quarter-filter');
  if (quarterFilter) {
    quarterFilter.addEventListener('change', function() {
      console.log('Filtering calendar by quarter:', this.value);
      filterEditorialCalendar(this.value);
    });
  }
  
  // Connect Events year filter
  const yearFilter = document.getElementById('year-filter');
  if (yearFilter) {
    yearFilter.addEventListener('change', function() {
      console.log('Filtering events by year:', this.value);
      filterConnectEvents(this.value);
    });
  }
}

function filterMediaOfferings(category) {
  const categorySections = document.querySelectorAll('.category-section');
  
  if (!category) {
    categorySections.forEach(section => section.style.display = 'block');
    showNotification('Showing all categories', 'info');
    return;
  }
  
  categorySections.forEach(section => {
    const sectionCategory = section.getAttribute('data-category');
    if (sectionCategory === category) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
  
  showNotification(`Filtered to ${category}`, 'info');
}

function filterEditorialCalendar(quarter) {
  const monthCards = document.querySelectorAll('.month-card');
  
  if (!quarter) {
    monthCards.forEach(card => card.style.display = 'block');
    showNotification('Showing all quarters', 'info');
    return;
  }
  
  monthCards.forEach(card => {
    const cardQuarter = card.getAttribute('data-quarter');
    if (cardQuarter === quarter) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
  
  showNotification(`Filtered to ${quarter.toUpperCase()}`, 'info');
}

function filterConnectEvents(year) {
  const eventCards = document.querySelectorAll('.event-card');
  
  if (!year) {
    eventCards.forEach(card => card.style.display = 'block');
    showNotification('Showing all events', 'info');
    return;
  }
  
  eventCards.forEach(card => {
    const cardYear = card.getAttribute('data-year');
    if (cardYear === year) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
  
  showNotification(`Filtered to ${year} events`, 'info');
}

// Chart Functionality
function initializeCharts() {
  console.log('Initializing charts...');
  
  // Main reach chart
  initializeReachChart();
  
  // Additional analytics charts
  initializeEngagementChart();
  initializeRevenueChart();
  initializeAttendanceChart();
  initializeGeographicChart();
  
  console.log('All charts initialized successfully!');
}

function initializeReachChart() {
  const chartCanvas = document.getElementById('reach-chart');
  if (!chartCanvas) {
    console.log('Reach chart canvas not found');
    return;
  }
  
  console.log('Initializing reach chart...');
  
  const ctx = chartCanvas.getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['BizBash', 'TSNN', 'Corporate Event News'],
      datasets: [
        {
          label: 'Monthly Views (K)',
          data: [231, 175, 0],
          backgroundColor: '#1FB8CD',
          borderColor: '#1FB8CD',
          borderWidth: 1
        },
        {
          label: 'Monthly Uniques/Users (K)',
          data: [107, 53, 0],
          backgroundColor: '#FFC185',
          borderColor: '#FFC185',
          borderWidth: 1
        },
        {
          label: 'Newsletter Subscribers (K)',
          data: [46.7, 42.9, 0],
          backgroundColor: '#B4413C',
          borderColor: '#B4413C',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Count (Thousands)'
          }
        }
      },
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Network Reach Comparison'
        }
      }
    }
  });
}

function initializeEngagementChart() {
  const chartCanvas = document.getElementById('engagement-chart');
  if (!chartCanvas) return;
  
  const ctx = chartCanvas.getContext('2d');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [
        {
          label: 'Email Open Rate (%)',
          data: [24.5, 26.2, 28.1, 29.8, 31.2, 33.5, 35.1, 36.8],
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Click-Through Rate (%)',
          data: [4.2, 4.8, 5.1, 5.6, 6.2, 6.8, 7.1, 7.5],
          borderColor: '#B4413C',
          backgroundColor: 'rgba(180, 65, 60, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Social Engagement (%)',
          data: [3.1, 3.4, 3.8, 4.2, 4.6, 5.1, 5.4, 5.8],
          borderColor: '#FFC185',
          backgroundColor: 'rgba(255, 193, 133, 0.1)',
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Engagement Rate (%)'
          }
        }
      },
      plugins: {
        legend: {
          position: 'top'
        }
      }
    }
  });
}

function initializeRevenueChart() {
  const chartCanvas = document.getElementById('revenue-chart');
  if (!chartCanvas) return;
  
  const ctx = chartCanvas.getContext('2d');
  
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Live Events', 'Owned Media', 'Paid Digital', 'Print Media', 'Partnerships'],
      datasets: [{
        data: [35, 28, 22, 10, 5],
        backgroundColor: [
          '#1FB8CD',
          '#FFC185',
          '#B4413C',
          '#7C3AED',
          '#10B981'
        ],
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.label + ': ' + context.parsed + '%';
            }
          }
        }
      }
    }
  });
}

function initializeAttendanceChart() {
  const chartCanvas = document.getElementById('attendance-chart');
  if (!chartCanvas) return;
  
  const ctx = chartCanvas.getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Connect Spring', 'Connect Summer', 'Connect Fall', 'Connect Winter', 'Connect West', 'Connect South'],
      datasets: [{
        label: '2024 Attendance',
        data: [1250, 980, 1450, 875, 1100, 950],
        backgroundColor: 'rgba(31, 184, 205, 0.7)',
        borderColor: '#1FB8CD',
        borderWidth: 1
      }, {
        label: '2025 Projected',
        data: [1400, 1100, 1600, 1000, 1250, 1050],
        backgroundColor: 'rgba(180, 65, 60, 0.7)',
        borderColor: '#B4413C',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Attendees'
          }
        }
      },
      plugins: {
        legend: {
          position: 'top'
        }
      }
    }
  });
}

function initializeGeographicChart() {
  const chartCanvas = document.getElementById('geographic-chart');
  if (!chartCanvas) return;
  
  const ctx = chartCanvas.getContext('2d');
  
  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Northeast', 'Southeast', 'Midwest', 'Southwest', 'West Coast', 'International'],
      datasets: [{
        data: [25, 22, 18, 15, 15, 5],
        backgroundColor: [
          'rgba(31, 184, 205, 0.7)',
          'rgba(255, 193, 133, 0.7)',
          'rgba(180, 65, 60, 0.7)',
          'rgba(124, 58, 237, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(245, 158, 11, 0.7)'
        ],
        borderColor: [
          '#1FB8CD',
          '#FFC185',
          '#B4413C',
          '#7C3AED',
          '#10B981',
          '#F59E0B'
        ],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.label + ': ' + context.parsed + '%';
            }
          }
        }
      }
    }
  });
}

// Export Functionality
if (exportButton) {
  exportButton.addEventListener('click', function() {
    console.log('Export button clicked');
    exportData();
  });
}

function exportData() {
  const data = {
    summary: {
      exported: new Date().toISOString(),
      sections: [
        'Media Offerings',
        'Technical Specifications', 
        'Editorial Calendar 2025',
        'Connect Events 2025-2026',
        'Registration Packages',
        'Customer Acquisition Programs',
        'Media Kit Statistics'
      ],
      totalOfferings: Object.values(appData.complete_offerings).flat().length,
      totalEvents: appData.connect_events_2025_2026.length,
      totalPackages: appData.registration_packages.length
    },
    ...appData
  };
  
  const dataStr = JSON.stringify(data, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  
  const exportFileDefaultName = `connect-media-portfolio-${new Date().toISOString().split('T')[0]}.json`;
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.style.display = 'none';
  document.body.appendChild(linkElement);
  linkElement.click();
  document.body.removeChild(linkElement);
  
  // Show success message
  showNotification('Portfolio data exported successfully! Check your downloads folder.', 'success');
  console.log('Data exported successfully');
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-surface);
    border: 1px solid var(--color-${type === 'success' ? 'success' : 'primary'});
    color: var(--color-${type === 'success' ? 'success' : 'text'});
    padding: var(--space-12) var(--space-16);
    border-radius: var(--radius-base);
    box-shadow: var(--shadow-lg);
    z-index: 1000;
    transition: opacity 0.3s ease;
    font-size: var(--font-size-sm);
    max-width: 300px;
    line-height: 1.4;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Utility Functions
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

// Contact Form Functionality
function initializeContactForm() {
  console.log('Setting up contact form...');
  
  if (contactButton) {
    contactButton.addEventListener('click', openContactModal);
  }
  
  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeContactModal);
  }
  
  if (cancelContactButton) {
    cancelContactButton.addEventListener('click', closeContactModal);
  }
  
  if (contactModal) {
    contactModal.addEventListener('click', function(e) {
      if (e.target === contactModal) {
        closeContactModal();
      }
    });
  }
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && contactModal && contactModal.style.display === 'flex') {
      closeContactModal();
    }
  });
}

function openContactModal() {
  if (contactModal) {
    contactModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Focus first input
    const firstInput = contactModal.querySelector('input[type="text"]');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  }
}

function closeContactModal() {
  if (contactModal) {
    contactModal.style.display = 'none';
    document.body.style.overflow = '';
    
    // Reset form
    if (contactForm) {
      contactForm.reset();
    }
  }
}

function handleContactSubmit(e) {
  e.preventDefault();
  
  // Collect form data
  const formData = new FormData(contactForm);
  const contactData = {};
  
  for (let [key, value] of formData.entries()) {
    contactData[key] = value;
  }
  
  // Add timestamp
  contactData.timestamp = new Date().toISOString();
  contactData.source = 'Connect Media Portfolio Dashboard';
  
  console.log('Contact form submitted:', contactData);
  
  // Simulate sending data (in real implementation, send to server)
  showNotification('Thank you for your interest! We\'ll be in touch within 24 hours.', 'success');
  
  // Store locally for demo purposes
  const existingContacts = JSON.parse(localStorage.getItem('connectMediaContacts') || '[]');
  existingContacts.push(contactData);
  localStorage.setItem('connectMediaContacts', JSON.stringify(existingContacts));
  
  // Close modal
  closeContactModal();
  
  // Optional: Switch to a relevant section based on interest
  const interest = contactData.interest;
  if (interest && interest !== '') {
    setTimeout(() => {
      switch(interest) {
        case 'live-events':
          switchSection('media-offerings');
          break;
        case 'event-registration':
          switchSection('connect-events');
          break;
        case 'custom-programs':
          switchSection('acquisition-programs');
          break;
        default:
          switchSection('media-offerings');
      }
    }, 1000);
  }
}

// Print Functionality
function initializePrintFunctionality() {
  console.log('Setting up print functionality...');
  
  if (printButton) {
    printButton.addEventListener('click', function() {
      generatePrintProposal();
    });
  }
}

function generatePrintProposal() {
  console.log('Generating print proposal...');
  
  // Add print-specific classes to body
  document.body.classList.add('print-mode');
  
  // Hide non-essential elements for print
  const elementsToHide = [
    '.header-actions',
    '.main-nav',
    '.section-filters',
    '#contact-modal'
  ];
  
  elementsToHide.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => el.classList.add('print-hidden'));
  });
  
  // Add print header
  const printHeader = document.createElement('div');
  printHeader.className = 'print-header';
  printHeader.innerHTML = `
    <div class="print-title">
      <h1>Connect Media Portfolio Proposal</h1>
      <div class="print-date">Generated on ${new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}</div>
    </div>
    <div class="print-contact">
      <h3>Contact Information</h3>
      <p><strong>Connect Media</strong><br>
      Email: partnerships@connectmedia.com<br>
      Phone: (555) 123-4567<br>
      Website: connectmedia.com</p>
    </div>
  `;
  
  document.body.insertBefore(printHeader, document.body.firstChild);
  
  // Show notification
  showNotification('Print proposal ready! Use Ctrl+P (Cmd+P on Mac) to print.', 'info');
  
  // Trigger print dialog
  setTimeout(() => {
    window.print();
  }, 500);
  
  // Clean up after print
  window.addEventListener('afterprint', function() {
    document.body.classList.remove('print-mode');
    
    elementsToHide.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => el.classList.remove('print-hidden'));
    });
    
    // Remove print header
    const printHeaderToRemove = document.querySelector('.print-header');
    if (printHeaderToRemove) {
      printHeaderToRemove.remove();
    }
    
    showNotification('Returned to normal view', 'info');
  }, { once: true });
}