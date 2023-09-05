import { Card, Typography } from "@material-tailwind/react";
import { Fragment } from "react";
import Pagination from "./paginationTable";
const TABLE_HEAD = ["Name", "Job", "Employed", "Action", "Observation"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: ["23/04/18", "yzagduagzyagz", "azdazdaz"],
    action: "exeption",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: ["23/04/18"],
    action: "exeption",
    resultat: "result",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: ["19/09/17"],
    action: "exeption",
    resultat: "result",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: ["24/12/08"],
    action: "exeption",
    resultat: "result",
    observation: "observation",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: ["04/10/21"],
    action: "exeption",
    resultat: "result",
  },
];

const Table = () => {
  return (
    <Card className="m-5">
      <Typography
        variant="h6"
        color="blue-gray"
        className="mb-2 ms-2  font-normal"
      >
        Les actions
      </Typography>
      <hr />
      <Card className="h-full m-5  overflow-scroll">
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-2 ms-2  font-normal"
        >
          Action recouvrement
        </Typography>
        <hr />
        <table className=" min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ name, job, date, action, observation }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {job}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {date.length > 2 ? (
                        date.map((d) => (
                          <Fragment>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {d}
                            </Typography>
                            <hr className="my-2 border-blue-gray-50 w-full" />
                          </Fragment>
                        ))
                      ) : (
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      )}
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {action}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {observation}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
      <div class="mx-auto pb-4 ">
        <Pagination />
      </div>
    </Card>
  );
};

export default Table;
