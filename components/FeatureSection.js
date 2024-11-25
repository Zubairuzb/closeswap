import React from "react";
import Image from "next/image";

const FeatureSection = () => {
  const features = [
    {
      icon: "/icons/icon1.png",
      title: "Fast Performance",
      description: "Experience blazing-fast speeds and top-notch performance with our solution.",
    },
    {
      icon: "/icons/icon2.png",
      title: "Secure",
      description: "Your data is safe with our advanced security measures.",
    },
    {
      icon: "/icons/icon3.png",
      title: "Innovative Design",
      description: "We provide creative designs that stand out and make an impact.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 font-sans">
      <h2 className="text-center font-bold text-3xl py-8">How it Works</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {features.map((feature, index) => (
          <section key={index}>
            <div
              className="flex flex-col items-center justify-center text-center rounded-3xl shadow-md" style={{ background: "#0e0918", width: "380px", height: "380px" }}
            >
              <Image width={150} height={150} src={feature.icon} />
            </div>
            <div>
              <h3 className="text-xl text-black font-semibold mb-2 mt-4">{feature.title}</h3>
              <p className="text-black text-lg">{feature.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
