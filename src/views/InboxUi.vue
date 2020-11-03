<template>
  <div class="h-screen flex flex-col">
    <header class="flex flex-shrink-0">
      <div class="w-64 flex-shrink-0 px-4 py-3 bg-gray-800">
        <button class="block w-full flex items-center">
          <img
            class="h-8 w-8 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
            alt="profile"
          />
          <span class="ml-4 mr-2 text-sm font-medium text-white"
            >Monica White</span
          >
          <svg
            class="ml-auto w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-between px-6 bg-gray-700">
        <nav class="flex">
          <a
            href="#"
            class="inline-block px-3 py-2 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white"
            >Mailbox</a
          >
          <a
            href="#"
            class="ml-2 inline-block px-3 py-2 rounded-lg leading-none text-sm font-medium text-white hover:bg-gray-600"
            >Customers</a
          >
          <a
            href="#"
            class="ml-2 inline-block px-3 py-2 rounded-lg leading-none text-sm font-medium text-white hover:bg-gray-600"
            >Reporting</a
          >
          <a
            href="#"
            class="ml-2 inline-block px-3 py-2 rounded-lg leading-none text-sm font-medium text-white hover:bg-gray-600"
            >Manage</a
          >
        </nav>
        <div class="flex items-center">
          <div class="relative w-64">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                class="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>
            <input
              class="block pl-10 pr-4 py-2 w-full bg-gray-900 rounded-lg text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"
              placeholder="Search"
            />
          </div>
          <button class="ml-5 text-gray-400 hover:text-gray-200">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
          <button class="ml-4 text-gray-400 hover:text-gray-200">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
    <div class="flex-1 flex overflow-hidden">
      <div class="w-64 p-6 bg-gray-100 overflow-y-auto">
        <nav>
          <h2
            class="text-xs font-semibold text-gray-600 uppercase tracking-wide"
          >
            Mailboxes
          </h2>
          <div class="mt-3">
            <a
              href="#"
              class="-mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg
                  class="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  ></path>
                </svg>
                <span class="ml-2 text-gray-900">Inbox</span>
              </span>
              <span
                class="inline-block w-10 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full"
                >6</span
              >
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg
                  class="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  ></path>
                </svg>
                <span class="ml-2 text-gray-700">Flagged</span>
              </span>
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg
                  class="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
                <span class="ml-2 text-gray-700">Drafts</span>
              </span>
              <span
                class="inline-block w-10 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full"
                >2</span
              >
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg
                  class="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span class="ml-2 text-gray-700">Assigned</span>
              </span>
              <span
                class="inline-block w-10 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full"
                >1</span
              >
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg
                  class="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span class="ml-2 text-gray-700">Closed</span>
              </span>
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg
                  class="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
                <span class="ml-2 text-gray-700">Junk</span>
              </span>
            </a>
          </div>
          <h2
            class="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide"
          >
            Folders
          </h2>
          <div class="mt-4">
            <a href="#" class="block text-sm font-medium text-gray-700"
              >Refunds</a
            >
            <a href="#" class="mt-4 block text-sm font-medium text-gray-700"
              >Discounts</a
            >
            <a href="#" class="mt-4 block text-sm font-medium text-gray-700"
              >Bugs</a
            >
          </div>
        </nav>
      </div>
      <main class="flex-1 flex bg-gray-200">
        <div
          class="relative flex flex-col w-full max-w-xs flex-grow border-l border-r bg-gray-200"
        >
          <div
            class="flex-shrink-0 px-4 py-2 flex items-center justify-between border-b"
          >
            <button
              class="flex items-center text-xs font-semibold text-gray-600"
            >
              Sorted by Date
              <svg
                class="ml-1 w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <button>
              <svg
                class="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex-1 overflow-y-auto">
            <a href="#" class="block px-6 pt-3 pb-4 bg-white">
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-gray-900"
                  >Gloria Roberston</span
                >
                <span class="text-sm text-gray-600">2 days ago</span>
              </div>
              <p class="text-sm text-gray-900">Refund</p>
              <p class="mt-2 text-sm text-gray-600">
                Lorem ipsum, dolor sit amet elit qui atque nemo blanditiis!
                Dignissimos.
              </p>
            </a>
            <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-gray-900"
                  >Gloria Roberston</span
                >
                <span class="text-sm text-gray-600">2 days ago</span>
              </div>
              <p class="text-sm text-gray-900">Refund</p>
              <p class="mt-2 text-sm text-gray-600">
                Lorem ipsum, dolor sit amet elit qui atque nemo blanditiis!
                Dignissimos.
              </p>
            </a>
            <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-gray-900"
                  >Gloria Roberston</span
                >
                <span class="text-sm text-gray-600">2 days ago</span>
              </div>
              <p class="text-sm text-gray-900">Refund</p>
              <p class="mt-2 text-sm text-gray-600">
                Lorem ipsum, dolor sit amet elit qui atque nemo blanditiis!
                Dignissimos.
              </p>
            </a>
            <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-gray-900"
                  >Gloria Roberston</span
                >
                <span class="text-sm text-gray-600">2 days ago</span>
              </div>
              <p class="text-sm text-gray-900">Refund</p>
              <p class="mt-2 text-sm text-gray-600">
                Lorem ipsum, dolor sit amet elit qui atque nemo blanditiis!
                Dignissimos.
              </p>
            </a>
            <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-gray-900"
                  >Gloria Roberston</span
                >
                <span class="text-sm text-gray-600">2 days ago</span>
              </div>
              <p class="text-sm text-gray-900">Refund</p>
              <p class="mt-2 text-sm text-gray-600">
                Lorem ipsum, dolor sit amet elit qui atque nemo blanditiis!
                Dignissimos.
              </p>
            </a>
            <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-gray-900"
                  >Gloria Roberston</span
                >
                <span class="text-sm text-gray-600">2 days ago</span>
              </div>
              <p class="text-sm text-gray-900">Refund</p>
              <p class="mt-2 text-sm text-gray-600">
                Lorem ipsum, dolor sit amet elit qui atque nemo blanditiis!
                Dignissimos.
              </p>
            </a>
            <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-gray-900"
                  >Gloria Roberston</span
                >
                <span class="text-sm text-gray-600">2 days ago</span>
              </div>
              <p class="text-sm text-gray-900">Refund</p>
              <p class="mt-2 text-sm text-gray-600">
                Lorem ipsum, dolor sit amet elit qui atque nemo blanditiis!
                Dignissimos.
              </p>
            </a>
            <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-gray-900"
                  >Gloria Roberston</span
                >
                <span class="text-sm text-gray-600">2 days ago</span>
              </div>
              <p class="text-sm text-gray-900">Refund</p>
              <p class="mt-2 text-sm text-gray-600">
                Lorem ipsum, dolor sit amet elit qui atque nemo blanditiis!
                Dignissimos.
              </p>
            </a>
            <a href="#" class="block px-6 pt-3 pb-4 bg-white border-t">
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-gray-900"
                  >Gloria Roberston</span
                >
                <span class="text-sm text-gray-600">2 days ago</span>
              </div>
              <p class="text-sm text-gray-900">Refund</p>
              <p class="mt-2 text-sm text-gray-600">
                Lorem ipsum, dolor sit amet elit qui atque nemo blanditiis!
                Dignissimos.
              </p>
            </a>
          </div>
        </div>
        <div class="flex-1 flex flex-col w-0">
          <div class="relative shadow-md">
            <div
              class="flex items-center justify-between px-5 py-4 bg-gray-100 border-b"
            >
              <div class="flex items-center">
                <button>
                  <svg
                    class="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    ></path>
                  </svg>
                </button>
                <button class="ml-6">
                  <svg
                    class="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    ></path>
                  </svg>
                </button>
                <button class="ml-6">
                  <svg
                    class="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
                <button class="ml-6">
                  <svg
                    class="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </button>
                <button class="ml-6">
                  <svg
                    class="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex items-center">
                <button>
                  <svg
                    class="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <button class="ml-4">
                  <svg
                    class="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex items-center justify-between px-5 py-4 bg-white">
              <h3 class="text-xl text-gray-900 truncate">
                Re: Student discount this is really long and has to wrap and
                look stupid?
              </h3>
              <div class="ml-4 flex-shrink-0">
                <span>#1428</span>
                <span
                  class="ml-2 text-sm font-semibold text-green-900 bg-green-200 rounded-full leading-none px-2 py-1"
                  >Active</span
                >
              </div>
            </div>
          </div>
          <div class="p-3 flex-1 overflow-y-auto">
            <article class="px-10 pt-6 pb-8 bg-white rounded-lg shadow">
              <div class="flex items-center justify-between">
                <p class="text-lg font-semibold">
                  <span class="text-gray-900">Joe Armstrong</span>
                  <span class="text-gray-600">wrote</span>
                </p>
                <div class="flex items-center">
                  <span class="text-sm text-gray-600"
                    >Yesterday at 7:24 AM</span
                  >
                  <img
                    class="ml-5 h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                    alt="profile"
                  />
                </div>
              </div>
              <div class="mt-6 text-gray-800 text-sm">
                <p>Thanks so much!! Can't wait to try it out :)</p>
              </div>
            </article>
            <article class="mt-3 px-10 pt-6 pb-8 bg-white rounded-lg shadow">
              <div class="flex items-center justify-between">
                <p class="text-lg font-semibold">
                  <span class="text-gray-900">Monica White</span>
                  <span class="text-gray-600">wrote</span>
                </p>
                <div class="flex items-center">
                  <span class="text-sm text-gray-600"
                    >Yesterday at 7:24 AM</span
                  >
                  <img
                    class="ml-5 h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                    alt="profile"
                  />
                </div>
              </div>
              <div class="mt-6 text-gray-800 text-sm">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate fuga consectetur aut eum dolorem libero iste
                  obcaecati perspiciatis fugit culpa rem doloribus, voluptatum,
                  tempora dolore, ipsum sint animi. Omnis, praesentium.
                </p>

                <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores facere unde aut ea dignissimos aspernatur voluptatum
                  corporis porro, consequatur laborum excepturi omnis quae ipsam
                  error eveniet dolorum sunt. Asperiores, repudiandae.
                </p>

                <p class="mt-4 font-semibold text-gray-900">Monica White</p>
                <p>Customer Service</p>
              </div>
            </article>
            <article class="mt-3 px-10 pt-6 pb-8 bg-white rounded-lg shadow">
              <div class="flex items-center justify-between">
                <p class="text-lg font-semibold">
                  <span class="text-gray-900">Joe Armstrong</span>
                  <span class="text-gray-600">wrote</span>
                </p>
                <div class="flex items-center">
                  <span class="text-sm text-gray-600"
                    >Yesterday at 7:24 AM</span
                  >
                  <img
                    class="ml-5 h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                    alt="profile"
                  />
                </div>
              </div>
              <div class="mt-6 text-gray-800 text-sm">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate fuga consectetur aut eum dolorem libero iste
                  obcaecati perspiciatis fugit culpa rem doloribus, voluptatum,
                  tempora dolore, ipsum sint animi. Omnis, praesentium.
                </p>

                <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores facere unde aut ea dignissimos aspernatur voluptatum
                  corporis porro, consequatur laborum excepturi omnis quae ipsam
                  error eveniet dolorum sunt. Asperiores, repudiandae.
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
