import js from "@eslint/js";

const employees = [
  {
    id: 1,
    email: "alice@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Homepage",
        description: "Create the homepage design in Figma",
        date: "2025-04-20",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Discuss sprint backlog with the team",
        date: "2025-04-19",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix Navbar Bug",
        description: "Fix the unresponsive navbar on mobile",
        date: "2025-04-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "bob@example.com",
    password: "123",
    tasks: [
      {
        title: "Write API Docs",
        description: "Document all REST endpoints for v2",
        date: "2025-04-21",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code Review",
        description: "Review pull requests on GitHub",
        date: "2025-04-20",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Optimize Queries",
        description: "Improve database query performance",
        date: "2025-04-19",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Update CI/CD Pipeline",
        description: "Fix pipeline errors on deployment",
        date: "2025-04-18",
        category: "DevOps",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "charlie@example.com",
    password: "123",
    tasks: [
      {
        title: "User Testing",
        description: "Conduct usability tests for new UI",
        date: "2025-04-22",
        category: "QA",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Bug Fixes",
        description: "Fix issues reported by QA team",
        date: "2025-04-20",
        category: "Bugfix",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Create Unit Tests",
        description: "Write unit tests for authentication module",
        date: "2025-04-19",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Security Audit",
        description: "Run security checks on backend",
        date: "2025-04-17",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Deploy Staging App",
        description: "Deploy latest build to staging",
        date: "2025-04-18",
        category: "Deployment",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = (key, value) => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = (key) => {
  const data = localStorage.getItem("employees");
  console.log(JSON.parse(data));
};
