import { EnvelopeIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

export default function Example(props) {
  let person = props.location.state;

  return (
    <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-200/40 bg-white px-4 py-5 mt-14 rounded-md sm:px-6">
        <div className="-ml-4 -mt-4  sm:flex-nowrap">
          <div className="ml-14 my-8">
            <div className="">
              <div className="mb-8">
                <img
                  className="h-28 w-28 rounded-full object-cover"
                  src={person.image}
                  alt=""
                />
              </div>
              <div className="">
                <div className="overflow-hidden bg-white px-4 py-4 mb-6  shadow sm:rounded-md sm:px-6">
                  <span className="text-sm text-gray-500 mb-6">Name</span>
                  <h2 className="text-xl font-bold leading-6 text-gray-900">
                    {`${person.firstName} ${person.lastName}`}
                  </h2>
                </div>
                <div className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <span className="text-sm text-gray-500 mb-6">
                    Contact No.
                  </span>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    {person.phone}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-14 mt-4 flex flex-shrink-0">
            <button
              type="button"
              className="relative  inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <EnvelopeIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <Link
                to={{
                  pathname: '/message',
                  state: person,
                }}
              >
                Send Message
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
