import { BsStars } from "react-icons/bs";
import { BsClipboard } from "react-icons/bs";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiTranslateAi } from "react-icons/ri";
import RightSideBuderIcon from "./Components/RightSideBuderIcon";

const App = () => {
  const languages = [
    { code: "ur", label: "Urdu" },
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic" },
    { code: "hi", label: "Hindi" },
    { code: "es", label: "Spanish" },
    { code: "fr", label: "French" },
    { code: "de", label: "German" },
  ];

  const [lang, setLang] = useState<string>("ur");
  const [SelectText, setSelectText] = useState<string>("");

  useEffect(() => {
    console.log(lang);
  }, [lang]);

  const hanlePasteCopiedText = () => {
    if (navigator.clipboard) {
      navigator.clipboard.readText().then((text) => {
        if (!text) return alert("Nothing For Paste");
        setSelectText(text);
      });
    }
  };

  return (
    <div className="w-full text-white min-h-screen flex  items-center flex-col">
      <nav
        style={{ borderRadius: "75px 75px 5px 5px" }}
        className="w-full relative flex justify-around items-center py-4 px-3 bg-[#3750FF]"
      >
        <RightSideBuderIcon />
        <h1 className="md:text-3xl text-xl font-bold">Text Translator</h1>
        <span className="h-12 w-12 absolute right-2 sm:right-[10%] flex justify-center items-center rounded-full bg-amber-100">
          <RiTranslateAi size={26} color="#3750FF" />
        </span>
      </nav>
      <div className="theTextToBetranslate bg-[#F4F7FF] text-gray-700 w-full flex flex-col items-center sm:px-10 px-5 py-5">
        <div className="LanguagesAndCrossIcon  flex justify-around items-center w-full ">
          {/* <select
            className="outline-none cursor-pointer"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            {languages.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select> */}
          <div className="flex items-center gap-2">
            <BsStars />
            <h1>
              Auto Detect{" "}
              <span className="text-sm text-[#3750FF] ">Language</span>
            </h1>
          </div>

          <div className="flex gap-5 cursor-pointer">
            <RxCross2
              title="Clear Text"
              onClick={() => setSelectText("")}
              size={24}
              color="#3750FF"
            />
            <BsClipboard
              onClick={() => hanlePasteCopiedText()}
              title="Paste The Copied Text"
              size={24}
              color="#3750FF"
            />
          </div>
        </div>
        <textarea
          autoFocus
          value={SelectText}
          onChange={(e) => setSelectText(e.target.value)}
          id=""
          className="w-full bg-gray-300 p-3 h-56 my-3 resize-none rounded-3xl outline-gray-700"
        ></textarea>
      </div>

      <div className="LanguagesAndCrossIcon my-5 text-black flex justify-around items-center w-full ">
        <select
          className="outline-none cursor-pointer"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          {languages.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>

          <button>Translate</button>
          <BsClipboard
            onClick={() => hanlePasteCopiedText()}
            title="Paste The Copied Text"
            size={24}
            color="#3750FF"
          />
      </div>
    </div>
  );
};

export default App;
