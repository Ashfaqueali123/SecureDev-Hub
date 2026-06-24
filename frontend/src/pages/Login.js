import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, LogIn } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      
      // Save the token and user info to LocalStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      
      navigate('/dashboard'); // Redirect to dashboard
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <div className="bg-cardBg p-8 rounded-2xl border border-gray-800 w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <ShieldCheck className="text-accentRed w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
          <p className="text-gray-400 mt-2">SecureDev Hub Authentication</p>
        </div>

        {error && <div className="bg-red-900/20 border border-red-500 text-red-500 p-3 rounded-md mb-6 text-sm text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="email"
              placeholder="Email Address" id='Email'
              className="w-full bg-darkBg border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-accentRed transition"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-darkBg border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-accentRed transition"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="w-full bg-accentRed hover:bg-red-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300">
            Log In <LogIn size={18} />
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Don't have an account? <Link to="/signup" className="text-accentRed hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;