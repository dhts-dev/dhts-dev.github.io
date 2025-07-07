import React, { useState } from 'react';

const SignupDialog = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 min-w-[340px] relative" onClick={e => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-2xl" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-6">Signup</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border rounded-lg px-4 py-2"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg px-4 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone No."
            className="border rounded-lg px-4 py-2"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg px-4 py-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border rounded-lg px-4 py-2"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="bg-[#f7931e] text-white px-6 py-2 rounded-lg font-medium mt-2">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupDialog; 