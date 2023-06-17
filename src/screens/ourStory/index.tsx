import about1 from "../../../public/blog04.png"
import about2 from "../../../public/blog01.png"


const OurStory = () => {
    return ( 
        <div className="max-w-2xl mx-auto flex flex-col gap-12 mt-24 mb-48 items-center">
            <div className="flex flex-col gap-6">
                <h1 className="text-center text-3xl font-medium">About Us</h1>
                <h3 className="text-center text-xl font-normal">Who we are and why we do what we do!</h3>
            </div>
            <p>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. </p>
            <div className="flex w-full flex-col gap-6">
                <h2 className="text-2xl font-semibold">Top trends</h2>
                <img className="w-full max-h-80" src={about1} alt="" />
            </div>
            <div className="flex flex-col gap-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. </p>
                <ul className="mx-8">
                    <li>● consectetur adipiscing elit. Aliquam placerat</li>
                    <li>● Lorem ipsum dolor sit amet consectetur </li>
                </ul>
            </div>
            <div className="flex w-full flex-col gap-6">
                <h2 className="text-2xl font-semibold">Produced with care</h2>
                <img className="w-full max-h-80" src={about2} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu.</p>
        </div>
     );
}
 
export default OurStory;