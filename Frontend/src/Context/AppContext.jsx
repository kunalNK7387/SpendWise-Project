import React, { createContext, useContext, useEffect, useState } from "react";

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

  const [editingTransaction, setEditingTransaction] = useState(null);

  // Budget modal state
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);

  //Save Transaction to localStorage
  useEffect(() => {
    localStorage.setItem("spendwise_transaction", JSON.stringify(transactions));
  }, [transactions]);

  //save user to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("spendwise_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("spendwise_user");
    }
  }, [user]);

  //Add toast notification
  const addToast = (toast) => {
    const id =
      "toast_" + Date.now() + Math.random().toString(36).substring(2, 5);

    setToasts((prev) => [...prev, { ...toast, id }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toastItem) => toastItem.id !== id));
    }, 4000);
  };

  // Remove toast notification
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  //Add Transaction
  const addTransaction = (txData) => {
    const newTx = {
      ...txData,
      id: "tx_" + Date.now(),
    };

    setTransactions((prev) => [newTx, ...prev]);

    addToast({
      type: "Success",
      title: "Transacrtion Recoreded",
      message: `${newTx.title} (₹${newTx.amount.toLocaleString("en-IN")})added.`,
    });
  };

  //Update Transaction
  const updateTransaction = (id, updatedFilds) => {
    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === id
          ? { ...transaction, ...updatedFilds }
          : transaction,
      ),
    );

    addToast({
      type: "Success",
      title: "Transaction Updated",
      message: "Changes Save Successfully.",
    });
  };

  //Delete Transaction
  const deleteTransaction = (id) => {
    const transaction = transactions.find((item) => item.id === id);

    setTransactions((prev) => prev.filter((item) => item.id !== id));

    addToast({
      type: "Info",
      title: "Transaction Deleted",
      message: transaction
        ? `${transaction.title} removed.`
        : "Transaction removed.",
    });
  };

  // Update monthly budget
  const updateBudget = (newBudget) => {
    if (!user) return;

    setUser({ ...user, monthlyBudget: newBudget });

    addToast({
      type: "Success",
      title: "Budget Updated",
      message: `Monthly budget set to ${newBudget.toLocaleString("en-IN")}.`,
    });
  };

  //Restore Sample Data
  const resetToSampleData = () => {
    setTransactions(SAMPLE_TRANSACTIONS);
    setUser(DEFAULT_USER);

    addToast({
      type: "info",
      title: "Sample Data Restored",
      message: "Restored 11 student expense & income records.",
    });
  };

  // Login
  const login = (email, name) => {
    const displayName = name || email.split("@")[0] || "Student";

    const initials =
      displayName
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .substring(0, 2) || "ST";

    const loggedInUser = {
      id: "usr_" + Date.now(),
      name: displayName,
      email,
      college: "Indian Institute of Technology / College Campus",
      monthlyBudget: user?.monthlyBudget || 8000,
      avatarInitials: initials,
    };

    setUser(loggedInUser);
    setCurrentPage("dashboard");

    addToast({
      type: "success",
      title: "Welcome back!",
      message: `Signed in as ${loggedInUser.name}.`,
    });
  };

  // Register
  const register = (name, email, college, budget) => {
    const initials =
      name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .substring(0, 2) || "ST";

    const newUser = {
      id: "usr_" + Date.now(),
      name,
      email,
      college: college || "College Campus, India",
      monthlyBudget: budget || 7000,
      avatarInitials: initials,
    };

    setUser(newUser);
    setCurrentPage("dashboard");

    addToast({
      type: "success",
      title: "Account Created",
      message: `Welcome to SpendWise, ${name}!`,
    });
  };

  // Logout
  const logout = () => {
    setUser(null);
    setCurrentPage("home");

    addToast({
      type: "info",
      title: "Logged Out",
      message: "You have been safely signed out.",
    });
  };

  // Open modal to add a transaction
  const openAddTransactionModal = () => {
    setEditingTransaction(null);
    setIsTransactionModalOpen(true);
  };

  // Open modal to edit a transaction
  const openEditTransactionModal = (transaction) => {
    setEditingTransaction(transaction);
    setIsTransactionModalOpen(true);
  };

  // Close transaction modal
  const closeTransactionModal = () => {
    setEditingTransaction(null);
    setIsTransactionModalOpen(false);
  };

  // Values shared with child components

  const value = {
    currentPage,
    setCurrentPage,
    user,
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    updateBudget,
    resetToSampleData,
    login,
    register,
    logout,
    toasts,
    addToast,
    removeToast,
    isTransactionModalOpen,
    openAddTransactionModal,
    openEditTransactionModal,
    closeTransactionModal,
    editingTransaction,
    isBudgetModalOpen,
    setIsBudgetModalOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
// Custom hook to access AppContext

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
