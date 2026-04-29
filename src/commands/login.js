const http = require("http");
const axios = require("axios");

const open = (...args) => import("open").then((mod) => mod.default(...args));

const { saveCredentials } = require("../utils/auth");

module.exports = async () => {
  try {
    const PORT = 8787;

    const server = http.createServer(async (req, res) => {
      const url = new URL(req.url, `http://localhost:${PORT}`);

      if (url.pathname === "/callback") {
        const token = url.searchParams.get("token");

        if (!token) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Missing token");
          return;
        }

        await saveCredentials({
          access_token: token,
        });

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Login successful. You can close this tab.");

        console.log("Login successful");
        server.close();
        process.exit(0);
      }

      res.writeHead(404);
      res.end("Not found");
    });

    server.listen(PORT, () => {
      console.log(`Waiting for authentication on http://localhost:${PORT}`);
    });

    const { data } = await axios.get(
      "http://localhost:3000/api/v1/auth/github/start?mode=cli",
      {
        headers: {
          "X-API-Version": "1",
        },
      },
    );

    console.log("Opening browser for login...");
    await open(data.url);
  } catch (err) {
    console.error("Status:", err.response?.status);
    console.error("URL:", err.config?.url);
    console.error("Data:", err.response?.data);
  }
};
