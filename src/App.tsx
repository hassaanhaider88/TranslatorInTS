import { BsStars } from "react-icons/bs";
import { BsClipboard } from "react-icons/bs";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiTranslateAi } from "react-icons/ri";
import RightSideBuderIcon from "./Components/RightSideBuderIcon";
import { toast } from "alert";

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
  const [TranslatedText, setTranslatedText] = useState("");
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(lang);
  }, [lang]);

  const hanlePasteCopiedText = () => {
    if (navigator.clipboard) {
      navigator.clipboard.readText().then((text) => {
        if (!text) return toast("Nothing For Paste");
        setSelectText(text);
      });
    }
  };
  const hanleCopiedText = () => {
    if (!TranslatedText) return toast("Nothing To Copy");

    if (navigator.clipboard) {
      navigator.clipboard.writeText(TranslatedText);
      toast("Copied");
    }
  };

  const hanleTranslateClick = async () => {
    if (Loading) return toast("Please wait..");
    if (SelectText == "") {
      return toast("Please Enter Text To Translate");
    } else {
      setLoading(true);
      const Res = await fetch(
        `https://hmk-codeweb-downloads.onrender.com/tranlate?textToTranslate=${SelectText}&Lang=${lang}`
      );
      const data = await Res.json();
      if (data.success) {
        console.log(data);
        setTranslatedText(data.data);
        setLoading(false);
      } else {
        toast("Error in Translating Text");
        setLoading(false);
      }
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
          className="w-full bg-gray-300 p-3 h-46 my-3 resize-none rounded-3xl outline-gray-700"
        ></textarea>
      </div>

      <div className="LanguagesAndCrossIcon mt-2 text-black flex justify-around items-center w-full ">
        <div className="flex gap-4">
          <span className="text-md font-semibold">Translte To</span>
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
        </div>

        <button
          onClick={hanleTranslateClick}
          className={`${
            Loading ? "cursor-not-allowed" : "cursor-pointer"
          } relative active:scale-95 duration-300 transition-all text-[13px] rounded-2xl border-0 p-1 bg-[radial-gradient(circle_80px_at_80%_-10%,#ffffff,#181b1b)]`}
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              content: '""',
              position: "absolute",
              width: "65%",
              height: "60%",
              borderRadius: "120px",
              top: 0,
              right: 0,
              boxShadow: "0 0 20px #ffffff38",
              zIndex: -1,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "70px",
              height: "100%",
              borderRadius: "16px",
              bottom: 0,
              left: 0,
              background:
                "radial-gradient(circle 60px at 0% 100%, #3fe9ff, #0000ff80, transparent)",
              boxShadow: "-10px 10px 30px #0051ff2d",
            }}
          />
          <div className="relative font-semibold px-6 py-3.5 rounded-[14px] text-white z-10 bg-[radial-gradient(circle_80px_at_80%_-50%,#3750FF,#0f1111)]">
            <span
              style={{
                content: '""',
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                borderRadius: "14px",
                background:
                  "radial-gradient(circle 60px at 0% 100%, #00e1ff1a, #0000ff11, transparent)",
                zIndex: 0,
              }}
            />
            {Loading ? "Translating..." : "Translate"}
          </div>
        </button>

        <BsClipboard
          className="cursor-pointer"
          onClick={() => hanleCopiedText()}
          title="Paste The Copied Text"
          size={24}
          color="#3750FF"
        />
      </div>
      <div className="px-5 w-full md:px-10">
        <textarea
          readOnly
          value={TranslatedText}
          className="w-full science-gothicURDU text-black font-semibold bg-gray-300 p-3 outline-none h-30 my-3 resize-none rounded-3xl"
        ></textarea>
      </div>
    </div>
  );
};

export default App;
