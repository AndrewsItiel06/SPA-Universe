export class Router {

  routes = {};

  add (hash , html) {
    this.routes[hash] = html;
  }

  router (event) {
    const evt = event || window.event;

    evt.preventDefault();

    window.history.pushState("" , "" , evt.target.href)

    this.handle()
  }

  handle () {
    const {hash} = window.location;
    const route = this.routes[hash] || this.routes[404];
    
    fetch(route)
    .then(html => html.text())
    .then(content => document.getElementById("app").innerHTML = content)
  }
}