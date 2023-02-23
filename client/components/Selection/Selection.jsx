import React from "react";
import { Popover, Transition } from "@headlessui/react";
import styles from "./Selection.module.css";

function Selection({ type, name, pros, cons, links }) {
  return (
    <div class="group relative rounded-xl border-2 border-slate-200 bg-white/60 w-5/6	mx-auto	">
      <div class="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 "></div>
      <Popover>
        <div class="relative overflow-hidden rounded-xl p-6 text-center">
          <Popover.Button>
            <h1 className="font-display text-3xl tracking-tight text-slate-900 text-center">
              {type}: {name}
            </h1>
            <ul className="mt-1 text-lg text-slate-700">
              Pros:
              {pros.map((pro, i) => {
                return <li key={i}>{pro}</li>;
              })}
            </ul>
            <ul className="mt-1 text-lg text-slate-700">
              Cons:
              {cons.map((con, i) => {
                return <li key={i}>{con}</li>;
              })}
            </ul>
          </Popover.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel>
              <p className="text-center">
                <a href={links[0]}>
                  <span class="absolute -inset-px rounded-xl"></span>
                  {links[0]}
                </a>
              </p>
            </Popover.Panel>
          </Transition>
        </div>
      </Popover>
    </div>
  );
}

export default Selection;

{
}
