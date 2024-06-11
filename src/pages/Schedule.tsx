import { Card } from "@/components/ui/card";
import { useEffect, useMemo, useState } from "react";
import { ring2 } from "ldrs";
import { Button } from "@/components/ui/button";
import Navbar2 from "@/pagecomponents/shared/Navbar2";
// import Sheets from "@/assets/Google_Sheets_2020_Logo.svg"
ring2.register();

function getTodaysDate(): string {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1; // Months are zero indexed
  const day: number = today.getDate();
  const formattedDate: string = `${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}/${year}`;
  return formattedDate;
}

interface UserData {
  TIMESTAMP: string;
  TIME: string;
  EVENT: string;
  ONE: string;
  TWO: string;
  THREE: string;
  FOUR: string;
  FIVE: string;
  SIX: string;
  SEVEN: string;
  EIGHT: string;
  NINE: string;
  TEN: string;
  ELEVEN: string;
  TWELVE: string;
  THIRTEEN: string;
  FOURTEEN: string;
  FIFTEEN: string;
  SIXTEEN: string;
  SEVENTEEN: string;
  EIGHTEEN: string;
  NINETEEN: string;
  TWENTY: string;
  TWENTYONE: string;
  TWENTYTWO: string;
  TWENTYTHREE: string;
  TWENTYFOUR: string;
  TWENTYFIVE: string;
  TWENTYSIX: string;
  TWENTYSEVEN: string;
  TWENTYEIGHT: string;
  TWENTYNINE: string;
  THIRTY: string;
  THIRTYONE: string;
  THIRTYTWO: string;
  THIRTYTHREE: string;
  THIRTYFOUR: string;
  THIRTYFIVE: string;
  THIRTYSIX: string;
  THIRTYSEVEN: string;
  THIRTYEIGHT: string;
  THIRTYNINE: string;
  FORTY: string;
  FORTYONE: string;
  FORTYTWO: string;
  FORTYTHREE: string;
  FORTYFOUR: string;
  FORTYFIVE: string;
  FORTYSIX: string;
  FORTYSEVEN: string;
  FORTYEIGHT: string;
  FORTYNINE: string;
  FIFTY: string;
  FIFTYONE: string;
  FIFTYTWO: string;
  FIFTYTHREE: string;
  FIFTYFOUR: string;
  FIFTYFIVE: string;
  FIFTYSIX: string;
  FIFTYSEVEN: string;
  FIFTYEIGHT: string;
  FIFTYNINE: string;
  SIXTY: string;
  SIXTYONE: string;
  SIXTYTWO: string;
  SIXTYTHREE: string;
  SIXTYFOUR: string;
  SIXTYFIVE: string;
  SIXTYSIX: string;
  SIXTYSEVEN: string;
  SIXTYEIGHT: string;
  SIXTYNINE: string;
  SEVENTY: string;
  SEVENTYONE: string;
  SEVENTYTWO: string;
  SEVENTYTHREE: string;
  SEVENTYFOUR: string;
  SEVENTYFIVE: string;
  SEVENTYSIX: string;
  SEVENTYSEVEN: string;
  SEVENTYEIGHT: string;
  SEVENTYNINE: string;
  EIGHTY: string;
  EIGHTYONE: string;
  EIGHTYTWO: string;
  EIGHTYTHREE: string;
  EIGHTYFOUR: string;
  EIGHTYFIVE: string;
  EIGHTYSIX: string;
  EIGHTYSEVEN: string;
  EIGHTYEIGHT: string;
  EIGHTYNINE: string;
  NINETY: string;
  NINETYONE: string;
  NINETYTWO: string;
  NINETYTHREE: string;
  NINETYFOUR: string;
  NINETYFIVE: string;
  NINETYSIX: string;
}

