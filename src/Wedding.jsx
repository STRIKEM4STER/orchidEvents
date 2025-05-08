import React, { useEffect, useRef, useState } from "react";
import "./Wedding.css";
import Header from "./components/Header";

const images = [
  "https://images.unsplash.com/photo-1587271636175-90d58cdad458?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://shuttermagik.com/wp-content/uploads/2025/02/Portfolio_HighResImages_0001-2.jpg",
  "https://wp-media-partyslate.imgix.net/2022/08/enchanting-hindu-ceremony-at-the-marriott-in-schaumburg-illinois_1498414-scaled.jpg",
  "https://static1.squarespace.com/static/5add0781b10598c55cc087b7/t/5e1401733f8ed65e20755788/1578369407108/PopWedding4.png?format=1500w",
  "https://static1.squarespace.com/static/5add0781b10598c55cc087b7/t/5e1401733f8ed65e20755788/1578369407108/PopWedding4.png?format=1500w",
];



export default function Event() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const container3Ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (container3Ref.current) observer.observe(container3Ref.current);
    return () => {
      if (container3Ref.current) observer.unobserve(container3Ref.current);
    };
  }, []);

  return (
    <div className="Main">
      <Header/>
      <div className="Container-1">
  <img
    src={images[current]}
    alt={`Slide ${current + 1}`}
    className="slide-image"
  />
  <div className="overlay-text">
    <h1>Welcome to Orchid Event</h1>
    <p>Where Elegance Meets Celebration!</p>
  </div>
</div>

      <div className="Container-2">
        <div className="C2-1"></div>
        <div className="C2-2">
          <div className="about-us">
            <h1>About Us</h1>
            <h3>
              <p>
                Welcome to our wedding celebration! We are thrilled to share
                this special day with our beloved family and friends. Our
                journey began with love, laughter, and countless memories, and
                now we’re excited to start the next chapter together. Join us as
                we celebrate unity, joy, and everlasting love.
              </p>
            </h3>
          </div>
        </div>
      </div>

      <div className="Container-3" ref={container3Ref}>
        <h2 className="services-title">Our Wedding Services</h2>
        <div className="services-grid">
          {[
            "Venue Decoration",
            "Catering",
            "Photography",
            "Videography",
            "Music & DJ",
            "Lighting",
            "Guest Management",
            "Invitations",
            "Makeup & Styling",
            "Transportation",
            "Live Performances",
            "Wedding Cake",
            "Stage Design",
            "Return Gifts",
          ].map((service, index) => (
            <div
              key={index}
              className={`service-card ${isVisible ? `animate-${index % 4}` : ""}`}
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      <div className="Container-4"></div>
    </div>
  );
}
