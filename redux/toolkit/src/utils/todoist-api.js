const todoistApiConfig = {
  baseUrl: "https://api.todoist.com/rest/v2",
  headers: {
    Authorization: "Bearer db46c96636d926f767751cbe7aeb313963a2a4d9",
    "Content-Type": "application/json",
  },
};

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка ${res.status}`);
};

export const getProjectTasks = () => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks?project_id=2309751576`, {
    headers: todoistApiConfig.headers,
  }).then(getResponse);
};

export const addTask = (taskText) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks`, {
    method: "POST",
    headers: todoistApiConfig.headers,
    body: JSON.stringify({
      content: taskText,
      project_id: 2309751576,
    }),
  }).then(getResponse);
};

export const deleteTaskById = (taskId) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks/${taskId}`, {
    method: "DELETE",
    headers: todoistApiConfig.headers,
  }).then((res) => {
    if (!res.ok) Promise.reject(`Ошибка ${res.status}`);
  });
};
