"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export function ParkingDayGallery() {
  return (
    <Carousel className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
      <CarouselContent>
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-4 flex flex-row items-center w-full justify-center">
              <div className="bg-light p-4 rounded-md">
                <a href={`/parking_day_2024/${index + 1}.jpg`}>
                  <img
                    src={`/parking_day_2024/${index + 1}.jpg`}
                    alt="Parking Day 2024!"
                  />
                </a>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
