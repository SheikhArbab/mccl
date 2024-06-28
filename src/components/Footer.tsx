import { FC } from 'react'
import { Translatable } from "@/components/index"

const Footer: FC = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="bg-black p-10 rounded-md flex items-center justify-center">
      <span className="text-sm text-white  text-center flex ">
        © {year}{" "}
        <a href="https://cybersoftvantage.com/" className="hover:underline">
          CSV™
        </a>
        <Translatable text=". All Rights Reserved." />

      </span>
    </footer>

  )
}

export default Footer