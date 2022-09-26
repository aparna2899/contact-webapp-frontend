import { Link } from 'react-router-dom';
import data from '../data.json';

export default function Home() {
  return (
    <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ul className="grid grid-cols-1 gap-6 my-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {data.contacts.map((person) => (
          <li
            key={person.firstName}
            className="bg-slate-100/80 col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-md cursor-pointer"
          >
            <Link
              to={{
                pathname: '/contact',
                state: person,
              }}
            >
              <div className="flex flex-1 flex-col p-4">
                <img
                  className="mx-auto h-24 w-24 flex-shrink-0 rounded-full object-cover"
                  src={person.image}
                  alt=""
                />
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  {`${person.firstName} ${person.lastName}`}
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
