import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MessageDetail() {
  const [allMsg, setAllMsg] = useState([]);
  useEffect(() => {
    const getMsgs = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_BASE_USER_URL);
        setAllMsg(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMsgs();
  }, []);
  allMsg.sort(function (a, b) {
    return a.createdAt > b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0;
  });
  return (
    <div className=" mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mt-12 overflow-hidden sm:rounded-md">
        <ul>
          {allMsg.map((item) => (
            <li
              key={item._id}
              className="mb-8 overflow-hidden bg-gray-100 px-4 py-4 mb-6  shadow sm:rounded-md sm:px-6"
            >
              <div className="flex items-center px-4 sm:px-6">
                <div className="flex min-w-0 flex-1 items-center">
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-3 md:gap-4">
                    <div>
                      <h3 className="truncate text-lg font-medium text-indigo-600 ">
                        {item.contact}
                      </h3>
                    </div>
                    <div className="justify-self-center">
                      <div>
                        <p className="mt-2 text-sm text-gray-900 font-bold">
                          OTP : {item.message.slice(16)}
                        </p>
                      </div>
                    </div>
                    <div className="justify-self-end">
                      <p className="flex items-center text-sm text-gray-500">
                        <time>{item.createdAt.substring(0, 10)}</time>
                      </p>
                      <p className="flex items-center text-sm text-gray-500">
                        <time>{item.createdAt.substring(11, 19)}</time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
