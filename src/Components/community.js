import React, { useState } from "react";
import "../Components/Community.css";
import Communityimg from "../Components/Images/communityimg.jpg";

function Community() {
  const Text = [
    {
      id: 0,
      value:
        "My fav flavor here! Each scoop is PACKED full of roasted crunchy almonds mixed within, love how rich & creamy each lick of the scoops is! Super nutty & perfect sweetness! Absolutely love the crunchy wholemeal cone too, addictively good!"
    },

    {
      id: 1,
      value:
        "This has all the unique flavours in town in one dreamy creamy base. Don't mind more matcha fudge chunks! They complement the sweetness perfectly. Definitely a favourite, even my sister's hooked :)                                        "
    },
    {
      id: 2,
      value:
        "Such a great blend of local flavours! It reminds me of ondeh ondeh, which is my absolute favourite dessert. To have it in ice cream form is wonderful! The texture is super creamy and coconutty."
    }
  ];
  const Heading = [
    { id: 0, value: "Priscilla On Almond Brittle Fudge" },
    { id: 1, value: "Shreya On Blue Planet" },
    { id: 2, value: "LeeLee On Pandan Gula Melaka" }
  ];

  const [wordData, setWordData] = useState(Text[0].value);
  const [TextData, setWordData1] = useState(Heading[0].value);
  const handleClick = (index) => {
    const wordslider = Text[index].value;
    const wordslider1 = Heading[index].value;
    setWordData(wordslider);
    setWordData1(wordslider1);
  };

  return (
    <div className="total-div">
      <div className="Community-text">
        <div className="Cmain-text">
          <h1>LOVE FROM OUR COMMUNITY</h1>
          <h3>"{TextData}"</h3>
          <p>"{wordData}"</p>
          <div className="Community-flex ">
            {Text.map((data, i) => (
              <h5 key={i} onClick={() => handleClick(i)}>
                <i class="fa-regular fa-circle-dot"></i>
              </h5>
            ))}
          </div>
        </div>
        <div>
          <div className="Cimg">
            <img alt=" communityimage" src={Communityimg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
