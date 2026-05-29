import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VivekImage from '../assets/profile_pic.jpg';
import DjImage from '../assets/dj.jpeg';
import MandImage from '../assets/mand.jpg';

function AboutUs() {
    // Sample data for demonstration
    const profiles = [
        {
            name: 'Vivek Kumar',
            email: 'vivekumar7510@gmail.com',
            image: VivekImage,
            alt: 'Vivek Profile',
            number:8434287510,
        },
        {
            name: 'Manthan Dholariya',
            email: 'manthandholariya40@gmail.com',
            image: MandImage,
            alt: 'Mand Profile',
            number:8401836019,
        },
        
    ];

    return (
        <React.Fragment>
            <Navbar />
            <div className="abtusheading">
                Team CP/DSA
            </div>
            <div id="abtus">
                {profiles.map((profile, index) => (
                    <div key={index} className="card">
                        <div className="image">
                            <img src={profile.image} alt={profile.alt} />
                        </div>
                        <div className="details">
                            <h2>{profile.name}</h2>
                            <p>{profile.email}</p>
                            <p>{profile.number}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default AboutUs;
