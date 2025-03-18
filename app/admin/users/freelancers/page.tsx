import CoursesTable from "@/components/routes/admin/CoursesTable";
import FreelancersTable from "@/components/routes/admin/FreelancersTable";
import InputSearch from "@/components/ui/InputSearch";
import { getAdminCoursesList, getFreelancersList } from "@/services/adminServices";
import React from "react";

const Page = async () => {
  const freelancers = await getFreelancersList();

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">Freelancer List</h2>

        <div className="w-1/2">
          <InputSearch />
        </div>
      </div>

      <FreelancersTable freelancers={freelancers} />
    </div>
  );
};

export default Page;
