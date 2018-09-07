// Get the modal
var modal = document.getElementById("disclaimerModal");

// Get the button that opens the modal
var btn = document.getElementById("disclaimer");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Cat Quotes
var cat_quote = [];
cat_quote[0] =
  "Cats can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small animals. Cats can hear ultrasound, which is important in hunting because many species of rodents make ultrasonic calls.";
cat_quote[1] = "A group of cats can be referred to as a clowder or a glaring.";
cat_quote[2] =
  "A pedigreed cat is one whose ancestry is recorded by a cat fancier organization. A purebred (or pure-bred) cat is one whose ancestry contains only individuals of the same breed. Many pedigreed and especially purebred cats are exhibited as show cats. ";
cat_quote[3] =
  "Cats, like dogs, are digitigrades. They walk directly on their toes, with the bones of their feet making up the lower part of the visible leg.";
cat_quote[4] =
  "Cats have protractable and retractable claws. In their normal, relaxed position, the claws are sheathed with the skin and fur around the paw's toe pads. This keeps the claws sharp by preventing wear from contact with the ground and allows the silent stalking of prey.";
cat_quote[5] =
  "Cats are able to tolerate quite high temperatures: Humans generally start to feel uncomfortable when their skin temperature passes about 38 °C (100 °F), but cats show no discomfort until their skin reaches around 52 °C (126 °F), and can tolerate temperatures of up to 56 °C (133 °F) if they have access to water.";
cat_quote[6] =
  "Cats are obligate carnivores: their physiology has evolved to efficiently process meat, and they have difficulty digesting plant matter. About 20% of a cat's diet must be protein.";
cat_quote[7] =
  "Cats have relatively few taste buds compared to humans (470 or so versus more than 9,000 on the human tongue). Domestic and wild cats share a gene mutation that keeps their sweet taste buds from binding to sugary molecules, leaving them with no ability to taste sweetness.";
cat_quote[8] =
  "Cats also have a distinct temperature preference for their food, preferring food with a temperature around 38 °C (100°F) which is similar to that of a fresh kill and routinely rejecting food presented cold or refrigerated (which would signal to the cat that the 'prey' item is long dead and therefore possibly toxic or decomposing).";
cat_quote[9] =
  "To aid with navigation and sensation, cats have dozens of movable whiskers (vibrissae) over their body, especially their faces. These provide information on the width of gaps and on the location of objects in the dark, both by touching objects directly and by sensing air currents; they also trigger protective blink reflexes to protect the eyes from damage.";
cat_quote[10] =
  "Most breeds of cat have a noted fondness for settling in high places, or perching. In the wild, a higher place may serve as a concealed site from which to hunt; domestic cats may strike prey by pouncing from a perch such as a tree branch, as does a leopard.";
cat_quote[11] =
  "During a fall from a high place, a cat can reflexively twist its body and right itself using its acute sense of balance and flexibility.This is known as the cat righting reflex.";
cat_quote[12] =
  "Domestic cats use many vocalizations for communication, including purring, trilling, hissing, growling/snarling, grunting, and several different forms of meowing. The mechanism by which cats purr is elusive. The cat has no unique anatomical feature that is clearly responsible for the sound.";

var cq = 0;

var cat_q = document.getElementById("cat_quotes");
setInterval(function() {
  $("#cat_quotes").fadeOut("slow", function() {
    cat_q.innerHTML = cat_quote[cq];
    cq++;
    if (cq == cat_quote.length) {
      cq = 0;
    }
    $("#cat_quotes").fadeIn("slow");
  });
}, 9999);


// Filter Menu

function openMenu() {
  document.getElementById("navbar").style.width = "100%";
}
function exitMenu() {
  document.getElementById("navbar").style.width = "0%";
}


// Pagepiling

$(document).ready(function() {
  $("#pagepiling").pagepiling({
    menu: null,
    direction: "horizontal",
    verticalCentered: true,
    sectionsColor: [ '##17a2b8', '#f2f2f2','#7BAABE' ,'#17a2b8','#f2f2f2','#17a2b8'],
    anchors: ["welcome_section", "introduction_section", "piecharts_section", "barchart_section", "datatable_section","thank_you_section"],
    scrollingSpeed: 700,
    easing: "swing",
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      textColor: "#000",
      bulletsColor: "#000",
      position: "",
      tooltips: []
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    keyboardScrolling: true,
    sectionSelector: ".section",
    animateAnchor: false,
    
  });
});


//Media Queries

checkSize();
window.addEventListener('resize', checkSize);

function checkSize(){if(document.documentElement.clientWidth < 991) {
  $('#piecharts_section').addClass('pp-scrollable');
  $('#thank_you_section').addClass('pp-scrollable');
}
}