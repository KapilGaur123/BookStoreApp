import React from "react";

function About() {
  return (
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20">
      <section className="bg-gray-100 text-gray-900 p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg leading-7">
            Welcome to our company! We are committed to delivering top-quality
            products and services to our customers. With a passion for
            excellence and a focus on innovation, we strive to exceed
            expectations and create lasting relationships.
          </p>
          <p className="text-lg leading-7 mt-4">
            Our team is made up of talented and dedicated professionals who work
            together to bring you the best solutions. Thank you for choosing us!
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
