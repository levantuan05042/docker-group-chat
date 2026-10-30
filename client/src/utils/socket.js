import { io } from "socket.io-client";

// Detect backend URL (handles localhost, LAN IP, or production origin)
const getSocketUrl = () => {
  if (typeof window === "undefined") return "http://localhost:5000";
  // In development Vite proxy handles /socket.io, but if accessing directly from mobile phone via LAN IP:
  const port = window.location.port;
  if (port === "3000") {
    // We can point to the same hostname with port 5000 if proxy isn't used
    return `${window.location.protocol}//${window.location.hostname}:5000`;
  }
  return window.location.origin;
};

export const socket = io(getSocketUrl(), {
  autoConnect: true,
  transports: ["websocket", "polling"],
  reconnectionAttempts: 10,
  reconnectionDelay: 1000
});
