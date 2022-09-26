import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

export default function Message(props) {
  const person = props.location.state;
  const phone = person.phone;
  const testPhone = '+15005550006';
  const twilioPhone = '+14058776176';
  let contactName = `${person.firstName} ${person.lastName}`;
  const [msg, setMsg] = useState(
    `Hi! Your OTP is ${Math.floor(100000 + Math.random() * 900000)}`
  );
  const [sentMsg, setSentMsg] = useState(msg);
  const [allMsg, setAllMsg] = useState([]);

  useEffect(() => {
    const getMsgs = async () => {
      try {
        const res = await axios.get(
          `https://contact-otp-app-backend.herokuapp.com/users/${contactName}`
        );
        setAllMsg(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMsgs();
  }, [contactName]);

  const handleMessage = (event) => {
    event.preventDefault();
    setSentMsg(msg);

    setMsg(`Hi! Your OTP is ${Math.floor(100000 + Math.random() * 900000)}`);
    const sendMsg = async () => {
      try {
        axios({
          method: 'POST',
          url: process.env.REACT_APP_BASE_USER_URL,
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            message: {
              message: sentMsg,
              contact: contactName,
            },
          }),
        });
      } catch (error) {
        console.log(error);
      }
    };

    sendMsg();

    const sendOTP = async () => {
      try {
        axios({
          method: 'POST',
          url: process.env.REACT_APP_BASE_MESSAGE_URL,
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            message: {
              body: sentMsg,
              from: testPhone,
              to: phone,
            },
          }),
        });
      } catch (error) {
        console.log(error);
      }
    };

    sendOTP();
  };

  return (
    <div className=" mx-auto max-w-7xl mt-14  sm:px-6 lg:px-8">
      <div className="mx-auto w-3/4  border border-gray-200 bg-white">
        <div className="bg-indigo-600  flex flex-wrap items-center  justify-between sm:flex-nowrap">
          <div className="ml-4 mt-4 mb-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={person.image}
                  alt=""
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg text-white font-medium leading-6">
                  {contactName}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 relative flex flex-col ">
          <ul className="overflow-y-auto flex flex-col">
            {allMsg.map((msgDetail) => (
              <li key={msgDetail._id}>
                <time className="ml-4 text-sm text-gray-500">
                  {msgDetail.createdAt.substring(0, 10)}{' '}
                  {msgDetail.createdAt.substring(11, 19)}
                </time>
                <p className="w-1/4 bg-gray-800 text-white p-4 rounded mb-4 ml-4">
                  {msgDetail.message}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-24">
            <div
              className={
                sentMsg
                  ? 'bg-indigo-600  text-white p-4 rounded absolute right-4 bottom-16 '
                  : 'hidden'
              }
            >
              {sentMsg}
            </div>
            <input
              type="text"
              name="name"
              id="name"
              value={msg}
              required
              className=" peer border border-slate-400 absolute bottom-0 right-0 left-0 text-gray-500"
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        className=" mx-auto flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 mt-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={(e) => handleMessage(e)}
      >
        <EnvelopeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        Send Message
      </button>
    </div>
  );
}
