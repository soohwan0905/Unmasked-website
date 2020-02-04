import React, {Component} from "react";
import "./Resources.scss";
import Resource from "../Resource/Resource.js";
import {resourceData} from '../resourceData';

class Resources extends Component{

    showDescription(event){
        console.log("hi!");
        event.target.style="black";

      }
    
    render(){

        return(
            <div className="resources">
                <div className="container">
                    <a id="resources">
                        <ul id="theResourceList" className="resource-list">
                            <li className="resource-title" onClick={this.showDescription}><span><strong>Free, Confidential 24/7 Emergency Hotlines</strong></span>
                                <p className="resource-description" ref="description1">
                                Emergency Services: 911
                            Counselor-on-Call (S&S Dispatch): 603-646-3333
                            Safety and Security 24-hours a day: 603-646-3333
                            Dean-on-Call (S&S Dispatch): 603-646-3333
                            Counselor on Call (Non-S&S Dispatch): 603-646-9440 (fall, winter, spring) / (603) 646-4000 (summer, breaks, holidays)
                            Dick’s House Inpatient Department (IPD): (603) 646-9440
                            Hanover Police non-emergency: 603-643-2222
                            Dartmouth Hitchcock Emergency Room: 603-650-7000
                                </p>
                            </li>
                            <li className="resource-title"><span><strong>Issue-Specific Free, Confidential 24/7 Emergency Hotlines
                            WISE</strong></span>
                                <p className="resource-description" id="description-2">
                                Upper Valley WISE: 866-348-WISE (http://www.wiseuv.org/)
                            WISE is available 24/7 for both crisis management/mental health support as well as providing further information about options after someone has experienced harm. WISE is a confidential resource, with trained consultants who are particularly apt at designing escape plans for those that are seeking a safe way to leave an abusive relationship. Should you request one, WISE representatives are also available to accompany you to appointments regarding harm that may be stressful, such as courtrooms, meet the Hanover Police, etc. WISE has both self-identifying men and self-identifying women to speak to, and you can request whomever you feel comfortable speaking with
                            </p>
                            </li>

                            <li className="resource-title"><span><strong>National Suicide Prevention Lifeline</strong></span>
                                <p className="resource-description" id="description-3">National Suicide Prevention Lifeline: 800-273-8255 (www.suicidepreventionlifeline.org/)
                            The National Suicide Prevention Lifeline is a national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week. They’re committed to improving crisis services and advancing suicide prevention by empowering individuals, advancing professional best practices, and building awareness.
                                </p>
                            </li>

                            <li className="resource-title"><span><strong>Rape, Abuse, Incest National Network (RAINN) Hotline: 800-656-HOPE (4673) (www.centers.rainn.org/)</strong></span>
                                <p className="resource-description" id="description-4">Use this tool to find help near you. This list is made up of independent sexual assault service providers, including National Sexual Assault Hotline affiliate organizations and other local providers. Staff at these programs are dedicated to helping survivors in your area.
                                </p>
                            </li>

                            <li className="resource-title"><span><strong>National Domestic Violence Hotline: 800-799-7233 (www.thehotline.org)</strong></span>
                                <p className="resource-description" id="description-5">Their highly-trained advocates are available 24/7/365 to talk confidentially with anyone experiencing domestic violence, seeking resources or information, or questioning unhealthy aspects of their relationship.
                                </p>
                            </li>

                            <li className="resource-title"><span><strong>National Dating Abuse Helpline (loveisrespect.org)  Call: 866-331-9474 or Text: LOVEIS to 22522 </strong></span>
                                <p className="resource-description" id="description-6">Their trained peer advocates are available 24/7/365 to offer education, support and advocacy to teens and young adults, as well as their concerned friends and family members, who have questions or concerns about their dating relationships. They also provide information about dating abuse to service providers, counselors, teachers and members of law enforcement.
                                </p>
                            </li>

                            <li className="resource-title"><span><strong>Substance Abuse and Mental Health Services Administration (SAMHSA): 800-662-HELP (4357) (www.samhsa.gov/find-help/national-helpline)</strong></span>
                                <p className="resource-description" id="description-7">SAMHSA's National Helpline is a free, confidential, 24/7, 365-day-a-year treatment referral and information service (in English and Spanish) for individuals and families facing mental and/or substance use disorders.
                                </p>
                            </li>

                            <li className="resource-title"><span><strong>The National Eating Disorders Association: 1(800) 931-2237 (https://www.nationaleatingdisorders.org/help-support/contact-helpline)</strong></span>
                                <p className="resource-description" id="description-8">The NEDA Helpline is available Monday-Thursday from 9AM to 9PM ET, and Friday from 9AM to 5PM ET. Contact the Helpline for support, resources and treatment options for yourself or a loved one. For crisis situations, text "NEDA" to 741741 to be connected with a trained volunteer at Crisis Text Line.
                                </p>
                            </li>

                            <li className="resource-title"><span><strong>Trevor Project (LGBTQ): (866) 488-7386 (https://www.thetrevorproject.org/#sm.000zez93m1qjdzv11bq295wrx3y03)</strong></span>
                                <p className="resource-description" id="description-9">A national 24-hour, toll free confidential suicide hotline for LGBTQ youth.
                                </p>
                            </li>
                        </ul>
                    </a>
                </div>
            </div>
        );
    }
//     state={
//         resources: resourceData
//     };

//   render(){
//     const{resources}=this.state;
//     console.log(this.state.resources);
//     return ( 
//     <div className="resources">
//         {resources.map(resource => {
//             return(
//                 <Resource key={resource.id} resource ={resource}/>
//             )
//         })}
//     </div>
//     );
//   }
};

export default Resources;