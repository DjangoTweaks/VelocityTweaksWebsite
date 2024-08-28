import React from "react";
import "../index.css";
import FadeInUpwardsText from "../components/ui/FadeInUpwardsText";
import QuestionCard from "../components/ui/QuestionCard";
import ScrollToTopOnMount from "../utils/ScrollToTopOnMount";

export function FAQ() {
  const frequentlyAskedQuestions = [
    {
      id: 1,
      question:
        "How does this optimization utility improve FPS and lower latency on my gaming PC?",
      content:
        "The utility improves FPS by optimizing system settings, allocating resources efficiently, and shutting down unnecessary background processes. It reduces latency by tweaking network settings to prioritize gaming traffic and minimize lag.",
    },
    {
      id: 2,
      question:
        "What specific features does the utility offer to enhance gaming performance?",
      content:
        "Features include real-time system optimization, GPU and CPU overclocking, RAM cleaning, disk defragmentation, game booster mode, network optimization, and automated driver updates.",
    },
    {
      id: 3,
      question:
        "Is the utility compatible with the latest versions of popular games and gaming platforms?",
      content:
        "Yes, the utility is regularly updated to ensure compatibility with the latest versions of popular games and gaming platforms, including Steam, Epic Games, and more.",
    },
    {
      id: 4,
      question:
        "Does the optimization process require advanced technical knowledge, or is it user-friendly for beginners?",
      content:
        "The utility is designed to be user-friendly and suitable for beginners. It offers one-click optimization and intuitive interfaces, as well as detailed guides for advanced users who wish to customize settings.",
    },
    {
      id: 5,
      question:
        "Can I customize the optimization settings based on my specific hardware and gaming preferences?",
      content:
        "Yes, the utility provides customizable settings to tailor the optimization process to your specific hardware and gaming preferences, allowing you to achieve the best possible performance.",
    },
    {
      id: 6,
      question:
        "Are there any risks involved in using this utility, such as potential conflicts with other software or hardware?",
      content:
        "The utility is extensively tested to minimize risks and conflicts. However, as with any software, there is a small chance of conflicts with other applications or hardware. It's recommended to review the documentation and perform backups before applying major changes.",
    },
    {
      id: 7,
      question:
        "How often are updates released to ensure compatibility with new game updates and system changes?",
      content:
        "Updates are released regularly to ensure ongoing compatibility with new game updates, system changes, and to incorporate the latest optimization techniques.",
    },
    {
      id: 8,
      question:
        "What kind of customer support is available if I encounter issues or need assistance with the utility?",
      content:
        "We offer comprehensive customer support, including email support, live chat, and a detailed knowledge base with troubleshooting guides and FAQs. Our support team is dedicated to helping you resolve any issues promptly.",
    },
    {
      id: 9,
      question:
        "Are there any benchmarks or user reviews available that demonstrate the effectiveness of this utility in improving gaming performance?",
      content:
        "Yes, we have numerous benchmarks and user reviews available on our website and various tech forums. These demonstrate significant improvements in gaming performance, including higher FPS and lower latency.",
    },
    {
      id: 10,
      question: "Does the utility offer a trial version?",
      content:
        "Yes, we offer a free trial version for you to test the free utility's capabilities, if you like the performance improvements in the free utility, the paid versions are sure to provide you with even more.",
    }
  ];

  return (

    
    <div>
      <ScrollToTopOnMount/>
      <div className="bg-gradient-to-b from-[#000000] from-10% via-[#1a0404] via-40% to-[#011422] to-70% bg-blend-screen pb-32" id="faqtop">
        <div className="h-full w-[350px] md:w-[600px] lg:w-full mx-auto lg:mx-0">
          <div className="lg:container lg:mx-auto">
            <div className="flex flex-col justify-start">
              <div className="text-5xl lg:text-6xl -ml-[19px] lg:-ml-[0px] lg:text-center md:text-nowrap text-white font-semibold font-Inter pt-12 hidden md:block  ">
                Frequently Asked Questions
              </div>
              <div className="text-7xl  text-white font-semibold font-Inter pt-1 flex flex-row justify-center md:hidden">
                FAQs
              </div>

              <div className="pt-10">
                {frequentlyAskedQuestions.map((data) => {
                  return (
                    <QuestionCard
                      key={data.id}
                      id={data.id}
                      question={data.question}
                      content={data.content}
                    ></QuestionCard>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
