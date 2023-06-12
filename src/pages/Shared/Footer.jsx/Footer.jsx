import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillSkype, AiFillTwitterCircle } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
const Footer = () => {
    return (
        <footer className="mx-auto mb-2 rounded p-10 bg-gray-800 text-neutral-content">
            <section className="grid grid-cols-1 sm:grid-cols-4 mx-auto gap-8 py-8">
                <div>
                    <div className='flex items-center gap-5'>
                        <h1 className='text-3xl font-bold'>Language Oasis</h1>
                    </div>
                    <p className="text-white mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium placeat, dignissimos quo provident vel laudantium, officia cupiditate suscipit repellat consectetur dolorem nam.</p>
                </div>
                <div className="text-white">
                    <h1 className="text-2xl">Contact</h1>
                    <ul className="list-none text-[#ffffff] py-2 space-y-2">
                        <li>mirzamohibul618@gmail.com</li>
                        <li>+880 1991347811</li>
                        <div className='flex gap-2'>
                            <Link to='https://web.facebook.com/?_rdc=2&_rdr'><BsFacebook className='text-2xl hover:text-gray-400'></BsFacebook></Link>
                            <Link to='https://twitter.com/home'><AiFillTwitterCircle className='text-2xl hover:text-gray-400'></AiFillTwitterCircle ></Link>
                            <Link to='https://www.instagram.com/?hl=en'><BsInstagram className='text-2xl hover:text-gray-400'></BsInstagram></Link>
                            <Link to='https://www.skype.com/en/'><AiFillSkype className='text-2xl hover:text-gray-400'></AiFillSkype></Link>
                        </div>
                    </ul>
                </div>
                <div className="text-white">
                    <h1 className="text-2xl mb-3">Our Address</h1>
                    <p className="text-[#ffffff]">Paramanandapur, Faridpur <br />Dhaka, abngladesh</p>
                    <p className="text-[#ffffff] my-3">Jessore-7808, Jashore <br />Khulna, abngladesh</p>
                </div>
                <div className="text-white">
                    <h1 className="text-2xl">Subscribe</h1>
                    <p className="text-[#ffffff] py-5">Subscribe for our latest & Articles. We Won’t Give You Spam Mails</p>

                    <form>
                        <div className="bg-white flex justify-between rounded-xl">
                            <input type="text" className="border-none flex-1 rounded-lg p-3" placeholder="Email Address" />
                            <button className="border-2 w-12 rounded-lg"><SiMinutemailer className='text-[#e2136e] w-full text-3xl'></SiMinutemailer></button>
                        </div>

                    </form>

                </div>
            </section>
            <p className='text-center'>ALL RIGHTS RESERVED BY <br /> Mirza Mohibul Hasan</p>
        </footer>
    );
};

export default Footer;