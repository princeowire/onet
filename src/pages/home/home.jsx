import React from "react";
import { calender, clock, codeBackend, dart, emma, frontEnd, groupIcon, headText, Kriston, lady, lock, mike, notSmilley, pc, ppl, redCarosel, rocket } from '../../assets/img';

export const Home = () => {
  return (
    <div>
      <section className=" md:top-cap-border lg:top-cap-border flex flex-col gap-8 lg:mx-16 md:mx-8 sm:mx-4 p-3 m-4">

        <div className="flex justify-center p-2 whitespace-nowrap rounded-full shadow-lg fit-content mx-auto">
          <p className="p-1">Over +600</p>
          <img src={ppl} alt="" />
          <p className="p-1"> persons registered</p>
        </div>

        <div className=" relative flex items-center justify-center flex-col gap-5">
          <img src={lock} className="hidden lg:block absolute bottom-0 left-0 p-4" alt="" />
          <img src={pc} className="hidden lg:block absolute bottom-0 right-0 p-4" alt="" />
          <img src={headText} alt="" />
          <p className="max-w-lg text-center">
            Onet Solutions is a tech solution providing company for newbies and
            professionals alike
          </p>
        </div>

        <button className="flex justify-center fit-content mx-auto px-6 py-3 bg-btn-color text-white rounded-xl">
          Register
        </button>

        <div className="w-full">
          <img className="w-full" src={lady} alt="" />
        </div>

      </section>

      <section id="courses">

        <div className="flex flex-col items-center justify-center p-4">

          <h1 className="text-3xl font-extrabold py-3 text-center">
            Find A Program For You{" "}
          </h1>

          <p className="text-center font-semibold">
            We use a project-based learning approach and is perfect for both
            beginners and experienced individuals.
          </p>

        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-4 lg:px-16 md:px-8 sm:px-4 px-2 p-2 py-8">

          <div className="w-fit card max-w-sm flex flex-col justify-between ">

            <div className="max-w-96">
              <img className="w-full" src={codeBackend} alt="" />
            </div>

            <div>
              <div className="py-3">
                <h2 className="text-3xl font-bold ">UI/UX Design</h2>
              </div>
              <p className="max-w-sm text-text-gray">UI/UX skills are in high demand, and mastering them can open up exciting career opportunities. Our course equips students with the knowledge and practical skills needed to thrive in this dynamic field.</p>
              <div className="text-text-gray flex flex-wrap gap-3 py-2"> 
                <p className="flex items-center"><img src={calender} alt=""/>16 Weeks</p>
                <p className="flex"><img src={groupIcon} alt=""/>Three tmes a week</p>
                <p className="flex"><img src={clock} alt="" />1 hour 30 mins</p>
              </div>
            </div>
            <a href="/uiux" className="fit-content px-6 py-3 bg-btn-color text-white rounded-xl">
              Register
            </a>
          </div>

          <div className="w-fit card max-w-sm flex flex-col justify-between">

            <div className="max-w-96">
              <img className="w-full" src={frontEnd} alt="" />
            </div>

            <div>
              <h2 className="text-3xl font-bold py-3">Frontend Development</h2>
              <p className="max-w-sm text-text-gray">By enrolling in our Front-End Development course, students will gain practical knowledge, learn industry best practices, and be well-prepared for a rewarding career in web development</p>
              <div className="text-text-gray flex flex-wrap gap-3 py-2"> 
                <p className="flex items-center"><img src={calender} alt=""/>16 Weeks</p>
                <p className="flex"><img src={groupIcon} alt=""/>Three tmes a week</p>
                <p className="flex"><img src={clock} alt="" />1 hour 30 mins</p>
              </div>
            </div>
            <a href="/frontend" className="fit-content px-6 py-3 bg-btn-color text-white rounded-xl">
              Register
            </a>
          </div>

          <div className="w-fit card max-w-sm flex flex-col justify-between">

            <div className="max-w-96">
              <img className="w-full" src={codeBackend} alt="" />
            </div>

            <div>
              <h2 className="text-3xl font-bold py-3">Backend Development</h2>
              <p className="max-w-sm text-text-gray">By enrolling in our Back-End Development course, students will gain hands-on experience, deepen their understanding of server-side applications, and be well-prepared for a rewarding career in web development.</p>
              <div className="text-text-gray flex flex-wrap gap-3 py-2"> 
                <p className="flex items-center"><img src={calender} alt=""/>16 Weeks</p>
                <p className="flex"><img src={groupIcon} alt=""/>Three tmes a week</p>
                <p className="flex"><img src={clock} alt="" />1 hour 30 mins</p>
              </div>
            </div>
            <a href="./backend" className="fit-content px-6 py-3 bg-btn-color text-white rounded-xl">
              Register
            </a>
          </div>

        </div>
      </section>

      <section className="lg:px-16 md:px-8 sm:px-4 px-2 p-2 py-8 flex flex-col items-center justify-center">

        <h2 className="text-3xl text-center font-extrabold py-3">Grow With ONET Solutions</h2>

        <div className="flex flex-col lg:flex-row gap-6 justify-center">
          <div className="bg-dart-bg text-white w-full lg:w-2/5 rounded-3xl px-4 py-8">
            <div className="flex justify-center items-center"><img src={dart} alt="" /></div>
            <div>
              <h3 className="text-3xl font-bold py-2">In-Demand Tech Skills</h3>
            <p>We will help you acquire the hottest skills in high demand in the job market as you get first hand knowledge and learn best practices from our experienced Tutors.</p>
            </div>
          </div>

          <div className="w-full lg:w-3/5 bg-dark-gray px-4 py-8 rounded-3xl">
            <div className="flex items-center justify-center gap-4 flex-col marquee">
             <div className="flex marq items-center justify-center gap-3">
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
            </div>
            </div>

            <div className="flex items-center justify-center gap-4 flex-col marquee">
            <div className="flex marq-minus items-center justify-center gap-3">
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
              <img src={redCarosel} alt="" />
              <img src={notSmilley} alt="" />
            </div>

            </div>

            <div>
              <h3 className="text-3xl font-bold py-2">You are never alone</h3>
              <p className="text-gray-500">Become part of a supportive community where you would meet students alike, collaborate with them on real projects and grow together. Get first hand knowledge and learn best practices from our experienced Tutors.</p>
            </div>

          </div>
        </div>

      </section>

      <section className="flex flex-col items-center justify-center gap-8 lg:px-16 md:px-8 sm:px-4 px-2 p-2 py-8">

        <h3 className="text-center text-2xl font-bold max-w-lg">Don't take our word for it. Hear from our learners.</h3>

        <div className="flex flex-col lg:flex-row justify-center gap-4">

          <div className=" max-w-sm bg-gray-200 p-3 rounded-lg flex flex-col gap-4">

            <div className="flex items-center gap-3 ">
              <div><img src={Kriston} alt="" /></div>
              <div>
                <p className="text-2xl font-semibold ">Kriston Watson</p>
                <p className="pt-2">Student, UI/UX Design</p>
              </div>
            </div>
            <div>
              <p className="text-sm">ONET Solutions transformed my career trajectory with their practical approach to teaching tech skills. I landed my dream job within months of completing their courses.</p>
            </div>

          </div>

          <div className="max-w-sm bg-gray-200 p-3 rounded-lg flex flex-col gap-4">

            <div className="flex items-center gap-3 ">
              <div><img src={emma} alt="" /></div>
              <div>
                <p className="text-2xl font-semibold ">Emma Wells</p>
                <p className="pt-2">Student, Web Development</p>
              </div>
            </div>
            <div>
              <p className="text-sm ">I was blown away by the depth of knowledge and support I received from ONET Solutions. Their instructors are industry experts who genuinely care about their students' success.</p>
            </div>

          </div>

          <div className="max-w-sm bg-gray-200 p-3 rounded-lg flex flex-col gap-4">

            <div className="flex items-center gap-3">
              <div><img src={mike} alt="" /></div>
              <div>
                <p className="text-2xl font-semibold ">Mike Holland</p>
                <p className="pt-2">Student, Backend Development</p>
              </div>
            </div>
            <div>
              <p className="text-sm ">ONET Solutions exceeded my expectations. The hands-on projects and interactive learning environment made grasping complex concepts surprisingly easy. Highly recommend!</p>
            </div>

          </div>

        </div>

      </section>

      <section className="bg-rocket-bg rounded-3xl flex flex-col md:flex-row lg:flex-row gap-8 items-center justify-between lg:px-16 md:px-8 sm:px-4 px-2 p-2 py-8" id="get-started">

          <div className="flex flex-col gap-4 border-solid border-text-gray">
            <h2 className="text-3xl font-extrabold max-w-lg">Ready to accelerate your Tech career?</h2>
            <p className="max-w-md text-text-gray">If you love to grow or build a career in tech, we have you covered. At ONET Solution, we focus on industry-ready skills that prepare you for the future of work. Contact us today to get started.</p>
            <button className="fit-content px-6 py-3 bg-btn-color text-white rounded-xl">Get Started </button>
          </div>

          <div className="">
            <img className="w-full" src={rocket} alt="" />
          </div>

      </section>

      <section className="flex flex-col items-center justify-center gap-8 lg:px-16 md:px-8 sm:px-4 px-2 p-2 py-8" id="faq">

        <h2 className="text-center text-3xl font-extrabold">FAQ</h2>

        <div className="max-w-xl">
          <details className="text-faq-text">
            Yes, ONET Solutions occasionally offers internships to students to provide valuable real-world experience.
            <summary className="text-lg font-semibold text-black">Will ONET Solutions offer internships to students?</summary>
          </details>

          <details className="text-faq-text">
            Yes, ONET Solutions occasionally offers internships to students to provide valuable real-world experience.
            <summary className="text-lg font-semibold text-black">Are there any prerequisites to joining ONET Solutions?</summary>
          </details>

          <details className="text-faq-text">
            Yes, ONET Solutions occasionally offers internships to students to provide valuable real-world experience.
            <summary className="text-lg font-semibold text-black">Are certificates provided upon course completion?</summary>
          </details>

          <details className="text-faq-text">
            Yes, ONET Solutions occasionally offers internships to students to provide valuable real-world experience.
            <summary className="text-lg font-semibold text-black">Can I access course materials after completion?</summary>
          </details>

          <details className="text-faq-text">
            Yes, ONET Solutions occasionally offers internships to students to provide valuable real-world experience.
            <summary className="text-lg font-semibold text-black">Are there live instructor-led sessions?</summary>
          </details>

          <details className="text-faq-text">
            Yes, ONET Solutions occasionally offers internships to students to provide valuable real-world experience.
            <summary className="text-lg font-semibold text-black">Are lessons done online?</summary>
          </details>

          <details className="text-faq-text">
            Yes, ONET Solutions occasionally offers internships to students to provide valuable real-world experience.
            <summary className="text-lg font-semibold text-black">Is there a community for students to interact and collaborate?</summary>
          </details>
        </div>
        
      </section>

    </div>
  );
};
