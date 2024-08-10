document.addEventListener("DOMContentLoaded", function () {
  const ctxWebsiteViews = document
    .getElementById("websiteViewsChart")
    .getContext("2d");
  const websiteViewsChart = new Chart(ctxWebsiteViews, {
    type: "bar",
    data: {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      datasets: [
        {
          label: "Views",
          data: [50, 45, 60, 55, 70, 60, 50],
          backgroundColor: [
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#65B946",
            "#000000",
            "#000000",
          ],
          borderColor: "#000000",
          borderWidth: 1,
          barThickness: 10,
        },
      ],
    },
    options: {
      scales: {
        x: {
          barPercentage: 0.2, // نسبة العرض (50% من العرض المتاح)
          categoryPercentage: 0.2, // نسبة العرض لكل مجموعة من الأعمدة
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  const ctxDeviceUsed = document
    .getElementById("deviceUsedChart")
    .getContext("2d");
  const deviceUsedChart = new Chart(ctxDeviceUsed, {
    type: "bar",
    data: {
      labels: ["Windows", "Android", "iOS", "Linux"],
      datasets: [
        {
          label: "Devices",
          data: [75, 50, 40, 30],
          backgroundColor: ["#65B946", "#000000", "#000000", "#000000"],
          borderColor: "#000000",
          borderWidth: 1,
          barThickness: 10,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  const ctxAttendance = document
    .getElementById("attendanceChart")
    .getContext("2d");
  const attendanceChart = new Chart(ctxAttendance, {
    type: "bar",
    data: {
      labels: [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
      ],
      datasets: [
        {
          label: "Attendance",
          data: [15, 20, 0, 25, 35, 40, 45, 50, 40, 30, 35, 45],
          backgroundColor: function (context) {
            return context.dataIndex === 11 ? "#65B946" : "#C6C6C6";
          },
          borderColor: function (context) {
            return context.dataIndex === 11 ? "#65B946" : "#C6C6C6";
          },
          borderWidth: 1,
          barThickness: 10,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  const currentTime = document.getElementById("currentTime");
  setInterval(() => {
    const now = new Date();
    currentTime.innerHTML = now.toLocaleTimeString();
  }, 1000);
});
