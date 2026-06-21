import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, AlertCircle } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const feedbackSchema = z.object({
  domainName: z.string().min(3, 'Please enter your domain name or website URL'),
  overallExperience: z.number().min(1, 'Please select a rating').max(5),
  communication: z.enum(['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied'], {
    errorMap: () => ({ message: 'Please select an option' }),
  }),
  websiteQuality: z.enum(['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied'], {
    errorMap: () => ({ message: 'Please select an option' }),
  }),
  projectDelivery: z.enum(['Delivered On Time', 'Delayed'], {
    errorMap: () => ({ message: 'Please select an option' }),
  }),
  testimonial: z.string().min(10, 'Please share a bit more about your experience'),
  npsScore: z.number().min(1).max(10, 'Please provide a recommendation score'),
  futureServices: z.array(z.string()).optional(),
  portfolioPermission: z.boolean().default(false),
  referralName: z.string().optional(),
  referralContact: z.string().optional(),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

const TestimonialFeedback = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      domainName: '',
      overallExperience: 0,
      futureServices: [],
      portfolioPermission: false,
      npsScore: 10,
    },
  });

  const onSubmit = async (data: FeedbackFormValues) => {
    console.log(data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Save to localStorage
    const existingFeedbacks = JSON.parse(localStorage.getItem('webstrom_feedbacks') || '[]');
    const newFeedback = { 
      ...data, 
      id: Date.now(), 
      createdAt: new Date().toISOString() 
    };
    localStorage.setItem('webstrom_feedbacks', JSON.stringify([newFeedback, ...existingFeedbacks]));
    
    setIsSubmitted(true);
  };

  const servicesList = [
    'Website Maintenance',
    'SEO Optimization',
    'Digital Marketing',
    'Mobile App Development',
    'AI Automation',
    'Business Email Setup',
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#ff5a1f]/30">
      <div className="max-w-3xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-6 sm:p-10 relative overflow-hidden"
        >
          {/* Accent glow */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#ff5a1f]/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
                Client Feedback
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Thank you for choosing <span className="font-semibold text-[#ff5a1f]">Webstrom Tech</span>. Your feedback helps us improve our services.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-[#ff5a1f]/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-[#ff5a1f]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Thank you for your feedback
                  </h2>
                  <p className="text-gray-600">
                    We appreciate your trust in Webstrom Tech.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  {/* Domain Name */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-900">
                      Domain Name / Website <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('domainName')}
                      placeholder="e.g. yourcompany.com"
                      className="w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-[#ff5a1f] focus:ring-1 focus:ring-[#ff5a1f] focus:outline-none transition-colors backdrop-blur-sm"
                    />
                    {errors.domainName && (
                      <p className="text-sm text-red-500 mt-1">{errors.domainName.message}</p>
                    )}
                  </div>

                  {/* 1. Overall Experience */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-900">
                      Overall Experience <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="overallExperience"
                      control={control}
                      render={({ field }) => (
                        <div className="flex space-x-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              type="button"
                              key={star}
                              onClick={() => field.onChange(star)}
                              className="focus:outline-none transition-transform hover:scale-110"
                            >
                              <Star
                                className={cn(
                                  "w-8 h-8 transition-colors duration-200",
                                  field.value >= star
                                    ? "fill-[#ff5a1f] text-[#ff5a1f]"
                                    : "fill-transparent text-gray-300"
                                )}
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    />
                    {errors.overallExperience && (
                      <p className="text-sm text-red-500 flex items-center mt-1">
                        <AlertCircle className="w-4 h-4 mr-1" /> {errors.overallExperience.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 2. Communication Satisfaction */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-900">
                        Communication Satisfaction <span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-2">
                        {['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied'].map((opt) => (
                          <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                            <input
                              type="radio"
                              value={opt}
                              {...register('communication')}
                              className="w-4 h-4 text-[#ff5a1f] bg-gray-100 border-gray-300 focus:ring-[#ff5a1f] focus:ring-2"
                            />
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{opt}</span>
                          </label>
                        ))}
                      </div>
                      {errors.communication && (
                        <p className="text-sm text-red-500 mt-1">{errors.communication.message}</p>
                      )}
                    </div>

                    {/* 3. Website Quality */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-900">
                        Website Quality <span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-2">
                        {['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied'].map((opt) => (
                          <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                            <input
                              type="radio"
                              value={opt}
                              {...register('websiteQuality')}
                              className="w-4 h-4 text-[#ff5a1f] bg-gray-100 border-gray-300 focus:ring-[#ff5a1f] focus:ring-2"
                            />
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{opt}</span>
                          </label>
                        ))}
                      </div>
                      {errors.websiteQuality && (
                        <p className="text-sm text-red-500 mt-1">{errors.websiteQuality.message}</p>
                      )}
                    </div>
                  </div>

                  {/* 4. Project Delivery */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-900">
                      Project Delivery <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-6">
                      {['Delivered On Time', 'Delayed'].map((opt) => (
                        <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                          <input
                            type="radio"
                            value={opt}
                            {...register('projectDelivery')}
                            className="w-4 h-4 text-[#ff5a1f] bg-gray-100 border-gray-300 focus:ring-[#ff5a1f] focus:ring-2"
                          />
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{opt}</span>
                        </label>
                      ))}
                    </div>
                    {errors.projectDelivery && (
                      <p className="text-sm text-red-500 mt-1">{errors.projectDelivery.message}</p>
                    )}
                  </div>

                  {/* 5. Written Testimonial */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-900">
                      Written Testimonial <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register('testimonial')}
                      rows={5}
                      placeholder="Share your experience working with Webstrom Tech..."
                      className="w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-[#ff5a1f] focus:ring-1 focus:ring-[#ff5a1f] focus:outline-none transition-colors backdrop-blur-sm"
                    />
                    {errors.testimonial && (
                      <p className="text-sm text-red-500 mt-1">{errors.testimonial.message}</p>
                    )}
                  </div>

                  {/* 6. Recommendation Score */}
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-gray-900">
                      How likely are you to recommend Webstrom Tech? <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="npsScore"
                      control={control}
                      render={({ field }) => (
                        <div>
                          <div className="flex justify-between items-center bg-gray-100 p-2 rounded-xl overflow-x-auto">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                              <button
                                type="button"
                                key={score}
                                onClick={() => field.onChange(score)}
                                className={cn(
                                  "w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-medium text-sm transition-all duration-200 mx-1 flex-shrink-0",
                                  field.value === score
                                    ? "bg-[#ff5a1f] text-white shadow-lg scale-110"
                                    : "bg-white text-gray-700 hover:bg-gray-200"
                                )}
                              >
                                {score}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
                            <span>1 - Not likely</span>
                            <span>10 - Very likely</span>
                          </div>
                        </div>
                      )}
                    />
                  </div>

                  {/* 7. Future Services Interested In */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-900">
                      Future Services Interested In
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {servicesList.map((service) => (
                        <label
                          key={service}
                          className="flex items-center p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            value={service}
                            {...register('futureServices')}
                            className="w-4 h-4 text-[#ff5a1f] rounded border-gray-300 focus:ring-[#ff5a1f]"
                          />
                          <span className="ml-3 text-sm text-gray-700 select-none">
                            {service}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 8. Portfolio Permission */}
                  <div className="pt-4 border-t border-gray-200">
                    <Controller
                      name="portfolioPermission"
                      control={control}
                      render={({ field }) => (
                        <label className="flex items-start cursor-pointer group">
                          <div className="relative flex items-center justify-center pt-0.5">
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={field.value}
                              onChange={(e) => field.onChange(e.target.checked)}
                            />
                            <div className={cn(
                              "w-11 h-6 rounded-full transition-colors duration-300 ease-in-out flex items-center px-0.5",
                              field.value ? "bg-[#ff5a1f]" : "bg-gray-300"
                            )}>
                              <div className={cn(
                                "w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out",
                                field.value ? "translate-x-5" : "translate-x-0"
                              )} />
                            </div>
                          </div>
                          <span className="ml-4 text-sm text-gray-700">
                            I allow Webstrom Tech to showcase this project in their portfolio and social media.
                          </span>
                        </label>
                      )}
                    />
                  </div>

                  {/* 9. Referral Section (Optional) */}
                  <div className="pt-4 space-y-4">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Refer a friend or colleague (Optional)
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        {...register('referralName')}
                        placeholder="Referral Name"
                        className="w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-[#ff5a1f] focus:ring-1 focus:ring-[#ff5a1f] focus:outline-none transition-colors backdrop-blur-sm"
                      />
                      <input
                        type="text"
                        {...register('referralContact')}
                        placeholder="Referral Email or Phone"
                        className="w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-[#ff5a1f] focus:ring-1 focus:ring-[#ff5a1f] focus:outline-none transition-colors backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-sm font-semibold text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialFeedback;
