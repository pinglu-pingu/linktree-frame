/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames/frames";
import { getAddressForFid, getFrameMessage } from "frames.js";
import { getPreviousFrame } from "frames.js/next/server";
import { DEFAULT_DEBUGGER_HUB_URL, createDebugUrl } from "../debug";

const handleRequest = frames(async (ctx) => {
  console.log("ctx", ctx?.message)
  return  {
    image: (
      <span>
        See the link tree of a user
      </span>
    ),
    buttons: [
      <Button action="post" target="/">Go to home</Button>,
    ]
  };
});

export const GET = handleRequest;
export const POST = handleRequest;