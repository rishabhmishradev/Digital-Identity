import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote, Calendar, User, Activity } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Feedback = {
  id: number;
  domainName: string;
  createdAt: string;
  overallExperience: number;
  communication: string;
  websiteQuality: string;
  projectDelivery: string;
  testimonial: string;
  npsScore: number;
  futureServices: string[];
  portfolioPermission: boolean;
  referralName?: string;
  referralContact?: string;
};

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('webstrom_feedbacks');
    if (stored) {
      setFeedbacks(JSON.parse(stored));
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto pt-16">
        <div className="text-center mb-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff5a1f]/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4 relative z-10">
            Client <span className="text-[#ff5a1f]">Feedbacks</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
            A collection of thoughts and testimonials from our valued partners.
          </p>
        </div>

        {feedbacks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-200">
            <MessageSquareQuote className="w-16 h-16 text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-500">No feedbacks yet</h3>
            <p className="text-sm text-gray-400 mt-2">Submit a form to see it appear here.</p>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {feedbacks.map((fb) => (
              <motion.div
                key={fb.id}
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow rounded-3xl p-6 flex flex-col group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "w-5 h-5",
                          i < fb.overallExperience 
                            ? "fill-[#ff5a1f] text-[#ff5a1f]" 
                            : "fill-transparent text-gray-300"
                        )} 
                      />
                    ))}
                  </div>
                  <div className="flex items-center text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
                    <Activity className="w-3 h-3 mr-1 text-[#ff5a1f]" />
                    NPS: {fb.npsScore}/10
                  </div>
                </div>

                <div className="mb-4 flex-grow relative">
                  <MessageSquareQuote className="absolute top-0 left-0 w-8 h-8 text-gray-200 -z-10 transform -translate-x-2 -translate-y-2 opacity-50 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-700 italic text-sm leading-relaxed relative z-10 line-clamp-4">
                    "{fb.testimonial}"
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
                      Comm: {fb.communication}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-green-50 text-green-700 border border-green-200">
                      Web: {fb.websiteQuality}
                    </span>
                    <span className={cn(
                      "inline-flex items-center px-2 py-1 rounded text-[10px] font-medium border",
                      fb.projectDelivery === 'Delivered On Time' 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-red-50 text-red-700 border-red-200"
                    )}>
                      {fb.projectDelivery}
                    </span>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="flex items-center text-sm font-semibold text-gray-900">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-600 mr-2 shadow-inner">
                        <User className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="truncate max-w-[120px]">
                          {fb.domainName || "Unknown Domain"}
                        </span>
                        {fb.referralName && (
                          <span className="text-[10px] text-gray-500 font-normal truncate max-w-[120px]">
                            {fb.referralName}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(fb.createdAt)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Feedbacks;
