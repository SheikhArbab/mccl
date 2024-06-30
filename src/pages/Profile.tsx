import { Breadcrumb, Translatable } from '@/components/index';
import CoverOne from '../images/cover/cover-01.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '@/types/User'; 
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const Profile = () => {


  const { user } = useSelector((state: UserState) => state.auth)


  return (
    <>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />

        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full flex items-center justify-center bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">

              <figure className='overflow-hidden rounded-full w-40 h-40'>
                <img
                  className='w-full h-full object-cover'
                  src={"https://avatars.mds.yandex.net/i?id=e54e72f5db21959ef71ab3f51aabe3d9e5367590-4986689-images-thumbs&n=13"} alt="profile" />
              </figure>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white flex gap-2 items-center justify-center capitalize">
              <Translatable text={user ? user.first_name : ""} />
              <Translatable text={user ? user.last_name : ""} />
            </h3>
            <p className="font-medium"> <Translatable text={user ? (user.roles || "user") : "user"} /></p>


            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">
                <Translatable text='About Me' />
              </h4>
              <p className="mt-4.5">
                <Translatable text='The customer is very important, the customer will be followed by the customer. The children put the yeast in the pot, it is a good time to put it on. Until the yeast is flattering the trucks. It was also said that the protein was too much. But even the trucks are free. Now, let&#39;s start with the propaganda, but with a quiver, some lake.' />
              </p>
            </div>

            <div className="mt-6.5">
              <h4 className="mb-3.5 font-medium text-black dark:text-white">
                <Translatable text='Follow me on' />
              </h4>
              <div className="flex items-center justify-center gap-3.5">


                {[
                  {
                    url: "/",
                    icon: FaFacebookF
                  },
                  {
                    url: "/",
                    icon: FaXTwitter
                  },
                  {
                    url: "/",
                    icon: FaLinkedinIn
                  },
                ].map(v => <Link key={v.url}
                  to="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >  <v.icon />
                </Link>)}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
