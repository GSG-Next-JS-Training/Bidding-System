import AdminChart from "@/components/admin-chart/AdminChart";
import AdminHeader from "@/components/admin-header";
import CompaniesTable from "@/components/companies-table/CompaniesTable";
import UsersTable from "@/components/users-table/UsersTable";

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <AdminHeader/>
      <AdminChart />

      <div className="tabs tabs-lift min-w-[90%] overflow-x-scroll ">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab z-0"
          aria-label="Users"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 ">
          <UsersTable />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab z-0"
          aria-label="Companies "
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <CompaniesTable />
        </div>
      </div>
    </div>
  );
};

export default page;
