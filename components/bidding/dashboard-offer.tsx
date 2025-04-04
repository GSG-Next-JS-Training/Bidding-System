import Image from "next/image";
import Link from "next/link";
const COMPANY_BIDDINGS = [
  {
    id: 1,
    image: "/image/1.jpg",
    companyName: "Areyy Technologies",
    email: "contact@areyy.com",
    offers: [
      {
        offerId: "OF-101",
        title: "Website Development",
        description: "Developing a responsive company website.",
        status: "Open",
        bidDeadline: "2025-04-15",
      },
      {
        offerId: "OF-102",
        title: "Mobile App Design",
        description: "UI/UX design for a cross-platform mobile app.",
        status: "In Progress",
        bidDeadline: "2025-04-20",
      },
      {
        offerId: "OF-103",
        title: "E-commerce Platform",
        description: "Building a scalable online shopping platform.",
        status: "Open",
        bidDeadline: "2025-05-01",
      },
    ],
  },
  {
    id: 2,
    image: "/image/2.jpg",
    companyName: "Blue Star Solutions",
    email: "info@bluestar.com",
    offers: [
      {
        offerId: "OF-201",
        title: "Cloud Migration Services",
        description: "Migrating on-premise systems to AWS Cloud.",
        status: "Completed",
        bidDeadline: "2025-03-30",
      },
      {
        offerId: "OF-202",
        title: "Cybersecurity Audit",
        description: "Performing security assessment and compliance review.",
        status: "Open",
        bidDeadline: "2025-05-10",
      },
      {
        offerId: "OF-203",
        title: "Data Analytics Dashboard",
        description: "Developing a BI dashboard for data visualization.",
        status: "In Progress",
        bidDeadline: "2025-06-05",
      },
    ],
  },
  {
    id: 3,
    image: "/image/3.jpg",
    companyName: "NextGen Solutions",
    email: "support@nextgensolutions.com",
    offers: [
      {
        offerId: "OF-301",
        title: "Blockchain Integration",
        description: "Implementing blockchain for secure transactions.",
        status: "Open",
        bidDeadline: "2025-07-10",
      },
      {
        offerId: "OF-302",
        title: "AI Chatbot Development",
        description: "Building an AI-powered customer support chatbot.",
        status: "Open",
        bidDeadline: "2025-07-20",
      },
    ],
  },
  {
    id: 4,
    image: "/image/4.jpg",
    companyName: "BuildIt Constructions",
    email: "contact@buildit.com",
    offers: [
      {
        offerId: "OF-401",
        title: "Commercial Building Project",
        description: "Construction of a multi-floor commercial building.",
        status: "In Progress",
        bidDeadline: "2025-06-01",
      },
      {
        offerId: "OF-402",
        title: "Bridge Renovation",
        description:
          "Renovating an old bridge to meet modern safety standards.",
        status: "Open",
        bidDeadline: "2025-08-15",
      },
    ],
  },
  {
    id: 5,
    image: "/image/5.jpg",
    companyName: "MarketWave Marketing",
    email: "sales@marketwave.com",
    offers: [
      {
        offerId: "OF-501",
        title: "Digital Marketing Strategy",
        description:
          "Developing a digital marketing campaign for a new product.",
        status: "Open",
        bidDeadline: "2025-05-25",
      },
      {
        offerId: "OF-502",
        title: "Social Media Management",
        description: "Handling social media presence for a brand.",
        status: "Completed",
        bidDeadline: "2025-04-05",
      },
    ],
  },
  {
    id: 6,
    image: "/image/6.jpg",
    companyName: "SwiftLogistics",
    email: "info@swiftlogistics.com",
    offers: [
      {
        offerId: "OF-601",
        title: "Freight Transportation",
        description: "International freight transportation services.",
        status: "Open",
        bidDeadline: "2025-06-30",
      },
      {
        offerId: "OF-602",
        title: "Warehouse Management",
        description: "Optimizing warehouse storage and distribution.",
        status: "In Progress",
        bidDeadline: "2025-07-12",
      },
    ],
  },
];
const Dashboard = () => {
  return (
    <div className="container  mx-auto p-6 sm:p-6 mt-8">
      <h1
        className="text-2xl sm:text-4xl font-extrabold text-center 
                    text-white bg-primary px-4 py-3 
                    rounded-box shadow-lg w-fit mx-auto max-w-xl"
      >
        Discover Company Offers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {COMPANY_BIDDINGS.map((company) => (
          <div
            key={company.id}
            className="flex flex-col items-center shadow-lg rounded-box 
                                bg-base-100 p-4 sm:p-6 w-full hover:shadow-2xl 
                                transition-shadow duration-300 min-h-[380px]"
          >
            <div className="w-full h-40 relative mb-4">
              <Image
                src={company.image}
                alt={`${company.companyName} logo`}
                layout="fill"
                objectFit="cover"
                className="rounded-box"
              />
            </div>

            <h2 className="text-lg sm:text-xl font-semibold text-center text-neutral-content mb-2">
              {company.companyName}
            </h2>
            <p className="text-gray-500 text-center mb-4 text-sm sm:text-base">
              {company.email}
            </p>

            <Link
              href="/bidding/offer"
              className="bg-primary text-white py-2 px-4 w-full sm:w-auto text-center rounded-lg hover:bg-blue-600 transition duration-300"
            >
              OFFERS
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
