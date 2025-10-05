import { useState } from "react";
import { About } from "./About";
// import Projects from "./Projects";

export default function ClientRouter() {
  const [active, setActive] = useState("home");

  const pages = {
    home: <About />,
    // projects: <Projects />,
    resume: <div>Resume Section</div>,
    contact: <div>Contact Section</div>,
    blog: <div>Blog Section</div>,
  };

  return (
    <>
      <div className="border-1 absolute top-20 left-15 w-50 pr-10 pl-10 pb-10">
        {/* ASIDE */}
        <aside className="w-60 border-r border-gray-300 p-6">
          <h2 className="text-xl font-semibold text-center mb-4">Menu</h2>
          <nav>
            <ul className="grid gap-3 text-sm">
              {Object.keys(pages).map((key) => (
                <li
                  key={key}
                  onClick={() => setActive(key)}
                  className={`cursor-pointer w-fit capitalize ${
                    active === key
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {key}
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
      <div>
        {/* MAIN CONTENT */}
        <main className="flex-1 p-8 transition-all duration-300">
          {pages[active]}
        </main>
      </div>
    </>
  );
}
