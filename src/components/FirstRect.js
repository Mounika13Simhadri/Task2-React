import React, { Component } from 'react'

export class FirstRect extends Component {
  render() {
    return (
      <div>
      <div className="rect-container">
        <div id="rect1">
          <div id="rect2">
            <div id="rect3">
              <div id="rect4">
                <img src="images/avatar.jpg" alt="image2"/>
                <h5>  John smith</h5>
                <h6> last seen 2hr ago</h6>
              </div>
              <div>
                <div id="rect5"><h6>&nbsp;&nbsp;That sounds great.I'd be great &nbsp;&nbsp;&nbsp;&nbspfor that.</h6></div>
                <div id="rect6"><h6> &nbsp;&nbsp;Could you send over some pictures &nbsp;&nbsp;&nbsp;&nbsp;of your dog.Please? </h6></div>
                <img id="i1" src="images/d1.jpg" alt="image3"/>
                <img id="i2" src="images/d2.jpg" alt="image4"/>
                <img id="i3" src="images/d3.jpg" alt="image5"/>

                <div id="rect7"><h6> &nbsp;&nbsp;Here are few pictures.She's a happy &nbsp; girl!</h6></div>
                <div id="rect8"><h6>&nbsp;&nbsp;Can you make it?</h6></div>
      
                <div id="rect9"><h6>&nbsp;&nbsp;She looks so happy! The time &nbsp;&nbsp;&nbsp;&nbsp;we disscussed works.&nbsp;&nbsp;How long shall i &nbsp;take her out for?</h6></div>
                <div id="rect10">
                  <ul>
                    <li><h6>30 minute walk&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$29</h6></li>
                  </ul>
                </div>
                <div id="rect11">
                  <ul>
                    <li><h6>1 hour walk&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$49</h6></li>
                  </ul>
                </div>
                <div id="rect12">
                  <h4>&nbsp;&nbsp;Type a message..</h4>
                  <img alt="image1" src="images/img2.png"/>
                </div>
              </div>                
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default FirstRect

