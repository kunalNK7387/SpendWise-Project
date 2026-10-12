import React, { useState } from "react";
import { Button } from "./Button";
import { useApp } from "../../Context/AppContext";
import { useTheme } from "../../Context/ThemeContext";

import {
  Wallet,
  Sun,
  Moon,
  Plus,
  Menu,
  X,
  LayoutDashboard,
  ReceiptText,
  Home,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";

export const Navbar = () => {
  const { currentPage, setCurrentPage, user, logout, openAddTransactionModal } =
    useApp();

  const { theme, toggleTheme } = useTheme();

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //Navigation To another Page
  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };
  // Navigation links
  const navLinks = [
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
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#4F46E5] text-white shadow-xs group-hover:bg-indigo-700 dark:bg-[#818CF8] dark:text-[#0F172A] transition-colors">
              <Wallet />
            </div>
            <div>
              <span className="text-lg tracking-tight text-[#0F172A] dark:text-[#F8FAFC] font-bold">
                SpendWise
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-semibold tracking-wider text-[#64748B] dark:text-[#94A3B8] uppercase">
                Student Edition
              </span>
            </div>
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer
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
        <div className="flex items-center gap-5">
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
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#E2E8F0] dark:border-[#334155] text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } theme`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <>
                <Moon className="h-3.5 w-3.5 text-[#4F46E5]" />
                <span className="hidden sm:inline">Dark Mode</span>
              </>
            ) : (
              <>
                <Sun className="h-3.5 w-3.5 text-amber-400" />
                <span className="hidden sm:inline">Light Mode</span>
              </>
            )}
          </button>
          {/* User Profile or Authentication Buttons */}
          {user ? (
            <div className="hidden sm:flex items-center gap-5 pl-2 border-l border-[#E2E8F0] dark:border-[#334155]">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-[#4F46E5] dark:bg-indigo-900/60 dark:text-[#818CF8]"
                title={user.name}
              >
                {user.avatarInitials}
              </div>

              <div className="hidden lg:block text-left text-xs">
                <p className="font-semibold text-[#0F172A] dark:text-[#F8FAFC] leading-none">
                  {user.name}
                </p>

                <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] leading-none mt-1 truncate max-w-[120px]">
                  {user.college?.split(",")[0] || "Student"}
                </p>
              </div>

              <button
                onClick={logout}
                className="p-1.5 text-[#64748B] hover:text-[#DC2626] dark:text-[#94A3B8] dark:hover:text-[#F87171] transition-colors cursor-pointer"
                title="Log Out"
                aria-label="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-[#E2E8F0] dark:border-[#334155]">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateTo("login")}
                leftIcon={<LogIn className="w-3.5 h-3.5" />}
              >
                Login
              </Button>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => navigateTo("register")}
                leftIcon={<UserPlus className="w-3.5 h-3.5" />}
              >
                Register
              </Button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-lg p-2 text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:bg-slate-800 dark:hover:text-[#F8FAFC] transition-colors cursor-pointer"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2E8F0] bg-white px-4 py-3 dark:border-[#334155] dark:bg-[#1E293B] shadow-lg animate-in slide-in-from-top-2 duration-150">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-1 pb-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-lg text-left ${
                  currentPage === link.id
                    ? "bg-indigo-50 text-[#4F46E5] dark:bg-indigo-950/40 dark:text-[#818CF8]"
                    : "text-[#64748B] hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]"
                }`}
              >
                {link.icon}
                {link.label}
              </button>
            ))}

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg border border-[#E2E8F0] dark:border-[#334155] text-[#0F172A] dark:text-[#F8FAFC] mt-1"
            >
              <span>Color Theme</span>

              <span className="flex items-center gap-1.5 font-semibold text-[#4F46E5] dark:text-[#818CF8]">
                {theme === "dark" ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-indigo-600" />
                    <span>Light Mode</span>
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Mobile User Actions */}
          <div className="pt-3 border-t border-[#E2E8F0] dark:border-[#334155] flex flex-col gap-2">
            {user ? (
              <>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAddTransactionModal();
                  }}
                  leftIcon={<Plus className="w-4 h-4" />}
                  className="w-full"
                >
                  Record Expense
                </Button>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs">
                    <p className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                      {user.name}
                    </p>

                    <p className="text-[#64748B] dark:text-[#94A3B8]">
                      {user.email}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign Out
                  </Button>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => navigateTo("login")}
                >
                  Login
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigateTo("register")}
                >
                  Register
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
