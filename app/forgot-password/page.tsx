import Image from 'next/image'
import key from "@/public/key.png"
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex   mt-52  justify-center h-screen'>

        <form className='flex flex-col items-center h-fit bg-white p-6 rounded-2xl shadow-2xl' action="">
            <div className="p-2 bg-white rounded-2xl border-2 border-accent">
                <Image src={key} alt="key" height={50} width={50} />
                </div>
                <h1 className="text-3xl font-bold text-primary mt-4">Forgot password?</h1>
                <p className=" text-gray-600 ">no worries, we will send you recovery link</p>
                <div className="w-full mt-4">
                    <input type="email" id="email" name="email" placeholder="Enter your email " className="input input-primary rounded-lg mt-2 focus:outline-none " />
                    
                </div>
                <button className='btn btn-primary w-full mt-2 rounded-lg'>Send Reset Link</button>
                <Link href={"/login"} className='mt-4 hover-link text-accent hover:text-primary duration-300 ease-in'>  Back to log in</Link>
        </form>




    </div>
  )
}

export default page