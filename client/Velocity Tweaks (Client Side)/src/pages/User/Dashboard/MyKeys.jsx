import React, { useEffect, useState } from "react";
import { MdKey } from "react-icons/md";
import KeysMap from "./KeysMap";
import { Link } from "react-router-dom";
import axios from "axios";
import { domainName } from "../../../utils/domainName";

export default function MyKeys() {
  const [loadingState, setLoadingState] = useState(false);
  const [keysState, setKeysState] = useState([]);

  useEffect(() => {
    let ignore = false;
    const fetchKeys = async () => {
      setLoadingState(true);
      const response = await axios.get(domainName + "/auth/check-auth", {
        withCredentials: true,
      });

      if (!ignore) {
        console.log(response.data.orders);
        setLoadingState(false);
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

  const keyList1 = [
    {
      _id: "66e0685b424027b22106dd12",
      userId: "104054186874527965373",
      checkoutSessionId:
        "cs_test_a1VIjqZo56T0fQlNPk8e2ekKgQdzeFRMOk8hg2fviUcNGgyET8mCJb0Ubt",
      amount: 2499,
      currency: "usd",
      status: "paid",
      paymentIntentId: "pi_3PxWAnCUgsBmQhDa0B4ouvcC",
      customerEmail: "asd@gmail.com",
      customerName: "aaditya dawkar",
      paymentMethodTypes: ["card"],
      purchasedAt: "2024-09-10T15:40:11.669Z",
      purchasedProducts: [
        {
          productId: "price_1PqEf5CUgsBmQhDaSN8IIsOx",
          productName: "Premium utility",
          _id: "66e0685b424027b22106dd13",
        },
      ],
      licenseKeys: [
        {
          productName: "Premium utility",
          licenseKey: "ADVANCED-0KLW-YQO85-O1EL-NZ1A",
          _id: "66e0685b424027b22106dd14",
        },
      ],
      __v: 0,
    },
    {
      _id: "66ff0419c147ff3b5befc3dd",
      userId: "104054186874527965373",
      checkoutSessionId:
        "cs_test_a1VIjqZo56T0fQlNPk8e2ekKgQdzeFRMOk8hg2fviUcNGgyET8mCJb0Ubt",
      amount: 3599,
      currency: "usd",
      status: "unpaid",
      paymentIntentId: "pi_3PxWAnCUgsBmQhDa0B4ouvcC",
      customerEmail: "asd@gmail.com",
      customerName: "aaditya dawkar",
      paymentMethodTypes: ["card"],
      purchasedAt: "2024-09-10T15:40:11.669Z",
      purchasedProducts: [
        {
          productId: "price_1PqEf5CUgsBmQhDaSN8IIsOx",
          productName: "Premium utility",
          _id: "66e0685b424027b22106dd13",
        },
      ],
      licenseKeys: [
        {
          productName: "Premium utility",
          licenseKey: "ADVANCED-0KLW-YQO85-O1EL-NZ1A",
          _id: "66e0685b424027b22106dd14",
        },
      ],
      __v: 0,
    },
  ];

  const allLicenseKeyValues = keyList1.flatMap((item) =>
    item.licenseKeys.map((key) => {
      return {
        productName: key.productName,
        licenseKey: key.licenseKey,
      };
    })
  );
  console.log(allLicenseKeyValues);

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
