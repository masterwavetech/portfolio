import React from "react";

const practice = () => {
  return (
    <div className="font-nunito">
      <div>
        <nav>
          <div>
            <h1 class="font-bold uppercase p-4 border-b border-gray-100">
              <a
                className="text-green-500 sm:text-red-500 lg:text-blue-500"
                href="/"
              >
                Food Ninja
              </a>
            </h1>
          </div>
          <ul>
            <li class="text-gray-700 font-bold">
              <a href="/">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main class="px-16 py-6 bg-gray-100">
        <div className="flex justify-center md:justify-end">
          <a
            className="btn text-primary border-primary md:border-2 bg-"
            href="/"
          >
            Log in
          </a>
          <a
            className="btn text-primary border-primary md:border-2 ml-2"
            href="/"
          >
            Sign up
          </a>
        </div>

        <header>
          <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 class="text-wave font-semibold">For Ninjas</h3>
        </header>

        <div>
          <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">
            Latest Recipes
          </h4>

          <div class="mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            <div className="card">
              <img
                className="h-32 sm:h-48 w-full object-cover"
                src="https://i.ibb.co/hymPx2Z/stew.jpg"
                alt="stew"
              />
              <div className="m-4">
                <span className="block font-bold">5 Bean Chili Stew</span>
                <span className="block text-sm text-gray-500">
                  Recipe by Mario
                </span>
              </div>
              <div className="badge">
                <span>25 mins</span>
              </div>
            </div>
            <div class="card">
              <img
                src="https://i.ibb.co/C8mXWwX/noodles.jpg"
                alt="noodles"
                class="h-32 sm:h-48 w-full object-cover"
              />
              <div class="m-4">
                <span class="font-bold">Veg Noodles</span>
                <span class="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
              <div class="badge">
                <span>25 mins</span>
              </div>
            </div>
            <div class="card">
              <img
                src="https://i.ibb.co/S5TNbMx/curry.jpg"
                alt="curry"
                class="h-32 sm:h-48 w-full object-cover"
              />
              <div class="m-4">
                <span class="font-bold">Tofu Curry</span>
                <span class="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
              <div class="badge">
                <span>25 mins</span>
              </div>
            </div>
          </div>

          <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">
            Most Popular
          </h4>

          <div class="mt-8"></div>
        </div>

        <div class="mt-12 flex justify-center">
          <div class="btn bg-secondary-100 text-secondary-200">Load more</div>
        </div>
      </main>
    </div>
  );
};

export default practice;
