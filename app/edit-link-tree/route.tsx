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
        Edit your links!
        You are{" "}
        {ctx.message?.requesterCustodyAddress ||
          ctx.message?.verifiedWalletAddress}{" "}
        from {ctx.clientProtocol?.id}
      </span>
    ),
    buttons: [
      <Button action="post" target="/">Go to home</Button>,
    ]
  };
});

export const GET = handleRequest;
export const POST = handleRequest;