const Schedule = () => {

  useEffect(() => {
    document.title = "Schedule | williamouyang.org"
  }, []);

  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=_zhstUaNFBsM91NwW-ftExAiDmxVALwvD34-xZhDCBUHJr-WPokvKRRy_KtVhn8Ua2BNsXpLBVu2azrLs2jBLC1XPDWoZTQDm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnImmGR4A1-ZB1BerYHFZodwq_Y5PXLthbfAAA4ctU3Oz3O7cHOdhT7KarRKMlEoUT1ld2mZbrgwbjQGsoLXi0ah-t3vIGzZq5Q&lib=MKUgBByiu_EfeJEGrj4-xHztxprFv1kLI"
    )
      .then((response) => response.json())
      .then((jsonData) => {
        const dataArray = jsonData.data || [];
        setData(dataArray);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const todayDate: string = useMemo(() => getTodaysDate(), []);

  const [time, setTime] = useState<Date>(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div>
      <Navbar2 />
      <Card style={{ padding: "20px", marginRight:'20px', marginLeft:'10px', marginBottom:'10px',marginTop: "100px" }}>
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <l-ring-2
              size="40"
              stroke="5"
              stroke-length="0.25"
              bg-opacity="0.1"
              speed="0.8"
              color="red"
            ></l-ring-2>
          </div>
        )}

        {data.map((item) => (
          <h2 className="text-1xl lg:text-2x1 2xl:text-2x1 font-semibold ml-5  ">
            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <div
                style={{
                  display: "flex",
                  width: "70%",
                  justifyContent: "flex-end",
                }}
              >
                {item.TIMESTAMP === todayDate ? item.TIMESTAMP : "OUT OF SYNC"}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "50%",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  className="w-[55px]"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/spreadsheets/d/1y7ivUPhttbJd-5PdHbeIox1liFLQkd-H4UmUqHtnGk8/edit?usp=sharing"
                    )
                  }
                >
                  Update
                </Button>
              </div>
            </div>

            <br />
            <table className="border-collapse border border-slate-500 w-full table-auto">
              <thead>
                <tr>
                  <th className="border border-foreground w-1/3 2xl:w-1/7 xl:w-1/6 md:w-1/4 sm:w-1/3">
                    {item.TIME}
                  </th>
                  <th className="border border-foreground w-full">
                    {item.EVENT}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 0 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.ONE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 0 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.TWO}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 0 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.THREE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 0 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FOUR}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 1 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FIVE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 1 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SIX}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 1 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SEVEN}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 1 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.EIGHT}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 2 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.NINE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 2 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.TEN}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 2 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.ELEVEN}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 2 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.TWELVE}{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 3 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.THIRTEEN}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 3 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FOURTEEN}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 3 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FIFTEEN}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 3 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SIXTEEN}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 4 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SEVENTEEN}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 4 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.EIGHTEEN}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 4 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.NINETEEN}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 4 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.TWENTY}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 5 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.TWENTYONE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 5 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.TWENTYTWO}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 5 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.TWENTYTHREE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 5 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.TWENTYFOUR}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 6 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.TWENTYFIVE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 6 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.TWENTYSIX}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 6 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.TWENTYSEVEN}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 6 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.TWENTYEIGHT}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 7 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.TWENTYNINE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 7 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.THIRTY}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 7 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.THIRTYONE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 7 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.THIRTYTWO}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 8 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.THIRTYTHREE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 8 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.THIRTYFOUR}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 8 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.THIRTYFIVE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 8 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.THIRTYSIX}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 9 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.THIRTYSEVEN}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 9 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.THIRTYEIGHT}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 9 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.THIRTYNINE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 9 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.FORTY}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 10 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FORTYONE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 10 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FORTYTWO}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 10 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FORTYTHREE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 10 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.FORTYFOUR}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 11 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FORTYFIVE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 11 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FORTYSIX}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 11 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FORTYSEVEN}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 11 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.FORTYEIGHT}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 12 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FORTYNINE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 12 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FIFTY}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 12 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FIFTYONE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 12 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.FIFTYTWO}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 13 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FIFTYTHREE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 13 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FIFTYFOUR}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 13 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FIFTYFIVE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 13 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.FIFTYSIX}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 14 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FIFTYSEVEN}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 14 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FIFTYEIGHT}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 14 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.FIFTYNINE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 14 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SIXTY}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 15 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SIXTYONE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 15 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SIXTYTWO}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 15 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SIXTYTHREE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 15 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SIXTYFOUR}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 16 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SIXTYFIVE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 16 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SIXTYSIX}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 16 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SIXTYSEVEN}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 16 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.SIXTYEIGHT}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 17 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SIXTYNINE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 17 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SEVENTY}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 17 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SEVENTYONE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 17 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.SEVENTYTWO}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 18 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SEVENTYTHREE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 18 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SEVENTYFOUR}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 18 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SEVENTYFIVE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 18 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.SEVENTYSIX}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 19 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SEVENTYSEVEN}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 19 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SEVENTYEIGHT}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 19 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.SEVENTYNINE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 19 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.EIGHTY}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 20 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.EIGHTYONE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 20 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.EIGHTYTWO}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 20 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.EIGHTYTHREE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 20 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.EIGHTYFOUR}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 21 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.EIGHTYFIVE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 21 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.EIGHTYSIX}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 21 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.EIGHTYSEVEN}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 21 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.EIGHTYEIGHT}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 22 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.EIGHTYNINE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 22 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.NINETY}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 22 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.NINETYONE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 22 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.NINETYTWO}
                  </td>
                </tr>
                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 23 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.NINETYTHREE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 23 && minutes <= 29 && seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.NINETYFOUR}
                  </td>
                </tr>

                <tr>
                  <td
                    className={`border border-foreground ${
                      hours === 23 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {item.NINETYFIVE}
                  </td>
                  <td
                    className={`border border-foreground ${
                      hours === 23 &&
                      minutes >= 30 &&
                      minutes <= 59 &&
                      seconds <= 59
                        ? "bg-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {item.NINETYSIX}
                  </td>
                </tr>
              </tbody>
            </table>
          </h2>
        ))}
      </Card>
    </div>
  );
};

export default Schedule;
