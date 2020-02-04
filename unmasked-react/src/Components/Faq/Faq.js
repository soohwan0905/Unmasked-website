import React, {Component} from "react";
import "./Faq.scss";

class Faq extends Component{
  render(){
    return ( 
      <div id="faq" className="faqPage">
          <div className="container">

            <div class="faq-question">
            1. Is it really anonymous?
            </div>
            <div class="faq-answer">
            Yes! The app is completely anonymous with one exception. ONLY in the event of serious perceived threats to self or others will we provide local law enforcement with access to personally identifiable information. No one directly associated with the app will have access to user data. All user data is encrypted.
            </div>
            <br></br>
            <div class="faq-question">
            2. Is it safe?
            </div>
            <div class="faq-answer">
            Yes! We have a team of Unmasked moderators, who have gone through Dick’s House-certified mental health peer support training, that will regularly review content on the app. Please use flagging and direct message reporting features if you ever run into malicious content.
            </div>
            <br></br>
            <div class="faq-question">
            3. When will it be available on Android?
            </div>

            <div class="faq-answer">
            We will begin Android development after we see the results of our iOS launch.
            </div>
            <br></br>

            <div class="faq-question">
            4. How do I contact the Unmasked team?
            </div>

            <div class="faq-answer">
            If you have any questions, concerns, or are interested in joining our team, please contact us at help@unmaskedproject.com.
            </div>
            <br></br>

            <div class="faq-question">
            5. How do I submit app feedback?
            </div>

            <div class="faq-answer">
            Please submit feedback here: <a href="https://forms.gle/DLyqVp7iTSnrhVDT8">https://forms.gle/DLyqVp7iTSnrhVDT8</a>.
            </div>
        </div>
    </div>

    );
  }
};

export default Faq;