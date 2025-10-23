import { useState } from 'react';
import { MessageSquare, Upload, Users, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Switch } from '../ui/switch';

export function WhatsAppPage() {
  const [isConnected, setIsConnected] = useState(true);
  const [messageText, setMessageText] = useState('');
  const [messageDelay, setMessageDelay] = useState('5');
  const [groupUrl, setGroupUrl] = useState('');

  const whatsappNumbers = [
    { id: 1, name: 'John Smith', number: '+1 234 567 8901', status: 'Active' },
    { id: 2, name: 'Sarah Johnson', number: '+1 234 567 8902', status: 'Active' },
    { id: 3, name: 'Mike Davis', number: '+1 234 567 8903', status: 'Inactive' },
    { id: 4, name: 'Emily Brown', number: '+1 234 567 8904', status: 'Active' },
    { id: 5, name: 'James Wilson', number: '+1 234 567 8905', status: 'Active' },
    { id: 6, name: 'Lisa Anderson', number: '+1 234 567 8906', status: 'Inactive' },
  ];

  const groupMembers = [
    { id: 1, name: 'Product Updates Group', members: 156, extracted: 145 },
    { id: 2, name: 'Customer Support', members: 89, extracted: 89 },
    { id: 3, name: 'Sales Team', members: 42, extracted: 42 },
  ];

  return (
    <div className="space-y-6">
      {/* Connection Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="text-green-500" />
            WhatsApp Connection
          </CardTitle>
          <CardDescription>Manage your WhatsApp integration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`h-4 w-4 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
              <div>
                <p className="text-gray-900">{isConnected ? 'Connected' : 'Disconnected'}</p>
                <p className="text-sm text-gray-500">
                  {isConnected ? 'WhatsApp account is active and ready' : 'Connect your WhatsApp account'}
                </p>
              </div>
            </div>
            <Button
              onClick={() => setIsConnected(!isConnected)}
              className={isConnected ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}
            >
              {isConnected ? 'Disconnect' : 'Connect WhatsApp'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="contacts" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="groups">Group Grabber</TabsTrigger>
          <TabsTrigger value="broadcast">Broadcast</TabsTrigger>
        </TabsList>

        {/* Contacts Tab */}
        <TabsContent value="contacts" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>WhatsApp Contacts</CardTitle>
                  <CardDescription>Manage your imported WhatsApp numbers</CardDescription>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <Upload size={16} className="mr-2" />
                  Import Contacts
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Number</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {whatsappNumbers.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell>{contact.name}</TableCell>
                      <TableCell className="text-gray-600">{contact.number}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            contact.status === 'Active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                          }
                        >
                          {contact.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Group Grabber Tab */}
        <TabsContent value="groups" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-blue-500" />
                Group Grabber Database
              </CardTitle>
              <CardDescription>Extract member information from WhatsApp groups</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="group-url">WhatsApp Group Invite Link</Label>
                  <div className="flex gap-2">
                    <Input
                      id="group-url"
                      placeholder="https://chat.whatsapp.com/..."
                      value={groupUrl}
                      onChange={(e) => setGroupUrl(e.target.value)}
                    />
                    <Button className="bg-blue-500 hover:bg-blue-600">
                      Extract Members
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    💡 Tip: Paste a WhatsApp group invite link to extract all member phone numbers automatically.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-gray-900 mb-4">Extracted Groups</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Group Name</TableHead>
                      <TableHead>Total Members</TableHead>
                      <TableHead>Extracted</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {groupMembers.map((group) => (
                      <TableRow key={group.id}>
                        <TableCell>{group.name}</TableCell>
                        <TableCell>{group.members}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-700">
                            {group.extracted} numbers
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Export</Button>
                          <Button variant="ghost" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Broadcast Tab */}
        <TabsContent value="broadcast" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="text-blue-500" />
                Send Broadcast Message
              </CardTitle>
              <CardDescription>Send messages to multiple WhatsApp contacts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="message">Message Content</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    rows={6}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">
                    Character count: {messageText.length}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image-upload">Attach Image (Optional)</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      className="flex-1"
                    />
                    <Button variant="outline">
                      <Upload size={16} className="mr-2" />
                      Upload
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="delay">Delay Between Messages (seconds)</Label>
                    <Input
                      id="delay"
                      type="number"
                      placeholder="5"
                      value={messageDelay}
                      onChange={(e) => setMessageDelay(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Randomize Delay</Label>
                    <div className="flex items-center gap-2 h-10">
                      <Switch id="randomize" />
                      <Label htmlFor="randomize" className="text-sm text-gray-600">
                        Add random variation to delay
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    ⚠️ Warning: Sending too many messages in a short time may result in WhatsApp blocking your number. Use appropriate delays.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-gray-900">Ready to send</p>
                      <p className="text-sm text-gray-500">156 recipients selected</p>
                    </div>
                    <Button size="lg" className="bg-green-500 hover:bg-green-600">
                      <Send size={18} className="mr-2" />
                      Send Broadcast
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
