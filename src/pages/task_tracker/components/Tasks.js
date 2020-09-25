import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import TaskCard from "./TaskCard";

const DATA = [
  {
    name: "Deploy Build",
    status: "Ongoing",
    description: "Deploy version 1.0.2 to Appstore and Playstore",
    images: [
      require("../../../assets/images/grid.png"),
      require("../../../assets/images/juan.png"),
      require("../../../assets/images/user.png"),
    ],
    date: "Recently active",
    favorite: true,
  },
  {
    name: "Update Client X",
    status: "Completed",
    description: "Notify client x about the proposal ",
    images: [
      require("../../../assets/images/grid.png"),
      require("../../../assets/images/user.png"),
    ],
    date: "5 hours ago",
    favorite: false,
  },
  {
    name: "Fix Bugs",
    status: "Pending",
    description: "Fix mobile responsiveness bug in task tracker page",
    images: [
      require("../../../assets/images/grid.png"),
      require("../../../assets/images/juan.png"),
      require("../../../assets/images/user.png"),
    ],
    date: "Yesterday",
    favorite: false,
  },
  {
    name: "This is a long title just for testing",
    status: "Pending",
    description:
      "Adipisicing veniam veniam occaecat do dolore. Cupidatat cillum sint pariatur do aliqua velit ex in laborum ipsum nulla sit velit. Reprehenderit ipsum quis et enim Lorem ut cillum. Enim laborum reprehenderit irure exercitation cillum eiusmod non irure nisi non.",
    images: [
      require("../../../assets/images/grid.png"),
      require("../../../assets/images/juan.png"),
      require("../../../assets/images/user.png"),
    ],
    date: "Yesterday",
    favorite: false,
  },
  {
    name: "This is a long title just for testing",
    status: "Pending",
    description:
      "Adipisicing veniam veniam occaecat do dolore. Cupidatat cillum sint pariatur do aliqua velit ex in laborum ipsum nulla sit velit. Reprehenderit ipsum quis et enim Lorem ut cillum. Enim laborum reprehenderit irure exercitation cillum eiusmod non irure nisi non.",
    images: [
      require("../../../assets/images/grid.png"),
      require("../../../assets/images/juan.png"),
      require("../../../assets/images/user.png"),
    ],
    date: "Yesterday",
    favorite: false,
  },
];

export default function Tasks() {
  return (
    <MDBContainer>
      <MDBRow className="">
        {DATA.map((item, index) => {
          return (
            <MDBCol md="3" key={index}>
              <TaskCard
                name={item.name}
                status={item.status}
                date={item.date}
                description={item.description}
                images={item.images}
                favorite={item.favorite}
              />
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
}
