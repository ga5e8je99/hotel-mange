// htaxios.get('https://hotelrev-eight.vercel.app/hotel/api/hotel/create')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
let linkes=document.querySelectorAll('.nav-link');
let pages=[
    document.getElementById('home'),
    document.getElementById('hotels'),
    document.getElementById('feedback'),
    document.getElementById('contact')
];

let list;
for (let i = 0; i < linkes.length; i++) {
    linkes[i].addEventListener('click', function(){
        linkes.forEach(list=>list.classList.remove('active-link'));
        this.classList.add('active-link');
        list=this;
        for (let index = 0; index < pages.length; index++) {
            pages.forEach(pages=>pages.classList.remove('active-page'));
            if (list===document.getElementById('home-page')) {
                pages.forEach(pages=>pages.classList.remove('active-page'));
                document.getElementById("home").classList.add("active-page");

                console.log('home');
            }
            else if (list===document.getElementById('hotels-page')) {
                pages.forEach(pages=>pages.classList.remove('active-page'));
                document.getElementById("hotels").classList.add("active-page");
            }
            else if (list===document.getElementById('feedback-page')) {
                pages.forEach(pages=>pages.classList.remove('active-page'));
                document.getElementById("feedback").classList.add("active-page");
                console.log('feedback');
            }
            else if (list===document.getElementById('contact-page')) {
                pages.forEach(pages=>pages.classList.remove('active-page'));
                document.getElementById("contact").classList.add("active-page");
                console.log('contact');
            }
            
            
        }
    
})}
document.addEventListener("DOMContentLoaded", () => {
  const applyFilters = document.getElementById("apply-filters");
  const hotelSection = document.getElementById("hotels-section");

  applyFilters.addEventListener("click", () => {
    const searchName = document.getElementById("search-name").value.toLowerCase();
    const selectedLocation = document.getElementById("filter-location").value;
    const selectedRatings = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    ).map(cb => cb.value); // Get all selected checkbox values

    const hotelCards = hotelSection.querySelectorAll(".cont");

    hotelCards.forEach(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const location = card.querySelector(".card-text").textContent.toLowerCase();
      const rating = card.querySelector(".star-rating").textContent.trim().length; // Number of stars

      const matchesName = !searchName || title.includes(searchName);
      const matchesLocation =
        selectedLocation === "all" || location.includes(selectedLocation.toLowerCase());
      const matchesRating =
        selectedRatings.length === 0 || selectedRatings.includes(rating.toString());

      // Show or hide the card based on matching conditions
      if (matchesName && matchesLocation && matchesRating) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the form from refreshing the page

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const hotel = document.getElementById('hotel').value;
  const feedback = document.getElementById('feedback').value;
  const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : 'No rating';

  console.log({
    name: name,
    email: email,
    hotel: hotel,
    feedback: feedback,
    rating: rating
  });

  alert('Thank you for your feedback!');
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log({
    name: name,
    email: email,
    message: message
  });

  alert('Thank you for contacting us! We will get back to you shortly.');})