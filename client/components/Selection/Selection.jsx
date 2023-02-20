import React from "react";
import { Popover, Transition } from "@headlessui/react";
import styles from "./Selection.module.css";

function Selection({ type, name, resources, pros, cons }) {
  return (
    <div class="group relative rounded-xl border-2 border-slate-200 bg-white/60 w-5/6	mx-auto	">
      <div class="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 "></div>
      <Popover>
        <div class="relative overflow-hidden rounded-xl p-6 text-center">
          <Popover.Button>
            <h1 className="font-display text-3xl tracking-tight text-slate-900 text-center">
              {type}: {name}
            </h1>
            <h2 className="mt-1 text-lg text-slate-700">Pros: {pros}</h2>
            <h2 className="mt-1 text-lg text-slate-700">Cons: {cons}</h2>
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
              {resources.map((resource) => (
                <p className="text-center">
                  <a href={resource}>
                    <span class="absolute -inset-px rounded-xl"></span>
                    {resource}
                  </a>
                </p>
              ))}
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
