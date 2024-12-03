import React from "react";
import MainTitle from "./main/main-title";
import MainGraph from "./main/main-graph";
import { AppTable } from "./app-table";

const AppMain = () => {
  return (
    <div className="p-6 lg:p-8">
      <div className="mx-auto max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-6xl">
        <section className="mb-6 lg:mb-8">
          <MainTitle />
        </section>

        <div className="grid gap-6 lg:gap-8">
          <section className="md:col-span-2 bg-white rounded-lg shadow-sm p-4 lg:p-6">
            <MainGraph />
          </section>

          <section className="md:col-span-2 bg-white rounded-lg shadow-sm p-4 lg:p-6">
            <AppTable />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AppMain;
