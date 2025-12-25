# Tic-Tac-Toe Web Frontend

This project is the **web frontend** for the Tic-Tac-Toe application.  
It provides a real-time user interface built with **React** and communicates with the backend via **SignalR**.

The frontend is intentionally simple and focused on UI concerns, delegating all game logic to the backend.

---

## Purpose

The frontend is responsible for:

- Rendering the game board and UI
- Managing client-side state and interactions
- Establishing and maintaining a SignalR connection
- Reacting to realtime game events
- Sending user actions to the backend

The frontend does **not** contain game rules or validation logic.

---

## Realtime Communication

- Connects to the BFF using SignalR
- Receives semantic game events:
  - `PlayerJoined`
  - `GameStarted`
  - `MoveMade`
  - `GameEnd`
- Sends user actions such as:
  - `MakeMove`

---

## State Management

- Uses React hooks for local state
- Separates game state, connection state, and UI state
- Designed for predictable, event-driven updates

---

## Configuration

Runtime configuration includes:

- BFF base URL
- Environment-specific settings

---

## Technology Stack

- React
- TypeScript
- SignalR client

