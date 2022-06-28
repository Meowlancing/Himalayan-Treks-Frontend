import React from "react";
import "./styles/trkspge.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapsible from "react-collapsible";
import { Card } from "react-bootstrap";
import {
  faLocation,
  faCampground,
  faBuilding,
  faCalendarDay,
  faArrowRight,
  faSquarePhoneFlip,
  faMapMarked,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

function TreksPage() {
  return (
    <div>
      <section className="TrkHeader">
        <h2 className="headerH2">KEDARKANTHA TREK</h2>
        <h3 className="headerH3">Best Winter Treks In The Himalayas</h3>
      </section>
      <section className="trekDets">
        <div style={{ display: "flex" }}>
          <FontAwesomeIcon
            style={{ fontSize: "20px", color: "crimson" }}
            icon={faLocation}
          />
          <p style={{ color: "#fff" }}>Region-Uttarkhand</p>
        </div>
        <div style={{ display: "flex" }}>
          <FontAwesomeIcon
            style={{ fontSize: "20px", color: "crimson" }}
            icon={faCampground}
          />
          <p style={{ color: "#fff" }}>Base Camp-SANKRI</p>
        </div>
        <div style={{ display: "flex" }}>
          <FontAwesomeIcon
            style={{ fontSize: "20px", color: "crimson" }}
            icon={faCalendarDay}
          />
          <p style={{ color: "#fff" }}>Days - 5</p>
        </div>
        <div style={{ display: "flex" }}>
          <FontAwesomeIcon
            style={{ fontSize: "20px", color: "crimson" }}
            icon={faBuilding}
          />
          <p style={{ color: "#fff" }}>Feet - 12.500</p>
        </div>
      </section>
      <section className="Panel">
        <div className="LeftPane">
          <h1>Brief <span style={{color:"#FF6060"}}>Description</span></h1>
          <p>
            The Kedarkantha trek is the best option for winter trekking because
            it features new powder-soft sparkling snow. It's a year-round hike,
            but it's especially well-known and popular during the winter months.
            For trekkers who want to blend adventure with a simple approach, it
            is the best option for winter trekking. It is one of Uttarakhand's
            most well-known treks, and it is rich in natural beauty. This
            journey has mythological significance, with some linking it to the
            ancient Indian epic "The Mahabharata." The alias name of Lord Shiva
            is Kedar, and the word Kantha means neck. It's the subject of those
            stories. Some people believe the rumours, while others do not, but
            one thing is certain: participating in this trek will provide you
            with inner peace. If you stick to the freeway, you'll get closer to
            your destination. The Kedarkantha walk leads to the Kedarkantha
            Peak, which is 12,500 ft above sea level. The walk takes place in
            Uttarakhand's Western Garhwal, in the Uttarakashi district. The
            temperature at Kedarkantha approaches 20 degrees during the summer
            months of April to June. The weather blankets the mountains in pure
            white snow in the winter, making it an interesting destination for
            skiing or even trekking! The temperature will plummet to -10 degrees
            between November and February, with the weather being chilly. It's
            one of the few Himalayan treks where trekkers will see snow before
            April. The trek's main attraction is this. This walk takes place in
            Govind Ballabh Pant National Park, also known as Govind National
            Park. The snow leopard, Golden Eagle, Brown Bear, Moschus, Western
            Tragopan, and other endangered Himalayan species are protected in
            this national park. The route begins in a dense pine forest and
            continues through it.
          </p>
          <h1>Short <span style={{color:"#FF6060"}}>Itinerary</span></h1>
          <p>
           <strong>Day 1:</strong> Dehradun - Sankri (nine-hour drive) <br />
           <strong>Day 2:</strong> Sankri – Shepherd Camp (Trek/3-4 Hrs) <br />
           <strong>Day 3:</strong> Shepherd Camp – Kedarkantha Base Camp (Trek 4-5 Hrs) <br />
           <strong>Day 4:</strong> Kedar Kantha Peak from Base Camp (3800m) - Juda Ka Talab{" "}
            <br />
            <strong>Day 5:</strong> Juda Ka Talab – Sankri – Dehradun (2 hours trekking / 8 hours
            driving) <br />
          </p>
          <h1>Detail <span style={{color:"#FF6060"}}>Itinerary</span></h1>
          <p>
           <span style={{fontWeight:"bold",color:"#3254ce", fontSize:"18px"}}><FontAwesomeIcon icon={faMapMarked} style={{color:"#FF6060", fontSize:"24px"}}/> Day 1: Dehradun - Sankri (nine-hour drive) </span><br />
            <span>
              Early in the morning, meet us in Dehradun. From here, we'll embark
              on a scenic drive to Sankri, where we'll set up camp at 6,400
              feet. Along the way, you'll pass through lovely cities like
              Mussoorie, Naitwar, and others. You'll be on a once-in-a-lifetime
              scenic trip to get to base camp. You will be surrounded by nature
              during the drive, with stunning scenery and the smell of pinewood
              and Himalayan flora and fauna. The journey will take approximately
              7-8 hours to complete. The breathtaking and majestic drive will
              capture your heart right away. Pine and oak trees will greet you,
              and your path will take you alongside the raging Yamuna & Tons
              river.
            </span>
          </p>
          <p>
           <span style={{fontWeight:"bold",color:"#3254ce", fontSize:"18px"}}><FontAwesomeIcon icon={faMapMarked} style={{color:"#FF6060", fontSize:"24px"}}/> Day 02 : Sankri – Shepherd Camp (Trek/3-4 Hrs) <br /></span>
            <span>
              After breakfast, we'll go on a short hike that will mostly take us
              through the forest. We'll walk to Saur village and then ascend to
              Juda-ka-Talab, a small pond that freezes over during the winter.
              This lake has religious significance and offers breathtaking views
              of snow-capped mountains. It has the ability to enchant visitors
              with its views. You won't be able to take your eyes off it until
              you see it. You won't be able to express your feelings. Because
              the words will be brief, only you will be able to sense it. As we
              continue climbing, we will get glimpses of the snow-capped
              Himalayan peaks. We'll arrive at the meadows after another hour of
              hiking, where we'll pitch our tents for the night.
            </span>
          </p>
          <p>
           <span style={{fontWeight:"bold",color:"#3254ce", fontSize:"18px"}}><FontAwesomeIcon icon={faMapMarked} style={{color:"#FF6060", fontSize:"24px"}}/> Day 3: Shepherd Camp – Kedarkantha Base Camp (Trek 4-5 Hrs) </span> <br />
            <span>
              Begin your day early to catch a glimpse of the brilliant sunrise.
              We will begin our journey to the Kedarkantha foundation, which is
              situated at an elevation of 11,250 feet, after a wonderful
              breakfast. The trek should take about 4-5 hours to complete if you
              take enough breaks. At first, the trail is almost level, and it
              follows a well-marked path. It does, however, quickly enter a
              dense pine and oak forest before opening into beautiful meadows
              dotted with small shepherds' huts. The imposing view of
              snow-capped Himalayan peaks Bandarpoonch, Swargarohini, Kala Nag,
              and Ranglana will take your breath away. The spectacular views
              from these mountains are well-known. When you look up at the tops
              of these hills, there is no space between them and the heavens.
              These peaks were created by Mother Nature's wonders. These are
              irreplaceable natural wonders. Once you've seen it, the view will
              leave an indelible effect on your mind and spirit. The view from
              these peaks will be with you for the rest of your life.
              Swargarohini Peak stands at 6,252 metres, Bandarpunch stands at
              6,316 metres, Kalanag stands at 6,387 metres, and Ranglana stands
              at 5,554 metres. Both of these heights are covered by the Garhwal
              Himalaya. In your comfortable tents, you'll enjoy your tasty meal
              and your night by sharing your adventures with your travel
              companions.
            </span>
          </p>
          <p>
           <span style={{fontWeight:"bold",color:"#3254ce", fontSize:"18px"}}><FontAwesomeIcon icon={faMapMarked} style={{color:"#FF6060", fontSize:"24px"}}/> Day 4: Kedar Kantha Peak from Base Camp (3800m) - Juda Ka Talab{" "} </span>
            <br />
            <span>
              Consider the view from the summit if the Kedar Kantha base is as
              lovely as it is. The ascent to the summit is not long, but it is
              steep, and we will choose the best path based on the snow
              conditions, which will take about 4-5 hours. From the peak, you'll
              be able to see the entire Yamunotri, Gangotri, and Kinner Kailash
              ranges, as well as the valleys. Then, depending on our path, we'll
              descend the peak and trek all the way down to JudakaTalab or
              another campsite. We'll sleep in tents there that night.
            </span>
          </p>
          <p>
           <span style={{fontWeight:"bold",color:"#3254ce", fontSize:"24px"}}><FontAwesomeIcon icon={faMapMarked} style={{color:"#FF6060",}}/> Day 05: Juda Ka Talab – Sankri – Dehradun (2 hours trekking / 8
            hours driving)</span> <br />
            <span>
              Today we'll go on a short hike before driving straight to
              Dehradun. In the splendour of the Himalayas, rise with the sun and
              enjoy your meal. After that, we'll start our descent to Sankri,
              and it'll be time to bid Kedarkantha Trek farewell. Around 9 p.m.,
              you can arrive in Dehradun. This is the point at which the
              fantastic journey comes to an end.
            </span>
          </p>
          <h1>Price Inclusion</h1>
          <p>
            <span>
            <FontAwesomeIcon icon={faCheck}/>
              For the duration of your trek, you will be staying in hotels and
              camps from day one to day five.
            </span>{" "}
            <br />
            <span>
            <FontAwesomeIcon icon={faCheck}/>
              Meals: From the first supper to the fifth morning, all meals are
              included. We offer easy, nutritious vegetarian food on all days of
              the trek.
            </span>
            <br />
            <span>
            <FontAwesomeIcon icon={faCheck}/>
              Transportation: We will provide round-trip transportation from
              Dehradun to Dehradun.
            </span>
            <br />
            <span>
            <FontAwesomeIcon icon={faCheck}/>
              Camping fees: Both trekking permits and woodland camping fees are
              included in the price.
            </span>
            <br />
            <span>
            <FontAwesomeIcon icon={faCheck}/>
              All of the camps will provide you with high-quality tents and
              sleeping bags for your trek. We have high-altitude sleeping bags
              that can withstand temperatures as low as -10°C. Ropes,
              microspikes, and gaiters are all available.
            </span>
            <br />
          </p>
          <h1>Price Exclusion</h1>
          <p>
            <span>
              Expenses for personal reasons: For instance, during the trek,
              personal bags must be transported.
            </span>{" "}
            <br />
            <span>
              Emergency Costs: Any expense arises as a result of any kind of
              emergency.
            </span>{" "}
            <br />
            <span>
              Water in a Bottle: Throughout the trek, no bottled water will be
              provided.
            </span>{" "}
            <br />
          </p>
        </div>
        <div className="SidebarBook">
          <h1>7,999 INR/per Person</h1> <br />
          <p>5% GST EXTRA</p>
          <button>Book Now</button>
          <Card style={{ backgroundColor: "#00114C" }}>
            <div className="icons"></div>
            <Card.Body>
              <Card.Title className="title"></Card.Title>
              <Card.Text className="purpose">
                <FontAwesomeIcon
                  style={{ color: "crimson" }}
                  icon={faArrowRight}
                />{" "}
                <a
                  style={{ color: "#ffff", textDecoration: "underline" }}
                  href=""
                >
                  Brief Description
                </a>{" "}
                <br />
                <FontAwesomeIcon
                  style={{ color: "crimson" }}
                  icon={faArrowRight}
                />{" "}
                <a
                  style={{ color: "#ffff", textDecoration: "underline" }}
                  href=""
                >
                  Short Itinerary
                </a>{" "}
                <br />
                <FontAwesomeIcon
                  style={{ color: "crimson" }}
                  icon={faArrowRight}
                />{" "}
                <a
                  style={{ color: "#ffff", textDecoration: "underline" }}
                  href=""
                >
                  Detailed Itinerary
                </a>{" "}
                <br />
                <FontAwesomeIcon
                  style={{ color: "crimson" }}
                  icon={faArrowRight}
                />{" "}
                <a
                  style={{ color: "#ffff", textDecoration: "underline" }}
                  href=""
                >
                  Price Inclusion
                </a>{" "}
                <br />
                <FontAwesomeIcon
                  style={{ color: "crimson" }}
                  icon={faArrowRight}
                />{" "}
                <a
                  style={{ color: "#ffff", textDecoration: "underline" }}
                  href=""
                >
                  Price Exclusion
                </a>{" "}
                <br />
                <FontAwesomeIcon
                  style={{ color: "crimson" }}
                  icon={faArrowRight}
                />{" "}
                <a
                  style={{ color: "#ffff", textDecoration: "underline" }}
                  href=""
                >
                  Departure Date
                </a>{" "}
                <br />
                <FontAwesomeIcon
                  style={{ color: "crimson" }}
                  icon={faArrowRight}
                />{" "}
                <a
                  style={{ color: "#ffff", textDecoration: "underline" }}
                  href=""
                >
                  Gallery
                </a>{" "}
                <br />
                <div className="socialsicons"></div>
              </Card.Text>
            </Card.Body>
          </Card>
          <h3>
            <button>
              <FontAwesomeIcon icon={faSquarePhoneFlip} />{" "}
            </button>{" "}
            TALK TO AN EXPERT <br /> +91-8089693825{" "}
          </h3>{" "}
          <br />
          <h3>OR</h3> <br /> <button>Email Us</button>
          <span>Departure Date</span>
          <Collapsible trigger="April 2021">
            <p>
              Call for booking-
              <br />
              +91 80896 93825 / +91 6395 932 971
            </p>
          </Collapsible>
          <Collapsible trigger="May 2021">
            <p>Call for booking- +91 80896 93825 / +91 6395 932 971</p>
          </Collapsible>
          <form className="BookingForm">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="number" placeholder="Contact Number" />
            <input type="text" name="people" placeholder="No. of People" />
            <input type="text" name="trekname" placeholder="Trek Name" />
            <input type="submit" value="Reserve Your Slot Now" />
          </form>
        </div>
      </section>
      <section className="TrekGallery">
      <h1>Gallery</h1>
        <div className="GalleryImages">
          <img src="https://cdn.kapwing.com/collections/video_image--ksRh0WJQI.jpeg"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cetmYEv9DLBbaEDtMnWhqVSgF9ea-al_Uw&usqp=CAU"/>
          <img src="https://i.imgflip.com/6aejt6.jpg"/>
          <img src="https://preview.redd.it/1eyjsftl4bh81.jpg?auto=webp&s=6f6cc7cc4fbbd9af6bd61ef2685ad8159787e989"/>
          <img src="https://pics.me.me/profile-picture-vs-tagged-photo-35181553.png"/>
          <img src="https://www.meme-arsenal.com/memes/79b9c47e1e429d61d99571a7198da21c.jpg"/>
          <img src="https://pics.me.me/when-someone-with-an-anime-profile-pic-says-they-hate-45710100.png"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPF7yGFuS2tmg0Qo37SBJYEYOjokI5tFw9lg&usqp=CAU"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUiJGO8fkOEVx8_865f7j2ODqLhHVe8ncM-wN2P22iT_YituBYS7_31pnAUdTNseePzj4&usqp=CAU"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSID6um_qUCdyZ57sqfJoBbqJBQTxV4Rc1Glg&usqp=CAU"/>
        </div>
      </section>
    </div>
  );
}

export default TreksPage;
