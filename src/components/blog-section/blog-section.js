import './blog-section.css';
export function BlogSection() {
    const data = [
        {
            image: '/assests/images/card1.png',
            paragraph: 'Design',
            heading: 'UX review presentations',
            paragraph2: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
            avatar: '/assests/images/Avatar (1).png',
            name: 'Olivia Rhye',
            date: '20 Jan 2024'
        },
        {
            image: '/assests/images/card2.png',
            paragraph: 'Product',
            heading: 'Migrating to Linear 101',
            paragraph2: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
            avatar: '/assests/images/Avatar (2).png',
            name: 'Phoenix Baker',
            date: '19 Jan 2024'
        },
        {
            image: '/assests/images/card3.png',
            paragraph: 'Software Engineering',
            heading: 'Building your API stack',
            paragraph2: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
            avatar: '/assests/images/Avatar (3).png',
            name: 'Lana Steiner',
            date: '18 Jan 2024'
        },
    ];

    return (
        <div className="mt-5">
            <div className="d-flex justify-content-between flex-column flex-md-row">
                <div>
                    <h6 className="text-danger">Our blog</h6>
                    <h4>Latest blog posts</h4>
                    <p>Tool and strategies modern teams need to help their companies grow.</p>
                </div>
                <div className="mt-3 mt-md-0">
                    <button className="btn btn-danger w-100 w-md-auto">View all posts</button>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {
                        data.map((card, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card border-0">
                                    <img src={card.image} className="card-img-top" alt="Card image" />
                                    <div className="card-body">

                                        <p className="card-text fs-6  text-danger">{card.paragraph}</p>

                                        <div className="d-flex justify-content-between">
                                            <h5 className="card-title">{card.heading}</h5>
                                            <span className="bi bi-arrow-up-right fw-bold"></span>
                                        </div>
                                        <p className="card-text paragraph">{card.paragraph2}</p>

                                        <div className="d-flex">
                                            <div className="me-2">
                                                <img src={card.avatar} alt="Card avatar" />
                                            </div>
                                            <div>
                                                <p style={{ fontSize: "13px" }} className="fw-bold name">{card.name} <br /> <span className="fw-light paragraph">{card.date}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
