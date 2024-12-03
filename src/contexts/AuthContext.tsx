import React from 'react';
import { User } from '../types/admin';

interface AuthContextType {
  user: User | null;
  hasPermission: (permission: string) => boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>({
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
    permissions: [
      'view_rates',
      'edit_rates',
      'delete_rates',
      'manage_territories',
      'manage_class_codes', 
      'manage_rules',
      'manage_users',
      'view_history',
      'export_data',
      'import_data'
    ],
  });

  const hasPermission = React.useCallback((permission: string) => {
    return user?.permissions.includes(permission as any) ?? false;
  }, [user]);

  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call
    setUser({
      id: '1',
      email,
      name: 'Admin User',
      role: 'admin',
      permissions: [
        'view_rates',
        'edit_rates',
        'delete_rates',
        'manage_territories',
        'manage_class_codes',
        'manage_rules',
        'manage_users',
        'view_history',
        'export_data',
        'import_data'
      ],
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, hasPermission, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}