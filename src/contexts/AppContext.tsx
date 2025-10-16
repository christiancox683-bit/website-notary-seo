import React, { createContext, useContext, useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Appointment } from '@/types/appointment';

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => void;
  updateAppointmentStatus: (id: string, status: Appointment['status']) => void;
  deleteAppointment: (id: string) => void;
}

const defaultAppContext: AppContextType = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  appointments: [],
  addAppointment: () => {},
  updateAppointmentStatus: () => {},
  deleteAppointment: () => {},
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  const addAppointment = (appointmentData: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => {
    const newAppointment: Appointment = {
      ...appointmentData,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    setAppointments(prev => [...prev, newAppointment]);
    toast({
      title: "Appointment Booked!",
      description: `Confirmation email sent to ${appointmentData.clientEmail}`,
    });
  };

  const updateAppointmentStatus = (id: string, status: Appointment['status']) => {
    setAppointments(prev => prev.map(apt => apt.id === id ? { ...apt, status } : apt));
    toast({ title: "Appointment Updated", description: `Status changed to ${status}` });
  };

  const deleteAppointment = (id: string) => {
    setAppointments(prev => prev.filter(apt => apt.id !== id));
    toast({ title: "Appointment Deleted" });
  };

  return (
    <AppContext.Provider value={{ sidebarOpen, toggleSidebar, appointments, addAppointment, updateAppointmentStatus, deleteAppointment }}>
      {children}
    </AppContext.Provider>
  );
};
