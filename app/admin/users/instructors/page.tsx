import CoursesTable from "@/components/routes/admin/CoursesTable";
import FreelancersTable from "@/components/routes/admin/FreelancersTable";
import InstructorsTable from "@/components/routes/admin/InstructorsTable";
import InputSearch from "@/components/ui/InputSearch";
import { getAdminCoursesList, getFreelancersList, getInstructorsList } from "@/services/adminServices";
import React from "react";

const Page = async () => {
  const instructors = await getInstructorsList();

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">Instructor List</h2>

        <div className="w-1/2">
          <InputSearch />
        </div>
      </div>

      <InstructorsTable instructors={instructors} />
    </div>
  );
};

export default Page;
