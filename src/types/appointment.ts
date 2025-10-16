export interface Appointment {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceType: string;
  date: string;
  time: string;
  location: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export const SERVICE_TYPES = [
  'Loan Signing',
  'General Notarization',
  'Mobile Notary',
  'Remote Online Notarization (RON)',
  'Real Estate Closing',
  'Power of Attorney',
  'Affidavits',
  'Other'
];

export const TIME_SLOTS = [
  '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM', '06:00 PM'
];
