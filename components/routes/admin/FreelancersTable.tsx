"use client";

import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AdminCourse } from "@/types/api/responses/IGetAdminCoursesList";
import { useRouter } from "next/navigation";
import { encrypt } from "@/utils/Cryptojs";
import { ISystemFreelancer, ISystemStudent } from "@/types/api/responses/Users";

const statusColors: Record<string, string> = {
  suspended: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  active: "bg-gray-100 text-gray-700",
  rejected: "bg-red-100 text-red-700",
};

interface IProps {
  freelancers: ISystemFreelancer[];
}

const FreelancersTable: React.FC<IProps> = (props) => {
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
            <th className="p-3">Status</th>
            <th className="p-3">Created Courses</th>
            <th className="p-3">Average Rating</th>
            <th className="p-3">Last Activity</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.freelancers.map((freelancer) => (
            <tr key={freelancer.id} className="border-b border-gray-200">
              <td className="p-3">{freelancer.id}</td>
              <td className="p-3">{freelancer.name}</td>
              <td className="p-3">{freelancer.email}</td>
              <td className="p-3">
                <span className={`p-3 rounded px-2 py-1 text-xs font-semibold ${statusColors[freelancer.status]}`}>
                  {freelancer.status}
                </span>
              </td>

              <td className="p-3">{freelancer.coursesCreated}</td>
              <td className="p-3">{freelancer.averageRating}</td>
              <td className="p-3">{freelancer.lastActivity}</td>

              <td className="p-3">
                <IconButton onClick={(e) => handleClick(e, freelancer.id)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && selectedCourse === freelancer.id}
                  onClose={handleClose}
                  classes={{ paper: "w-48" }}
                >
                  <MenuItem onClick={() => onView(freelancer.id)}>View</MenuItem>
                  <MenuItem onClick={() => onDraft(freelancer.id)}>Draft</MenuItem>
                  <MenuItem onClick={() => onEdit(freelancer.id)}>Edit</MenuItem>
                  <MenuItem onClick={() => onDelete(freelancer.id)} className="text-red-600">
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

export default FreelancersTable;
