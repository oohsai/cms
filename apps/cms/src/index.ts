import express from "express";
import { PrismaClient } from "@repo/db/client";
import cors from "cors";
const app = express();
const prisma = new PrismaClient();
app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { name, email, mobileNumber, dateOfBirth } = req.body;

  const existingUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return res.status(409).json({
      message: "Email already taken/Incorrect inputs",
    });
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        mobileNumber,
        dateOfBirth,
      },
    });
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in Creating a user" });
  }
});

app.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error in fetching" }).status(500);
  }
});

app.put("/", async (req, res) => {
  const { email, ...updateData } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedInfo = await prisma.user.update({
      where: {
        email: email,
      },
      data: updateData,
    });
    return res.status(200).json(updatedInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Retry Updating!!" });
  }
});

app.delete("/", async (req, res) => {
  const { email } = req.body;
  try {
    const users = await prisma.user.delete({
      where: {
        email: email,
      },
    });
    return res.status(200).json("Deleted the User");
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error in Deleting! Try Again" }).status(500);
  }
});

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});
