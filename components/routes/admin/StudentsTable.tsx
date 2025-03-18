"use client";

import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AdminCourse } from "@/types/api/responses/IGetAdminCoursesList";
import { useRouter } from "next/navigation";
import { encrypt } from "@/utils/Cryptojs";
import { ISystemStudent } from "@/types/api/responses/Users";

const statusColors: Record<string, string> = {
  published: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  drafted: "bg-gray-100 text-gray-700",
  rejected: "bg-red-100 text-red-700",
};

interface IProps {
  students: ISystemStudent[];
}

const StudentsTable: React.FC<IProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedCourse(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedCourse(null);
  };

  const onView = (id: number) => {
    handleClose();
  };

  const onDraft = (id: number) => {
    handleClose();
  };

  const onEdit = (id: number) => {
    handleClose();
    // router.push(`/admin/courses/${encrypt(id.toString())}`);
  };

  const onDelete = (id: number) => {
    handleClose();
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 text-sm text-left rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">Student Name</th>
            <th className="p-3">Email address</th>
            <th className="p-3">Enrolled Courses</th>
            <th className="p-3">Last Activity</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.students.map((student) => (
            <tr key={student.id} className="border-b border-gray-200">
              <td className="p-3">{student.id}</td>
              <td className="p-3">{student.name}</td>
              <td className="p-3">{student.email}</td>

              <td className="p-3">{student.enrolledCourses}</td>
              <td className="p-3">{student.lastActivity}</td>
              <td className="p-3">
                <IconButton onClick={(e) => handleClick(e, student.id)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && selectedCourse === student.id}
                  onClose={handleClose}
                  classes={{ paper: "w-48" }}
                >
                  <MenuItem onClick={() => onView(student.id)}>View</MenuItem>
                  <MenuItem onClick={() => onDraft(student.id)}>Draft</MenuItem>
                  <MenuItem onClick={() => onEdit(student.id)}>Edit</MenuItem>
                  <MenuItem onClick={() => onDelete(student.id)} className="text-red-600">
                    Delete
                  </MenuItem>
                </Menu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
