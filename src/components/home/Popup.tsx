"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TravelPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TravelPlanModal({ isOpen, onClose }: TravelPlanModalProps) {
  const [startDestination, setStartDestination] = React.useState('');
  const [endDestination, setEndDestination] = React.useState('');
  const [numDays, setNumDays] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission with updated values
    console.log({ startDestination, endDestination, numDays });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 flex justify-center items-center z-50"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Plan Your Dream Trip</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="startDestination" className="block text-sm font-medium text-gray-700 mb-2">
                    Start Destination
                  </label>
                  <input
                    type="text"
                    id="startDestination"
                    value={startDestination}
                    onChange={(e) => setStartDestination(e.target.value)}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-gray-300",
                      "focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none",
                      "transition-colors placeholder:text-gray-400"
                    )}
                    placeholder="e.g., Paris, Tokyo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="endDestination" className="block text-sm font-medium text-gray-700 mb-2">
                    End Destination
                  </label>
                  <input
                    type="text"
                    id="endDestination"
                    value={endDestination}
                    onChange={(e) => setEndDestination(e.target.value)}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-gray-300",
                      "focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none",
                      "transition-colors placeholder:text-gray-400"
                    )}
                    placeholder="e.g., Bali, Maldives"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="numDays" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Days
                  </label>
                  <input
                    type="number"
                    id="numDays"
                    value={numDays}
                    onChange={(e) => setNumDays(e.target.value)}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-gray-300",
                      "focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none",
                      "transition-colors placeholder:text-gray-400"
                    )}
                    placeholder="e.g., 7"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={cn(
                    "w-full bg-black text-white font-semibold py-4 rounded-lg",
                    "hover:bg-gray-500 transition-colors",
                    "flex items-center justify-center gap-2"
                  )}
                >
                  Generate Travel Plan
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
