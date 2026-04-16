import image_home from "../assets/images/image-home-hero-large.webp";
import whole_food from "../assets/images/icon-whole-food-recipes.svg";
import minimum_fuss from "../assets/images/icon-minimum-fuss.svg";
import search from "../assets/images/icon-search-in-seconds.svg";
import image_real_life from "../assets/images/image-home-real-life-large.webp";
import { Link } from "react-router";

export default function Home() {
  return (
    <main className="px-max py-3 bg-[var(--fundo-color)] text-[var(--primary-color)]">
      <div className="container mx-auto items-center justify-center flex flex-col font-nunito font-extrabold flex-wrap">
        <h1 className="text-6xl pb-5 font-bold pt-15">Healthy meals, zero fuss</h1>
        <p className="pb-5 text-1xl">
          Discover eight quick, whole-food recipes tht you can cook tonight
        </p>
        <p className="pb-5 text-1xl">-no processed junk, no guesswork</p>

        <div className="pb-20">
          <Link to="/recipes">
            <button className="bg-[var(--primary-color)] text-white rounded-xl px-6 py-4 cursor-pointer">
              Start exploring
            </button>
          </Link>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <img src={image_home} alt="image_home" className="rounded-xl" />
        </div>
      </div>

      <div className="container mx-auto items-center justify-center flex flex-col font-nunito flex-wrap border-b-2 border-gray-200 mt-20 max-w-6xl">
        <h1 className="pt-2 text-5xl pb-5 font-extrabold">What you'll get</h1>

        <div className="mx-auto grid grid-cols-3 gap-6 max-w-5xl">
          <div className=" p-6 rounded-xl">
            <img
              src={whole_food}
              alt="Whole Food Recipes"
              className="w-12 h-12 bg-white rounded-xl flex items-center justify-center"
            />
            <h1 className="pt-4 text-2xl font-extrabold">Holhe-food recipes</h1>
            <p className="pt-4 font-bold">
              Each dish user everyday, unprocessed ingredients.
            </p>
          </div>

          <div className="p-6 rounded-xl">
            <img
              src={minimum_fuss}
              alt="Minimum Fuss"
              className="w-12 h-12 bg-white rounded-xl flex items-center justify-center"
            />
            <h1 className="pt-4 text-2xl font-extrabold">Mininum fuss</h1>
            <p className="pt-4 font-bold">
              All recipes are designed to make eating healthy quick and easy.
            </p>
          </div>

          <div className=" p-6 rounded-xl">
            <img
              src={search}
              alt="Search in Seconds"
              className="w-12 h-12 bg-white rounded-xl flex items-center justify-center"
            />
            <h1 className="pt-4 text-2xl font-extrabold">Search in Seconds</h1>
            <p className="pt-4 font-bold">
              Filter by name or ingredient and jump straight to the recipe you
              need.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10 items-center font-nunito">
          <div className="text-[var(--primary-color)] font-bold">
            <h1 className="pt-4 text-5xl font-extrabold">
              Built for real life
            </h1>

            <p className="mt-5 max-w-110">
              Cooking shouldn’t be complicated. These recipes come in under 30
              minutes of active time, fit busy schedules, and taste good enough
              to repeat.
            </p>

            <p className="mt-4 max-w-110">
              Whether you’re new to the kitchen or just need fresh ideas, we’ve
              got you covered.
            </p>
          </div>

          <div>
            <img
              src={image_real_life}
              alt="image_real_life"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="px-6 bg-green-100 flex items-center justify-center flex-col font-nunito text-[var(--primary-color)] rounded-2xl mx-auto max-w-6xl py-16 pb-20 text-center">
        <h1 className="text-5xl font-extrabold pt-10">
          Ready to cook smarter?
        </h1>

        <p className="mt-4 text-lg text-[var(--primary-color)] max-w-xl">
          Hit the button, pick a recipe, and get dinner on the table-fast.
        </p>

        <Link to="/recipes">
          <button className="mt-8 bg-[var(--primary-color)] text-white rounded-xl px-8 py-4 text-lg font-semibold cursor-pointer">
            Browse recipes
          </button>
        </Link>
      </div>
    </main>
  );
}
