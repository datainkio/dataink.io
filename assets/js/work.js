/**
 * Define the presentation of the homepage.
 * - Assign intro sequences to key blocks
 * - Assign scrollTo behaviors to buttons
 */
document.addEventListener("DOMContentLoaded", (event) => {
  let dur = .25; // base value for animation duration (in seconds)
  let y_delta = 35; // vertical origin of elements
  let pos = "-=.1"; // offset (in seconds) of animation relative to the previous
  // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  /** INITIALIZE VIEW */
  const cards = gsap.utils.toArray("a.card.project");
  cards.forEach(card => {
    if (!card.classList.contains("featured")) {
      card.style.opacity = 0;
      card.style.display = "none";
    }
  });


  /** TITLE */
  let welcome = gsap.timeline({});

  welcome.add(gsap.from("h1", {duration: dur, y:y_delta, autoAlpha: 0, ease: "sine.inOut", delay: .5}));
  welcome.add(gsap.from(".abstract", {duration: dur, autoAlpha: 0, ease: "sine.inOut",}));
  // welcome.add(gsap.from('.card.project.featured', {autoAlpha: 0, duration: dur, ease: "sine.inOut"}), pos);
  welcome.add(gsap.from('.navbar-end', {autoAlpha: 0, duration: dur, ease: "sine.inOut"}), pos);

  const btns = gsap.utils.toArray('.navbar-start li');
  btns.forEach(btn => {
    welcome.add(gsap.from(btn, {
      autoAlpha: 0,
      y: y_delta,
      duration: dur
    }), pos);
  });
  /**
  const cards = document.querySelectorAll('#view_featured .card')
  gsap.from(cards, {
      autoAlpha: 0,
      y: y_delta, 
      duration: dur
    });
    */

  /** 
   * CATEGORY SELECTION
   * Bring a category into view when its menu item is selected
   * */
  const categories = gsap.utils.toArray("a.category");
  categories.forEach(cat => {
    var label = document.getElementById("category_current");
    cat.addEventListener("click", () => {
      // Update button states
      categories.forEach(item => {
        item.classList.remove("active");
        item.classList.remove("btn-active");
        if (item.innerHTML == cat.innerHTML) {
          if(item.classList.contains("btn")) {
            item.classList.add("btn-active");
          } else {
            item.classList.add("active");
          }
        }
        // Update the project previews
        const cards = gsap.utils.toArray("a.card.project");
        cards.forEach(card => {
          if (card.classList.contains(cat.id)) {
            // display the project
            gsap.to(card, {opacity: 1, display: "block", delay: .5, duration: dur, ease: "sine.inOut"});
          } else {
            // hide the project
            gsap.to(card, {opacity: 0, display: "none", duration: dur, ease: "sine.inOut"});
          }
        })
      })

     // Update the label with title of the selected category
     label.innerHTML = cat.innerHTML;
     // Update the button to reflect its active state
     
      // gsap.to(window, {duration: 1, scrollTo:{y:cat.id, offsetY: 72}});
    });
  })

});
