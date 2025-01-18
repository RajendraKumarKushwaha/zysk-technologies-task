import { useState } from "react";
import './faq-section.css';
export function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            title: "Is there a free trial available?",
            content: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
        {
            title: "Can I change my plan later?",
            content: "Yes, you can change your plan later.",
        },
        {
            title: "What is your cancellation policy?",
            content: "You can cancel your subscription anytime.",
        },
        {
            title: "Can other info be added to an invoice?",
            content: "Yes, additional information can be added to an invoice upon request.",
        },
        {
            title: "How does billing work?",
            content: "Billing works on a recurring basis depending on your selected plan, with charges made automatically at the start of each billing cycle.",
        },
        {
            title: "How do I change my account email?",
            content: "To change your account email, go to your account settings, update your email address, and save the changes.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (

        <div className="accordian mt-3 mb-5">
            <h3 className="text-center head3">Frequently Asked Questions</h3>
            <p className="para text-center mb-5">Everything you need to know about the product and billing.</p>
            <div className="accordion ">

                {items.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <div
                            className="accordion-header"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h5 className="heading5">{item.title}</h5>
                            <span className="fs-4">{activeIndex === index ? "-" : "+"}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="accordion-content">
                                <p className="para">{item.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div>
               <div className="d-flex flex-column align-items-center mt-5">
                  <img src="/assests/images/Avatar group.png"alt="" className="mb-3"/>
                  <h6 className="head6">Still have questions?</h6>
                  <p className="para">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                  <button className="btn btn-danger">Get in touch</button>
               </div>
            </div>
        </div>
    )
}