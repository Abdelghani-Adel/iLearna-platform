import CoursesTable from "@/components/routes/admin/CoursesTable";
import StudentsTable from "@/components/routes/admin/StudentsTable";
import InputSearch from "@/components/ui/InputSearch";
import { getUsersList } from "@/services/adminServices";

const Page = async () => {
  const students = await getUsersList();

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">All Students</h2>

        <div className="w-1/2">
          <InputSearch />
        </div>
      </div>

      <section className="mt-4">
        <StudentsTable students={students} />
      </section>
    </div>
  );
};

export default Page;
