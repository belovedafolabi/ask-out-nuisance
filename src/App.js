import { useState } from "react";
import useSound from 'use-sound';
import oou from './assets/sound/Mannywellz-Ouu-Ahh.mp3';
import img1 from './assets/img/img1.gif';
import img2 from './assets/img/img2.gif';

export default function App() {
  const [play] = useSound(
    oou,
    { volume: 0.25,
    interrupt: true }
    );
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleYesClick = () => {
    play(); // Play the sound when the "Yes" button is clicked
    setYesPressed(true);
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "👀 No",
      "🤔 Are you sure?",
      "🧐 Fish, are you sure?",
      "😤 Think again!",
      "🥲 Coconut head, Have a heart!",
      "🤪 Don't be so cold!",
      "🤪 Is that your final answer?",
      "😿 You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? ( 
        <>
        <img src={img2} alt="Valentine Love 2" />
        <div className="text-4xl font-bold my-4 text-red-800 text-center px-10">Didi💞💝, you're officially the baby girl of the year 🫂💞🫂❤️!!!</div>
        </>
      ) : (
        <>
          <img className="h-[400px]" src={img1} alt="Valentine Love 1" />
          <h1 className="text-4xl my-4 text-red-800 text-center px-10">Baby girl❤️💘, will you be my Valentine?</h1>
          <div className="justify-center text-center">
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold mt-4 py-2 px-4 rounded"
            >
              {noCount === 0 ? "👀 No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}