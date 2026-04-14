function AboutPage() {
  return (
    <div>
        {/*<h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
         <p className="text-gray-600 mb-6">
            The Convocation Gown System is designed to streamline the process of managing gown orders for convocation ceremonies. Our mission is to provide a seamless experience for students, staff, and administrators by offering an intuitive platform for browsing available gowns, placing orders, and tracking order status.
    </p> */}

    <h1 className="text-3xl font-bold text-gray-800 mb-4">🧥 Convocation Gown Rental System</h1>
    <p>
    This project is a fullstack web application designed to manage convocation gown rentals, including customer handling, inventory management, and order processing.
    It was built as a learning-focused project with real-world use in mind, simulating a small business scenario where users can browse gowns and place rental orders.
    The project follows a modern development approach, using current technologies and agile (scrum-inspired) practices to deliver a working MVP within a short timeframe.
    </p>
    <br />
    <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Project Objectives</h2>
    <ul>
    <li>Build a complete end-to-end system (Frontend → Backend → Database)</li>
    <li>Learn and implement modern web technologies</li>
    <li>Simulate a real business use case</li>
    <li>Practice deployment and CI/CD workflows</li>
    </ul>
    <br />
    <h2 className="text-2xl font-bold text-gray-800 mb-4">⚙️ Technology Stack</h2>
    <ul>
    <li><strong>Backend</strong></li>
    <li>ASP.NET Core (Web API)</li>
    <li>Entity Framework Core</li>
    <li>PostgreSQL (Neon DB)</li>
    <br />
    <li><strong>Frontend</strong></li>
    <li>React (Vite)</li>
    <li>Axios (API communication)</li>
    <li>Tailwind CSS (UI styling – CDN)</li>
    <br />
    <li><strong>DevOps & Deployment</strong></li>
    <li>Backend: Render</li>
    <li>Frontend: Vercel</li>
    <li>Version Control: GitHub (auto-deploy enabled)</li>
    </ul>
    <br />
    <ul>
    <li><strong>API Documentation & Testing</strong></li>
    <li><a href="https://convocation-gown-system.onrender.com/swagger/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
      Swagger</a>
    </li>
    </ul>
    <br />
    <h2 className="text-2xl font-bold text-gray-800 mb-4">🔄 How the System Works</h2>
    <div className="space-y-4">
    <ul>
        <li>User browses available gowns</li>
        <li>Selects a gown and places an order</li>
        <li>Frontend sends request via REST API</li>
        <li>Backend processes the request</li>
        <li>Data is stored in PostgreSQL database</li>
        <li>Response is returned and shown in UI</li>
    </ul>
    </div>
    <br />
    <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Product Backlog (Key Features)</h2>
    <h3><strong>✅ Implemented</strong></h3>
    <div className="space-y-4">
    <ul>
        <li>Customer Management (basic)</li>
        <li>Gown Inventory Management</li>
        <li>Order Placement & Storage</li>
        <li>REST API integration</li>
        <li>Frontend UI with routing</li>
        <li>Deployment (Render + Vercel)</li>
    </ul>
    </div>
    <br />
    <h3><strong>🚧 Planned / Upcoming</strong></h3>
    <div className="space-y-4">
    <ul>
        <li>Admin Dashboard (order status management)</li>
        <li>WhatsApp integration for order notifications</li>
        <li>Improved UI/UX design</li>
        <li>CI/CD pipeline enhancements</li>
        <li>AI-based reporting / assistant</li>
    </ul>
    </div>
    <br />
    <h2 className="text-2xl font-bold text-gray-800 mb-4">🏃 Development Approach (Agile / Scrum Inspired)</h2>
    <div className="space-y-4">
    <p>The project was developed in weekly sprints with incremental delivery:</p>
    <p>Sprint 1 → Backend setup, database design</p>
    <p>Sprint 2 → API development (CRUD operations)</p>
    <p>Sprint 3 → Frontend setup and integration</p>
    <p>Sprint 4 → Order workflow completion</p>
    <p>Sprint 5 → Deployment and MVP release</p>

    👉 Focus was on delivering a working MVP quickly, then improving iteratively.
    </div>
    <br />
    <h2 className="text-2xl font-bold text-gray-800 mb-4">🧠 Key Concepts Demonstrated</h2>
    <div className="space-y-4">
    <ul>
        <li>REST API design and integration</li>
        <li>Dependency Injection in ASP.NET Core</li>
        <li>Database design with Entity Framework Core</li>
        <li>Environment configuration (.env for dev/prod)</li>
        <li>CORS handling and API connectivity</li>
        <li>Fullstack deployment and debugging</li>
    </ul>
    </div>
    <br />
    <h2 className="text-2xl font-bold text-gray-800 mb-4">🔐 Environment & Configuration</h2>
    <div className="space-y-4">
    <ul>
        <li>Separate configurations for local and production environments</li>
        <li>Secure database connection using SSL</li>
        <li>API base URLs managed via environment variables</li>
    </ul>
    </div>
    <br />
    <h2 className="text-2xl font-bold text-gray-800 mb-4">📈 Future Enhancements</h2>
    <div className="space-y-4">
    <ul>
        <li>Admin panel for business users</li>
        <li>Automated notifications (WhatsApp / Email)</li>
        <li>Enhanced UI using Tailwind components</li>
        <li>AI-based analytics and reporting</li>
        <li>Role-based access control</li>
    </ul>
    </div>
    </div>
  );
}

export default AboutPage;