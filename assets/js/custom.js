const header = document.querySelector("header");
const sectionOne = document.querySelector(".change-name");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "assets/images/1.png",
    "assets/images/2.png",
    "assets/images/3.png",
    "assets/images/4.png",
    "assets/images/5.png",
    "assets/images/6.png",
    "assets/images/7.png",
    "assets/images/8.png",
    "assets/images/9.png",
    // Tambahkan URL gambar lainnya di sini sesuai kebutuhan Anda
  ];

  let currentIndex = 0;
  const slideImage = document.getElementById("slide");
  const nextButton = document.getElementById("nextBtn");
  const prevButton = document.getElementById("prevBtn");

  function changeImage(index) {
    slideImage.src = images[index];
    currentIndex = index;
  }

  // Fungsi untuk menampilkan gambar selanjutnya
  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
  }

  // Inisialisasi interval untuk menampilkan gambar berikutnya setiap 3 detik
  const intervalId = setInterval(showNextImage, 3000);

  // Ganti gambar saat tombol "Next" diklik
  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
  });

  // Ganti gambar saat tombol "Previous" diklik
  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(currentIndex);
  });
});

// Function to update visitor statistics for today, this month, and this year
function updateStatistics() {
  // Retrieve existing statistics from local storage
  let statistics = JSON.parse(localStorage.getItem("visitorStatistics")) || {};

  // Get today's date
  let today = new Date();
  let todayDate = today.toISOString().split("T")[0]; // Mendapatkan tanggal hari ini

  // Increment today's count
  statistics[todayDate] = (statistics[todayDate] || 0) + 1;

  // Get current month and year
  let currentMonth = today.getMonth() + 1; // Bulan dimulai dari 0 (Januari adalah bulan 0)
  let currentYear = today.getFullYear();

  // Increment month's count
  let currentMonthKey = currentYear + "-" + currentMonth;
  statistics[currentMonthKey] = (statistics[currentMonthKey] || 0) + 1;

  // Increment year's count
  let currentYearKey = currentYear.toString();
  statistics[currentYearKey] = (statistics[currentYearKey] || 0) + 1;

  // Save updated statistics back to local storage
  localStorage.setItem("visitorStatistics", JSON.stringify(statistics));

  // Display statistics
  displayStatistics(statistics);
}

// Function to display visitor statistics
function displayStatistics(statistics) {
  let statisticsDiv = document.getElementById("statistics");
  statisticsDiv.innerHTML = "<h2>Visitor Statistics</h2>";

  // Display today's statistics
  let today = new Date();
  let todayDate = today.toISOString().split("T")[0];
  let todayCount = statistics[todayDate] || 0;
  statisticsDiv.innerHTML += "<p>Today: " + todayCount + " visits</p>";

  // Display this month's statistics
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();
  let currentMonthKey = currentYear + "-" + currentMonth;
  let currentMonthCount = statistics[currentMonthKey] || 0;
  statisticsDiv.innerHTML +=
    "<p>This month: " + currentMonthCount + " visits</p>";

  // Display this year's statistics
  let currentYearKey = currentYear.toString();
  let currentYearCount = statistics[currentYearKey] || 0;
  statisticsDiv.innerHTML +=
    "<p>This year: " + currentYearCount + " visits</p>";
}

// Call updateStatistics function when page loads
window.onload = updateStatistics;
