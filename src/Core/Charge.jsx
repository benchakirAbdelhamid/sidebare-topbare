import React, { Fragment } from "react";
import { Button, Select, Option } from "@material-tailwind/react";
function Charge() {
  return (
    <Fragment>
      <div class=" flex items-center justify-center">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mx-auto p-4 ">
          <div class=" p-4 w-full bg-blue-500">
            Filtre
            <hr />
            <div className="flex justify-around items-center space-x-4 ">
              <div className="w-72 mb-2">
                <Button>Recherger</Button>
              </div>
              <div className="w-72 mb-2">
                <Button>Vider</Button>
              </div>
            </div>
            <div class="w-72">
              <Button>Instance de traitement</Button>
            </div>
            <div className="flex space-x-4">
              <div className="w-72 mb-2">
                <Button>Payer</Button>
              </div>
              <div className="w-72 mb-2">
                <Button>Impaye</Button>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-72 mb-2">
                <Select label="Select Version">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
              <div className="w-72 mb-2">
                <Select label="Select Version">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
            </div>
          </div>
          <div class=" p-4">
            <div class="w-72">ayman</div>
          </div>
          <div class="  p-4 flex flex-col items-center">ayman</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Charge;
