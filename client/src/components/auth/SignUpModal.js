import React, { Component } from "react";
import { createPortal } from "react-dom";

import modal_background_001 from '../../assets/images/modal/modal_background_001.jpg';


const modalStyle = {
  display: "block !important"
};

const modalStyle1 = {
  top: "0px"
}


export default class SignUpModal extends Component {
  render() {
    return createPortal(
      <div onClick={this.props.onClick} className="ui dimmer modals page full transition visible active" style={modalStyle}>
  <div className="ui full modal transition hidden scrolling" data-for="modal02" style= {modalStyle1}>

  <div className="modal-full-background">
         <img src={modal_background_001} alt="modal_background_001.jpg"/>
     </div>
        
        {this.props.children}
        
      </div>
      </div>,
      document.getElementById("modal_root"),
      
    );
  }
}
