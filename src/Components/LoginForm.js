// import React, { useState } from 'react';
// import './LoginForm.css'; 

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

    
//     try {
//       const response = await fetch('http://localhost:4000/user/loginUser', {
//         method: 'POST',
//         if(response.status === 200){
//           const{accessToken, refreshToken} = response.data;

//           sessionStorage.setItem( "accessToken", accessToken);   //Storing the token in the browser's session storage
//           sessionStorage.setItem('refreshToken', refreshToken);

//           LoginForm(accessToken);
//           Navigate(from, {replace:true})  //redirect to the intended route

//         } else if (response.status === 401) {
//           const newAccessToken = await refreshToken();
//           if (newAccessToken){
//             await handleSubmit(e);
//             toHaveStyle.error('invalid email/password')
//           }
//         }

//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error:', error);
//     }

//     // For simplicity, just logging credentials
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="login-form-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h2>Login</h2>
//         <div className="form-group">
//           <label htmlFor="email">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/user/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const { accessToken, refreshToken } = await response.json();

        sessionStorage.setItem('accessToken', accessToken); // Store access token in session storage
        sessionStorage.setItem('refreshToken', refreshToken);

        // Redirect to the intended route after successful login
        // Replace 'Navigate' and 'from' with your navigation logic
        // For example, you can use React Router's history object
        // history.push('/dashboard'); // Redirect to dashboard
      } else if (response.status === 401) {
        // Handle unauthorized (401) status, if needed
        console.error('Invalid email/password');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }

    // For simplicity, just logging credentials
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;


