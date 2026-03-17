"use client"
import { createContext, useContext, useState } from "react";

interface ClientFlowContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ClientFlowContext = createContext<ClientFlowContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ClientFlowProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ClientFlowContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </ClientFlowContext.Provider>
  );
}

export function useClientFlow() {
  return useContext(ClientFlowContext);
}
