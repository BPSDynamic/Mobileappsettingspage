import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  Bell,
  Lock,
  Globe,
  Moon,
  HelpCircle,
  LogOut,
  ChevronRight,
  User,
  Shield,
  Mail,
  Volume2,
  DollarSign,
} from "lucide-react";

export function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 pb-6 max-w-[430px] mx-auto">
      {/* Status Bar */}
      <div className="bg-white px-6 pt-3 pb-2">
        <div className="flex justify-between items-center text-gray-600 mb-1">
          <span>9:41</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-6 py-3 shadow-sm">
        <h1 className="text-center">Settings</h1>
      </div>

      {/* Profile Section */}
      <div className="bg-white mt-3 mx-4 rounded-3xl p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <Avatar className="size-14">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div>John Doe</div>
            <div className="text-gray-500">john.doe@example.com</div>
          </div>
          <ChevronRight className="size-5 text-gray-400" />
        </div>
      </div>

      {/* Account Settings */}
      <div className="mt-5 px-4">
        <div className="text-gray-500 px-4 mb-2">Account</div>
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <SettingsItem
            icon={<User className="size-5" />}
            label="Edit Profile"
            onClick={() => {}}
          />
          <Separator />
          <SettingsItem
            icon={<DollarSign className="size-5" />}
            label="Currency"
            value="USD"
            onClick={() => {}}
          />
          <Separator />
          <SettingsItem
            icon={<Lock className="size-5" />}
            label="Privacy & Security"
            onClick={() => {}}
          />
          <Separator />
          <SettingsItem
            icon={<Shield className="size-5" />}
            label="Account Security"
            onClick={() => {}}
          />
        </div>
      </div>

      {/* Preferences */}
      <div className="mt-5 px-4">
        <div className="text-gray-500 px-4 mb-2">Preferences</div>
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <SettingsToggleItem
            icon={<Bell className="size-5" />}
            label="Push Notifications"
            checked={notifications}
            onCheckedChange={setNotifications}
          />
          <Separator />
          <SettingsToggleItem
            icon={<Mail className="size-5" />}
            label="Email Notifications"
            checked={emailNotifications}
            onCheckedChange={setEmailNotifications}
          />
          <Separator />
          <SettingsToggleItem
            icon={<Moon className="size-5" />}
            label="Dark Mode"
            checked={darkMode}
            onCheckedChange={setDarkMode}
          />
          <Separator />
          <SettingsItem
            icon={<Globe className="size-5" />}
            label="Language"
            value="English"
            onClick={() => {}}
          />
        </div>
      </div>

      {/* Support */}
      <div className="mt-5 px-4">
        <div className="text-gray-500 px-4 mb-2">Support</div>
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <SettingsItem
            icon={<HelpCircle className="size-5" />}
            label="Help & Support"
            onClick={() => {}}
          />
          <Separator />
          <SettingsItem
            icon={<Shield className="size-5" />}
            label="Terms & Privacy Policy"
            onClick={() => {}}
          />
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-5 px-4">
        <Button
          variant="destructive"
          className="w-full rounded-3xl h-14 gap-2"
          onClick={() => {}}
        >
          <LogOut className="size-5" />
          Log Out
        </Button>
      </div>

      {/* App Version */}
      <div className="text-center text-gray-400 mt-4 mb-2">Version 1.0.0</div>
    </div>
  );
}

function SettingsItem({
  icon,
  label,
  value,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 active:bg-gray-100 transition-colors"
    >
      <div className="text-gray-700">{icon}</div>
      <div className="flex-1 text-left">{label}</div>
      {value && <div className="text-gray-500">{value}</div>}
      <ChevronRight className="size-5 text-gray-400" />
    </button>
  );
}

function SettingsToggleItem({
  icon,
  label,
  checked,
  onCheckedChange,
}: {
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5">
      <div className="text-gray-700">{icon}</div>
      <div className="flex-1">{label}</div>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}