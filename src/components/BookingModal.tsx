import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { SERVICE_TYPES, TIME_SLOTS } from '@/types/appointment';
import { useAppContext } from '@/contexts/AppContext';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export const BookingModal = ({ open, onClose }: BookingModalProps) => {
  const { addAppointment } = useAppContext();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    clientName: '', clientEmail: '', clientPhone: '', serviceType: '', time: '', location: '', notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !formData.time || !formData.serviceType) return;
    
    addAppointment({
      ...formData,
      date: format(date, 'yyyy-MM-dd'),
    });
    
    setFormData({ clientName: '', clientEmail: '', clientPhone: '', serviceType: '', time: '', location: '', notes: '' });
    setDate(undefined);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Full Name *</Label>
              <Input required value={formData.clientName} onChange={e => setFormData({...formData, clientName: e.target.value})} />
            </div>
            <div>
              <Label>Email *</Label>
              <Input type="email" required value={formData.clientEmail} onChange={e => setFormData({...formData, clientEmail: e.target.value})} />
            </div>
            <div>
              <Label>Phone *</Label>
              <Input required value={formData.clientPhone} onChange={e => setFormData({...formData, clientPhone: e.target.value})} />
            </div>
            <div>
              <Label>Service Type *</Label>
              <Select value={formData.serviceType} onValueChange={v => setFormData({...formData, serviceType: v})}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{SERVICE_TYPES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label>Select Date *</Label>
            <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < new Date()} className="border rounded-md" />
          </div>
          <div>
            <Label>Select Time *</Label>
            <Select value={formData.time} onValueChange={v => setFormData({...formData, time: v})}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>{TIME_SLOTS.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label>Location *</Label>
            <Input required placeholder="Address or 'Mobile Service'" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
          </div>
          <div>
            <Label>Additional Notes</Label>
            <Textarea value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} />
          </div>
          <Button type="submit" className="w-full">Book Appointment</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
