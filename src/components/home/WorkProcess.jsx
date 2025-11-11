import React from "react";
import {
  UserRound,
  ShoppingBag,
  Send,
  FileText,
  CreditCard,
} from "lucide-react";

const steps = [
  { id: 1, title: "Register / Login", icon: <UserRound className="w-6 h-6 text-white" /> },
  { id: 2, title: "Select Product or Service", icon: <ShoppingBag className="w-6 h-6 text-white" /> },
  { id: 3, title: "Submit Your Order", icon: <Send className="w-6 h-6 text-white" /> },
  { id: 4, title: "Provide Contents", icon: <FileText className="w-6 h-6 text-white" /> },
  { id: 5, title: "Payment & Delivery", icon: <CreditCard className="w-6 h-6 text-white" /> },
];

export default function WorkProcess() {
  return (
    <section className="bg-gradient-to-b from-[#EAF4F4] to-[#F9FAFB] py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Our <span className="text-[#3780B2]">Work Process</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center group">
              <div className="flex items-center justify-center w-16 h-16 bg-[#008081] rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110 mb-3">
                {step.icon}
              </div>
              <div className="font-semibold text-[#3780B2] text-center">
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




