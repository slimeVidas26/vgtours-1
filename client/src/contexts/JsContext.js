import React, { Component , createContext } from 'react'
export const JsContext = createContext();

 class JsContextProvider extends Component {
 
state = {
    scriptsArray : [
      "modernizr-custom.js",
      "jquery-2.2.0.min.js",
      "flexmenu.js",
      "nouislider.min.js",
      "wNumb.js",
      "jrespond.min.js",
      "scrollspy.min.js",
      "visibility.js",
      "accordion.js",
      "dropdown-custom.js",
      "sticky.js",
      "page-transition.js",
      "checkbox.js",
       "transition.js",
       "sidebar.js",
       "modal.js",
       "dimmer.js",
      "popup.js",
       "calendar.js",
       "slick.js",
       "jquery.fancybox.js",
       "highlight.pack.js",
       "clipboard.min.js",
       "header.js",
       "functions.js"
    ]

  }

   loadScriptHead = (src)=> {
    const tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.head.appendChild(tag);
  }
  
   loadScriptBody = (src)=> {
    const tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.body.appendChild(tag);
  }
  render() {
    return (
      <JsContext.Provider value = {{...this.state , loadScriptHead : this.loadScriptHead , loadScriptBody : this.loadScriptBody}}>
        {this.props.children}
      </JsContext.Provider>
    )
  }
}

export default JsContextProvider
