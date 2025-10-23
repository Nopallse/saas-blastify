import { MessageSquare, Mail, Users, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export function DashboardPage() {
  const stats = [
    {
      title: 'Total Messages Sent',
      value: '12,456',
      icon: Send,
      change: '+12.5%',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'WhatsApp Broadcasts',
      value: '8,234',
      icon: MessageSquare,
      change: '+8.2%',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Gmail Campaigns',
      value: '4,222',
      icon: Mail,
      change: '+15.3%',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Active Contacts',
      value: '3,567',
      icon: Users,
      change: '+5.4%',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'WhatsApp',
      message: 'Product Launch Announcement',
      recipients: 1250,
      status: 'Completed',
      date: '2025-10-23 10:30',
    },
    {
      id: 2,
      type: 'Gmail',
      message: 'Weekly Newsletter',
      recipients: 2340,
      status: 'Completed',
      date: '2025-10-23 09:15',
    },
    {
      id: 3,
      type: 'WhatsApp',
      message: 'Flash Sale Alert',
      recipients: 890,
      status: 'In Progress',
      date: '2025-10-23 11:45',
    },
    {
      id: 4,
      type: 'Gmail',
      message: 'Customer Survey',
      recipients: 1560,
      status: 'Completed',
      date: '2025-10-22 16:20',
    },
    {
      id: 5,
      type: 'WhatsApp',
      message: 'Order Confirmation',
      recipients: 450,
      status: 'Completed',
      date: '2025-10-22 14:10',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-gray-900 mt-2">{stat.value}</p>
                    <p className="text-xs text-green-600 mt-2">{stat.change} from last month</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon size={24} className={stat.color} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Connection Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>WhatsApp Status</CardTitle>
            <CardDescription>Connection status for WhatsApp automation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Connected</span>
              </div>
              <Badge className="bg-green-500">Active</Badge>
            </div>
            <p className="text-sm text-gray-500 mt-4">Last synced: 2 minutes ago</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gmail Status</CardTitle>
            <CardDescription>Connection status for Gmail automation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Connected</span>
              </div>
              <Badge className="bg-green-500">Active</Badge>
            </div>
            <p className="text-sm text-gray-500 mt-4">Last synced: 5 minutes ago</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest messaging campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Campaign</TableHead>
                <TableHead>Recipients</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date & Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivity.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell>
                    <Badge
                      className={
                        activity.type === 'WhatsApp'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-purple-100 text-purple-700'
                      }
                    >
                      {activity.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{activity.message}</TableCell>
                  <TableCell>{activity.recipients.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        activity.status === 'Completed'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }
                    >
                      {activity.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600">{activity.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
