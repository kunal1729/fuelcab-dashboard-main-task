import { Notifications, PersonSharp, SettingsSharp } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div class="flex h-screen">
      <aside>
        <div class="flex h-screen w-64 flex-grow flex-col overflow-y-auto bg-white pt-5 border-r">
          <div class="flex mt-10 items-center px-4">
            <img
              class="h-12 w-auto max-w-full align-middle rounded-[50%]"
              src="https://picsum.photos/100"
              alt=""
            />
            <div class="flex ml-3 flex-col">
              <h3 class="font-medium">UNO Biomass</h3>
              <p class="text-xs text-gray-500">Farmer</p>
            </div>
          </div>

          <span class="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
            Home
          </span>

          <div class="flex mt-3 flex-1 flex-col">
            <div class="">
              <nav class="flex-1">
                <Link
                  to="rfqs"
                  class="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <svg
                    class="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  RFQs
                </Link>

                <a
                  href="#"
                  class="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <svg
                    class="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      class=""
                    ></path>
                  </svg>
                  Listings
                </a>

                <a
                  href="#"
                  class="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <svg
                    class="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  Orders
                </a>
                <a
                  href="#"
                  class="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <svg
                    class="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Offers
                </a>
              </nav>

              <span class="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
                Settings
              </span>

              <nav class="flex-1">
                <a
                  href="#"
                  class="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <svg
                    class="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Profile
                </a>
              </nav>
            </div>
          </div>
        </div>
      </aside>

      <div class="flex h-full w-full flex-col">
        <header class="relative flex flex-col items-center bg-white px-4 py-4 border-b sm:flex-row md:h-20">
          <div class="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
            <h1 class="text-2xl font-semibold">Heading</h1>

            <ul class="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
              <li class="">
                <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                  <PersonSharp/>
                </button>
              </li>
              <li class="">
                <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                  <Notifications/>
                </button>
              </li>
              <li class="">
                <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                  <SettingsSharp/>
                </button>
              </li>
            </ul>
          </div>
        </header>

        <div class="h-full overflow-hidden">
          <div id="dashboard-main" class="h-[calc(100vh-10rem)] overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
