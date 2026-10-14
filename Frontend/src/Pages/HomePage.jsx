import {
  ArrowRight,
  BookOpen,
  Coffee,
  PieChart,
  ShieldCheck,
  Sparkle,
} from "lucide-react";
import React from "react";
import { useApp } from "../Context/AppContext";
import Button from "../Components/Ui/Button";

const HomePage = () => {
  const { setCurrentPage } = useApp();
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="reletive mt-10 sm:pt-12 mx-auto max-w-4xl px-4 pt-8 text-center  ">
        <div className="inline-flex mb-6 items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:border-indigo-900 dark:bg-indigo-900/40 dark:text-indigo-300 ">
          <Sparkle className="h-4 w-4" />
          <span>Designed for Indian Students & Young Earners</span>
        </div>
        <h1 className="text-3xl mt-5 sm:text-5xl font-extrabold tracking-wide text-slate-900 dark:text-white ">
          Track Every Rupee.
          <span className="block text-indigo-600 dark:text-indigo-400">
            Master Your Student Budget.
          </span>
        </h1>
        <p className="mt-8 text-sm sm:text-base mx-auto max-w-2xl  leading-relaxed text-slate-600 dark:text-slate-400">
          SpendWise is a clean, minimal personal expense tracker crafted
          specifically for Indian college students. Record hostel expenses,
          canteen chai, xerox printouts, and freelance earnings with zero bank
          integration.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            variant="primary"
            onClick={() => setCurrentPage("dashboard")}
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            Open Demo Dashboard
          </Button>
        </div>
        <div className="mt-12 mx-auto max-w-2xl border rounded-2xl border-slate-200 bg-white p-5 sm:p-6 shadow-md dark:border-slate-700 dark:bg-slate-800 text-left">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 ">
                AS
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-50">
                  Aarav Sharma (COEP Pune)
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Monthly Allowance:₹10,000 · Spent: ₹5,450
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold uppercase text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/40 px-2 py-0.5 rounded">
                Safe: 54% Used
              </span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center ">
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60">
              <span className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400 block">
                Total Inflow
              </span>
              <span className="text-sm sm:text-base font-bold text-green-600 dark:text-green-400">
                ₹16500
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60">
              <span className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400 block">
                Expenses
              </span>

              <span className="text-sm sm:text-base font-bold text-red-600 dark:text-red-400">
                ₹6444
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60">
              <span className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400 block">
                Net Balance
              </span>

              <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-50">
                ₹10056
              </span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Recent Student Logs
            </p>
            <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100 dark:border-slate-800">
              <span className="text-slate-900 dark:text-slate-50">
                Hostel Mess Share & Wi-Fi
              </span>

              <span className="font-semibold text-red-600 dark:text-red-400">
                -₹3,800
              </span>
            </div>
            <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100 dark:border-slate-800">
              <span className="text-slate-900 dark:text-slate-50">
                Freelance Frontend Project
              </span>

              <span className="font-semibold text-green-600 dark:text-green-400">
                +₹6,500
              </span>
            </div>
            <div className="flex items-center justify-between text-xs py-1.5">
              <span className="text-slate-900 dark:text-slate-50">
                Canteen Thali & Filter Coffee
              </span>

              <span className="font-semibold text-red-600 dark:text-red-400">
                -₹130
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
            Engineered For Student Life
          </h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Practical design decisions tailored for Indian academic life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
            <div className="h-10 w-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-50">
              100% Private & Manual
            </h3>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              No bank credentials, OTP scraping, or financial data leaks. You
              control every transaction entry directly on your device.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
            <div className="h-10 w-10 rounded-lg bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 flex items-center justify-center mb-4">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-50">
              Indian Academic Categories
            </h3>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Preset categories for Food (Chai/Canteen), Education
              (Books/Xerox), Travel (Metro/Auto), and Bills (Mobile 5G
              recharges).
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
            <div className="h-10 w-10 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
              <PieChart className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-50">
              Indian Academic Categories
            </h3>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Preset categories for Food (Chai/Canteen), Education
              (Books/Xerox), Travel (Metro/Auto), and Bills (Mobile 5G
              recharges).
            </p>
          </div>
        </div>
      </section>
      {/* Student Budgeting Rule: 50 / 30 / 20 */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">
              Student Budgeting Principle: The 50 / 30 / 20 College Rule
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
            Recommended breakdown for Indian students managing a monthly
            allowance (e.g. ₹8,000 / month):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                50% Essentials (₹4,000)
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
