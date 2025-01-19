import './feature-section.css';
export function FeatureSection() {
    const data = [
        { icon: 'bi bi-chat-dots', heading: 'Share team inboxes', description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.' },
        { icon: 'bi bi-lightning-charge', heading: 'Delever instant answer', description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.' },
        { icon: 'bi bi-grid-3x3-gap', heading: 'Manage your team with reports', description: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.' },
        { icon: 'bi bi-emoji-smile', heading: 'Connect with customers', description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.' },
        { icon: 'bi bi-terminal', heading: 'Connect the tools you already use', description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.' },
        { icon: 'bi-heart', heading: 'Our people make the difference', description: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.' },
    ];

    return (
        <div className="d-flex  flex-column justify-content-center align-items-center text-center pt-4">
            <div>
                <h6 className="text-danger fs-5">Features</h6>
                <h3 className="fw-bold h3">Analytics that feels like it’s from the future</h3>
                <p className="para">Powerful, self-serve product and growth analytics to help you convert, engage,<br /> and retain more users. Trusted by over 4,000 startups.</p>
            </div>

            <div className=" custom-padding features-container mt-4">
                <div className="row">
                    {data.map((item, index) => (
                        <div key={index} className="col-md-4 text-center mb-4">
                            <i className={`bi ${item.icon} fs-2`}></i>
                            <h5>{item.heading}</h5>
                            <p className="para fs-6">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}