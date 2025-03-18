export type ISystemStudent = {
  id: number;
  name: string;
  email: string;
  enrolledCourses: number;
  lastActivity: string;
};

export type ISystemFreelancer = {
  id: number;
  name: string;
  email: string;
  lastActivity: string;
  averageRating: number;
  status: string;
  coursesCreated: number;
};
