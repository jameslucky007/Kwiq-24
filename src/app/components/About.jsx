import React from 'react'

const About = () => {
  return (
   <>
    <div className="container aboutcontainer" id="about">
      <div className="row align-items-center">
      
   {/* Left Side - Centered Image */}
   <div
          className="col-12 col-md-6 col-lg-5 d-flex justify-content-center"
          data-aos="fade-right"
        >
          <Image
            className="aboutimg"
            src="/aboutimg.webp"
            alt="About Image"
            width={800}
            height={400}
            priority
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-12 col-md-6 col-lg-7 abouttext" data-aos="fade-left">
          <h2> About Us <iconify-icon icon="material-symbols:bolt-outline"></iconify-icon></h2>
          <p>
            Our Integrator company provides solutions in IT, Networking, Security, and Computer Solutions. We have expertise in a wide range of security products. 
            Our main focus is on Network Security, Endpoint Security, and Backup Solutions for small, medium, and enterprise segment customers.<br /><br />
            We have a complete in-house expertise and a certified technical team on products like Sophos, Fortinet, TrendMicro, ESET, and many more.<br /><br />
            Our mission is to fulfill customers' requirements with the best products and services. We assist customers in choosing the best products based on sizing and price benefits. 
            Our adoption of flexible business practices has benefited our clients, enabling them to operate more efficiently and effectively.
          </p>
        </div>
      </div>
    </div>

   </>
  )
}

export default About