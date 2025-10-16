import { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, MapPin, Phone, Mail, Trash2, Filter } from 'lucide-react';
import { Appointment } from '@/types/appointment';

export const AdminAppointments = () => {
  const { appointments, updateAppointmentStatus, deleteAppointment } = useAppContext();
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filteredAppointments = appointments.filter(apt => {
    const matchesFilter = filter === 'all' || apt.status === filter;
    const matchesSearch = apt.clientName.toLowerCase().includes(search.toLowerCase()) ||
                          apt.clientEmail.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: Appointment['status']) => {
    const colors = { pending: 'bg-yellow-500', confirmed: 'bg-blue-500', completed: 'bg-green-500', cancelled: 'bg-red-500' };
    return colors[status];
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Appointment Management</span>
            <Badge variant="outline">{appointments.length} Total</Badge>
          </CardTitle>
          <div className="flex gap-4 mt-4">
            <Input placeholder="Search by name or email..." value={search} onChange={e => setSearch(e.target.value)} className="max-w-xs" />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredAppointments.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No appointments found</p>
            ) : (
              filteredAppointments.map(apt => (
                <Card key={apt.id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{apt.clientName}</h3>
                        <Badge className={getStatusColor(apt.status)}>{apt.status}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1"><Mail className="w-4 h-4" />{apt.clientEmail}</div>
                        <div className="flex items-center gap-1"><Phone className="w-4 h-4" />{apt.clientPhone}</div>
                        <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{apt.date}</div>
                        <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{apt.time}</div>
                        <div className="flex items-center gap-1"><MapPin className="w-4 h-4" />{apt.location}</div>
                        <div className="font-medium">{apt.serviceType}</div>
                      </div>
                      {apt.notes && <p className="text-sm text-gray-600 italic">Notes: {apt.notes}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Select value={apt.status} onValueChange={(v) => updateAppointmentStatus(apt.id, v as Appointment['status'])}>
                        <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="confirmed">Confirmed</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="destructive" size="sm" onClick={() => deleteAppointment(apt.id)}><Trash2 className="w-4 h-4" /></Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
