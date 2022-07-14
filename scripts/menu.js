export function activeMenu (body) {


  function active () {
    const homeButton = document.querySelector("nav li:nth-child(1) a")
    const universeButton = document.querySelector("nav li:nth-child(2) a")
    const explorationButton = document.querySelector("nav li:nth-child(3) a")

    let hash = window.location.hash;

    switch (hash) {
      case "#home":
        activeHome();
      break
  
      case "#universe":
        activeUniverse()
      break
    
      case "#exploration":
        activeExploration()
      break
    }


    function activeHome() {
      homeButton.classList.add("active");
      universeButton.classList.remove("active");
      explorationButton.classList.remove("active");
      body.style.backgroundImage = "url(assets/mountains-universe-1.png)";
    }

    function activeUniverse() {
      universeButton.classList.add("active");
      homeButton.classList.remove("active");
      explorationButton.classList.remove("active");
      body.style.backgroundImage = "url(assets/mountains-universe02.png)";
    }

    function activeExploration() {
      explorationButton.classList.add("active");
      universeButton.classList.remove("active");
      homeButton.classList.remove("active");
      body.style.backgroundImage = "url(assets/mountains-universe-3.png)";
    }
  }

  return {active}
}
