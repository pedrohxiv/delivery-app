import cors from "cors";
import express, { Request, Response } from "express";

import { db } from "./lib/db";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/categories", async (_req: Request, res: Response) => {
  try {
    const categories = await db.category.findMany();

    return res.json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to get the categories" });
  }
});

app.get("/featureds", async (_req: Request, res: Response) => {
  try {
    const featureds = await db.featured.findMany({
      include: {
        restaurants: {
          include: {
            restaurant: {
              include: {
                category: true,
                dishes: true,
              },
            },
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return res.json(featureds);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to get the featureds" });
  }
});

app.get("/restaurants", async (_req: Request, res: Response) => {
  try {
    const restaurants = await db.restaurant.findMany({
      include: {
        category: true,
        dishes: true,
      },
    });

    return res.json(restaurants);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to get the restaurants" });
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`App listening on port ${process.env.PORT || 3000}!`)
);
