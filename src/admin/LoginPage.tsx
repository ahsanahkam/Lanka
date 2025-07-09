import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect this form to PHP backend using fetch('/api/auth.php')
    console.log('Login attempt:', credentials);
    // Simulate login success for now
    alert('Login successful! Redirecting to dashboard...');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-emerald">Lanka Trails Admin</CardTitle>
          <p className="text-muted-foreground">Sign in to manage your travel content</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                required
                placeholder="admin@lankatrails.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                required
                placeholder="Enter your password"
              />
            </div>
            <Button type="submit" className="w-full bg-emerald hover:bg-emerald/90">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;