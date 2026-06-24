import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, User, Mail, Lock, ArrowRight } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', formData);
      navigate('/login'); // Redirect to login after success
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <div className="bg-cardBg p-8 rounded-2xl border border-gray-800 w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <ShieldCheck className="text-accentRed w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white">Create Account</h2>
          <p className="text-gray-400 mt-2">Join the SecureDev ecosystem</p>
        </div>

        {error && <div className="bg-red-900/20 border border-red-500 text-red-500 p-3 rounded-md mb-6 text-sm text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-darkBg border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-accentRed transition"
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="email"
              placeholder="Email Address"
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
            Sign Up <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Already have an account? <Link to="/login" className="text-accentRed hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;