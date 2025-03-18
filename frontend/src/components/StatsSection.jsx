import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 20, label: "Doctors" , suffix: "+" },
  { number: 1000, label: "Happy Patients" , suffix: "+" },
  { number: 10, label: "Experience", suffix: "+" },
  { number: 100, label: "Satisfaction", suffix: "%" },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="bg-[#ffde59] text-black py-12 text-center">
      <div className= "max-w-6xl mx-auto flex justify-center items-center gap-10 flex-wrap">
        {stats.map((stat, index) => (
          <div key={index} className="flex-1 min-w-[150px] max-w-[200px]">
            <h1 className="text-4xl font-bold mb-2">
              {inView && (
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  separator=","
                  suffix={stat.suffix || ""}
                />
              )}
            </h1>
            <p className="text-lg font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
