import Card from "@components/Elements/Card";
import MainLayout from "@components/Layouts/MainLayout";

const ExpencesPage = () => {
  return (
    <MainLayout type="expenses">
      {/* Top Content Start */}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Monthly Expenses" />
        <Card title="Recent Transactions" />
        <Card title="Budget Overview" />
      </div>

      {/* Bottom Content */}
      <div className="md:grid md:grid-cols-3 md:gap-x-6 mt-6">
        <Card
          title="Groceries"
          desc="Amount Spent: $200"
        />
        <Card
          title="Utilities"
          desc="Amount Spent: $150"
        />
        <Card
          title="Entertainment"
          desc="Amount Spent: $100"
        />
      </div>

      {/* Additional Section */}
      <div className="md:grid md:grid-cols-3 md:gap-x-6 mt-6">
        <Card
          title="Miscellaneous Expenses"
          desc="Total: $80"
        />
        <Card
          title="Savings Goals"
          desc="Goal: $500"
        />
        <Card
          title="Upcoming Bills"
          desc="Due Soon: $300"
        />
      </div>
    </MainLayout>
  );
};

export default ExpencesPage;
