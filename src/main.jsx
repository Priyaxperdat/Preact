import { render } from 'preact'
import { App } from './app'
import './index.css'


var initApp = function() {
    const elementId = "root";
    const eNode = document.getElementById(elementId);
    const createElement = function() {
      var g = document.createElement("div");
      g.setAttribute("id", elementId);
      document.body.append(g);
    };
  
    if (!eNode) {
      createElement();
    }
    
    return render(<App />, document.getElementById(elementId));
  }
 
  // (function(){
  //   initApp();
  // })

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}