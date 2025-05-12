import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef } from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import assets from '../../assets/assests';

const testimonials = [
    {
        name: 'Ankur Warikoo',
        title: 'Founder, Nearbuy',
        image: assets.humanIcon,
        message: `Razorpay gave me a 10L card limit in 10 days. My bank needed an FD. RP saw 30% of my revenue and issued it instantly.`,
    },
    {
        name: 'Aravind S',
        title: 'Founder, QED Corporation',
        image: assets.humanIcon,
        message: `RazorpayX Payroll is essential for any startup founder. It handles payroll & compliance beautifully.`,
    },
    {
        name: 'Prateek Sharma',
        title: 'Co-founder, Heelum',
        image: assets.humanIcon,
        message: `Other banks take weeks. Razorpay gave us a corporate card with no paperwork. Impressed!`,
    },
    {
        name: 'Tarun Mehta',
        title: 'Co-founder, Ather Energy',
        image: assets.humanIcon,
        message: `The Smart Collect System and dashboards make tracking payments a breeze.`,
    },
    {
        name: 'Shameek Chakravarty',
        title: 'Founder, Farmizen',
        image: assets.humanIcon,
        message: `Razorpay handles all our payment needs, so we focus on our business.`,
    },
    {
        name: 'Rohit Jain',
        title: 'CEO, Finlyt',
        image: assets.humanIcon,
        message: `Razorpay APIs are intuitive and powerful. Seamless integration!`,
    },
    {
        name: 'Sneha Rao',
        title: 'Founder, Craftsy',
        image: assets.humanIcon,
        message: `Loved the support and the speed. Razorpay is a startup essential!`,
    },
];

const scrollContainerStyle = {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    width: '100%',
    overflowX: 'hidden',
};

const testimonialCardStyle = {
    maxWidth: '320px',
    flex: '0 0 auto',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    padding: '1.5rem',
};

const TestimonialScroll = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        let scrollWidth = 0;

        if (scrollContainer) {
            scrollWidth = scrollContainer.scrollWidth;
        }

        const scroll = () => {
            if (scrollContainer) {

                scrollContainer.scrollBy({
                    left: 1,
                    behavior: 'smooth',
                });

                if (scrollContainer.scrollLeft >= scrollWidth - scrollContainer.clientWidth) {
                    scrollContainer.scrollLeft = 0;
                }
            }
        };


        const intervalId = setInterval(scroll, 30);


        return () => clearInterval(intervalId);
    }, []);

    return (
        <Container style={{ padding: '5rem 3rem', paddingBottom: '3rem', maxHeight: '600px' }}>
            <h4 className="text-center fw-bold mb-4 ">
                An experience people love to talk about
            </h4>
            <div
                ref={scrollContainerRef}
                className="scroll-container"
                style={scrollContainerStyle}
            >
                {testimonials.map((t, i) => (
                    <Card
                        key={i}
                        style={{
                            ...testimonialCardStyle,
                            marginRight: '1rem',
                        }}
                    >
                        <Card.Body>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '10px',
                                }}
                            >
                                <Image
                                    src={t.image}
                                    roundedCircle
                                    width={40}
                                    height={40}
                                    style={{ marginRight: '10px' }}
                                />
                                <div>
                                    <strong>{t.name}</strong>
                                    <div style={{ fontSize: '13px', color: 'gray' }}>
                                        {t.title}
                                    </div>
                                </div>
                            </div>
                            <Card.Text style={{ fontSize: '14px' }}>{t.message}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default TestimonialScroll;
