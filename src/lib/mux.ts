import Mux from "@mux/mux-node";

const MUX_TOKEN_ID = process.env.MUX_TOKEN_ID;

if (!MUX_TOKEN_ID) {
  throw new Error(
    "Error: Please add MUX_TOKEN_ID from Mux Dashboard to .env or .env.local",
  );
}

const MUX_TOKEN_SECRET = process.env.MUX_TOKEN_SECRET;

if (!MUX_TOKEN_SECRET) {
  throw new Error(
    "Error: Please add MUX_TOKEN_SECRET from Mux Dashboard to .env or .env.local",
  );
}

export const mux = new Mux({
  tokenId: MUX_TOKEN_ID,
  tokenSecret: MUX_TOKEN_SECRET,
});
