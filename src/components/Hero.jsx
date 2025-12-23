import React from "react";
import { FaStar, FaWhatsapp } from "react-icons/fa";


const Hero = () => {
  return (


    <section className="px-4 sm:-px-20 sm:mt-30 sm:mx-auto sm:-pl-10 sm:-pr-50  mt-25">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center gap-12 sm:gap-15 py-16">
        
        {/* Left Content */}
        <div className="flex flex-col text-center sm:text-left sm:-20 sm:gap-7 max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-950">
            Your 24/7 Pregnancy Companion Is Here
          </h1>

          <p className="mt-6 text-lg opacity-70">
            SmartMum Africa is a WhatsApp-integrated chatbot designed to reduce
            maternal and neonatal mortality in Nigeria by empowering women with
            timely, reliable, and actionable health information.
          </p>

          <p className="mt-4 opacity-70">
            Get instant answers to all your pregnancy questions, week-by-week
            guidance, and trusted advice directly on WhatsApp.
          </p>

          <a href="https://wa.me/2348100868080?text=Hello%20I%20am%20interested" target="_blank"
      rel="noopener noreferrer" className="mt-6 flex items-center justify-center gap-3 self-center sm:self-start rounded-xl bg-green-700 px-6 py-3 text-lg font-semibold text-white hover:opacity-90"
          >
            <FaWhatsapp className="size-6" />
            Chat on WhatsApp
          </a>

          <p className="mt-2 text-sm font-semibold sm:-mt-5 sm:ml-7 text-orange-600">
            Join our free WhatsApp chat
          </p>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center">
          <img
            src="/images/Hero_section.png"
            alt="SmartMum Hero"
            className="h-90 w-90 object-contain"
          />

          <div className="mt-4 flex items-center">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="size-5 text-yellow-500" />
            ))}
            <span className="ml-2 font-semibold text-lg">5.0</span>
          </div>

          <p className="mt-1 text-sm">
            <span className="opacity-70">From 100+</span>{" "}
            <span className="font-semibold">Reviews</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;



// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";

// const Hero = () => {
//   return (

//     <div>

//       {/*mobile view */}

//       <div className="block sm:hidden flex flex-col md:flex-col-2">
//         <h1 className="text-bold justify-center text-center align-center text-4xl md:text-2xl font-bold text-blue-950 pt-10 mt-25 mx-auto justify-center align-center ">
//           Your 24/7 Pregnancy Companion Is Here
//         </h1>
//         <img
//           className="w-80 h-80 mx-auto my-5 justify-center align-center "
//           src="../public/images/Hero_section.png  "
//           alt=""
//         />
//         <div className="flex flex-row justify-center align-center ">
//           <FaStar className="size-6 text-yellow-500" />
//           <FaStar className="size-6 text-yellow-500" />
//           <FaStar className="size-6 text-yellow-500" />
//           <FaStar className="size-6 text-yellow-500" />
//           <FaStar className="size-6 text-yellow-500" />
//           <p className="mx-3 font-semibold text-lg">5.0</p>
//         </div>
//         <p className="mx-auto">
//           {" "}
//           <span className="opacity-70">From 100+</span>{" "}
//           <span className="font-semibold">Reviews</span>
//         </p>
//         <p className="mx-15 my-10 opacity-70 flex justify-center text-center text-lg">
//           SmartMum Africa is a whatsapp-integrated chatbot designed to reduce
//           maternal and neonatal mortality in Nigeria by empowering women with
//           timely, reliable, and actionable health information.
//         </p>
//         <p className="mx-15 opacity-70 flex justify-center text-center ">
//           Get Instant answers to all your pregnancy questions, week-by-week
//           guidance and trusted advice directly on whatsapp
//         </p>
//         <button className="flex items-center justify-center text-center bg-green-700 opacity-90 text-white text-lg font-semibold w-70 h-13 mx-auto my-5 rounded-xl">
//           <FaWhatsapp className="size-7 mr-3" /> <p>Chat On WhatsApp</p>
//         </button>
//         <p className="text-center text-orange-600 text-sm font-semibold -mt-3">
//           join our free WhatsApp Chat
//         </p>
//       </div>

//       {/*Desktop view */}
//       <div className="hidden sm:block flex flex-row mx-10 my-10 mt-20 px-10 py-5 pt-10 align-text-top ">
//         <div className=" flex flex-col justify-items-start justify-start justify-self-start align-text-top">
//           <h1 className="text-bold justify-start align-center text-4xl text-2xl font-bold text-blue-950 pt-10  ">
//             Your 24/7 Pregnancy Companion Is Here
//           </h1>
//           <p className="px-15 my-10 opacity-70 flex justify-start text-lg align-text-top">
//             SmartMum Africa is a whatsapp-integrated chatbot designed to reduce
//             maternal and neonatal mortality in Nigeria by empowering women with
//             timely, reliable, and actionable health information.
//           </p>
//           <p className="mx-15 opacity-70 flex justify-start ">
//             Get Instant answers to all your pregnancy questions, week-by-week
//             guidance and trusted advice directly on whatsapp
//           </p>
//           <button className="flex items-center justify-center bg-green-700 opacity-90 text-white text-lg font-semibold w-70 h-13 my-5 rounded-xl">
//             <FaWhatsapp className="size-7 mr-3" /> <p>Chat On jkhegdfj WhatsApp</p>
//           </button>
//           <p className="text-center text-orange-600 text-sm font-semibold -mt-3">
//             join our free WhatsApp Chat
//           </p>
//         </div>
//         <div className="flex flex-col ">
//           <img
//             className="w-80 h-80 mx-auto my-5 justify-center align-center "
//             src="../public/images/Hero_section.png  "
//             alt=""
//           />
//           <div className="flex flex-row justify-center align-center ">
//             <FaStar className="size-6 text-yellow-500" />
//             <FaStar className="size-6 text-yellow-500" />
//             <FaStar className="size-6 text-yellow-500" />
//             <FaStar className="size-6 text-yellow-500" />
//             <FaStar className="size-6 text-yellow-500" />
//             <p className="mx-3 font-semibold text-lg">5.0</p>
//           </div>
//           <p className="mx-auto">
//             {" "}
//             <span className="opacity-70">From 100+</span>{" "}
//             <span className="font-semibold">Reviews</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


