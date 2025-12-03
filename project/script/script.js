// GREETING IN THE HOME PAGE FUNCTION WITH CONDITIONAL BRANCHING//

function updateGreeting() {
  const hour = new Date().getHours();
  const greetingElement = document.getElementById("greeting");

  if (!greetingElement) return;  

  let greeting = "Welcome to Nadia";

  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  greetingElement.textContent = greeting;
}

updateGreeting();


// LEARN WEB PAGE, ANIMATION IN THE FOUNDER PHOTO WITH DOM interaction // 


document.addEventListener("DOMContentLoaded", () => {
  enableFounderHoverAnimation("founder-sadie");
  enableFounderHoverAnimation("founder-zoie");
});

function enableFounderHoverAnimation(id) {
  const photo = document.getElementById(id);
  if (!photo) return;

  photo.addEventListener("mouseenter", () => {
    photo.classList.add("hover-active");
  });

  photo.addEventListener("mouseleave", () => {
    photo.classList.remove("hover-active");
  });
}



// Answer to ✔ Use objects, arrays, and array methods, 


const founders = [
  {
    name: "Sadie Rodríguez",
    role: "Founder & CEO",
    description: "She transforms limited resources into meaningful impact."
  },
  {
    name: "Zoei Arnold",
    role: "Co-Founder & Consulting Lead",
    description: "She turns complex challenges into simple pathways."
  }
];


founders.forEach(founder => {
  console.log(`${founder.name} – ${founder.role}`);
  console.log(`Description: ${founder.description}`);  // answer to ✔ : Exclusively use template literals when building strings for output
});


//answer to  ✔  use Localstorage visual msg 


const returningMessage = document.getElementById("returning-user-message");

// Only run this on the booking page
if (returningMessage) {
  const hasVisited = localStorage.getItem("visited-booking");

  if (!hasVisited) {
    returningMessage.textContent = "Welcome! This is a great time to book your first session with us.";
    localStorage.setItem("visited-booking", "true");
  } else {
    returningMessage.textContent = "Welcome back! Ready to book your next session?";
  }
}
