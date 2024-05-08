import "./App.css";
import { FaBookOpenReader } from "react-icons/fa6";
import FeatureCard from "./FeatureCard";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (eventKey) => {
    setActiveItem(activeItem === eventKey ? null : eventKey);
  };
  return (
    <div className="App">
      <div>
        <div className="bg-black text-white h-[10vh] flex items-center align-middle justify-between w-[100] p-0 m-0">
          <div className="pl-[25px] text-2xl">
            <FaBookOpenReader />
          </div>
          <div>
            <ol className="flex mr-2 items-center justify-center">
              <li className="p-1 hover:border-b hover:border-white">
                <a href="#home" className="no-underline text-white">
                  Home
                </a>
              </li>
              <li className="p-1 hover:border-b hover:border-white">
                <a href="#features" className="no-underline text-white">
                  Features
                </a>
              </li>
              <li className="p-1 hover:border-b hover:border-white">
                <a href="#FAQ" className="no-underline text-white">
                  About Us
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div id="home" className="lg:w-[100%]">
          <div className="flex md:flex-row flex-col">
            <div>
              <img
                src="https://media.istockphoto.com/id/1133540184/vector/webinar-internet-conference-web-based-seminar-online-education-e-learning-flat-design-concept.jpg?s=612x612&w=0&k=20&c=Tw5qPpMACEFkvaAnbuuOGQj6rik4cXmQf3MvLH9UT1s="
                alt="bgimage"
              />
            </div>
            <div className="mt-5 flex flex-col items-center justify-center">
              <h1 className="font-bold">Unlock Your Potential with EduLearn</h1>
              <h3 className="md:mt-[90px] lg:ml-[20vw] md:mr-4 mt-3">
                Learn Anything, Anytime, Anywhere
              </h3>
            </div>
          </div>
        </div>
        <div id="features" className="w-[100%]">
          <h1 className="m-2 pl-5 font-extrabold text-xl">Features:</h1>
          <div className="flex items-center justify-between p-0 w-[100%] flex-col md:flex-row">
            <FeatureCard
              tag={"Accessible Anywhere"}
              description={
                "Learn on-the-go with our mobile app and access your courses anytime, anywhere, even offline."
              }
            />
            <FeatureCard
              tag={"Interactive Learning"}
              description={
                "Engage with interactive lessons, quizzes, and assignments designed to reinforce your learning.."
              }
            />
            <FeatureCard
              tag={"Expert Instructors"}
              description={
                "Learn from industry experts and experienced educators who are passionate about helping you succeed."
              }
            />
            <FeatureCard
              tag={"Personalized Learning Paths"}
              description={
                "Tailor your learning experience with personalized learning paths that adapt to your goals, interests, and learning style."
              }
            />
            <FeatureCard
              tag={"Collaborative Learning Communities"}
              description={
                "Connect with fellow learners and instructors through our collaborative learning communities."
              }
            />
          </div>
        </div>
        <div id="FAQ" className="ml-3 mb-3">
          <h1 className="m-2 pl-5 font-extrabold text-xl">Queries:</h1>
          <Accordion activeKey={activeItem} onSelect={handleItemClick}>
            <Accordion.Item eventKey="0" className="border border-black p-2">
              <Accordion.Header>
                Is this platform suitable for beginners?
              </Accordion.Header>
              <Accordion.Body>
                Absolutely! Our app offers courses for learners of all levels,
                from beginners to advanced.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="border border-black p-2">
              <Accordion.Header>
                Can I access my courses offline?
              </Accordion.Header>
              <Accordion.Body>
                Yes, you can download course materials and access them offline,
                making learning convenient even without an internet connection.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="border border-black p-2">
              <Accordion.Header>
                How do I get started with this platform?
              </Accordion.Header>
              <Accordion.Body>
                Getting started with this platform is simple! Just sign up for a
                free account, choose your desired course, and begin learning at
                your own pace.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="border border-black p-2">
              <Accordion.Header>
                Are there any prerequisites for using this platform?
              </Accordion.Header>
              <Accordion.Body>
                No, there are no prerequisites for using this platform. Our app
                offers courses that cater to learners of all backgrounds and
                skill levels.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="border border-black p-2">
              <Accordion.Header>
                Can I track my progress within the courses?
              </Accordion.Header>
              <Accordion.Body>
                Yes, this platform allows you to track your progress within each
                course. You can easily monitor your completion status, quiz
                scores, and overall learning achievements.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="border border-black p-2">
              <Accordion.Header>
                Is there a support system available if I encounter any issues?
              </Accordion.Header>
              <Accordion.Body>
                Absolutely! This platform provides dedicated customer support to
                assist you with any questions or issues you may encounter. You
                can reach out to our support team via email or through our
                in-app chat feature.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="border border-black p-2">
              <Accordion.Header>
                Are the courses on this platform certified or accredited?
              </Accordion.Header>
              <Accordion.Body>
                While our courses are designed to provide valuable learning
                experiences, they may not always be accredited or certified.
                However, many of our courses are created in collaboration with
                industry experts and reputable institutions to ensure
                high-quality content.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className="border border-black p-2">
              <Accordion.Header>
                Can I cancel my subscription at any time?
              </Accordion.Header>
              <Accordion.Body>
                Yes, you can cancel your subscription to this platform at any
                time. There are no long-term commitments, and you can easily
                manage your subscription preferences through your account
                settings.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <footer className="h-[150px] bg-[#5AB2FF]">
          <div className="flex justify-center items-center pt-3 text-xl">
            <FaFacebook className="m-1" />
            <FaInstagramSquare className="m-1" />
            <FaLinkedin className="m-1" />
          </div>
          <div className="flex justify-center items-center flex-col">
            <p>&copy; 2024 Online Learning App.</p>
            <p>All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
