import Image from 'next/image';
import crypto from '../assets/images/crypto.jpg';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <div className="mcryptot-30">
        <Image src={crypto} style={{ height: '80vh' }} alt="Picture of the author" />
        <div style={{ maxWidth: '1200px' }} className=" my-0 mx-auto">
          <h1 className="text-slate-50 text-center text-4xl font-semibold mt-5 mb-5">Our Story</h1>
          <p className="text-slate-300 text-xl text-justify mb-10">
            Marvel Punks is a non-fungible token collection on the Ethereum blockchain. The project
            was launched in Jan 2024 by DBIT, a three-person team consisting of software developers
            Shadab Khan, Akshay Shekate and Kaushik Bedmutha.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
            <div>
              <img
                className="h-auto w-3/4 rounded-lg mx-auto my-0"
                src="https://img.freepik.com/premium-vector/abstract-square-box-concept-digital-technology-futuristic-modern-cryptocurrency-blockchain_36402-1075.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="text-slate-300 text-xl text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus inventore tenetur
                dolores asperiores ex atque amet sapiente itaque! Eos corrupti modi expedita alias
                voluptatum sequi fugiat totam. Quae, quidem minus. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Placeat error perspiciatis tempore ipsam distinctio
                quas! Dolorem rerum ea voluptatibus consequuntur, voluptates quisquam minima velit!
                Libero reprehenderit veniam enim quidem consequuntur!
              </p>
            </div>
          </div>
          <h1 className="text-slate-50 text-center text-4xl font-semibold mt-5 mb-5">
            Our Mission
          </h1>
          <p className="text-slate-300 text-xl text-justify mb-10">
            Today, Ethereum is the world’s leading blockchain ecosystem, with a product suite that
            includes the largest digital asset exchange. Our mission is to be the infrastructure
            provider for crypto in tomorrow’s world.
          </p>
          <h1 className="text-slate-50 text-center text-4xl font-semibold  py-5">Our Gallery</h1>
          <div className="bg-slate-50 px-10 rounded py-10 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://bafybeictzwmm3yp7xqqx5wxnn57xykafyxt3ikrblndqzow3zn6t7g5q6i.ipfs.cf-ipfs.com/BlackWidow.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://bafybeiggefupamsslhknkewsopn7fyybpkf5dlfply2t7slsob7q7butom.ipfs.cf-ipfs.com/Wasp.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://bafybeieio4taybzkve5yoyt4rmf3wnnc75m3isovs7qvfwpvuvzblq3dbe.ipfs.cf-ipfs.com/Hulk.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://bafybeih2gfmcxu64f3iwuglaoo3mhol5ynjt7eguuwb36jrep7y2rvz6hu.ipfs.cf-ipfs.com/IronMan.webp"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://bafybeigi33vyc66stmxnyqtszbxv366zeue374fw62bdu3vw4mwoo5djza.ipfs.cf-ipfs.com/Hawkeye.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://bafybeidnavun6v5fppr5p5yhw5q3yrsoefrh53f2pkaeeqrhleqee6sr2u.ipfs.cf-ipfs.com/Gamora.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://bafybeidmch7rkwmefzvpf7ofcohqfrgy5yhhoolvvrcqbg57gvjypdaqhy.ipfs.cf-ipfs.com/CaptainAmerica.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://bafybeiel6artphmi2dfkbqe57fva2pmnummvdbjq3uaci3wjgrlxrt4kn4.ipfs.cf-ipfs.com/DrChristinePalmer.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://bafybeifba7rauvtwhliwjwzjwxpsj7j6mpuidhv3gjrtu5iuaer2ikv3fe.ipfs.cf-ipfs.com/DoctorStrange.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://bafybeicsowsf3feywmup3wm2yxmbvhevbkpam3jckf52uj3guq7c3bydh4.ipfs.cf-ipfs.com/PeggyCarter.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://bafybeidtgyhmqqosmrrt3vvbbojxrph3wdbx5uafgkp34j4e7yqnxc23yu.ipfs.cf-ipfs.com/Ultron.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://bafybeidakswiygxrw6yovd323rqrh5d55dmxlzyehorz2baixx2cfc2smm.ipfs.cf-ipfs.com/BlackPanther.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-5 mb-10">
            <h1 className="text-slate-50 text-center text-4xl font-semibold mt-5 mb-5">
              Get In Touch
            </h1>
            <form className="">
              <label
                htmlFor="email"
                className="block mb-2 text-xl font-medium text-gray-300 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 mb-5 text-black text-lg rounded-lg  block w-full p-2.5 "
                placeholder="Enter you email"
              />
              <label
                htmlFor="message"
                className="block mb-2 text-xl font-medium text-gray-300 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block mb-5  p-2.5 w-full text-lg text-black bg-gray-50 rounded-lg border border-gray-300 "
                placeholder="Leave a comment..."
              ></textarea>

              <p id="helper-text-explanation" className="mt-2 text-sm text-slate-300">
                We’ll never share your details. Read our{' '}
                <Link
                  href="/privacyPolicy"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
