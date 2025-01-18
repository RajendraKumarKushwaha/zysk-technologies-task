import './hero-section.css';
export function HeroSection() {

    return (
       
            <div className="d-flex hero flex-column  justify-content-center align-items-center align-content-center">
                <div className="d-flex borders p-1 text-danger align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center me-2 ">
                        <p className="borders px-2 text text-danger mb-0">New Feature</p>
                    </div>
                    <p className="mb-0 text">
                        Check out the team dashboard <span className="bi bi-arrow-right"></span>
                    </p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center text-center m-auto">
                <h1 className='mb-3 heading1'>Beautiful analytics to grow smarter</h1>
                <p className='para text-center'>Powerful, self-serve product and growth analytics to help you convert, engage,<br/> and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div>
                <button className='btn border border-2 me-2 rounded-pill'><span className="bi bi-play-circle"></span> Demo</button>
                <button className='btn btn-danger rounded-pill'>Sign up</button>
            </div>
            </div>
           
       

    )

}
