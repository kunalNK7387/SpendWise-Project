import React, { useState } from "react";
import {
  Wallet,
  Sun,
  Moon,
  Plus,
  Menu,
  X,
  LayoutDashboard,
  ReceiptText,
  Palette,
  Home,
  LogOut,
  LogIn,
  UserPlus,
  Link,
} from "lucide-react";
import { useApp } from "../../Context/AppContext";

const Navbar = () => {
  const { currentPage, setCurrentPage, user, logout, openAddTransactionModal } =
    useApp;
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //Navigation To another Page
  const navigateTo = () => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };
  // Navigation links
  const navLink = [
    {
      id: "home",
      label: "Home",
      icon: <Home className="w-4 h-4" />,
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      id: "transactions",
      label: "Transactions",
      icon: <ReceiptText className="w-4 h-4" />,
    },
  ];
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md  border-b border-[#E2E8F0] bg-white/95 dark:border-[#334155] dark:bg-[#1E293B]/95">
      <div className="mx-auto flex h-16 px-4 max-w-7xl justify-between items-center sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-7">
          <button className="flex items-center gap-2.5 text-left cursor-pointer group">
            <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#4F46E5] text-white shadow-xs group-hover:bg-indigo-700 dark:bg-[#818CF8] dark:text-[#0F172A] transition-colors">
              <Wallet />
            </div>
            <div>
              <span className="text-lg tracking-tight text-[#0F172A] dark:text-[#F8FAFC] font-bold">
                SpendWise
              </span>
              <span className="hidden sm:inline-block ml-1.5 text-[10px] font-semibold tracking-wider text-[#64748B] dark:text-[#94A3B8] uppercase">
                Student Edition
              </span>
            </div>
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2.5">
            {navLink.map((link) => {
              const isActive = currentPage === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer
                     ${
                       isActive
                         ? "text-[#4F46E5] bg-indigo-50/70 dark:text-[#818CF8] dark:bg-indigo-950/40"
                         : "text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/70 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] dark:hover:bg-slate-800"
                     }`}
                >
                  {link.icon}
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>
        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Add Expense Button */}
          {user && (
            <Button
              size="sm"
              variant="primary"
              onClick={openAddTransactionModal}
              leftIcon={<Plus className="w-3.5 h-3.5" />}
              className="hidden sm:inline-flex"
            >
              Add Expense
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
