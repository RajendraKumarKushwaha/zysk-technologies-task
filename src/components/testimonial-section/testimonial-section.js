import './testimonial-section.css';
export function Testimonial() {
    return (
        <div className='d-flex justify-content-center text-center bg-color py-4'>
            <div >
                <img src='/assests/images/Logomark.png' alt='testimonial' className=' mb-2' />
                <img src='/assests/images/Logotype.png' alt='testimonial' className=' mb-2' />
                <h2 className='head2'>We’ve been using Untitled to kick start every new  project and can’t imagine working without it</h2>
                <img src='/assests/images/Avatar.png' alt='testimonial' className='testimonial mt-3' />
                <h5>Candice wu</h5>
                <p className='para '>Product Manager, Sisyphus</p>
            </div>
        </div>
    )
}