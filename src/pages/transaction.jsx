import Card from "@components/Elements/Card";
import MainLayout from "@components/Layouts/MainLayout";

const TransactionPage = () => {
    return (
        <MainLayout type="transaction">
            {/* top content start*/}
            <div className="md:grid md:grid-cols-3 md:gap-x-6">
                <Card title="Transaction" />
                <Card title="&nbsp;" />
                <Card title="&nbsp;" />
                <Card
                    tittle="&nbsp;"
                    desc="Lorem ipsum dolor sit amet consectur adipisicing elit. Ullam dolore sapiente suscipit nam, vel officia ipsam praesentium earum unde provident nisi corrupsi sit? Officia minima maxime magni querat id exercitionem."
                />

            </div>
            {/* bottom content end*/}
            <div className="md:grid md:grid-cols-3 md:gap-x-6">
                <Card desc="Lorem ipsum dolor sit amet consectur adipisicing elit. Ullam dolore sapiente suscipit nam, vel officia ipsam praesentium earum unde provident nisi corrupsi sit? Officia minima maxime magni querat id exercitionem."></Card>

            </div>
        </MainLayout>
    );
};

export default TransactionPage;