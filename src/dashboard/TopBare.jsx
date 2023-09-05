import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
// import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import {
  BsFillEnvelopeFill,
  BsFillBellFill,
  BsBoxArrowInRight,
} from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
const TopBare = () => {
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-3 topBare">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        {/* <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography> */}
        <div className="ml-auto flex gap-1 md:mr-4 ">
          <div className="">
            <Typography className="h-4 font-normal " variant="h6">
              Syndic Interne
            </Typography>
          </div>
          <IconButton variant="text" color="blue-gray">
            <BsFillEnvelopeFill className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text" color="blue-gray">
            <BsFillBellFill className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Typography variant="h6" className="font-normal">
            Mr ayman Farouki
          </Typography>
        </div>
        <IconButton variant="text" color="blue-gray" className="ms-3">
          <BsBoxArrowInRight className="h-5 w-5" />
        </IconButton>
      </div>
    </Navbar>
  );
};

export default TopBare;
