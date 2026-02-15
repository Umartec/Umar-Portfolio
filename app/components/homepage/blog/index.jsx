// @flow strict
import ServiceCard from './ServiceCard';

function Blog() {

  return (
    <div id='services' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Services
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">

        <ServiceCard
          title="Mobile App Development"
          description="Flutter & React Native applications with smooth UI and API integration."
        />

        <ServiceCard
          title="Backend + API Integration"
          description="REST APIs, Firebase Authentication, Firestore, SQLite, Django APIs."
        />

        <ServiceCard
          title="E-Commerce Mini Apps"
          description="Product listings, cart functionality, filtering, local state management."
        />

        <ServiceCard
          title="Map-Based Applications"
          description="Google Maps integration, routes, location tracking, geo-features."
        />

        <ServiceCard
          title="Push Notifications"
          description="OneSignal, Firebase Cloud Messaging, local notifications setup."
        />

        <ServiceCard
          title="UI/UX for Mobile Apps"
          description="Modern and clean UI components built for real-world apps."
        />

      </div>
    </div>
  );
};

export default Blog;
