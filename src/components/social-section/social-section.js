import './social-section.css';
export function SocialSection() {
    return (
        <div className="d-flex flex-column justify-content-center mt-5">
            <div className="parent-social-container">
                <div className='social-container'>
                    <img src="/assests/images/image 1.png" alt="social-image" className="img-fluid social-img" />
                </div>
            </div>

            <div className=' company-list bg-white'>
                <p className=' pt-5 text-center join'>Join 4000+ companies already growing</p>
                <div className='d-flex px-5 pb-5 justify-content-between mt-4 flex-wrap company-logo-container'>
                    <span><img src="/assests/images/Fictional company logo.png" class="img-fluid company-logo" alt="" /></span>
                    <span><img src="/assests/images/Fictional company logo (2).png" class="img-fluid company-logo" alt="company-logo" /></span>
                    <span><img src="/assests/images/Fictional company logo (1).png" class="img-fluid company-logo" alt="company-logo" /></span>
                    <span><img src="/assests/images/Fictional company logo (3).png" class="img-fluid company-logo" alt="company-logo" /></span>
                    <span><img src="/assests/images/Fictional company logo (4).png" class="img-fluid company-logo" alt="company-logo" /></span>
                    <span><img src="/assests/images/Fictional company logo (5).png" class="img-fluid company-logo" alt="company-logo" /></span>

                </div>
            </div>
        </div>
    )
}