/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
import { getAddressForFid, getFrameMessage } from "frames.js";
import { getPreviousFrame } from "frames.js/next/server";
import { DEFAULT_DEBUGGER_HUB_URL, createDebugUrl } from "../debug";

const handleRequest = frames(async (ctx) => {
  return  {
    image: (
      <span>
        Welcome to Link Tree!
      </span>
    ),
    buttons: [
      <Button action="post" target="/view-link-tree" key="1">Search link tree by fid</Button>,
      <Button action="post" target="/edit-link-tree" key="1">
        Edit my link trees
      </Button>,
    ]
  };
});

export const GET = handleRequest;
export const POST = handleRequest;