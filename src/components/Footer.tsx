import { FC } from "react";
import { Translatable } from "@/components/index"

const Footer: FC = () => {

    const year = new Date().getFullYear()

    return (
        <footer className="  top-0 z-999 flex gap-1 group w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none items-center justify-center py-8">
          <Translatable text={`© ${year} Metal Collection .Co LTD. All rights reserved. Powered by `} />
          <a target="_blank" href="http://cybersoftvantage.com/" className="group-hover:text-yellow-400">CSV.</a>

        </footer>
    )
}

export default Footer