"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ahmed Al-Qahtani",
    position: "Project Manager - Smart Tech Co.",
    message:"The platform saved us a lot of time and effort. We found the perfect bid within just two days!",
    image: "/image/client1.jpg",
    rating: 5,
  },
  {
    name: "Khaled Al-Muhairi",
    position: "Marketing Director - Gulf Solutions",
    message:"Excellent usability and support. We keep coming back to submit more bids.",
    image: "/image/client2.jpg",
    rating: 4,
  },
  {
    name: "Sara Al-Madani",
    position: "CEO - Injaz Company",
    message:"A professional and secure platform. We were able to reach trusted vendors quickly.",
    image: "/image/client3.jpg",
    rating: 5,
  },
  {
    name: "Ali Al-Rashid",
    position: "Procurement Head - Future Horizons",
    message:"Reliable bidding system, excellent results and communication with providers.",
    image: "/image/client4.jpg",
    rating: 5,
  },
  {
    name: "Mohammed Al-Zahrani",
    position: "Business Consultant - Elite Partners",
    message:"This platform helped us win contracts we wouldn't have found elsewhere.",
    image: "/image/client5.jpg",
    rating: 5,
  },
  {
    name: "Omar Al-Harbi",
    position: "Operations Lead - AlMada Group",
    message:"User-friendly and efficient. I highly recommend it to serious businesses.",
    image: "/image/client6.jpg",
    rating: 4,
  },
];

const Feedback = () => {
  return (
    <div>
      <div className="py-16 px-4 bg-base-200">
        <h1 className="text-3xl font-bold text-center mb-12 text-primary">
          Feedback
        </h1>
        <div className="max-w-3xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
        >
          {
            testimonials.map((t, index) =>(
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={100}
                    height={100}
                    className="rounded-full mb-4"
                  />
                  <h2 className="text-xl font-semibold">{t.name}</h2>
                  <p className="text-gray-500">{t.position}</p>
                  <p className="mt-4 text-gray-700">{t.message}</p>
                  <div className="flex mt-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.21-6.032 5.88 1.422 8.292L12 18.896l-7.39 3.87L6.032 15.25 0 9.662l8.332-1.21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </SwiperSlide>

            ))

          }

        </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
