import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Translatable } from "@/components/index"

const Home: FC = () => {

  useEffect(() => {
    document.title = 'Metal Collection .Co LTD';
  }, []);




  return (
    <section className=" flex  items-center justify-between w-full ps-5">
      <div className="">
        <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          <Translatable text="Architects Of Tomorrow's Digital Frontier" />

        </h1>
        <p className="  mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          <Translatable text="Bring Your Vision to Life By Delighting Your Customers" />

        </p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Link to={'https://cybersoftvantage.com/'} className=''>
          <img
            className='w-full h-full object-contain'
            src="https://media.licdn.com/dms/image/D4D0BAQFBxMOfliBn-w/company-logo_200_200/0/1714499735877/csvantage_logo?e=2147483647&v=beta&t=Tu2TrPBmF5xaJNSViMIyh8Ad6-Je5JepQXRUZWyeh-w"
            alt="cybersoft vantage"
          />
        </Link>
      </div>
    </section>

  );
};

export default Home;
