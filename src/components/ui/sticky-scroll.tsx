'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const Component = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ReactLenis root>
      <main className="bg-black" ref={ref}>
        <section className="text-white w-full bg-slate-950">
          <div className="grid grid-cols-3 gap-2">
            
            {/* Left Column */}
            <div className="grid gap-2">
              <figure className="w-full">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1189&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96 object-cover rounded-md"
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1696950170773-db0bf33ca0ca?q=80&w=880&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96 object-cover rounded-md"
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96 object-cover rounded-md"
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96 object-cover rounded-md"
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1719411182379-ffd97c1f7ebf?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96 object-cover rounded-md"
                />
              </figure>
            </div>

            {/* Middle Sticky Column */}
            <div className="grid gap-2 grid-rows-3 sticky top-0 h-screen">
              <figure className="w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 h-full w-full object-cover rounded-md"
                />
              </figure>
              <figure className="w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1476180814856-a36609db0493?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 h-full w-full object-cover rounded-md"
                />
              </figure>
              <figure className="w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 h-full w-full object-cover rounded-md"
                />
              </figure>
            </div>

            {/* Right Column */}
            <div className="grid gap-2">
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1719547907790-f661a88302c2?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96 object-cover rounded-md"
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96 object-cover rounded-md"
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1550367363-ea12860cc124?q=80&w=1935&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96 object-cover rounded-md"
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96 object-cover rounded-md"
                />
              </figure>
              <figure className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1719554873571-0fd6bf322bb1?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-full h-96 object-cover rounded-md"
                />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';
export default Component;
