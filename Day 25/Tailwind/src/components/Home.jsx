import { useState } from "react";
export default function Home() {
  const [Read, setRead] = useState("Read More")

  return (
    <div className="container flex flex-col  w-5/6 h-4/5 m-2">
      <section className="vid w-full h-1/5 ">
        <video src="https://www.incredibleindia.org/content/dam/incredible-india-v2/video/original/monsoon.mp4" autoPlay muted></video>
      </section>
      <section className=" flex flex-col p-12 items-center">
        <p className="font-serif" id="#p">
          One of the oldest civilisations in the world, India is a mosaic of multicultural experiences.
          With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world.
          It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south.
          As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea,
          which give the country a <br /><span id="hid" style={{ "display": "none" }}>distinct geographical entity.Fringed by the Great Himalayas in the north, it stretches
            southwards and at the Tropic of Cancer, tapers off into the Indian Ocean between the Bay of Bengal on the east and
            the Arabian Sea on the west. As you travel the expanse of the country, you are greeted by diverse nuances of cuisines,
            faiths, arts, crafts, music, nature, lands, tribes, history and adventure sports. India has a mesmeric conflation of the
            old and the new. As the bustling old bazaars rub shoulders with swanky shopping malls, and majestic monuments accompany
            luxurious heritage hotels, the quintessential traveller can get the best of both worlds.Head to the mountains,
            enjoy a beach retreat or cruise through the golden Thar, India has options galore for all.</span>
        </p>
        <a id="#read" className="underline text-blue-700" href="#p" onClick={() => {
          var hid = document.getElementById('hid')
          if (hid.style.display === "none") {
            hid.style.display = "";
            setRead("Read Less")
          } else {
            hid.style.display = "none";
            setRead("Read More")
          }

        }}>{Read}</a>
      </section>
      <section className="flex flex-col relative items-center ">
        <h1 className="font-bold text-4xl font-serif ">Popular in India</h1><br />
        <p>India is a home to the finest architectural heritage, serene ghats, spectacular landscapes and largest tiger reserve</p>
        <br />
        <img src="https://www.incredibleindia.org/content/dam/incredibleindia/images/udaipur/rajasthan-udaipur-city-palace.jpg/_jcr_content/renditions/cq5dam.web.1800.600.jpeg" alt="" />
        <div className="absolute flex flex-col items-center p-5 bg-gray-500 w-1/2 h-1/4 opacity-80 mt-48 rounded-2xl">
          <h1 className="font-serif font-bold text-2xl"> Forts and Places</h1>
          <p>
            India is blessed with heritage riches and a regal lineage.
            Vestiges of Indian royalty can be felt in the various
            forts and palaces speckled across the country.
            From hill forts in Rajasthan to...
          </p>

        </div>
      </section>
      <section className="flex flex-col items-center mt-10">
        <h1 className="font-bold text-4xl font-serif ">Must Visit in India</h1>
        <p className="font-mono m-5">From historical cities to natural splendours, come see the best of India</p>
        <div className="flex flex-row bg-gray-700 h-2/3 p-10 w-5/6 justify-evenly bg-center" style={{ "backgroundImage": "url('https://www.incredibleindia.org/content/dam/incredible-india-v2/images/places/goa/goa-anjuna-beach-1.jpg/_jcr_content/renditions/cq5dam.web.1800.737.jpeg')" }}>
          <div className="w-1/5 flex flex-col p-2 border border-black rounded-2xl items-center bg-gray-200 opacity-80">
            <h1 className="font-serif font-bold text-xl p-2">Thissaur</h1>
            <img src="https://www.incredibleindia.org/content/dam/incredibleindia/images/places/thrissur/thrissur-athirapally-falls-20.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg" alt="" />
            <p>
              Often referred to as the cultural capital of Kerala, Thrissur is a...
            </p><br/>
            <a  className="text-blue-700 underline" href="#f">Read More</a>
          </div>
          <div className="w-1/5 flex flex-col p-2 border border-black rounded-2xl items-center bg-gray-200 opacity-80">
            <h1 className="font-serif font-bold text-xl p-2">Goa</h1>
            <img src="https://www.incredibleindia.org/content/dam/incredibleindia/images/places/goa/goa-vagator-beach-1.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg" alt="" />
            <p>
              The pocket-sized paradise of Goa is a traveller's dream. Sun, sea,...</p>
            <a  className="text-blue-700 underline" href="#f">Read More</a>
          </div>
          <div className="w-1/5 flex flex-col p-2 border border-black rounded-2xl items-center bg-gray-200 opacity-80">
            <h1 className="font-serif font-bold text-xl p-2">Kochi</h1>
            <img src="https://www.incredibleindia.org/content/dam/incredibleindia/images/places/kochi/kochi-chinese-fishing-nets-1.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg" alt="" />
            <p>
              A vibrant potpourri of art, culture, food, carnivals and festivals,...
            </p><br/>
            <a  className="text-blue-700 underline" href="#f">Read More</a>
          </div>
          <div className="w-1/5 flex flex-col p-2 border border-black rounded-2xl items-center bg-gray-200 opacity-80">
            <h1 className="font-serif font-bold text-xl p-2">Bekal Fort</h1>
            <img src="https://www.incredibleindia.org/content/dam/incredibleindia/images/places/bekal/bekal-mallikarjuna-temple-170.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg" alt="" />
            <p>
              A vibrant potpourri of art, culture, food, carnivals and festivals,...</p><br/><br/>
            <a className="text-blue-700 underline"  href="#f">Read More</a>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mt-10">
      <h1 className="font-bold text-4xl font-serif ">Immersive Experience</h1>
        <p className=" m-5">In the land of opulence, let loose and discover yourself</p>
        <div className="flex flex-row  w-full justify-evenly">
          <image className="m-5">
            <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/spiritual/buddhism/1920-1080.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt=""/>
          <caption>Heritage</caption>
          </image>
          <image className="m-5">
        <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/adventure/river-rafting-rishikesh/river-rafting-rishikesh.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />
         <caption>Adventure</caption>
          </image>
          <image className="m-5">
          <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/art/musica-forms/musica-forms.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />
          <caption>Art</caption>
          </image>
          <image className="m-5">
        <img className="h-44 w-96"src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/places/amritsar/sarson-da-saag.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />
         <caption>Food</caption>
          </image>
        </div>
        <div className="flex flex-row  w-full justify-evenly">
          <image className="m-5">
          <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/luxury/luxury-image.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />  
           <caption>Luxury</caption>
          </image>
          <image className="m-5">
          <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/nature/1920-1080.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />
         <caption>Nature</caption>
          </image>
          <image className="m-5">
          <img className="h-44 w-96" src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/spiritual/Spiritual-Banner.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />
          <caption>Spiritual</caption>
          </image>
          <image className="m-5">
        <img src="https://www.incredibleindia.org/content/dam/incredibleindia/images/places/patna/patna-patna-museum-120.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />
         <caption>Museum</caption>
          </image>
        </div>
        <div id="mr" className=" w-full h-32">  
        {" "}
        </div>
      </section>
    </div>
  );
}
