import AdminChart from "@/components/admin-chart/AdminChart";
import CompaniesTable from "@/components/companies-table/CompaniesTable";
import DataCard from "@/components/data-card/DataCard";
import UsersTable from "@/components/users-table/UsersTable";

const page = () => {
  //#6DD4B1 : green blue:#3B76EF purble:#A66DD4 light-blue:#63C7FF
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex gap-4 mt-10 px-10 flex-wrap">
        <DataCard color="#3B76EF" title="Bidding Companies" counter={123123} />
        <DataCard color="#63C7FF" title="Offer Companies" counter={230129} />
        <DataCard color="#A66DD4" title="Biddings " counter={34251} />
        <DataCard color="#6DD4B1" title="Offers" counter={45234} />
      </div>
      <AdminChart />

      <div className="tabs tabs-lift min-w-[90%] overflow-x-scroll ">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab z-0"
          aria-label="Users"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 ">
         <UsersTable/>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab z-0"
          aria-label="Companies "
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <CompaniesTable/>
        </div>

       
      </div>
    </div>
  );
};

export default page;
