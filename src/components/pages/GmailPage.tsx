import { useState } from 'react';
import { Mail, Upload, Send, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Switch } from '../ui/switch';

export function GmailPage() {
  const [isConnected, setIsConnected] = useState(true);
  const [subject, setSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [fileName, setFileName] = useState('');

  const emailCampaigns = [
    { id: 1, subject: 'Weekly Newsletter - Oct 2025', recipients: 2340, sent: 2340, status: 'Completed', date: '2025-10-23' },
    { id: 2, subject: 'Product Launch Announcement', recipients: 1890, sent: 1890, status: 'Completed', date: '2025-10-22' },
    { id: 3, subject: 'Customer Survey', recipients: 1560, sent: 1102, status: 'In Progress', date: '2025-10-23' },
    { id: 4, subject: 'Flash Sale - 50% Off', recipients: 3200, sent: 3200, status: 'Completed', date: '2025-10-21' },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="space-y-6">
      {/* Connection Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="text-purple-500" />
            Gmail Connection
          </CardTitle>
          <CardDescription>Manage your Gmail integration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`h-4 w-4 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
              <div>
                <p className="text-gray-900">{isConnected ? 'Connected' : 'Disconnected'}</p>
                <p className="text-sm text-gray-500">
                  {isConnected ? 'john.doe@company.com' : 'Connect your Gmail account'}
                </p>
              </div>
            </div>
            <Button
              onClick={() => setIsConnected(!isConnected)}
              className={isConnected ? 'bg-red-500 hover:bg-red-600' : 'bg-purple-500 hover:bg-purple-600'}
            >
              {isConnected ? 'Disconnect' : 'Connect Gmail'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="compose" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="compose">Compose Broadcast</TabsTrigger>
          <TabsTrigger value="campaigns">Campaign History</TabsTrigger>
        </TabsList>

        {/* Compose Tab */}
        <TabsContent value="compose" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="text-blue-500" />
                Send Email Broadcast
              </CardTitle>
              <CardDescription>Compose and send emails to multiple recipients</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {/* Email Recipients */}
                <div className="space-y-2">
                  <Label htmlFor="recipients">Email Recipients (CSV Upload)</Label>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Input
                        id="recipients"
                        type="file"
                        accept=".csv"
                        onChange={handleFileUpload}
                      />
                    </div>
                    <Button variant="outline">
                      <Upload size={16} className="mr-2" />
                      Upload CSV
                    </Button>
                  </div>
                  {fileName && (
                    <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <FileText size={16} className="text-green-600" />
                      <span className="text-sm text-green-700">{fileName}</span>
                      <Badge className="bg-green-500 ml-auto">1,234 emails</Badge>
                    </div>
                  )}
                  <p className="text-xs text-gray-500">
                    Upload a CSV file with email addresses (one per line or in a column named "email")
                  </p>
                </div>

                {/* Email Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Email Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Enter your email subject..."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                {/* Email Body */}
                <div className="space-y-2">
                  <Label htmlFor="body">Email Body</Label>
                  <Textarea
                    id="body"
                    placeholder="Type your email content here... You can use HTML formatting."
                    rows={12}
                    value={emailBody}
                    onChange={(e) => setEmailBody(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">
                    HTML formatting is supported. Use variables like {'{name}'}, {'{email}'} for personalization.
                  </p>
                </div>

                {/* Attachments */}
                <div className="space-y-2">
                  <Label htmlFor="attachment">Attachments (Optional)</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="attachment"
                      type="file"
                      multiple
                      className="flex-1"
                    />
                    <Button variant="outline">
                      <Upload size={16} className="mr-2" />
                      Add Files
                    </Button>
                  </div>
                </div>

                {/* Send Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div className="space-y-2">
                    <Label htmlFor="delay">Delay Between Emails (seconds)</Label>
                    <Input
                      id="delay"
                      type="number"
                      placeholder="2"
                      defaultValue="2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Track Opens</Label>
                    <div className="flex items-center gap-2 h-10">
                      <Switch id="track" defaultChecked />
                      <Label htmlFor="track" className="text-sm text-gray-600">
                        Enable email open tracking
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Information Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    💡 Pro Tip: Gmail has sending limits. Free accounts: 500 emails/day, Workspace accounts: 2,000 emails/day.
                  </p>
                </div>

                {/* Send Button */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900">Ready to send</p>
                      <p className="text-sm text-gray-500">
                        {fileName ? '1,234 recipients' : 'No recipients uploaded'}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        Save as Draft
                      </Button>
                      <Button 
                        size="lg" 
                        className="bg-purple-500 hover:bg-purple-600"
                        disabled={!fileName}
                      >
                        <Send size={18} className="mr-2" />
                        Send Email Broadcast
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Campaign History Tab */}
        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campaign History</CardTitle>
              <CardDescription>View your past email campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Sent</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emailCampaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="max-w-xs truncate">{campaign.subject}</TableCell>
                      <TableCell>{campaign.recipients.toLocaleString()}</TableCell>
                      <TableCell>{campaign.sent.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            campaign.status === 'Completed'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }
                        >
                          {campaign.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-600">{campaign.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                        <Button variant="ghost" size="sm">Analytics</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
