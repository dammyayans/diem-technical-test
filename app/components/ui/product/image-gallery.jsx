import React from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

export const ProductImageGallery = ({ images, alt }) => {
  return (
    <TabGroup className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image, imageIndex) => (
            <Tab
              key={imageIndex}
              className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white hover:bg-gray-100"
            >
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <img
                  alt={alt}
                  src={image}
                  className="h-full w-full object-cover object-center"
                />
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-primary"
              />
            </Tab>
          ))}
        </TabList>
      </div>

      <TabPanels className="aspect-h-1 aspect-w-1 w-full">
        {images.map((image, imageIndex) => (
          <TabPanel key={imageIndex}>
            <img
              alt={alt}
              src={image}
              className="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};
