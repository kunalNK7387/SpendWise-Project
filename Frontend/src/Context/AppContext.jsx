import React, { createContext, useEffect, useState } from "react";

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
const SAMPLE_TRANSACTIONS = [
  {
    id: "tx_1",
    title: "Parents Monthly Allowance",
    amount: 10000,
    type: "income",
    category: "Other",
    date: "2026-10-01",
    paymentMethod: "UPI",
    notes: "Direct transfer to HDFC student account",
  },
  {
    id: "tx_2",
    title: "Hostel Maintenance & Mess Share",
    amount: 3800,
    type: "expense",
    category: "Bills",
    date: "2026-10-02",
    paymentMethod: "Net Banking",
    notes: "Monthly mess advance and hostel bill",
  },
  {
    id: "tx_3",
    title: "Metro Smart Card Recharge",
    amount: 500,
    type: "expense",
    category: "Travel",
    date: "2026-10-03",
    paymentMethod: "UPI",
    notes: "Monthly commute for campus travel",
  },
  {
    id: "tx_4",
    title: "Freelance Frontend Project",
    amount: 6500,
    type: "income",
    category: "Education",
    date: "2026-10-04",
    paymentMethod: "UPI",
    notes: "Landing page build for senior college startup",
  },
  {
    id: "tx_5",
    title: "Data Structures Textbook (Cormen)",
    amount: 620,
    type: "expense",
    category: "Education",
    date: "2026-10-05",
    paymentMethod: "UPI",
    notes: "Purchased from college bookstore discount",
  },
  {
    id: "tx_6",
    title: "College Canteen Thali & Chai",
    amount: 130,
    type: "expense",
    category: "Food",
    date: "2026-10-06",
    paymentMethod: "Cash",
    notes: "Afternoon lunch with project group",
  },
  {
    id: "tx_7",
    title: "Campus Xerox & Lab Manual Printing",
    amount: 85,
    type: "expense",
    category: "Education",
    date: "2026-10-07",
    paymentMethod: "UPI",
    notes: "Operating Systems lab assignment record",
  },
  {
    id: "tx_8",
    title: "Zomato Biryani with Roommates",
    amount: 420,
    type: "expense",
    category: "Food",
    date: "2026-10-07",
    paymentMethod: "UPI",
    notes: "Celebrated hackathon 1st round qualification",
  },
  {
    id: "tx_9",
    title: "Jio 5G Unlimited Recharge",
    amount: 349,
    type: "expense",
    category: "Bills",
    date: "2026-10-08",
    paymentMethod: "UPI",
    notes: "28-day data and calling recharge",
  },
  {
    id: "tx_10",
    title: "Apollo Pharmacy - Cold & ORS",
    amount: 165,
    type: "expense",
    category: "Health",
    date: "2026-10-08",
    paymentMethod: "Cash",
    notes: "Paracetamol & hydration pack",
  },
  {
    id: "tx_11",
    title: "College T-Shirt & Stationary",
    amount: 450,
    type: "expense",
    category: "Shopping",
    date: "2026-10-09",
    paymentMethod: "UPI",
    notes: "Engineering dept fest merchandise",
  },
];

//App Provider
export const AppProvider = ({ children }) => {
  //current page
  const [currentPage, setCurrentPage] = useState("dashboard");

  //User State
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("spendwise_user");

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        // Use default user if saved data is invalid
        console.log(error);
      }
    }
    return DEFAULT_USER;
  });

  //Transection State
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("spendwise_user");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (error) {
        // Use sample data if saved data is invalid
        console.log(error);
      }
    }
    return SAMPLE_TRANSACTIONS;
  });

  //Toast notification
  const [toasts, setToasts] = useState([]);

  // Transaction modal state
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  const [editTransaction, setEditTransaction] = useState(null);

  // Budget modal state
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);

  //Save Transaction to localStorage
  useEffect(() => {
    localStorage.setItem("spendwise_transaction");
    JSON.stringify(transactions);
  }, [transactions]);

  //save user to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("spendwise_user");
      JSON.stringify(user);
    } else {
      localStorage.removeItem("spendwise_user");
    }
  }, [user]);

  //Add toast notification
  const 
};
