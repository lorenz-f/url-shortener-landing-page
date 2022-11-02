import React, { useState, useEffect } from "react";

function LinkForm() {
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    {
      /* api handler */
    }

    if (submit) {
      async function apiCall() {
        console.log(input);
        const res = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${input}`
        );
        const data = await res.json();

        {
          /* setting both returning link results to our generated link */
        }

        setList((x) => [
          ...x,
          <Link
            shortLink={data.result.short_link}
            originalLink={data.result.original_link}
          />,
        ]);
        setSubmit(false);
      }
      apiCall();
    }
  }, [submit]);

  function LinkValidator(url) {
    {
      /* regex pattern checking attributes required for a valid address */
    }
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!urlPattern.test(url);
  }

{/* event handlers below that determine much of the site's function such as dynamic input, input submission and integrating satisfied API calls into the app */}

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input || !LinkValidator(input)) {
      setError(true);
      setInput("");
      return;
    } else {
      setError(false);
      setSubmit(true);
    }
  }

  function Link({ originalLink, shortLink }) {
    const [text, setText] = useState("Copy");
    const [visited, setVisited] = useState(false);
    const [hover, setHover] = useState(false);

    {/* copy handler when the copy-to button is selected and activated*/}

    function handleCopy(e) {
      const element = document.createElement("textarea");
      element.value = e;
      document.body.appendChild(element);
      element.select();
      document.execCommand("copy");
      document.body.removeChild(element);
      setText("Copied!");
      setVisited(true);
    }

    return (
      <div className="flex flex-row w-[77.1%] h-20 bg-white text-xl pl-6 relative mx-[auto] my-4 items-center">
        <div className="text-black w-[50%] pl-4">{originalLink}</div>
        <div className="absolute right-24 text-[#2BD0D0] w-[18%]">
          {shortLink}
        </div>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleCopy}
          className="absolute right-6 h-[55.5%] w-[9.27%] text-white text-md font-bold rounded-lg border-0"
          style={{
            backgroundColor: visited
              ? "#3A3054"
              : hover
              ? "#9AE3E3"
              : "#2BD0D0",
          }}
        >
          {text}
        </button>
      </div>
    );
  }

  return (
    <>
      <form
        className="bg-[url('/bg-shorten-desktop.svg')] bg-[#3A3054] flex flex-row w-[77.1vw] h-[15.5vh] rounded-md mt-24 mx-[auto] items-center p-16"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row">
          <input
            type="text"
            value={input}
            className={`rounded-md w-[60vw] h-16 text-xl pl-6 placeholder:text-xl focus:outline-0 ${
              error
                ? "border-4 border-[#F46363] placeholder:text-[#F46363]"
                : ""
            }`}
            placeholder="Shorten a link here..."
            onChange={handleChange}
          />
          {error ? (
            <h2 className="absolute text-base text-[#F46363] italic pt-[3.8%]">
              Please add a valid link
            </h2>
          ) : (
            ""
          )}
          {/* original challenge forwent "valid" in the error text however i'm adding it here for semantic/UX value */}
        </div>
        <button
          className="w-48 h-16 text-xl bg-[#2BD0D0] rounded-lg text-[#ffffff] font-bold ml-8 hover:bg-[#9AE3E3]"
          type="submit"
        >
          Shorten It!
        </button>
      </form>

      {/* generated link results */}

      {list}
    </>
  );
}

export default LinkForm;
