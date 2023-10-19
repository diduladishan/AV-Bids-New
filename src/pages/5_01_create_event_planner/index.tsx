import React from "react";
import LOGO from "../../assets/register/logo.png";

import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
  Checkbox,
} from "@material-tailwind/react";

export default function CheckoutForm() {
  const [type, setType] = React.useState("card");

  return (
    <div className="flex items-center justify-center h-screen bg-[#f3f1fb]">
      <div>
        <div className="flex items-center justify-center mb-6">
          <img src={LOGO} alt="aad" className=" w-[150px] object-contain" />
        </div>

        {/* <Card className="w-full max-w-[24rem]"> */}
        <Card className="w-full w-[24rem]">
          <CardHeader
            color="white"
            floated={false}
            shadow={false}
            className="m-0 grid place-items-center px-4 pt-8 pb-0 text-center"
          >
            <h2 className="text-[30] text-primary">Create Account</h2>
          </CardHeader>
          <CardBody>
            <Tabs value={type} className="overflow-visible">
              <TabsHeader className="relative z-0 border border-[#E0E0E0] rounded-3xl ">
                <Tab value="card" onClick={() => setType("card")}>
                  <h2 className="text-[16px]">Event Planner</h2>
                </Tab>
                <Tab value="paypal" onClick={() => setType("paypal")}>
                  <h2 className="text-[16px]">AV Provider</h2>
                </Tab>
              </TabsHeader>
              <TabsBody
                className="!overflow-x-hidden !overflow-y-visible"
                animate={{
                  initial: {
                    x: type === "card" ? 400 : -400,
                  },
                  mount: {
                    x: 0,
                  },
                  unmount: {
                    x: type === "card" ? 400 : -400,
                  },
                }}
              >
                <TabPanel value="card" className="p-0">
                  <form className="mt-6 flex flex-col gap-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="First Name"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Last Name"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        type="password"
                        placeholder="Password"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        crossOrigin="anonymous"
                      />
                    </div>

                    <Checkbox
                      label={
                        <p color="blue-gray" className="text-[14px]">
                          By hitting the "Create Account" button,<br></br> you
                          agree to the
                          <span className="text-secondary underline mx-[5px]">
                            Terms of Service
                          </span>
                          &<br></br>
                          <span className="text-secondary underline">
                            Privacy Policy
                          </span>
                        </p>
                      }
                      crossOrigin=""
                    />

                    <Button size="lg" className="rounded-full bg-primary mt-2">
                      Create Account
                    </Button>
                    <p className="mt-2 flex items-center justify-center gap-2 text-[14px]">
                      Have an account?{" "}
                      <span className="text-secondary underline">Sign In</span>
                    </p>
                  </form>
                </TabPanel>
                <TabPanel value="paypal" className="p-0">
                  <form className="mt-6 flex flex-col gap-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="First Name"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Last Name"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        type="password"
                        placeholder="Password"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        crossOrigin="anonymous"
                      />
                    </div>

                    <Checkbox
                      label={
                        <p color="blue-gray" className="text-[14px]">
                          By hitting the "Create Account" button,<br></br> you
                          agree to the
                          <span className="text-secondary underline mx-[5px]">
                            Terms of Service
                          </span>
                          &<br></br>
                          <span className="text-secondary underline">
                            Privacy Policy
                          </span>
                        </p>
                      }
                      crossOrigin=""
                    />

                    <Button size="lg" className="rounded-full bg-primary mt-2">
                      Create Account
                    </Button>
                    <p className="mt-2 flex items-center justify-center gap-2 text-[14px]">
                      Have an account?{" "}
                      <span className="text-secondary underline">Sign In</span>
                    </p>
                  </form>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
