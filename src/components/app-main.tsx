import React from "react";
import MainTitle from "./main/main-title";
import MainGraph from "./main/main-graph";

const AppMain = () => {
  return (
    <div className="p-6 lg:p-8">
      <div className="mx-auto max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-6xl">
        <section className="mb-6 lg:mb-8">
          <MainTitle />
        </section>

        <div className="grid gap-6 lg:gap-8">
          <section className="bg-white rounded-lg border-2 shadow p-4 lg:p-6">
            <MainGraph />
          </section>

          <section className="md:col-span-2 bg-white rounded-lg shadow-sm p-4 lg:p-6">
            {/* table - spans full width */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AppMain;
