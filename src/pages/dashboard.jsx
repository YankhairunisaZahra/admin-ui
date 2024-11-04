import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card 
          title="Goals"
          desc="Lorem ipsum dolor sit amet consectur adipisicing elit. Ullam dolore sapiente suscipit nam, vel officia ipsam praesentium earum unde provident nisi corrupsi sit? Officia minima maxime magni querat id exercitionem." 
          />
        <Card title="Upcoming Bill" /> 
        <div className="md:col-span-1">
          <Card title="Recent Transaction" />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card title="Recent Transactions" 
            desc="Lorem ipsum dolor sit amet consectur adipisicing elit. Ullam dolore sapiente suscipit nam, vel officia ipsam praesentium earum unde provident nisi corrupsi sit? Officia minima maxime magni querat id exercitionem."
          />
          <Card title="Expenses Breakdown" />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
        <Card title="Statistics" />
        <Card title="Expenses Breakdown" />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;