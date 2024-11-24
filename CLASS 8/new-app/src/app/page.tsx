import Image from "next/image";

export default function Home() {
  return (
    <>

    <div>
      <div><Image src={'/Facebook.png'} alt="Facebbok" width={137} height={56} className="mx-[141px] my-[88px]" >
        </Image></div>
        <div>
        <input className="w-213 h17 space-y-8" type="text" placeholder="Enter Your Email or Phone Number" />
        </div>
        <div>
        <input type="password" placeholder="Enter Your Password" />
        </div>
    </div>

    </>
  );
}
