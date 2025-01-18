import './cta-section.css';
export function CTASection() {
    return (
        <div className="d-flex justify-content-center flex-column align-items-center p-4">
            <div className="text-center">
                <h4 className="fs">Start your free trial</h4>
                <p className="para mt-2">Join over 4000+ startups already growing with Untitled</p>
            </div>
            <div className="mt-3 flex">
                <button className="btn btn-outline-dark  me-2">Learn more</button>
                <button className="btn btn-danger">Get started</button>

            </div>
        </div>
    )
}