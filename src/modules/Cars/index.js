import React, { Component } from 'react'

class Cars extends Component {

  componentWillMount() {
    let script = document.createElement('script');
    script.setAttribute('id', 'ctEngineEmbed');
    script.src = "https://ajaxgeo.cartrawler.com/webapp-abe-latest/app-desktop.js";
    document.getElementsByTagName('body')[0].appendChild(script);

      let newScript = document.createElement('script');
      let inlineScript = document.createTextNode('var CT = { ABE: {  Settings: { clientID: "420684" } } };');
      newScript.setAttribute('id', 'ctEnginePlaceholder');
      newScript.appendChild(inlineScript); 
      document.getElementsByTagName('head')[0].appendChild(newScript);
  }

  componentWillUnmount () {
   let ctEngineEmbed = document.getElementById('ctEngineEmbed');
   let ctEnginePlaceholder = document.getElementById('ctEnginePlaceholder');
   if (ctEngineEmbed && ctEnginePlaceholder) {
    ctEngineEmbed.remove(); 
    ctEnginePlaceholder.remove();
   }
  }

  render() {
    return (
        <div ct-app="ct-app">
        
        </div>
    );
  }

}

export default Cars;