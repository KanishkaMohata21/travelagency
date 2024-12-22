"use client"
import React, { useState } from 'react';
import { Container } from '../../common/Container';
import { X } from 'lucide-react';

const photos = [
  { url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', location: 'Swiss Alps' },
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', location: 'Maldives' },
  { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1', location: 'New Zealand' },
  { url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34', location: 'Paris' },
  { url: 'https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a', location: 'Santorini' },
  { url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989', location: 'Japan' }
];

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <Container className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Travel Moments</h2>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {photos.map(({ url, location }) => (
          <div
            key={url}
            className="relative mb-4 break-inside-avoid cursor-pointer group"
            onClick={() => setSelectedPhoto(url)}
          >
            <img
              src={url}
              alt={location}
              className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-medium">{location}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedPhoto}
            alt="Selected photo"
            className="max-w-full max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </Container>
  );
};