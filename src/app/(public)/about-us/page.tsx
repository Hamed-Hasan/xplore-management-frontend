/* eslint-disable @next/next/no-img-element */
import Organized from "@/components/Home/Organized";
import Title from "@/components/UI/Title";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto">
      <section className="py-10">
        <div className="container mx-auto">
          <Title title="About Us" top="Learn More" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 text-justify leading-loose">
                Your Travel Agency is your gateway to unforgettable adventures.
                Welcome to our premier travel agency, where adventure meets
                luxury, and every journey is a story waiting to be told. At our
                agency, we&apos;re passionate about crafting unforgettable
                experiences for travelers from around the world. Whether
                you&apos;re a wanderlust seeker, a culture enthusiast, or simply
                in search of relaxation, we&apos;ve got you covered. Our team of
                experienced travel experts is dedicated to curating exceptional
                trips that cater to your unique desires. From pristine beaches
                to towering mountain peaks, bustling cityscapes to serene
                countryside escapes, we offer a diverse range of destinations
                and travel styles. With our commitment to quality and attention
                to detail, your dream vacation becomes a reality. Trust us to
                handle all the logistics, leaving you free to savor every moment
                of your journey.
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-justify leading-loose">
                Your travel aspirations are as unique as you are, and
                that&apos;s why we take a personalized approach to planning your
                perfect getaway. We listen to your preferences and desires,
                ensuring that your itinerary is tailored to your individual
                tastes. Our relationships with top-notch hotels, airlines, and
                local experts mean that you&apos;ll enjoy exclusive perks and
                insider access throughout your trip. Whether you&apos;re
                embarking on a solo adventure, a romantic escape, a family
                vacation, or a group excursion, we&apos;ve got the expertise to
                make it a seamless and memorable experience. Join us as we turn
                your travel dreams into reality. At our travel agency, we
                don&apos;t just arrange vacations; we create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto">
          <Title title="Out Team" top="About" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-secondary p-8 rounded-xl">
            <div className="p-6 rounded shadow-md bg-elegant">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member 1"
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-600">Travel Specialist</p>
            </div>
            <div className=" p-6 rounded shadow-md bg-elegant">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member 2"
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-600">Adventure Expert</p>
            </div>
            <div className=" p-6 rounded shadow-md bg-elegant">
              <img
                src="https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?auto=format&fit=crop&q=80&w=1588&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member 3"
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold">David Johnson</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div className=" p-6 rounded shadow-md bg-elegant">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member 3"
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold">Stacey Alvarez</h3>
              <p className="text-gray-600">Account Executive</p>
            </div>
            <div className=" p-6 rounded shadow-md bg-elegant">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member 3"
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold">Jodie Shepherd</h3>
              <p className="text-gray-600">President of Sales</p>
            </div>
            <div className=" p-6 rounded shadow-md bg-elegant">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1522&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member 3"
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold">Lillian Mcintosh</h3>
              <p className="text-gray-600">Medical Assistant</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-10">
        <div className="container mx-auto flex justify-start flex-col">
          <Title
            title="Our Mission"
            top="At Your Travel Agency, our mission is to inspire and facilitate
            travel experiences that create lifelong memories. We believe in the
            transformative power of travel and are committed to providing
            exceptional service to our clients."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <p className="text-justify text-gray-700 overflow-y-scroll bg-white p-4 h-60">
            At Xplore, our mission is to empower your travel dreams and create
            memorable experiences that last a lifetime. We believe that travel
            is not just about visiting new places; it&lsquo;s about connecting
            with cultures, exploring the world&lsquo;s wonders, and discovering
            your own sense of adventure. Our dedicated team of travel experts is
            committed to making your travel dreams a reality while ensuring that
            you have a seamless and stress-free journey. Our commitment to you
            begins with personalized service. We take the time to understand
            your travel preferences, interests, and desires. Whether
            you&lsquo;re a solo explorer, a couple seeking a romantic getaway, a
            family looking for a fun-filled vacation, or a group of friends
            embarking on an adventure, we tailor our services to meet your
            unique needs. Quality and excellence are the cornerstones of our
            travel agency. We work tirelessly to curate the finest travel
            experiences, partnering with the world&lsquo;s most reputable
            airlines, hotels, tour operators, and cruise lines. Every aspect of
            your trip is meticulously planned to provide you with the highest
            level of comfort, safety, and enjoyment. At Xplore, we are dedicated
            to responsible travel. We believe in the importance of preserving
            the natural beauty and cultural heritage of the destinations we
            visit. Our itineraries are designed to minimize environmental impact
            and support local communities. We strive to make a positive
            contribution to the places we explore, ensuring that they remain
            vibrant and accessible for generations to come. We are proud to have
            a team of experienced and passionate travel advisors who are experts
            in their field. They will guide you through the entire travel
            planning process, from the moment you express interest to the day
            you return from your journey. Our advisors are well-versed in the
            latest travel trends, destination information, and safety
            guidelines. Their goal is to make your travel experience worry-free
            and unforgettable. In addition to personalized service, quality
            travel experiences, and responsible travel, [Your Travel Agency
            Name] is committed to continuous improvement. We regularly update
            our knowledge and expand our offerings to keep up with the
            ever-evolving travel industry. Our mission is to stay at the
            forefront of travel innovation, ensuring that you always have access
            to the latest travel technologies and trends. In summary, our
            mission at Xplore is to empower your travel dreams by providing
            personalized service, curating quality travel experiences, promoting
            responsible travel, and maintaining a commitment to excellence. We
            are here to help you explore the world, connect with cultures, and
            create unforgettable memories. Your journey starts here!
          </p>
          <img
            src="https://img.freepik.com/free-photo/location-symbol-beautiful-city_23-2149764128.jpg?w=740&t=st=1698844521~exp=1698845121~hmac=812849680c55d528db33f79e2066fff50aac59cd7385d54714587a6160bc28f1"
            alt=""
            className="w-full h-60 object-cover rounded-lg drop-shadow-2xl"
            style={{ border: "1px solid red" }}
          />
          <p className="text-justify text-gray-700 overflow-y-scroll bg-white p-4 h-60 ">
            At Xplore, our mission is to be your gateway to extraordinary
            adventures. We understand that travel is more than just moving from
            one place to another; it&lsquo;s about embarking on journeys that
            enrich your life, create unforgettable memories, and inspire your
            sense of wonder. Our commitment to providing extraordinary
            adventures starts with you. We take the time to listen to your
            travel aspirations, understand your unique interests, and craft
            personalized itineraries that align with your dreams. Whether
            you&lsquo;re seeking relaxation, exploration, cultural immersion, or
            thrilling experiences, we have the perfect journey waiting for you.
            Quality and excellence are our guiding principles. We handpick the
            finest airlines, accommodations, tour operators, and travel partners
            to ensure that every aspect of your trip meets the highest
            standards. You can trust that your safety, comfort, and enjoyment
            are our top priorities. We&lsquo;re not just in the business of
            travel; we&lsquo;re in the business of responsible travel. We
            believe that preserving the world&lsquo;s natural beauty and
            cultural heritage is a shared responsibility. That&lsquo;s why
            we&lsquo;re committed to sustainable and ethical travel practices,
            so you can explore the world with a clear conscience. Our dedicated
            team of travel experts is the driving force behind our mission. They
            are passionate about exploring the globe, and their knowledge and
            experience shine through in every travel plan they create. They are
            here to assist you from the moment you dream of a destination to the
            moment you return from your adventure. In addition to offering you
            extraordinary adventures, we are committed to innovation and
            continuous improvement. We stay at the forefront of the travel
            industry, utilizing the latest technologies and staying updated on
            travel trends to ensure you have access to the best travel options
            available. In conclusion, our mission at Xplore is to serve as your
            gateway to extraordinary adventures by providing personalized
            service, exceptional quality, responsible travel options, and a
            dedicated team of experts. We&lsquo;re here to make your travel
            dreams come true, one extraordinary adventure at a time. Join us on
            a journey of a lifetime!
          </p>
          <img
            src="https://img.freepik.com/free-photo/location-symbol-with-landscape-background_23-2149906273.jpg?w=900&t=st=1698844527~exp=1698845127~hmac=1f17d7bafdff06bbc57568dc419f82d9f5e8e90d7a661e18d083edba36dee205"
            alt=""
            className="w-full h-60 object-cover rounded-lg drop-shadow-2xl"
            style={{ border: "1px solid red" }}
          />
          <p className="text-justify text-gray-700  overflow-y-scroll bg-white p-4 h-60">
            At Xplore, our mission is to help you discover the world, connect
            with different cultures, and thrive through travel. We believe that
            traveling is not just about changing your location; it&lsquo;s about
            changing your perspective. It&lsquo;s an opportunity to learn, grow,
            and experience the beauty of our diverse planet. Our core values are
            centered around discovery. We want to introduce you to new places,
            experiences, and perspectives that will enrich your life. Whether
            you&lsquo;re an intrepid explorer or a leisure traveler, we are
            dedicated to curating journeys that cater to your individual
            interests and desires. Connecting with cultures is at the heart of
            our mission. We see travel as a bridge that brings people from
            different backgrounds together. It&lsquo;s a chance to learn from
            each other, embrace diversity, and foster global understanding. We
            work with local partners to ensure that you have authentic,
            immersive experiences that go beyond the surface of a destination.
            Thrive through travel is not just a catchy phrase for us; it&lsquo;s
            a genuine commitment. We believe that travel has the power to
            inspire, rejuvenate, and transform lives. Whether you&lsquo;re
            seeking relaxation, adventure, or personal growth, our travel
            experiences are designed to help you thrive emotionally, mentally,
            and spiritually. Quality and customer satisfaction are
            non-negotiable for us. We strive to exceed your expectations at
            every step of your journey. From booking your trip to experiencing
            it, we pay attention to every detail. We partner with trusted
            airlines, accommodations, and tour operators to ensure your comfort
            and safety. Our mission is also deeply rooted in sustainability. We
            believe in preserving the natural beauty and cultural heritage of
            the places we visit. Our itineraries are designed to minimize
            environmental impact, support local communities, and promote
            responsible tourism. We&lsquo;re committed to ensuring that the
            destinations we explore thrive alongside our travelers. Our team of
            travel experts is passionate about what they do. They are dedicated
            to helping you plan and execute your dream trips. Their expertise,
            attention to detail, and unwavering commitment to customer
            satisfaction make all the difference. They are your partners in
            turning your travel dreams into reality. In summary, our mission at
            Xplore is to help you discover, connect with cultures, and thrive
            through travel. We prioritize quality, sustainability, and
            exceptional customer service to ensure that your travel experiences
            are not only memorable but also life-enriching. Start your journey
            with us and let the world become your playground.
          </p>
          <img
            src="https://img.freepik.com/free-photo/location-symbol-with-landscape-background_23-2149906278.jpg?w=900&t=st=1698844532~exp=1698845132~hmac=046b444c31dcc2339b9319289c5e98863d4bf44dee8a12d284c4736e5adc6351"
            alt=""
            className="w-full h-60 object-cover rounded-lg drop-shadow-2xl"
            style={{ border: "1px solid red" }}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
