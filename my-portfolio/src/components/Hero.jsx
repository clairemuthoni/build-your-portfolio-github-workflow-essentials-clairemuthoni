import { motion } from "framer-motion";
import { useState, useEffect } from "react"; // Add this import
import heroImage from "../images/portfolio.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react"; // nice icons

const Project = ({ images, title, description, technologies, githubLink }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  //Manual controls 
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
  );
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
  };

  return (
    <motion.div 
      className="flex flex-col md:flex-row gap-8 bg-gray-900 bg-opacity-80 rounded-xl p-8 w-full mx-auto"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {images.length > 0 ? (
        <>
          <div className="w-full md:w-2/3 relative aspect-[16/9]">
            <motion.img 
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`${title} screenshot`}
              className="rounded-lg shadow-md absolute inset-0 w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Prev Button */}
            <button 
               onClick={goToPrev}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            > 
             <ChevronLeft size={24} />
             </button>

            {/* Next Button */}
            <button
               onClick={goToNext}
               className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
               >
                <ChevronRight size={24} />
               </button>

            {/* Dots */}
             <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
               {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === currentImageIndex ? "bg-white" : "bg-gray-500"
                  }`}
                  />
               )
              )}
              </div>

          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-between md:pl-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">{title}</h3>
              <p className="text-gray-400 mb-8 text-lg">{description}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-gray-400 bg-black text-gray-100 px-8 py-4 text-lg font-medium hover:border-gray-200 hover:text-gray-200 transition w-fit"
            >
              View on GitHub <i className="fab fa-github ml-2"></i>
            </a>
          </div>
        </>
      ) : (
        <div className="w-full flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-3xl font-bold mb-6">{title}</h3>
          <p className="text-gray-400 mb-8 text-lg max-w-3xl">{description}</p>
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {technologies.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-gray-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-gray-400 bg-black text-gray-100 px-8 py-4 text-lg font-medium hover:border-gray-200 hover:text-gray-200 transition w-fit"
          >
            View on GitHub <i className="fab fa-github ml-2"></i>
          </a>
        </div>
      )}
    </motion.div>
  );
};


export default function Hero() {
  return (
    <div>
      {/* Hero Section: Two columns, text left, image right */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black px-4 text-gray-100 md:gap-16 gap-8">
        {/* Circular Image (Right Side) */}
        <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
          <motion.img
            src={heroImage}
            alt="Hero"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
        
        {/* About Me (Left Side) */}
        <div className="flex-1 flex flex-col justify-center items-start md:items-start text-left">
          <div className="bg-gray-900 bg-opacity-80 rounded-xl p-8 shadow-lg w-full max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Claire Muthoni
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-8">
              Computer Science Student 
            </p>
            {/* About Section */}
            <p className="text-lg text-gray-400 mb-8">
              Hi there, I'm Claire, a computer science student passionate about UI / UX Design.I live in Nairobi, Kenya, and I'm currently pursuing my degree at Strathmore University. I have a keen interest in web development and machine learning, with a focus on creating user-friendly interfaces and experiences.
              My journey in tech has been driven by a love for learning and a desire to make a positive impact through technology.
            </p>
            {/* Education Sub-heading */}
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Education</h3>
            <div className="flex gap-8 mb-8">
              <img src="/images/strathmore-logo.png" alt="Strathmore University" className="h-16" />
              <img src="/images/computerpride-logo.png" alt="Computer Pride" className="h-16" />
              <img src="/images/moringa-logo.png" alt="Moringa" className="h-16" />
            </div>
          </div>
        </div>
    
      </section>

      {/* Arrow Animation */}
      <motion.div
        className="mb-8 flex flex-col items-center bg-black"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>

      {/* Skills Section */}
      <section id="skills" className="bg-black text-gray-100 py-20 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-lg text-gray-400 mb-12">
            Tools and technologies I’ve worked with:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center"
        >
          {[
            "Python", "JavaScript", "React", "Tailwind CSS",
            "Framer Motion", "NumPy", "Pandas", "Scikit-learn",
            "TensorFlow", "Git & GitHub", "Figma", "SQL"
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-gray-400 text-black shadow-md rounded-xl py-6 px-4 hover:shadow-xl transition duration-300"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </section>
      {/* Projects Section */}
<section id="projects" className="bg-black text-gray-100 py-20 px-6 md:px-20">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="max-w-5xl mx-auto"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
    
    {/* Project Cards */}
    <div className="space-y-16">

      
      {/* Project 2 */}
      <Project 
        images={[
          "/images/admin-dashboard.png",
          "/images/buyer-account-page.png",
          "/images/Cart-page.png",
          "/images/checkout-page.png",
          "/images/Login-page.png",
          "/images/product-page.png",
          "/images/Product2page.png",
          "/images/register-page.png",
          "/images/Seller-account-page.png",
          "/images/seller-add-product-page.png",
        ]}
        title="Toys Toys Toys"
        description="This is an ecommerce app built with raw HTML, CSS and PHP. No frameworks, just raw hardcoded code. It was created to provide a platform for sellers of toys to connect with buyers online."
        technologies={["PHP", "HTML", "CSS"]}
        githubLink="https://github.com/clairemuthoni/toysToysTOYS-.git"
      />

            {/* Project 3 */}
      <Project 
        images={[]}
        title="Bitcoin Bubble Prediction"
        description="A machine learning project that predicts Bitcoin price bubbles using historical data. It employs various algorithms to analyze trends and make predictions. This was done in group work, and it aimed at using twitter sentiments to predict if there was a bubble in the bitcoin market"
        technologies={["Web Scraping", "Data Science", "Flask","Streamlit"]}
        githubLink="https://github.com/clairemuthoni/Bitcoin_Bubble_Prediction.git"
      />
    </div>
  </motion.div>
</section>

      {/* Contact & CV Section */}
      <section id="contact" className="bg-black text-gray-100 py-20 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-300 mb-8">
            I’d love to connect! Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          <a
            href="/claire_cv.pdf"
            download
            className="inline-block border-2 border-gray-400 bg-black text-gray-100 px-8 py-4 text-lg font-medium hover:border-gray-200 hover:text-gray-200 transition w-fit"
          >
            Download CV
          </a>
          <div className="mt-10 flex justify-center gap-6 text-2xl">
            <a
              href="https://github.com/ClaireMuthoni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/claire-muthoni-5322a7358/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:clairemuthoni@example.com"
              className="text-red-600 hover:text-red-800 transition"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </motion.div>
      </section>
    
    </div>
  );
}


