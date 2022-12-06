// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async (req, res) => {
  const response = await notion.databases.retrieve({
    database_id: "8b30f650340c4170a4d7bd4c48d9784f",
  });
  res.status(200).json({ response });
};
