import { useEffect, useRef } from "react";
import "./styles/Education.css";
import { config } from "../config";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".education-section",
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      tl.to(".education-timeline", {
        height: "100%",
        ease: "none",
      });

      gsap.fromTo(
        ".education-info-box",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education-section",
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="education-section section-container" id="education" ref={sectionRef}>
      <div className="education-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="education-info">
          <div className="education-timeline" style={{ height: "0%" }} ref={timelineRef}></div>
          {config.education.map((edu, index) => (
            <div key={index} className="education-info-box">
              <div className="education-cap-icon">
                {/* Graduation Cap SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>

              <div className="education-info-in">
                <div className="education-role">
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution}</h5>
                </div>
                <h3>{edu.period}</h3>
              </div>
              <p><strong>Relevant Coursework:</strong> <br/> {edu.coursework}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
