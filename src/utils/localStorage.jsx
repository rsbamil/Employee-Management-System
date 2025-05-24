const employees = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "a@me.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "UI redesign",
        description: "Redesign the user interface for better usability.",
        taskDate: "2023-10-01",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "API integration",
        description: "Integrate the new API for data fetching.",
        taskDate: "2023-10-02",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Database migration",
        description: "Migrate the database to the new server.",
        taskDate: "2023-10-03",
        category: "Database",
      },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 2,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Database migration",
        description: "Migrate the database to the new server.",
        taskDate: "2023-10-03",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "API integration",
        description: "Integrate the new API for data fetching.",
        taskDate: "2023-10-02",
        category: "Development",
      },
      {
        title: "UI redesign",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        description: "Redesign the user interface for better usability.",
        taskDate: "2023-10-01",
        category: "Design",
      },
    ],
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "BAckend API",
        description: "Create a new backend API for the application.",
        taskDate: "2023-10-03",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "API integration",
        description: "Integrate the new API for data fetching.",
        taskDate: "2023-10-02",
        category: "Development",
      },
      {
        title: "UI redesign",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        description: "Redesign the user interface for better usability.",
        taskDate: "2023-10-01",
        category: "Design",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    name: "Admin User",
    email: "ad@me.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
