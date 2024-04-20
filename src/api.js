export function getAllScore() {
  return fetch("https://wedev-api.sky.pro/api/v2/leaderboard")
    .then(response => {
      if (!response.ok) {
        throw new Error("Произошла ошибка сервера, попробуйте позже");
      }
      return response.json();
    })
    .catch(error => {
      console.error("Ошибка при получении данных лидерборда:", error);
      throw error;
    });
}

export function postUserScore({ name, time, achievements }) {
  return fetch("https://wedev-api.sky.pro/api/v2/leaderboard", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      time: time,
      achievements: achievements,
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Произошла ошибка сервера при отправке данных");
      }
    })
    .catch(error => {
      console.error("Ошибка при отправке данных лидерборда:", error);
      throw error;
    });
}
