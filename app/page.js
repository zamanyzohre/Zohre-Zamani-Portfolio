"use client";

import { useState } from "react";
import Image from "next/image";

const skills = [
  { name: "HTML / CSS", icon: "HC" },
  { name: "JavaScript", icon: "JS" },
  { name: "Sass", icon: "Sa" },
  { name: "React", icon: "R" },
  { name: "Next.js", icon: "N" },
  { name: "PHP", icon: "PHP" },
  { name: "Laravel", icon: "L" },
  { name: "Livewire", icon: "LW" },
  { name: "MySQL", icon: "SQL" },
  { name: "Git / GitHub", icon: "GH" },
  { name: "Bootstrap", icon: "B" },
  { name: "Tailwind CSS", icon: "TW" },
  { name: "Materialize CSS", icon: "M" },
  { name: "jQuery", icon: "JQ" },
  { name: "RESTful API", icon: "API" },
  { name: "Responsive Design", icon: "RD" },
  { name: "Webpack", icon: "W" },
  { name: "Vite", icon: "V" },
];


const projects = [
  {
    title: "Real Estate CRM",
    titleFa: "نرم‌افزار مدیریت املاک",
    type: "Full-Stack Application",
    typeFa: "برنامه فول‌استک",
    featured: true,

    images: [
      "/images/projects/real-estate-crm-dashboard_1.jpg",
      "/images/projects/real-estate-crm-dashboard_2.jpg",
      "/images/projects/real-estate-crm-matching1.jpg",
      "/images/projects/real-estate-crm-matching2.jpg",
    ],

    description:
      "A complete real estate CRM developed from the ground up for managing properties, owners, customers, requests, matching, follow-ups, contracts, notes and daily operations.",

    descriptionFa:
      "یک نرم‌افزار کامل مدیریت املاک که از ابتدا برای مدیریت املاک، مالکان، مشتریان، درخواست‌ها، تطبیق فایل و درخواست، پیگیری‌ها، قراردادها، یادداشت‌ها و امور روزانه توسعه داده شده است.",

    technologies: [
      "Laravel",
      "Livewire",
      "PHP",
      "MySQL",
      "Bootstrap",
      "Vite",
      "JavaScript",
    ],

    features: [
      "Property & file management",
      "Owner & customer management",
      "Search by name, family name & mobile number",
      "Quick access to phone contacts",
      "Direct calling & SMS for owners and customers",
      "Two-way property matching",
      "Follow-up & coordination management",
      "Contract management with 45-day renewal reminders",
      "Notes & daily reminders",
      "Property image upload, deletion & sharing",
      "Carousel & fullscreen image viewing",
      "Commission calculation",
      "Authentication & user management",
      "Responsive UI & PWA",
    ],

    featuresFa: [
      "مدیریت املاک و فایل‌ها",
      "مدیریت مالکان و مشتریان",
      "جستجو بر اساس نام، نام خانوادگی و شماره همراه",
      "دسترسی سریع به دفترچه تلفن",
      "تماس و ارسال پیامک مستقیم برای مالک و مشتری",
      "تطبیق دوطرفه فایل و درخواست مشتری",
      "مدیریت هماهنگی‌ها و پیگیری‌ها",
      "مدیریت قرارداد و یادآوری تمدید حدود ۴۵ روز قبل از پایان قرارداد",
      "مدیریت یادداشت‌ها و یادآوری‌های روزانه",
      "آپلود، حذف و اشتراک‌گذاری تصاویر ملک",
      "نمایش تصاویر به صورت Carousel و تمام‌صفحه",
      "محاسبه کمیسیون",
      "احراز هویت و مدیریت کاربران",
      "رابط کاربری واکنش‌گرا و PWA",
    ],

    github: null,
    demo: "https://realestatecrm.wuaze.com",
  },

  {
    title: "Food Ordering System",
    titleFa: "سیستم سفارش آنلاین غذا",
    type: "Full-Stack Web Application",
    typeFa: "برنامه وب فول‌استک",

    description:
      "Designed and developed a full-stack online food ordering system using Next.js and Laravel, including a custom RESTful API built from scratch for authentication, products, categories, orders, discounts and transactions.",

    descriptionFa:
      "طراحی و توسعه یک سیستم فول‌استک سفارش آنلاین غذا با استفاده از Next.js و Laravel، شامل توسعه API اختصاصی RESTful از ابتدا برای احراز هویت، محصولات، دسته‌بندی‌ها، سفارش‌ها، تخفیف‌ها و تراکنش‌ها.",

    technologies: [
      "Next.js",
      "Laravel",
      "RESTful API",
      "Redux",
      "React Hooks",
      "Bootstrap",
      "JavaScript",
      "CSS",
    ],

    features: [
      "Component-based frontend built with Next.js",
      "Custom RESTful API built from scratch with Laravel",
      "Responsive design for mobile, tablet and desktop",
      "Mobile number authentication with SMS OTP verification",
      "User profile management and dashboard access",
      "Order and transaction history",
      "Tabbed food category navigation",
      "Search, filtering and sorting by price and popularity",
      "Persistent shopping cart using Local Storage",
      "Discount code support",
      "Online payment gateway integration",
      "Pagination",
      "Network error handling and validation messages",
      "Lazy loading and performance optimization",
      "User location detection using maps",
      "Route and page management",
    ],

    featuresFa: [
      "توسعه فرانت‌اند کامپوننت‌محور با Next.js",
      "توسعه API اختصاصی RESTful از ابتدا با Laravel",
      "طراحی کاملاً واکنش‌گرا برای موبایل، تبلت و دسکتاپ",
      "احراز هویت با شماره موبایل و تأیید کد OTP از طریق پیامک",
      "مدیریت اطلاعات کاربر و دسترسی به داشبورد",
      "نمایش سوابق سفارش‌ها و تراکنش‌ها",
      "نمایش دسته‌بندی غذاها به صورت تب‌بندی",
      "جستجو، فیلتر و مرتب‌سازی بر اساس قیمت و فروش",
      "ذخیره سبد خرید در Local Storage",
      "اعمال کد تخفیف در سبد خرید",
      "اتصال به درگاه پرداخت آنلاین",
      "صفحه‌بندی",
      "مدیریت خطاهای شبکه و نمایش پیام‌های مناسب به کاربر",
      "Lazy Loading و بهینه‌سازی عملکرد",
      "شناسایی موقعیت کاربر با استفاده از نقشه",
      "مدیریت مسیرها و صفحات مختلف برنامه",
    ],

    github:
      "https://github.com/zamanyzohre/next-shoping-project",

    demo:
      "https://next-shoping-project.vercel.app",
  },

  {
    title: "Admin Panel Management",
    titleFa: "پنل مدیریت",
    type: "Full-Stack Web Application",
    typeFa: "برنامه وب فول‌استک",

    description:
      "A professional and modular full-stack admin panel built with Next.js and Laravel, connected through a custom RESTful API for managing users, roles, products, orders, transactions, discounts and system data.",

    descriptionFa:
      "یک پنل مدیریت حرفه‌ای و ماژولار که به صورت فول‌استک با Next.js و Laravel توسعه داده شده و از طریق API اختصاصی RESTful برای مدیریت کاربران، نقش‌ها، محصولات، سفارش‌ها، تراکنش‌ها، تخفیف‌ها و اطلاعات سیستم با یکدیگر ارتباط دارند.",

    technologies: [
      "Next.js",
      "Laravel",
      "RESTful API",
      "React",
      "Redux",
      "React Hooks",
      "React Router",
      "Bootstrap",
      "JavaScript",
      "CSS",
      "Fetch API",
    ],

    features: [
      "Email and password authentication",
      "Dashboard with live statistics and charts",
      "User and role management",
      "User creation, editing and management",
      "File upload and media management",
      "Product creation, editing and management",
      "Product inventory and sale management",
      "Multiple product image upload and management",
      "Category creation, editing and deletion",
      "Order management and status tracking",
      "Transaction management",
      "Discount code management",
      "RESTful API integration with Laravel backend",
      "Pagination",
      "Progress bar during navigation",
      "Network error handling and validation messages",
      "Responsive design",
      "Lazy loading and performance optimization",
    ],

    featuresFa: [
      "احراز هویت با ایمیل و رمز عبور",
      "داشبورد با آمار زنده و نمودارها",
      "مدیریت کاربران و نقش‌ها",
      "ایجاد، ویرایش و مدیریت کاربران",
      "بارگذاری فایل و مدیریت رسانه",
      "ایجاد، ویرایش و مدیریت محصولات",
      "مدیریت موجودی و قیمت فروش محصولات",
      "آپلود و مدیریت چند تصویر برای هر محصول",
      "ایجاد، ویرایش و حذف دسته‌بندی‌ها",
      "مدیریت سفارش‌ها و پیگیری وضعیت آن‌ها",
      "مدیریت تراکنش‌ها",
      "مدیریت کدهای تخفیف",
      "ارتباط فرانت‌اند با بک‌اند Laravel از طریق API اختصاصی RESTful",
      "صفحه‌بندی",
      "نمایش Progress Bar هنگام جابه‌جایی بین صفحات",
      "مدیریت خطاهای شبکه و نمایش پیام‌های مناسب",
      "طراحی واکنش‌گرا",
      "Lazy Loading و بهینه‌سازی عملکرد",
    ],

    github:
      "https://github.com/zamanyzohre/next-admin-panel",

    demo:
      "https://next-admin-panel-one.vercel.app",
  },
];

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [currentImage, setCurrentImage] = useState(0);

  const isFa = language === "fa";

  return (
    <main className="page" dir={isFa ? "rtl" : "ltr"}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">ZZ</div>

        <div className="navLinks">
          <a href="#about">{isFa ? "درباره من" : "About"}</a>

          <a href="#skills">{isFa ? "مهارت‌ها" : "Skills"}</a>

          <a href="#projects">{isFa ? "پروژه‌ها" : "Projects"}</a>

          <a href="#experience">{isFa ? "تجربه" : "Experience"}</a>

          <a href="#education">{isFa ? "تحصیلات" : "Education"}</a>

          <a href="#contact">{isFa ? "تماس" : "Contact"}</a>

          <a href="#other-projects">{isFa ? "پروژه‌های کوچک" : "Mini Projects"}</a>
        </div>

        <div className="languageSwitch">
          <button
            className={!isFa ? "activeLanguage" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>

          <span>|</span>

          <button
            className={isFa ? "activeLanguage" : ""}
            onClick={() => setLanguage("fa")}
          >
            FA
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="heroBadge">FULL-STACK DEVELOPER</div>

        <div className="avatar">
          <Image
            src="/images/profile.jpg"
            alt="Zohre Zamany"
            width={120}
            height={120}
            priority
          />
        </div>

        <h1>{isFa ? "سلام، من زهره زمانی هستم" : "Hello, I'm Zohre Zamany"}</h1>

        <p className="heroText">
          {isFa
            ? "برنامه‌نویس فول‌استک و فارغ‌التحصیل مهندسی کامپیوتر، متخصص در ساخت برنامه‌های کاربردی، مدرن و قابل نگهداری."
            : "Full-Stack Developer and Computer Engineering graduate focused on building practical, modern and maintainable web applications."}
        </p>

        <div className="heroInfo">
          <div>
            <span>{isFa ? "تخصص" : "Specialization"}</span>
            <strong>Full-Stack Development</strong>
          </div>

          <div>
            <span>{isFa ? "تحصیلات" : "Education"}</span>
            <strong>{isFa ? "مهندسی کامپیوتر" : "Computer Engineering"}</strong>
          </div>

          <div>
            <span>{isFa ? "سن" : "Age"}</span>
            <strong>{isFa ? "۴۰ سال" : "40"}</strong>
          </div>
        </div>

        <div className="heroButtons">
          <a href="#projects" className="primaryButton">
            {isFa ? "مشاهده پروژه‌ها" : "View My Projects"}
          </a>

          <a
            href="https://github.com/zamanyzohre"
            target="_blank"
            rel="noopener noreferrer"
            className="secondaryButton"
          >
            GitHub
          </a>

          <a href="/Zohre-Zamany-CV.pdf" download className="secondaryButton">
            {isFa ? "دانلود رزومه" : "Download CV"}
          </a>
        </div>

        <div className="heroLine">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="sectionTitle">
          <span>01</span>
          <h2>{isFa ? "درباره من" : "About Me"}</h2>
        </div>

        <div className="aboutCard">
          <p>
            {isFa
              ? "من یک برنامه‌نویس فول‌استک با مدرک کارشناسی مهندسی کامپیوتر، گرایش نرم‌افزار هستم."
              : "I am a Full-Stack Developer with a B.Sc. in Computer Engineering, specializing in Software Engineering."}
          </p>

          <p>
            {isFa
              ? "به ساخت برنامه‌های کامل و یادگیری از طریق پروژه‌های واقعی علاقه‌مندم و تمرکزم روی ایجاد برنامه‌های تمیز، کاربردی، واکنش‌گرا و قابل نگهداری است."
              : "I enjoy building complete applications and learning through hands-on development. My main focus is creating clean, practical, responsive and maintainable web applications."}
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="sectionTitle">
          <span>02</span>
          <h2>{isFa ? "مهارت‌ها" : "Skills"}</h2>
        </div>

        <div className="skillsGrid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skillCard">
              <div className="skillTop">
                <span className="skillNumber">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="skillIcon">{skill.icon}</span>
              </div>

              <span className="skillName">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="sectionTitle">
          <span>03</span>
          <h2>{isFa ? "پروژه‌ها" : "Projects"}</h2>
        </div>

        <div className="projectsGrid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`projectCard ${
                project.featured ? "featuredProject" : ""
              }`}
            >
              {/* Project Gallery */}
              {project.images && (
                <div className="projectGallery">
                  <div className="projectImage">
                    <Image
                      src={project.images[currentImage]}
                      alt={
                        isFa
                          ? "تصویر نرم‌افزار مدیریت املاک"
                          : "Real Estate CRM screenshot"
                      }
                      width={1200}
                      height={700}
                    />

                    {project.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="galleryButton galleryPrevious"
                          onClick={() =>
                            setCurrentImage(
                              (currentImage - 1 + project.images.length) %
                                project.images.length,
                            )
                          }
                        >
                          ‹
                        </button>

                        <button
                          type="button"
                          className="galleryButton galleryNext"
                          onClick={() =>
                            setCurrentImage(
                              (currentImage + 1) % project.images.length,
                            )
                          }
                        >
                          ›
                        </button>

                        <div className="galleryDots">
                          {project.images.map((image, imageIndex) => (
                            <button
                              key={image}
                              type="button"
                              className={
                                imageIndex === currentImage ? "activeDot" : ""
                              }
                              onClick={() => setCurrentImage(imageIndex)}
                              aria-label={`Image ${imageIndex + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="projectContent">
                <div className="projectTop">
                  <span className="projectIndex">0{index + 1}</span>

                  {project.featured && (
                    <span className="featuredBadge">
                      {isFa ? "پروژه شاخص" : "Featured Project"}
                    </span>
                  )}

                  <span className="projectType">
                    {isFa ? project.typeFa : project.type}
                  </span>
                </div>

                <h3>{isFa ? project.titleFa : project.title}</h3>

                <p>{isFa ? project.descriptionFa : project.description}</p>

                <div className="technologyList">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {project.features && (
                  <div className="featuresList">
                    {(isFa ? project.featuresFa : project.features).map((feature) => (
                      <div key={feature} className="featureItem">
                        <span>✓</span>

                        {isFa
                          ? {
                              "Property & owner management":
                                "مدیریت املاک و مالکان",

                              "Customer request management":
                                "مدیریت درخواست مشتریان",

                              "Two-way property matching":
                                "تطبیق دوطرفه ملک و درخواست",

                              "Follow-up & coordination":
                                "مدیریت پیگیری و هماهنگی",

                              "Contract management": "مدیریت قراردادها",

                              "Daily notes & reminders":
                                "یادداشت و یادآوری روزانه",

                              "Authentication & user management":
                                "احراز هویت و مدیریت کاربران",

                              "Responsive UI & PWA":
                                "رابط کاربری واکنش‌گرا و PWA",
                            }[feature] || feature
                          : feature}
                      </div>
                    ))}
                  </div>
                )}

               
              <div className="projectLinks">

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {isFa ? "گیت‌هاب ↗" : "GitHub ↗"}
                  </a>
                ) : (
                  <span className="privateProject">
                    🔒 {isFa ? "مخزن خصوصی" : "Private Repository"}
                  </span>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {isFa ? "نمایش آنلاین ↗" : "Live Demo ↗"}
                  </a>
                )}

              </div>


              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Other Skills & Mini Projects */}
      <section id="other-projects" className="section">
        <div className="sectionTitle">
          <span>04</span>

          <h2>
            {isFa
              ? "پروژه‌های کوچک و مهارت‌های تکمیلی"
              : "Other Skills & Mini Projects"}
          </h2>
        </div>

        <div className="miniProjectsGrid">
          <div className="miniProjectCard">
            <span>01</span>

            <h3>
              {isFa ? "طراحی با Sass و Bootstrap" : "Sass & Bootstrap Website"}
            </h3>

            <p>
              {isFa
                ? "طراحی و پیاده‌سازی یک سایت با استفاده از Sass، Bootstrap و jQuery."
                : "Designed and implemented a responsive website using Sass, Bootstrap and jQuery."}
            </p>

            <div className="miniProjectTags">
              <span>Sass</span>
              <span>Bootstrap</span>
              <span>jQuery</span>
            </div>
          </div>

          <div className="miniProjectCard">
            <span>02</span>

            <h3>{isFa ? "تایمر شمارش معکوس" : "Countdown Timer"}</h3>

            <p>
              {isFa
                ? "پیاده‌سازی تایمر شمارش معکوس و نمایش زمان باقی‌مانده."
                : "Implemented a countdown timer with dynamic display of the remaining time."}
            </p>

            <div className="miniProjectTags">
              <span>JavaScript</span>
              <span>UI</span>
            </div>
          </div>

          <div className="miniProjectCard">
            <span>03</span>

            <h3>{isFa ? "انیمیشن و رابط کاربری" : "UI Animations"}</h3>

            <p>
              {isFa
                ? "استفاده از انیمیشن در بخش‌های مختلف پروژه برای ایجاد رابط کاربری جذاب‌تر."
                : "Used animations in different parts of projects to create more engaging user interfaces."}
            </p>

            <div className="miniProjectTags">
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="miniProjectCard">
            <span>04</span>

            <h3>{isFa ? "طراحی واکنش‌گرا" : "Responsive Design"}</h3>

            <p>
              {isFa
                ? "طراحی رابط‌های کاربری واکنش‌گرا برای نمایش مناسب در اندازه‌های مختلف صفحه."
                : "Designed responsive user interfaces that adapt to different screen sizes."}
            </p>

            <div className="miniProjectTags">
              <span>Responsive Design</span>
              <span>CSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="sectionTitle">
          <span>05</span>

          <h2>{isFa ? "تجربه" : "Experience"}</h2>
        </div>

        <div className="experienceCard">
          <div className="experienceTop">
            <div>
              <h3>
                {isFa
                  ? "توسعه مستقل نرم‌افزار CRM املاک"
                  : "Independent Full-Stack Development"}
              </h3>

              <span className="experienceCompany">Real Estate CRM</span>
            </div>

            <span className="experienceBadge">
              {isFa ? "پروژه مستقل" : "Independent Project"}
            </span>
          </div>

          <p className="experienceDescription">
            {isFa
              ? "طراحی و توسعه یک نرم‌افزار کامل مدیریت املاک از ابتدا، با تمرکز بر مدیریت املاک، مالکان، درخواست مشتریان، تطبیق دوطرفه، پیگیری‌ها، قراردادها و یادداشت‌های روزانه."
              : "Designed and developed a complete real estate CRM from the ground up, focusing on property management, owners, customer requests, two-way matching, follow-ups, contracts and daily notes."}
          </p>

          <div className="experienceFeatures">
            <div>
              <span>✓</span>
              {isFa ? "مدیریت املاک و مالکان" : "Property & owner management"}
            </div>

            <div>
              <span>✓</span>
              {isFa
                ? "تطبیق دوطرفه ملک و درخواست"
                : "Two-way property matching"}
            </div>

            <div>
              <span>✓</span>
              {isFa ? "مدیریت پیگیری و هماهنگی" : "Follow-up & coordination"}
            </div>

            <div>
              <span>✓</span>
              {isFa ? "مدیریت قراردادها" : "Contract management"}
            </div>

            <div>
              <span>✓</span>
              {isFa ? "یادداشت و یادآوری روزانه" : "Daily notes & reminders"}
            </div>

            <div>
              <span>✓</span>
              {isFa ? "رابط کاربری واکنش‌گرا" : "Responsive user interface"}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <div className="sectionTitle">
          <span>06</span>

          <h2>{isFa ? "تحصیلات" : "Education"}</h2>
        </div>

        <div className="journeyCard">
          <div className="journeyHighlight">{isFa ? "کارشناسی" : "B.SC."}</div>

          <h3>
            {isFa
              ? "مهندسی کامپیوتر — گرایش نرم‌افزار"
              : "Computer Engineering — Software Engineering"}
          </h3>

          <p>
            {isFa
              ? "مدرک کارشناسی مهندسی کامپیوتر با گرایش نرم‌افزار."
              : "Bachelor's degree in Computer Engineering with a specialization in Software Engineering."}
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contactSection">
        <div className="contactCard">
          <div className="sectionTitle">
            <span>07</span>

            <h2>{isFa ? "ارتباط با من" : "Let’s Connect"}</h2>
          </div>

          <p>
            {isFa
              ? "برای ارتباط و همکاری می‌توانید از طریق GitHub یا ایمیل با من در تماس باشید."
              : "Feel free to connect with me through GitHub or email."}
          </p>

          <div className="contactButtons">
            <a
              href="https://github.com/zamanyzohre"
              target="_blank"
              rel="noopener noreferrer"
              className="primaryButton"
            >
              GitHub
            </a>

            <a href="mailto:zozotiktak@gmail.com" className="secondaryButton">
              {isFa ? "ایمیل" : "Email Me"}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Zohre Zamany</p>

        <p>{isFa ? "ساخته شده با Next.js" : "Built with Next.js"}</p>
      </footer>
    </main>
  );
}
