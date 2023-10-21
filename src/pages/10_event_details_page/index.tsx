import EVENTDETAILS_01 from "../../assets//10_event_details_page/exclamation-circle.png";
import EVENTDETAILS_02 from "../../assets//10_event_details_page/carbon_time.png";
import EVENTDETAILS_03 from "../../assets//10_event_details_page/Rectangle 3759.png";
import EVENTDETAILS_04 from "../../assets//10_event_details_page/location.png";
import { Textarea, Button } from "@material-tailwind/react";

export function index() {
  return (
    <div>
      <div className="bg-[#FFE8E8] p-4">
        <div className="flex items-center gap-2">
          <img
            src={EVENTDETAILS_01}
            alt="aad"
            className="object-scale-down w-[34px]"
          />
          <p className="text-[20px] text-[#C31717]">This event has expired</p>
        </div>
      </div>

      <div>
        <h2 className="text-primary text-[40px]">
          General Session & 4 Breakouts
        </h2>
      </div>
      <div className="flex">
        <div className="flex items-center">
          <img
            src={EVENTDETAILS_02}
            alt="aad"
            className="object-scale-down w-[32px]"
          />
          <p className="text-[18px]">Posted on 6/28/2023</p>
        </div>

        <div className="flex items-center">
          <img
            src={EVENTDETAILS_02}
            alt="aad"
            className="object-scale-down w-[32px]"
          />
          <p className="text-[18px]">Updated on 6/28/2023</p>
        </div>
      </div>

      <div>
        <img
          src={EVENTDETAILS_03}
          alt="aad"
          className="object-scale-down w-[781px]"
        />
      </div>

      <div className="bg-[#F3F1FB] p-6">
        <h2 className="text-[22px]">Description</h2>
        <div>
          <p className="text-[20px]">
            This event will empower and equip Christian Educators and
            Administrators, home school families, and anyone who wants to
            transform education. Want to start a school? Form a micro school?
            Home school your children? Create Kingdom culture in your classroom?
            This Conference Is For You if:<br></br> You want to see kids saved
            from the current system of indoctrination<br></br> You want a plan
            of action to move forward<br></br> You want to use your church
            property to host a school or co-op ​<br></br>- You want to network
            with like-minded reformers
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-[22px]">Description</h2>
        <p className="text-[20px]">Description</p>
        <div className="w-96 bg-[#F3F1FB] rounded-lg">
          <Textarea label="Description" />
        </div>

        <Button
          variant="filled"
          color="indigo"
          size="sm"
          className="rounded-full w-36 py-4 mt-4 px-8 bg-primary font-poppins"
        >
          <span className="text-white">Submit</span>
        </Button>
      </div>

      <div>
        <h2 className="text-[22px]">Other events by this client</h2>

        <div>
          <div className="flex items-center justify-center bg-[#fff]  gap-8 p-8 h-40 rounded-lg w-max">
            <div>
              <img
                src={EVENTDETAILS_03}
                alt="aad"
                className="object-scale-down w-[181px]"
              />
            </div>

            <div>
              <h2 className="text-[20px]">General Session & 4 Breakouts</h2>

              <div className="flex gap-36">
                <p className="text-[18px]">
                  Event Date: 10/10/2023 - 10/15/2023
                </p>
                <p className="text-[18px]">$70,000 - $150,000</p>
              </div>

              <div className="flex items-center gap-16 mt-4">
                <div className="flex gap-8 items-center">
                  <img
                    src={EVENTDETAILS_04}
                    alt="aad"
                    className="object-scale-down w-[20px]"
                  />
                  <p className="text-[16px] text-[#9381FF]">Phoenix, Arizona</p>
                </div>

                <p className="text-[16px]">Corporate, General Meeting</p>
                <Button
                  variant="filled"
                  color="green"
                  size="sm"
                  className="rounded-full w-30 py-2 px-3 bg-[#B5F9C4] font-poppins"
                >
                  <h2 className="text-[#178751] text-[12px]">Virtual</h2>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
