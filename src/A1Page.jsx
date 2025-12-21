import { Link } from "react-router-dom";
function A1Page() {
  return (
    <div className="min-h-screen bg-[#F0E2DF] relative">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-8 py-5">
        <a
          href="/home"
          className="text-xs md:text-sm font-medium tracking-wide font-montserrat text-[#335E40] hover:underline whitespace-nowrap leading-none mb-0.5"
        >
          Home
        </a>

        <img
          src="/images/logo/sallys_logo.png"
          alt="Sally's Logo"
          className="h-4 md:h-12 w-auto"
        />

        <div className="flex items-center gap-4 md:gap-8">
          <a
            href="/test"
            className="text-xs md:text-sm font-medium tracking-wide font-montserrat text-[#335E40] hover:underline whitespace-nowrap leading-none"
          >
            Test yourself
          </a>
          <a
            href="/about"
            className="text-xs md:text-sm font-medium tracking-wide font-montserrat text-[#335E40] hover:underline leading-none"
          >
            About
          </a>
        </div>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 px-4 mt-8">

        {/* Placeholder 1 */}
        <Link to="/gutentag">
          <img
            src="/images/place_holders/Guten_Tag.svg"
            alt="Guten Tag Placeholder"
            className="w-full h-20 mb-2 drop-shadow-sm cursor-pointer"
          />
        </Link>

        {/* Placeholder 2 */}
           <img
            src="/images/place_holders/Meine_Familie.svg"
            alt="Meine Familie Placeholder"
            className="w-full h-20 mb-2 drop-shadow-sm"
          />

        {/* Placeholder 3 */}
           <img
            src="/images/place_holders/Einkauf.svg"
            alt="Einkauf Placeholder"
            className="w-full h-20 mb-2 drop-shadow"
          />

        {/* Placeholder 4 */}
           <img
            src="/images/place_holders/Meine_Wohnung.svg"
            alt="Meine Wohnung Placeholder"
            className="w-full h-20 mb-2 drop-shadow"
          />

        {/* Placeholder 5 */}
           <img
            src="/images/place_holders/Mein_Tag.svg"
            alt="Mein Tag Placeholder"
            className="w-full h-20 mb-2 drop-shadow"
          />

        {/* Placeholder 6 */}
           <img
            src="/images/place_holders/Frei_zeit.svg"
            alt="Frei zeit Placeholder"
            className="w-full h-20 mb-2 drop-shadow"
          />

        {/* Placeholder 7 */}
           <img
            src="/images/place_holders/kinder_sschule.svg"
            alt="Kinder und Schule Placeholder"
            className="w-full h-20 mb-2 drop-shadow"
          />

      </div>
    </div>
  );
}

export default A1Page;

