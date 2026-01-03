import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LegalModal = ({ isOpen, onClose, initialTab = "privacy" }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const tabs = [
    { id: "privacy", label: "Privacy Policy" },
    { id: "terms", label: "Terms of Service" },
    { id: "patient", label: "Patient Agreement" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-navy/90 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-lg font-bold text-navy uppercase tracking-widest">
                Legal Portal
              </h2>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-navy transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex border-b border-slate-100">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeTab === tab.id
                      ? "text-medical border-b-2 border-medical bg-medical/5"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex-1 overflow-y-auto p-8 text-sm text-slate-500 font-light leading-relaxed space-y-4">
              {activeTab === "privacy" && (
                <p>
                  Indius Healthcare ensures strict confidentiality of all
                  patient medical records in compliance with international GDPR
                  and HIPAA standards. Data is shared exclusively with
                  accredited medical teams for case review.
                </p>
              )}
              {activeTab === "terms" && (
                <p>
                  We act as a medical travel facilitator. All clinical decisions
                  are the sole responsibility of the treating hospitals and
                  specialists in India.
                </p>
              )}
              {activeTab === "patient" && (
                <p>
                  Patients agree to provide accurate and complete medical
                  history to facilitate safe and effective treatment planning.
                  Indius Healthcare is not liable for outcomes resulting from
                  undisclosed information.
                </p>
              )}
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 text-right">
              <button
                onClick={onClose}
                className="px-8 py-2 bg-navy text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-medical transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
