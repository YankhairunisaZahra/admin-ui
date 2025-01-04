/* eslint-disable no-unused-vars */
import Card from "@components/Elements/Card";
import MainLayout from "@components/Layouts/MainLayout";
import bills from "@data/bills";
import expensesBreakdown from "@data/expensesBreakdown";
import transactions from "@data/transactions";
import CardBill from "@components/Fragments/dashboard/CardBill";
import { useState } from "react";
import { Icon } from "@components/Elements/Icon";
import CardBalance from "@components/fragments/dashboard/CardBalance";
import CardGoal from "@components/fragments/dashboard/CardGoal";
import CardStatistic from "@components/fragments/dashboard/CardStatistic";

const Dashboard = () => {
  const tabs = ["All", "Revenue", "Expense"];

  const [trxs, setTrx] = useState(transactions);
  const [activeTab, setActiveTab] = useState("All");

  function handleClick(e) {
    const transactionsFiltered =
      e.target.value != "All"
        ? transactions.filter(({ type }) => type == e.target.value)
        : transactions;

    setActiveTab(e.target.value);
    setTrx(transactionsFiltered);
  }

  const billCard = bills.map((bill) => (
    <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
      <div className="flex">
        <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
          <span className="text-xs">{bill.month}</span>
          <span className="text-2xl font-bold">{bill.date}</span>
        </div>
        <div>
          <img className="h-6" src={`/images/${bill.logo}`} />
          <span className="font-bold">{bill.name}</span>
          <br />
          <span className="text-xs">Last Charge - {bill.lastCharge}</span>
        </div>
      </div>
      <div className="flex place-content-center flex-col">
        <span className="p-2 border rounded-lg font-bold text-center">
          ${bill.amount}
        </span>
      </div>
    </div>
  ));
  const expenseBreakdown = expensesBreakdown.map((expense) => (
    <div key={expense.id} className="flex pb-4 justify-between">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {expense.icon}
        </div>
        <div className="ms-4">
          <span className="text-gray-02">{expense.category}</span>
          <br />
          <span className="font-bold text-lg">${expense.amount}</span>
          <div className="flex">
            <span className="text-gray-02">{expense.percentage}%</span>{" "}
            {expense.arrow}
          </div>
        </div>
      </div>
      <div className="flex place-content-center flex-col me-8">
        <Icon.ArrowRight />
      </div>
    </div>
  ));
  const transactionCard = trxs.map((transaction) => (
    <div key={transaction.id} className="flex justify-between my-6">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {transaction.icon}
        </div>
        <div className="ms-4">
          <span className="text-xl font-bold">
            {transaction.transactionName}
          </span>
          <br />
          <span className="text-gray-400">{transaction.shopName}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-gray-700">
          ${transaction.amount}
        </span>
        <br />
        <span className="text-gray-400">{transaction.date}</span>
      </div>
    </div>
  ));
  return (
    <MainLayout type="dashboard">
      {/* Top Content */}
      <div className="grid md:grid-cols-3 gap-6">
        <CardBalance />
        <CardGoal />
        <Card
          title="Upcoming Bills"
          desc={
            <div className="h-full flex flex-col justify-between">
              {billCard}
            </div>
          }
        />
      </div>

      {/* Bottom Content */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <Card
          variant="md:col-span-1 md:row-span-2"
          title="Recent Transaction"
          desc={
            <div>
              {/* Tabs */}
              <div className="mb-4 flex gap-4">
                {tabs.map((tab) => (
                  <button
                    className={`px-4 py-2 font-bold border-b-4 ${activeTab === tab
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500"
                      }`}
                    key={tab}
                    value={tab}
                    onClick={handleClick}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Transactions */}
              <div className="max-h-[300px] overflow-y-auto">
                {transactionCard}
              </div>
            </div>
          }
        />

        {/* Statistics Card */}
        <CardStatistic />

        {/* Expenses Breakdown */}
        <Card
          variant="md:col-span-2"
          title="Expenses Breakdown"
          desc={
            <div className="grid lg:grid-cols-3 gap-4">
              {expenseBreakdown}
            </div>
          }
        />
      </div>
    </MainLayout>
  );
};

export default Dashboard;