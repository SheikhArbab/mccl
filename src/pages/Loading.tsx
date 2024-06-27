import { FC } from "react"


import { Spinner } from "@/components/index"

const Loading: FC = () => {
    return (
        <main className='w-full min-h-screen flex items-center justify-center'>
            <Spinner className='' size='9' />
        </main>
    )
}

export default Loading