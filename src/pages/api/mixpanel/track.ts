import { NextApiRequest, NextApiResponse } from "next";

// import { Logger } from "@utils/logger";
// import mixpanel from "@utils/mixpanel";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const event = req.body.event;

    try {
      return res.status(200).json({
        message: "Success POST",
        event: event,
      });
    } catch (e) {
      return res.status(500).json({
        message: "NextJS Server error: unable to track mixpanel",
      });
    }
  } else if (req.method === "GET") {
    const date = new Date(); // Attach to respose to keep receiving 200 instead of 304.
    try {
      return res.status(200).json({
        message: `Success GET at ${date.toISOString()}`,
      });
    } catch (e) {
      return res.status(500).json({
        message: "NextJS Server error: unable to track mixpanel",
      });
    }
  }
}
