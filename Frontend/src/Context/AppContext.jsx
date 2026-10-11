import React, { createContext } from "react";

const AppContext = createContext(undefined);

//Default user
const DEFAULT_USER = {
  id: "user_1",
  name: "Kunal Khairnar",
  email: "kunal123@gmail.com",
  collage: "XYZ",
  monthlyBudget: 8000,
  avatarInitials: "KK",
};

//Sample transaction 