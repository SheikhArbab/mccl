import { FC } from 'react'
import { Link } from 'react-router-dom'

const Footer: FC = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year}{" "}
          <a href="/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {
            [
              {
                title: "About",
                url: "/about"
              },
              {
                title: "Privacy Policy",
                url: "/privacy-policy"
              },
              {
                title: "Licensing",
                url: "/licensing"
              },
              {
                title: "Contact",
                url: "/contact"
              },
            ].map(v => <li key={v.title}>
              <Link to={v.url} className="hover:underline me-4 md:me-6">
                {v.title}
              </Link>
            </li>)
          }
        </ul>
      </div>
    </footer>

  )
}

export default Footer