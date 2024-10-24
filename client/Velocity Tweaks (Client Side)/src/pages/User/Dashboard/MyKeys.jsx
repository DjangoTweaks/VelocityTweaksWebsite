import React, { useEffect, useState } from "react";
import { MdKey } from "react-icons/md";
import KeysMap from "./KeysMap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function MyKeys() {
  const [loadingState, setLoadingState] = useState(false);
  const [keysState, setKeysState] = useState([]);
  const [ranState, setranState] = useState(false);

  useEffect(() => {
    let ignore = false;
    const fetchKeys = async () => {
      setLoadingState(true);
      const response = await axios.get(import.meta.env.VITE_domainName + "/auth/check-auth", {
        withCredentials: true,
      });

      if (!ignore) {
        setKeysState(response.data.orders);
        setLoadingState(false);
        setranState(true);
      }
    };

    fetchKeys();

    return () => {
      ignore = true;
    };
  }, []);

  if (loadingState) {
    return (
      <div className="text-white flex justify-center mt-12">
        Loading Keys...
      </div>
    );
  }

  const y = 0;



  const allLicenseKeyValues = keysState.flatMap((item) =>
    item.licenseKeys.map((key) => {
      return {
        productName: key.productName,
        licenseKey: key.licenseKey,
      };
    })
  );

  const keyList = [
    {
      id: 1,
      name: "Velocity Tweaks Basic Tweaking Utility",
      code: "PREMIUM-oCQj18-QTnryq-hdZUob-CPPk0h",
    },
    {
      id: 2,
      name: "Velocity Tweaks Advanced Tweaking Utility",
      code: "PREMIUM-sDkq92-XBtiwe-klTYoz-LKPm3z",
    },
  ];

  return (
    <div>
      <div className="border-b-2 pb-4 border-gray-600">
        <div className="flex items-center pl-4 pt-4 gap-x-2 text-2xl ">
          <MdKey size={30} />
          My Keys
        </div>
        <div className="pl-4 mt-1 text-gray-400 text-sm">
          This page allows you to view the keys for the premium and basic
          versions of the utility you have purchased.
        </div>
      </div>

      <div className="pl-4 pt-4 font-Inter font-semibold text-xl">Keys</div>

      <div className="bg-[#292929] rounded-md drop-shadow-2xl bg-opacity-50 mx-4  mt-4 p-3">
        <div>
          {keyList.length !== 0 ? (
            <table className="w-full">
              <thead className="border-b-[1px]  border-gray-400 h-[30px] border-opacity-50">
                <tr className="font-Inter text-lg">
                  <th className="font-normal">Utility</th>
                  <th className="font-normal text-center">Key</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {allLicenseKeyValues.map((allLicenseKeyValues, index) => (
                  <KeysMap
                    key={index}
                    utilityName={allLicenseKeyValues.productName}
                    Key={allLicenseKeyValues.licenseKey}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <div>
              <div className="w-full py-5">
                <h1 className="font-Inter font-semibold text-2xl text-center pt-3">
                  You haven't purchased any keys yet
                </h1>
                <div className="flex justify-center mt-8 ">
                  {" "}
                  <Link to="/store">
                    {" "}
                    <button className="p-3 w-48 text-xl bg-white hover:bg-gray-300 rounded-lg hover:duration-150 hover:transition hover:ease-in-out text-black font-Inter font-bold ">
                      Browse Utilities{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
