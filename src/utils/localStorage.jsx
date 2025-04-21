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
        title: "Task 1",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
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
        title: "Task 1",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        active: false,
        newTask: false,
        completed: true,
        failed: true,
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
        title: "Task 1",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@gmail.com",
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
