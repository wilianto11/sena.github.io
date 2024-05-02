const header = document.querySelector("header");
const sectionOne = document.querySelector(".change-name");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

function openWhatsApp() {
  window.open("https://wa.me/085186660723", "_blank");
}
//perubahan fungsi slide
// Mendapatkan referensi elemen gambar dan tombol-tombol
var slide = document.getElementById("slide");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

// Array untuk menyimpan nama-nama file gambar
var imageNames = [];

// Variabel untuk melacak indeks gambar saat ini
var currentIndex = 0;

// Fungsi untuk memuat semua gambar dalam folder
function loadImages() {
  // Mendapatkan daftar semua file dalam folder assets/images
  fetch("assets/images/content/")
    .then((response) => response.text())
    .then((text) => {
      // Mencari semua tautan file gambar dalam HTML
      var matches = text.match(/href="([^"]+\.(png|jpg|jpeg|gif))"/g);
      if (matches) {
        // Mengambil nama file dari tautan dan menambahkannya ke dalam array
        matches.forEach((match) => {
          var fileName = match.match(/href="([^"]+\.(png|jpg|jpeg|gif))"/)[1];
          // Pastikan nama file yang diambil tidak mengandung string "assets/images/content/" secara ganda
          if (!fileName.includes("assets/images/content/")) {
            imageNames.push(fileName);
          }
        });
      }
      // Memuat gambar pertama kali halaman dimuat
      slide.src = "" + imageNames[0].replace("assets/images/content/", "");
      startAutoSlide(); // Mulai auto slide setelah gambar pertama dimuat
    })
    .catch((error) => console.error("Error loading images:", error));
}

// Variabel untuk menyimpan interval untuk auto slide
var autoSlideInterval;

// Fungsi untuk memulai auto slide
function startAutoSlide() {
  autoSlideInterval = setInterval(showNextImage, 4000); // Auto slide setiap 3 detik
}

// Fungsi untuk mengubah gambar berikutnya
function showNextImage() {
  currentIndex = (currentIndex + 1) % imageNames.length;
  slide.src =
    "" + imageNames[currentIndex].replace("assets/images/content/", "");
}

// Fungsi untuk mengubah gambar sebelumnya
function showPreviousImage() {
  currentIndex = (currentIndex - 1 + imageNames.length) % imageNames.length;
  slide.src =
    "" + imageNames[currentIndex].replace("assets/images/content/", "");
}

// Memuat semua gambar saat halaman dimuat
loadImages();

// Your JavaScript code here
document.addEventListener("DOMContentLoaded", function () {
  var heading = document.querySelector("h1");

  heading.addEventListener("click", function () {
    this.style.transform = "scale(1.1)";
    // You can add more actions here when the heading is clicked
  });
});

// // Retrieve canvas element by ID
// const ctx = document.getElementById("myChart");

// // Function to update visitor statistics for today, this month, and this year
// function updateStatistics() {
//   // Retrieve existing statistics from local storage
//   let statistics = JSON.parse(localStorage.getItem("visitorStatistics")) || {};

//   // Get today's date
//   let today = new Date();
//   let todayDate = today.toISOString().split("T")[0]; // Today's date in ISO format (YYYY-MM-DD)

//   // Get current month and year
//   let currentMonth = today.getMonth() + 1; // Month starts from 0 (January is month 0)
//   let currentYear = today.getFullYear();

//   // Extract statistics for today, this month, and this year
//   let todayCount = statistics[todayDate] || 0; // Visitor count for today
//   let currentMonthKey = currentYear + "-" + currentMonth;
//   let currentMonthCount = statistics[currentMonthKey] || 0; // Visitor count for this month
//   let currentYearKey = currentYear.toString();
//   let currentYearCount = statistics[currentYearKey] || 0; // Visitor count for this year

//   // Display statistics
//   document.getElementById("todayCount").textContent = todayCount;
//   document.getElementById("currentMonthCount").textContent = currentMonthCount;
//   document.getElementById("currentYearCount").textContent = currentYearCount;

//   // Update chart
//   let labels = ["Today", "This Month", "This Year"];
//   let data = [todayCount, currentMonthCount, currentYearCount];

//   // Create chart
//   new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: labels,
//       datasets: [
//         {
//           label: "Visits",
//           data: data,
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.2)",
//             "rgba(54, 162, 235, 0.2)",
//             "rgba(255, 206, 86, 0.2)",
//           ],
//           borderColor: [
//             "rgba(255, 99, 132, 1)",
//             "rgba(54, 162, 235, 1)",
//             "rgba(255, 206, 86, 1)",
//           ],
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });
// }

// // Call updateStatistics function when page loads
// window.onload = updateStatistics;
