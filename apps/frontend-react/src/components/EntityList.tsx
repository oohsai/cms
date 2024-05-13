import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Typography } from "@material-tailwind/react";
import { Button } from "./ui/button";
interface Entity {
  name: string;
  email: string;
  mobileNumber: number;
  dateOfBirth: string;
}

const TABLE_HEAD = ["Name", "Email", "Mobile Number", "Date of Birth"];

const EntityList: React.FC = () => {
  const [entities, setEntities] = useState<Entity[]>([]);

  useEffect(() => {
    fetchEntities();
  }, []);

  const fetchEntities = async () => {
    try {
      const response = await axios.get("http://localhost:3003");
      const data = await response.data;
      setEntities(data);
    } catch (error) {
      console.error("Error fetching entities:", error);
    }
  };

  const deleteEntity = async (email: string) => {
    try {
      await axios.delete("http://localhost:3003", {
        data: { email },
      });
      fetchEntities();
    } catch (error) {
      console.error("Error deleting entity:", error);
    }
  };
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-200 bg-blue-gray-100 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
            <th className="border-b border-blue-gray-200 bg-blue-gray-100 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none"
              >
                Actions
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {entities.map(({ name, email, mobileNumber, dateOfBirth }) => (
            <tr key={name}>
              <td className="p-4">{name}</td>
              <td className="p-4 bg-blue-gray-100/50">{email}</td>
              <td className="p-4">{mobileNumber}</td>
              <td className="p-4 bg-blue-gray-100/50">{dateOfBirth}</td>
              <td className="p-4 bg-blue-gray-100/50">
                <Button
                  as="button"
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                  onClick={() => deleteEntity(email)} // Add your edit functionality here
                >
                  Edit
                </Button>
                <Button
                  as="button"
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                  onClick={() => deleteEntity(email)} // Add your edit functionality here
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default EntityList;
