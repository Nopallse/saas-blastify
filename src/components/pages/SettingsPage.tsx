import { useState } from 'react';
import { Settings, Key, User, Bell, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';

export function SettingsPage() {
  const [whatsappApiKey, setWhatsappApiKey] = useState('');
  const [gmailApiKey, setGmailApiKey] = useState('');
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@company.com');

  return (
    <div className="space-y-6">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="text-blue-500" />
                Profile Settings
              </CardTitle>
              <CardDescription>Manage your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="h-20 w-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
                  JD
                </div>
                <div>
                  <Button variant="outline">Change Avatar</Button>
                  <p className="text-xs text-gray-500 mt-2">JPG, PNG or GIF. Max size 2MB.</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Input
                    id="timezone"
                    placeholder="UTC-05:00 Eastern Time"
                  />
                </div>
              </div>

              <Separator />

              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-blue-500 hover:bg-blue-600">Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* API Keys Tab */}
        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="text-blue-500" />
                API Keys & Credentials
              </CardTitle>
              <CardDescription>Manage your integration credentials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* WhatsApp API */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-900 mb-2">WhatsApp Business API</h4>
                  <p className="text-sm text-gray-500 mb-4">
                    Connect your WhatsApp Business API credentials
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp-api">API Key</Label>
                    <div className="flex gap-2">
                      <Input
                        id="whatsapp-api"
                        type="password"
                        placeholder="Enter your WhatsApp API key"
                        value={whatsappApiKey}
                        onChange={(e) => setWhatsappApiKey(e.target.value)}
                      />
                      <Button variant="outline">Reveal</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp-phone">Phone Number ID</Label>
                    <Input
                      id="whatsapp-phone"
                      placeholder="Enter your phone number ID"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp-business">WhatsApp Business Account ID</Label>
                    <Input
                      id="whatsapp-business"
                      placeholder="Enter your business account ID"
                    />
                  </div>
                </div>

                <Button className="bg-green-500 hover:bg-green-600">
                  Test WhatsApp Connection
                </Button>
              </div>

              <Separator />

              {/* Gmail API */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-900 mb-2">Gmail API</h4>
                  <p className="text-sm text-gray-500 mb-4">
                    Configure your Gmail API credentials
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="gmail-client">Client ID</Label>
                    <Input
                      id="gmail-client"
                      placeholder="Enter your Gmail Client ID"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gmail-secret">Client Secret</Label>
                    <div className="flex gap-2">
                      <Input
                        id="gmail-secret"
                        type="password"
                        placeholder="Enter your Gmail Client Secret"
                        value={gmailApiKey}
                        onChange={(e) => setGmailApiKey(e.target.value)}
                      />
                      <Button variant="outline">Reveal</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gmail-redirect">Redirect URI</Label>
                    <Input
                      id="gmail-redirect"
                      placeholder="https://yourapp.com/oauth/callback"
                    />
                  </div>
                </div>

                <Button className="bg-purple-500 hover:bg-purple-600">
                  Test Gmail Connection
                </Button>
              </div>

              <Separator />

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  ⚠️ Keep your API keys secure and never share them publicly. These credentials give access to your accounts.
                </p>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Reset</Button>
                <Button className="bg-blue-500 hover:bg-blue-600">Save Credentials</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="text-blue-500" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive email updates about campaigns</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">Campaign Completion</p>
                    <p className="text-sm text-gray-500">Notify when broadcasts are completed</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">Campaign Failures</p>
                    <p className="text-sm text-gray-500">Alert on failed message deliveries</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">Weekly Reports</p>
                    <p className="text-sm text-gray-500">Receive weekly analytics summary</p>
                  </div>
                  <Switch />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">API Connection Issues</p>
                    <p className="text-sm text-gray-500">Alert when API connections fail</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">New Feature Announcements</p>
                    <p className="text-sm text-gray-500">Get notified about new features</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="flex justify-end gap-2">
                <Button variant="outline">Reset to Default</Button>
                <Button className="bg-blue-500 hover:bg-blue-600">Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="text-blue-500" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-900 mb-2">Change Password</h4>
                  <p className="text-sm text-gray-500 mb-4">Update your password regularly for better security</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input
                      id="current-password"
                      type="password"
                      placeholder="Enter current password"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>

                <Button className="bg-blue-500 hover:bg-blue-600">Update Password</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <Button variant="outline">Enable 2FA</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-900 mb-2">Active Sessions</h4>
                  <p className="text-sm text-gray-500 mb-4">Manage your active login sessions</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-900">Current Session</p>
                      <p className="text-xs text-gray-500">Chrome on Windows - New York, US</p>
                    </div>
                    <span className="text-xs text-green-600">Active now</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-900">Mobile App</p>
                      <p className="text-xs text-gray-500">iPhone - Last active 2 hours ago</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-600">Revoke</Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="text-red-900 mb-2">Danger Zone</h4>
                <p className="text-sm text-red-700 mb-4">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
